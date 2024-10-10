import {
  LOGIN,
  HOME,
  REGISTER,
  MY_APPOINTMENTS,
  NEW_APPOINTMENT,
} from "../../helpers/pathsRoutes";
import { Container, ButtonContainer, Button } from "./styled";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/features/users/usersSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate(LOGIN);
  };

  return (
    <Container>
      <h2>Digital Art Experience Appointments</h2>
      {pathname !== LOGIN && pathname !== REGISTER && (
        <ButtonContainer>
          <div>
            <Link to={HOME}>
              <Button>Home</Button>
            </Link>
            <Link to={NEW_APPOINTMENT}>
              <Button>New Appointment</Button>
            </Link>
            <Link to={MY_APPOINTMENTS}>
              <Button>My Appointments</Button>
            </Link>
            <Link to={LOGIN} onClick={handleLogout}>
              <Button>Sign out</Button>
            </Link>
          </div>
        </ButtonContainer>
      )}
    </Container>
  );
};

export default Navbar;
