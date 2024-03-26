import Head from "next/head";
import { Box, Button, CircularProgress, Grid } from "@mui/material";
import styles from "@/styles/login.module.css";
import MTextInput from "@/core/components/MTextInput";
import { DEFAULT_FORM_VALUE } from "@/utils/default";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import CountrySelect from "@/core/components/MCountrySelect";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../../core/components/LanguageSwitcher";
import { LogoEn, LogoFr, LogoHi } from "@/core/icons";
import toast from "react-hot-toast";
import { ROUTER_PATH } from "@/navigations/routers";
import { useRouter } from "next/router";
import { validations } from "@/utils/validations";
import { getRandomNumber, getUsernameRules } from "@/utils/helper";
import Link from "next/link";
import { setLoggedInUser } from "@/context/actions/actions";
import { useDispatch } from "react-redux";
import { useAxios } from "@/network/useAxios";
import { Endpoints } from "@/network/Endpoints";
import { ERROR, SUCCESS } from "@/utils/constant";
import { encryptString } from "@/utils/security";

export default function Login() {
  const t: any = useTranslations();
  const navigator = useRouter();
  const dispatch = useDispatch();

  const { control, handleSubmit, watch } = useForm({
    defaultValues: DEFAULT_FORM_VALUE.LOGIN,
  });

  const {
    execute: executeAuth,
    response: executeAuthResponse,
    loading: executeAuthLoading,
  } = useAxios({
    url: Endpoints.POST_USER_LOGIN,
    method: "POST",
  });

  useEffect(() => {
    if (!executeAuthLoading && executeAuthResponse) {
      const { data, status, errorCode } = executeAuthResponse;
      if (status === SUCCESS) {
        let resData: any = data;
        toast.success(t("message.SUCCESS_LOGGEDIN"));
        dispatch(setLoggedInUser(data));
        if (resData.TOKEN !== null && resData.TOKEN !== 0) {
          sendNotification(resData.TOKEN);
        }

        navigator.push(ROUTER_PATH.DASHBOARD);
      }
      if (status === ERROR) {
        toast.error(t(`message.${errorCode ? errorCode : "GENERIC_ERROR"}`));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [executeAuthLoading, executeAuthResponse]);

  const sendNotification = async (token: string) => {
    const payload = {
      to: token,
      collapse_key: "type_a",
      data: {
        message: "Your account has been logged in to Web!",
        title: "Account LoggedIn",
        id: getRandomNumber(1111, 9999),
        key_2: "Hellowww",
      },
    };

    try {
      const response = await fetch("https://fcm.googleapis.com/fcm/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "key=AAAAu2G_IPo:APA91bGFaDF5ZJnVThtclN8ooq4U-TAl0xbrbwcYK2WUhgX70u8pQpg8nBgoL_1-qj8hxgO6M4m21HTughA0PoiLipbk1hyn4AWmT5zGOO54W_itNCnC0K_qbItZ1HL6AalutneplR9H",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log("Notification sent successfully");
        // Handle success as needed
      } else {
        console.error("Failed to send notification:", response.statusText);
        // Handle failure as needed
      }
    } catch (error) {
      console.error("Error sending notification:", error);
      // Handle error as needed
    }
  };

  const onSubmit = async (data: any) => {
    let request = {
      username: data.username,
      password: data.password,
    };
    let config = {
      Authorization: `Bearer ${encryptString(JSON.stringify(request))}`,
    };
    executeAuth({}, config);
  };

  const [country, setCountry] = React.useState("AE");

  return (
    <Grid container>
      <Head>
        <title>Login - Mashreq Assessment</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container>
        <Grid item xs={12} md={12} sm={12} lg={12} className="header">
          <Box textAlign={"right"} pr={2}>
            <LocaleSwitcher />
          </Box>
          {t("code") === "en" && <LogoEn />}
          {t("code") === "fr" && <LogoFr />}
          {t("code") === "hi" && <LogoHi />}

          <Box className={styles.loginWelcome}>
            <b>{t("screens.login.title")}</b>
          </Box>
        </Grid>
        <Grid container>
          <Grid
            item
            xs={10}
            md={4}
            sm={5}
            lg={3}
            style={{ margin: "auto" }}
            pt={4}
          >
            <form
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
            >
              <CountrySelect country={country} setCountry={setCountry} />

              <MTextInput
                name="username"
                label={t("screens.login.username")}
                control={control}
                required={true}
                style={{ marginTop: 20 }}
                rules={
                  watch("username").includes("@")
                    ? validations.emailAddress
                    : getUsernameRules(country)
                }
              />
              <MTextInput
                name="password"
                label={t("screens.login.password")}
                control={control}
                isPassword
                required={true}
                style={{ marginTop: 20 }}
              />
              <Button
                type="submit"
                variant="contained"
                style={{ width: "100%", marginTop: 10 }}
              >
                {executeAuthLoading ? (
                  <CircularProgress size={24} />
                ) : (
                  t("screens.login.loginButton")
                )}
              </Button>
            </form>

            <Box
              textAlign={"center"}
              p={2}
              fontSize={14}
              style={{ color: "#000" }}
            >
              <Link href={ROUTER_PATH.REGISTER}>
                <b>{t("screens.login.registerButton")}</b>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
