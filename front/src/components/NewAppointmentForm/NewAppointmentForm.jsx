import { useState } from "react";
import { useNewAppointmentMutation } from "../../redux/features/appointments/appointmentsApi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUserAppointmentsQuery } from "../../redux/features/users/usersApi";
import { MY_APPOINTMENTS } from "../../helpers/pathsRoutes";
import { FormWrapper, Input, Select, ErrorMessage } from "./styled";
import { validateNewAppointmentForm } from "../../helpers/validateNewAppointmentForm";

const APPOINTMENT_TYPES = [
  "Digitized Nature",
  "Transcending Boundaries",
  "Become lost",
  "Borderless Planet",
  "Relationships Among People",
  "Resonating",
];

const NewAppointmentForm = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const user = useSelector((state) => state.usersSlice.user);

  const { refetch } = useUserAppointmentsQuery(user.id);

  const businessHours = { opening: 9, closing: 21 };

  const [appointment, setAppointment] = useState({
    date: "",
    time: "",
    type: APPOINTMENT_TYPES[0],
    userId: user.id,
  });

  const [newAppointment] = useNewAppointmentMutation();

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const formErrors = validateNewAppointmentForm(appointment, businessHours);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const newAppnmt = await newAppointment(appointment);

    if (newAppnmt.error) {
      console.log(newAppnmt.error);
      alert("Error when creating the appointment");
    } else {
      refetch();
      navigate(MY_APPOINTMENTS);
    }
  };

  return (
    <FormWrapper>
      <form onSubmit={submitForm}>
        <div>
          <label>Date</label>
          <Input
            type="date"
            name="date"
            value={appointment.date}
            onChange={(e) =>
              setAppointment({ ...appointment, date: e.target.value })
            }
            onBlur={handleBlur}
          />
          {touched.date && errors.date && (
            <ErrorMessage>{errors.date} </ErrorMessage>
          )}
        </div>
        <div>
          <label>Time</label>
          <Input
            type="time"
            name="time"
            value={appointment.time}
            onChange={(e) =>
              setAppointment({ ...appointment, time: e.target.value })
            }
            onBlur={handleBlur}
          />
          {touched.time && errors.time && (
            <ErrorMessage>{errors.time}</ErrorMessage>
          )}
        </div>
        <div>
          <label>Exhibition</label>
          <Select
            name="type"
            value={appointment.type}
            onChange={(e) =>
              setAppointment({ ...appointment, type: e.target.value })
            }
            onBlur={handleBlur}
          >
            {APPOINTMENT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
          {touched.type && errors.type && (
            <ErrorMessage>{errors.type}</ErrorMessage>
          )}
        </div>
        <button type="submit">Schedule appointment</button>
      </form>
    </FormWrapper>
  );
};

export default NewAppointmentForm;
