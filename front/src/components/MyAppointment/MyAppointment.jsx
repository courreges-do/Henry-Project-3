import { ApContainer } from "./styled";

const MyAppointment = ({ date, time, type, status, handleStatusAppnmt }) => {
  return (
    <ApContainer>
      <h3>Appointment details</h3>
      <p> {date} </p>
      <p> {time} </p>
      <p> {type} </p>
      <p> {status} </p>
      <button onClick={handleStatusAppnmt} disabled={status === "cancelled"}>
        Cancel Appointment
      </button>
    </ApContainer>
  );
};

export default MyAppointment;
