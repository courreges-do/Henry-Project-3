import Navbar from "./components/Navbar/Navbar";
import HomeView from "./views/HomeView";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";
import { Route, Routes } from "react-router-dom";
import { REGISTER, LOGIN, MY_APPOINTMENTS } from "./helpers/pathsRoutes";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={REGISTER} element={<RegisterView />} />
        <Route path={LOGIN} element={<LoginView />} />
        <Route path={MY_APPOINTMENTS} element={<HomeView />} />
      </Routes>
    </>
  );
}

export default App;
