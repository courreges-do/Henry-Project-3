import { myAppointments } from "../../helpers/myAppointments";
import { useState } from "react";
import MyAppointment from "../MyAppointment/MyAppointment";

const MyAppointments = () => {
  const [appointments] = useState(myAppointments.appointments);
  return (
    <>
      {appointments.map((appnmnt) => (
        <MyAppointment
          key={appnmnt.id}
          date={appnmnt.date}
          time={appnmnt.time}
          status={appnmnt.status}
        />
      ))}
    </>
  );
};

export default MyAppointments;
