export const validateRegisterForm = (userData) => {
  const errors = {};

  if (!userData.name) {
    errors.name = "Name is required";
  } else if (userData.name.length < 3) {
    errors.name = "Name must have at least 3 characters";
  }

  if (!userData.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
    errors.email = "Invalid email format";
  }

  if (!userData.birthdate) {
    errors.birthdate = "Birthdate is required";
  } else {
    const birthDate = new Date(userData.birthdate);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    if (age < 18) {
      errors.birthdate = "You must be at least 18 years old";
    }
  }

  if (!userData.nDni) {
    errors.nDni = "DNI number is required";
  } else if (!/^\d{8}$/.test(userData.nDni)) {
    errors.nDni = "DNI must be 8 digits and contain only numbers";
  }
  if (!userData.username) {
    errors.username = "Username is required";
  }

  if (!userData.password) {
    errors.password = "Password is required";
  } else if (userData.password.length < 5) {
    errors.password = "Password must be at least 5 characters long";
  }

  if (userData.repeatPassword !== userData.password) {
    errors.repeatPassword = "Passwords do not match";
  }

  return errors;
};
