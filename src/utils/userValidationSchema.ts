export const userValidationSchema = {
  username: {
    isLength: {
      options: {
        min: 4,
        max: 32,
      },
      errorMessage:
        "Username must be at least 5 characters with max of 32 characters",
    },
    notEmpty: {
      errorMessage: "Username cannot be empty",
    },
    isString: {
      errorMessage: "Username must be a string",
    },
  },
  password: {
    isLength: {
      options: {
        min: 4,
        max: 32,
      },
      errorMessage:
        "Password must be at least 5 characters with max of 32 characters",
    },
    notEmpty: true,
  },
  email: {
    isEmail: {
      errorMessage: "Must be a valie e-mail address",
    },
  },
};
