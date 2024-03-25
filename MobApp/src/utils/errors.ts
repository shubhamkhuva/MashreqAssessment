import {t} from 'i18next';

export const ERRORS: any = {
  GENERIC_ERROR: t('message.GENERIC_ERROR'),
  INVALID_AUTHENTICATION: t('message.INVALID_AUTHENTICATION'),
  FAILING_CREATE: t('message.FAILING_CREATE'),
};

export const getErrorMessage = (errorCode: string) => {
  return ERRORS[errorCode];
};
