import Navbar from "./components/Navbar/Navbar";
import HomeView from "./views/HomeView";
import RegisterView from "./views/RegisterView";

function App() {
  return (
    <>
      <Navbar />
      <RegisterView />
      <HomeView />
    </>
  );
}

export default App;
