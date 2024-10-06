import { LOGIN, REGISTER, MY_APPOINTMENTS } from "../../helpers/pathsRoutes";
import { Container, ButtonContainer, Button } from "./styled";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const handleNewAppointment = () => {};
  const handleMyAppointments = () => {};
  const handleLogout = () => {};
  return (
    <Container>
      <h2>Digital Art Experience Appointments</h2>
      <ButtonContainer>
        <div>
          <Link to={REGISTER}>
            <Button onClick={handleNewAppointment}>New Appointment</Button>{" "}
          </Link>
          <Link to={MY_APPOINTMENTS}>
            <Button onClick={handleMyAppointments}>My Appointments</Button>{" "}
          </Link>
          {pathname === MY_APPOINTMENTS && (
            <Link to={LOGIN}>
              <Button onClick={handleLogout}>Sign out</Button>{" "}
            </Link>
          )}
        </div>
      </ButtonContainer>
    </Container>
  );
};

export default Navbar;
