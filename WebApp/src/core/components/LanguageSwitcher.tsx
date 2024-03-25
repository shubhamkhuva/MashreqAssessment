import { useRouter } from "next/router";
import { Button, Menu, MenuItem } from "@mui/material";
import React from "react";
import { useTranslations } from "next-intl";

export default function LanguageSwitcher() {
  const t: any = useTranslations();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const switchLocale = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale: locale });

    router.events.on("routeChangeComplete", () => {
      router.reload();
    });
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {t("language")}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            switchLocale("en");
            handleClose();
          }}
        >
          English
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            switchLocale("hi");
            handleClose();
          }}
        >
          Hindi
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            switchLocale("fr");
            handleClose();
          }}
        >
          French
        </MenuItem>
      </Menu>
    </>
  );
}
