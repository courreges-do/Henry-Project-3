import { ApContainer, ApDetail, ApType } from "./styled";

const MyAppointment = ({ date, time, type, status, handleStatusAppnmt }) => {
  return (
    <ApContainer>
      <h3>Appointment details</h3>
      <ApDetail> {date} </ApDetail>
      <ApDetail> {time} </ApDetail>
      <ApDetail>
        <ApType> {type} </ApType>
      </ApDetail>
      <ApDetail> {status} </ApDetail>
      <button onClick={handleStatusAppnmt} disabled={status === "cancelled"}>
        Cancel Appointment
      </button>
    </ApContainer>
  );
};

export default MyAppointment;
