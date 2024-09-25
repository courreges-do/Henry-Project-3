const MyAppointment = ({ date, time, status }) => {
  return (
    <>
      <h3>Appointment details</h3>
      <p> {date} </p>
      <p> {time} </p>
      <p> {status} </p>
    </>
  );
};

export default MyAppointment;
