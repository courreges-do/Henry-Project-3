export const validateLoginForm = (userData) => {
  const errors = {};

  if (!userData.username) {
    errors.username = "Username is required";
  }

  if (!userData.password) {
    errors.password = "Password is required";
  } else if (userData.password.length < 5) {
    errors.password = "Password must be at least 5 characters long";
  }

  return errors;
};
