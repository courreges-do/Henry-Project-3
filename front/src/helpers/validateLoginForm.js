export const validateLoginForm = (userData) => {
  const errors = {};

  if (!userData.username) {
    errors.username = "Username is required";
  }

  if (!userData.password) {
    errors.password = "Password is required";
  }

  return errors;
};
