export const validateRegisterForm = (userData) => {
  const errors = {};

  if (!userData.name) {
    errors.name = "Name is required";
  } else if (userData.name.length < 3) {
    errors.name = "Name must have more than 3 characters";
  }

  if (!userData.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\. \S+/.test(userData.email)) {
    errors.email = "Email format required";
  }

  if (!userData.birthdate) {
    errors.birthdate = "Birthdate is required";
  }

  if (!userData.nDni) {
    errors.nDni = "DNI number is required";
  }

  if (!userData.username) {
    errors.username = "Username is required";
  }

  if (!userData.password) {
    errors.password = "Password is required";
  }

  if (userData.repeatPassword !== userData.password) {
    errors.repeatPassword = "Passwords do not match";
  }

  return errors;
};
