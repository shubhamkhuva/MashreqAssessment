import {validations} from './validations';

export const getUsernameRules = (countryCode: any) => {
  let customRules = validations.username[countryCode];
  if (!customRules) {
    customRules = validations.username.DEFAULT;
  }
  return customRules;
};

export const getLogoImagePath = (selectedLanguage: any) => {
  if (selectedLanguage !== null) {
    return `../assets/images/MashreqLogo-${selectedLanguage.code}.png`;
  } else {
    return `../assets/images/MashreqLogo-en.png`;
  }
};
