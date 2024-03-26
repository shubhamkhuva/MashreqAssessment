import { validations } from "./validations";

export const getUsernameRules = (countryCode: any) => {
  let customRules = validations.username[countryCode];
  if (!customRules) {
    customRules = validations.username.DEFAULT;
  }
  return customRules;
};

export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};
