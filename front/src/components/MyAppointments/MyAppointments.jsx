import { useState } from "react";
import MyAppointment from "../MyAppointment/MyAppointment";
import { useEffect } from "react";
import axios from "axios";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/appointments/")
      .then((resp) => {
        const sortDates = resp.data.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
        setAppointments(sortDates);
      })
      .catch((error) => alert(error));
    return () => setAppointments([]);
  }, [flag]);

  const handleStatusAppnmt = async (id) => {
    try {
      await axios.put(`http://localhost:3000/appointments/cancel/${id}`);
      setFlag(!flag);
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <>
      {appointments.map((appnmnt) => (
        <MyAppointment
          key={appnmnt.id}
          date={appnmnt.date}
          time={appnmnt.time}
          type={appnmnt.type}
          status={appnmnt.status}
          handleStatusAppnmt={() => handleStatusAppnmt(appnmnt.id)}
        />
      ))}
    </>
  );
};

export default MyAppointments;
