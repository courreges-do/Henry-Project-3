export const validateNewAppointmentForm = (userData) => {
  const errors = {};

  if (!userData.date) {
    errors.date = "Date is required";
  }

  if (!userData.time) {
    errors.time = "Time is required";
  }

  if (!userData.type) {
    errors.type = "Type of exhibition is required";
  }

  return errors;
};
