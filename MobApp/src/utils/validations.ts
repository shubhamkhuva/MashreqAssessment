import {t} from 'i18next';

export const validations: any = {
  username: {
    AE: {
      validate: {
        isValid: (value: string) =>
          value === '' ||
          /^[a-zA-Z0-9]{5,}$/.test(value) ||
          t('validation.AEUsernameMessage'),
      },
    },
    IN: {
      validate: {
        isValid: (value: string) =>
          value === '' ||
          /^[a-zA-Z]{6,}$/.test(value) ||
          t('validation.AEUsernameMessage'),
      },
    },
    US: {
      validate: {
        isValid: (value: string) =>
          value === '' ||
          /^[a-zA-Z0-9]{8,}$/.test(value) ||
          t('validation.AEUsernameMessage'),
      },
    },
    DEFAULT: {
      validate: {
        isValid: (value: string) =>
          value === '' ||
          /^[a-zA-Z0-9]{3,}$/.test(value) ||
          t('validation.DefaultUsernameMessage'),
      },
    },
  },
  password: {
    validate: {
      isValid: (value: string) =>
        value === '' ||
        /^.{6,16}$/.test(value) ||
        t('validation.PasswordMessage'),
    },
  },
  fullName: {
    validate: {
      isValid: (value: string) =>
        value === '' ||
        /^[a-zA-Z\s]{3,20}$/.test(value) ||
        t('validation.fullName'),
    },
  },
  emailAddress: {
    validate: {
      isValid: (value: string) =>
        value === '' ||
        /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(value) ||
        t('validation.emailMessage'),
    },
  },
};
