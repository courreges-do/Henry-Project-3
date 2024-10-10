export const validateCancellation = (appointmentDate) => {
  const errors = {};
  const today = new Date();
  const appointment = new Date(appointmentDate);

  today.setHours(0, 0, 0, 0);

  if (appointment <= today) {
    errors.cancel =
      "Appointments can only be cancelled up to the day before the reservation";
  }

  return errors;
};
