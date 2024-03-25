export const validations: any = {
  username: {
    AE: {
      validate: {
        isValid: (value: string) =>
          value === "" ||
          /^[a-zA-Z0-9]{5,}$/.test(value) ||
          "validation.AEUsernameMessage",
      },
    },
    IN: {
      validate: {
        isValid: (value: string) =>
          value === "" ||
          /^[a-zA-Z]{6,}$/.test(value) ||
          "validation.InUsernameMessage",
      },
    },
    US: {
      validate: {
        isValid: (value: string) =>
          value === "" ||
          /^[a-zA-Z0-9]{8,}$/.test(value) ||
          "validation.USUsernameMessage",
      },
    },
    DEFAULT: {
      validate: {
        isValid: (value: string) =>
          value === "" ||
          /^[a-zA-Z0-9]{3,}$/.test(value) ||
          "validation.DefaultUsernameMessage",
      },
    },
  },
  password: {
    validate: {
      isValid: (value: string) =>
        value === "" || /^.{6,16}$/.test(value) || "validation.PasswordMessage",
    },
  },
  newPassword: {
    validate: {
      isValid: (value: string) =>
        value === "" || /^.{6,16}$/.test(value) || "validation.PasswordMessage",
    },
  },
  confirmPassword: {
    validate: {
      isValid: (value: string) =>
        value === "" || /^.{6,16}$/.test(value) || "validation.PasswordMessage",
    },
  },
  fullName: {
    validate: {
      isValid: (value: string) =>
        value === "" ||
        /^[a-zA-Z\s]{3,20}$/.test(value) ||
        "validation.fullName",
    },
  },
  emailAddress: {
    validate: {
      isValid: (value: string) =>
        value === "" ||
        /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(value) ||
        "validation.emailMessage",
    },
  },
};
