import Navbar from "./components/Navbar/Navbar";
import HomeView from "./views/HomeView";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";

function App() {
  return (
    <>
      <Navbar />
      <RegisterView />
      <LoginView />
      <HomeView />
    </>
  );
}

export default App;
