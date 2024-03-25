import MTextInput from "@/core/components/MTextInput";
import { ROUTER_PATH } from "@/navigations/routers";
import { Endpoints } from "@/network/Endpoints";
import { useAxios } from "@/network/useAxios";
import { ERROR, SUCCESS } from "@/utils/constant";
import { DEFAULT_FORM_VALUE } from "@/utils/default";
import { Button, Grid, Modal } from "@mui/material";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

type ChangePasswordType = {};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: 1,
};

const ChangePassword = forwardRef<any, ChangePasswordType>(
  ({}: ChangePasswordType, ref) => {
    const t: any = useTranslations();
    const [open, setOpen] = useState(false);
    const navigator = useRouter();
    const currentUser = useSelector((state: any) => state.currentUser);

    const { control, handleSubmit, setError, clearErrors } = useForm({
      defaultValues: DEFAULT_FORM_VALUE.CHANGE_PASSWORD,
    });

    useImperativeHandle(ref, () => {
      return {
        isOpen: () => {
          handleOpen();
        },
      };
    });

    const handleClose = () => {
      setOpen(false);
    };

    const handleOpen = async () => {
      setOpen(true);
    };

    const {
      execute: executeChangePassword,
      response: executeChangePasswordResponse,
      loading: executeChangePasswordLoading,
    } = useAxios({
      url: Endpoints.POST_USER_PASSWORD,
      method: "POST",
    });

    useEffect(() => {
      if (!executeChangePasswordLoading && executeChangePasswordResponse) {
        const { status, errorCode } = executeChangePasswordResponse;
        if (status === SUCCESS) {
          toast.success(t("message.SUCCESS_CHANGE_PASSWORD"));
          navigator.push(ROUTER_PATH.LOGIN);
        }
        if (status === ERROR) {
          toast.error(t(`message.${errorCode ? errorCode : "GENERIC_ERROR"}`));
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [executeChangePasswordLoading, executeChangePasswordResponse]);

    const onSubmit = async (data: any) => {
      if (data.newPassword !== data.confirmPassword) {
        setError("confirmPassword", {
          type: "manual",
          message: t("validation.passwordMustMatch"),
        });
      } else {
        clearErrors("confirmPassword");
        executeChangePassword({
          username: currentUser.USERNAME,
          oldPassword: data.password,
          newPassword: data.newPassword,
        });
      }
    };

    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-mashreq"
        aria-describedby="modal-mashreq"
      >
        <Grid container sx={style}>
          <form
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            style={{ width: "100%" }}
          >
            <MTextInput
              name="password"
              label={t("screens.changePassword.oldPassword")}
              control={control}
              isPassword
              required={true}
              style={{ marginTop: 20 }}
            />
            <MTextInput
              name="newPassword"
              label={t("screens.changePassword.newPassword")}
              control={control}
              isPassword
              required={true}
              style={{ marginTop: 20 }}
            />
            <MTextInput
              name="confirmPassword"
              label={t("screens.changePassword.confirmPassword")}
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
              {t("screens.changePassword.changePasswordButton")}
            </Button>
          </form>
        </Grid>
      </Modal>
    );
  }
);

export default ChangePassword;
