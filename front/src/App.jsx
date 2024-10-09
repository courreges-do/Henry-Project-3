import Navbar from "./components/Navbar/Navbar";
import HomeView from "./views/HomeView";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";
import MyAppointmentsView from "./views/MyAppointmentsView";
import { Route, Routes, Navigate } from "react-router-dom";
import {
  REGISTER,
  LOGIN,
  MY_APPOINTMENTS,
  NEW_APPOINTMENT,
  HOME,
} from "./helpers/pathsRoutes";
import { useSelector } from "react-redux";
import NewAppointmentForm from "./components/NewAppointmentForm/NewAppointmentForm";

const ProtectedRoute = ({ children }) => {
  const loggedInUser = useSelector((state) => state.usersSlice.login);
  if (!loggedInUser) {
    return <Navigate to={LOGIN} replace />;
  }
  return children;
};

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={REGISTER} element={<RegisterView />} />
        <Route path={LOGIN} element={<LoginView />} />
        <Route path={HOME} element={<HomeView />} />
        <Route
          path={MY_APPOINTMENTS}
          element={
            <ProtectedRoute>
              <MyAppointmentsView />
            </ProtectedRoute>
          }
        />
        <Route path={NEW_APPOINTMENT} element={<NewAppointmentForm />} />
      </Routes>
    </>
  );
}

export default App;
