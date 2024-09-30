import { Container, ButtonContainer, Button } from "./styled";

const Navbar = () => {
  const handleNewAppointment = () => {};
  const handleMyProfile = () => {};
  const handleAboutUs = () => {};
  return (
    <Container>
      <h2>Digital Art Experience Appointments</h2>
      <ButtonContainer>
        <div>
          <Button onClick={handleNewAppointment}>New Appointment</Button>
          <Button onClick={handleMyProfile}>My Profile</Button>
          <Button onClick={handleAboutUs}>About Us</Button>
        </div>
      </ButtonContainer>
    </Container>
  );
};

export default Navbar;
