import { myAppointments } from "../../helpers/myAppointments";
import { useState } from "react";
import MyAppointment from "../MyAppointment/MyAppointment";

const MyAppointments = () => {
  const [appointments] = useState(myAppointments.appointments);

  const handleStatusAppnmt = (id) => {
    console.log(id);
  };
  return (
    <>
      {appointments.map((appnmnt) => (
        <MyAppointment
          key={appnmnt.id}
          date={appnmnt.date}
          time={appnmnt.time}
          status={appnmnt.status}
          handleStatusAppnmt={() => handleStatusAppnmt(appnmnt.id)}
        />
      ))}
    </>
  );
};

export default MyAppointments;
