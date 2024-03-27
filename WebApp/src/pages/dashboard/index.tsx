import Head from "next/head";
import { Box, Button, Grid } from "@mui/material";
import styles from "@/styles/login.module.css";
import React, { useRef } from "react";
import { useTranslations } from "next-intl";
import { LogoEn, LogoFr, LogoHi } from "@/core/icons";
import { useRouter } from "next/router";
import { ROUTER_PATH } from "@/navigations/routers";
import { useSelector } from "react-redux";
import ChangePassword from "./change-password";

export default function Dashboard({ currentU }: any) {
  const t: any = useTranslations();
  const navigator = useRouter();
  const refChangePassword = useRef<any>();
  const currentUser =
    currentU !== undefined
      ? currentU
      : useSelector((state: any) => state.currentUser);

  return (
    <Grid container>
      <Head>
        <title>Dashboard - Mashreq Assessment</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container>
        <Grid item xs={12} md={12} sm={12} lg={12} className="header">
          <Box textAlign={"right"} pr={2}>
            <Button
              onClick={(e) => {
                refChangePassword.current.isOpen();
              }}
            >
              {t("screens.dashboard.changePassword")}
            </Button>
            <Button
              onClick={(e) => {
                navigator.push(ROUTER_PATH.LOGIN);
              }}
            >
              {t("screens.dashboard.logoutButton")}
            </Button>
          </Box>
          {t("code") === "en" && <LogoEn />}
          {t("code") === "fr" && <LogoFr />}
          {t("code") === "hi" && <LogoHi />}
          <Box className={styles.loginWelcome}>
            <b>
              {t("screens.dashboard.welcomeText")} {currentUser.FULL_NAME}
            </b>
          </Box>
        </Grid>
        <Box
          width={"100%"}
          textAlign={"center"}
          p={2}
          style={{ color: "#000" }}
        >
          <Box fontSize={14}>{t("screens.dashboard.yourUsername")}</Box>
          <Box fontSize={18}>{currentUser?.USERNAME}</Box>
          <Box fontSize={14} mt={2}>
            {t("screens.dashboard.yourEmailAddress")}
          </Box>
          <Box fontSize={18}>{currentUser?.EMAIL}</Box>
        </Box>
      </Grid>
      <ChangePassword ref={refChangePassword} />
    </Grid>
  );
}
