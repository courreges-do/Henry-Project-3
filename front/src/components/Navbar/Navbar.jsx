import { Container } from "./styled";

const Navbar = () => {
  const handleNewAppointment = () => {};
  const handleMyProfile = () => {};
  const handleAboutUs = () => {};
  return (
    <Container>
      <h2>Digital Art Experience Appointments</h2>
      <div>
        <button onClick={handleNewAppointment}>New Appointment</button>
        <button onClick={handleMyProfile}>My Profile</button>
        <button onClick={handleAboutUs}>About Us</button>
      </div>
    </Container>
  );
};

export default Navbar;
