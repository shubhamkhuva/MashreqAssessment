import { validations } from "@/utils/validations";
import { TextField, Grid } from "@mui/material";
import { useTranslations } from "next-intl";
import { Controller } from "react-hook-form";

type MTextInputProps = {
  label: string;
  name: string;
  control: any;
  required?: boolean;
  isPassword?: any;
  rules?: any;
  style?: any;
};
const MTextInput = (props: MTextInputProps) => {
  const { label, name, control, required, isPassword, rules, style } = props;
  const t: any = useTranslations();
  const onChangeValue = (e: any, onChange: any) => {
    onChange(e);
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
      }) => (
        <>
          <TextField
            name={name}
            label={label}
            onChange={(e) => {
              onChangeValue(e, onChange);
            }}
            onBlur={onBlur}
            value={value}
            type={isPassword ? "password" : "text"}
            InputLabelProps={{ shrink: true, required: required }}
            variant="outlined"
            style={{ width: "100%", ...style }}
            error={Boolean(error)}
            {...(error && {
              helperText: t(error?.message),
            })}
            data-testid={`${name}-input`}
          />
        </>
      )}
      rules={{
        required: required ? "validation.requiredMessage" : false,
        ...(rules ? rules : validations[name]),
      }}
    />
  );
};

export default MTextInput;
