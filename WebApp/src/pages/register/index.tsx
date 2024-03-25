import Head from "next/head";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Menu,
  MenuItem,
} from "@mui/material";
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
import { getUsernameRules } from "@/utils/helper";
import Link from "next/link";
import { Endpoints } from "@/network/Endpoints";
import { useAxios } from "@/network/useAxios";
import { SUCCESS, ERROR } from "@/utils/constant";

export default function Register() {
  const t: any = useTranslations();
  const navigator = useRouter();
  const [country, setCountry] = React.useState("AE");

  const { control, handleSubmit, watch } = useForm({
    defaultValues: DEFAULT_FORM_VALUE.REGISTER,
  });

  const {
    execute: executeRegister,
    response: executeRegisterResponse,
    loading: executeRegisterLoading,
  } = useAxios({
    url: Endpoints.POST_USER_REGISTER,
    method: "POST",
  });

  useEffect(() => {
    if (!executeRegisterLoading && executeRegisterResponse) {
      const { data, status, errorCode } = executeRegisterResponse;
      if (status === SUCCESS) {
        toast.success(t("message.SUCCESS_REGISTERED"));
        navigator.push(ROUTER_PATH.LOGIN);
      }
      if (status === ERROR) {
        toast.error(t(`message.${errorCode ? errorCode : "GENERIC_ERROR"}`));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [executeRegisterLoading, executeRegisterResponse]);

  const onSubmit = async (data: any) => {
    executeRegister({
      fullName: data.fullName,
      username: data.username,
      emailAddress: data.emailAddress,
      password: data.password,
    });
  };

  return (
    <Grid container>
      <Head>
        <title>Register - Mashreq Assessment</title>
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
            <b>{t("screens.register.title")}</b>
          </Box>
        </Grid>
        <Grid container>
          <Grid
            item
            xs={10}
            md={4}
            sm={3}
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
                name="fullName"
                label={t("screens.register.fullName")}
                control={control}
                required={true}
                style={{ marginTop: 20 }}
              />
              <MTextInput
                name="username"
                label={t("screens.register.username")}
                control={control}
                required={true}
                style={{ marginTop: 20 }}
                rules={getUsernameRules(country)}
              />
              <MTextInput
                name="emailAddress"
                label={t("screens.register.emailAddress")}
                control={control}
                required={true}
                style={{ marginTop: 20 }}
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
                {executeRegisterLoading ? (
                  <CircularProgress size={24} />
                ) : (
                  t("screens.register.submitButton")
                )}
              </Button>
            </form>
            <Box
              textAlign={"center"}
              p={2}
              fontSize={14}
              style={{ color: "#000" }}
            >
              <Link href={ROUTER_PATH.LOGIN}>
                <b>{t("screens.register.alreadyAccount")}</b>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
