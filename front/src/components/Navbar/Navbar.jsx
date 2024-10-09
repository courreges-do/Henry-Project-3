import {
  LOGIN,
  HOME,
  REGISTER,
  MY_APPOINTMENTS,
  NEW_APPOINTMENT,
} from "../../helpers/pathsRoutes";
import { Container, ButtonContainer, Button } from "./styled";
import { useLocation, Link } from "react-router-dom";
import { logout } from "../../redux/features/users/usersSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const handleHome = () => {};
  const handleNewAppointment = () => {};
  const handleMyAppointments = () => {};
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Container>
      <h2>Digital Art Experience Appointments</h2>
      <ButtonContainer>
        <div>
          {pathname !== LOGIN && pathname !== REGISTER && (
            <Link to={HOME}>
              <Button onClick={handleHome}>Home</Button>
            </Link>
          )}
          {pathname !== LOGIN && pathname !== REGISTER && (
            <Link to={NEW_APPOINTMENT}>
              <Button onClick={handleNewAppointment}>New Appointment</Button>
            </Link>
          )}
          {pathname !== LOGIN && pathname !== REGISTER && (
            <Link to={MY_APPOINTMENTS}>
              <Button onClick={handleMyAppointments}>My Appointments</Button>
            </Link>
          )}
          {pathname !== LOGIN && pathname !== REGISTER && (
            <Link to={LOGIN}>
              <Button onClick={handleLogout}>Sign out</Button>
            </Link>
          )}
        </div>
      </ButtonContainer>
    </Container>
  );
};

export default Navbar;
