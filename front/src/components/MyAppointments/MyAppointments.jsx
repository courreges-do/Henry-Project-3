import MyAppointment from "../MyAppointment/MyAppointment";
import { useUserAppointmentsQuery } from "../../redux/features/users/usersApi";
import { useSelector } from "react-redux";
import { useCancelAppointmentMutation } from "../../redux/features/appointments/appointmentsApi";
import { validateCancellation } from "../../helpers/validateCancellation";

const MyAppointments = () => {
  const [cancelAppointment] = useCancelAppointmentMutation();
  const loggedInUser = useSelector((state) => state.usersSlice.user.id);

  const {
    data: dataUserById,
    isLoading: isLoadingUserById,
    error: errorUserById,
    refetch,
  } = useUserAppointmentsQuery(Number(loggedInUser));

  const handleStatusAppnmt = async (id, appointmentDate) => {
    const errors = validateCancellation(appointmentDate);
    if (Object.keys(errors).length > 0) {
      alert(errors.cancel);
      return;
    }
    try {
      await cancelAppointment(id);
      refetch();
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <>
      {isLoadingUserById
        ? "Loading appointments..."
        : errorUserById
        ? "Error when loading appointments"
        : dataUserById?.appointments?.map((appnmnt) => (
            <MyAppointment
              key={appnmnt.id}
              date={appnmnt.date}
              time={appnmnt.time}
              type={appnmnt.type}
              status={appnmnt.status}
              handleStatusAppnmt={() =>
                handleStatusAppnmt(appnmnt.id, appnmnt.date)
              }
            />
          ))}
    </>
  );
};

export default MyAppointments;
