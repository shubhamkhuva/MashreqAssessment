import { validations } from "./validations";

export const getUsernameRules = (countryCode: any) => {
  let customRules = validations.username[countryCode];
  if (!customRules) {
    customRules = validations.username.DEFAULT;
  }
  return customRules;
};
