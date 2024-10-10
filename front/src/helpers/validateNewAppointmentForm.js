export const validateNewAppointmentForm = (appointment, businessHours) => {
  const errors = {};

  if (!appointment.date) {
    errors.date = "Date is required";
  } else {
    const selectedDate = new Date(appointment.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate <= today) {
      errors.date = "Date cannot be in the past or today";
    } else {
      const dayOfWeek = selectedDate.getDay();
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        errors.date = "Appointments cannot be scheduled on weekends";
      }
    }
  }

  if (!appointment.time) {
    errors.time = "Time is required";
  } else {
    const [hours, minutes] = appointment.time.split(":");
    const appointmentTime = parseInt(hours, 10) * 60 + parseInt(minutes, 10);
    const openingTime = businessHours.opening * 60;
    const closingTime = businessHours.closing * 60;

    if (appointmentTime < openingTime || appointmentTime > closingTime) {
      errors.time = `Appointments must be between ${businessHours.opening}:00 and ${businessHours.closing}:00`;
    }
  }

  if (!appointment.type) {
    errors.type = "Type of exhibition is required";
  }

  return errors;
};
