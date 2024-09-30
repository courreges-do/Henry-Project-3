import { ApContainer } from "./styled";

const MyAppointment = ({ date, time, status, handleStatusAppnmt }) => {
  return (
    <ApContainer>
      <h3>Appointment details</h3>
      <p> {date} </p>
      <p> {time} </p>
      <p> {status} </p>
      <button onClick={handleStatusAppnmt}> Cancel Appointment </button>
    </ApContainer>
  );
};

export default MyAppointment;
