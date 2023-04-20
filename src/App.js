import "./App.css";
import Sidenav from "./components/SideNav";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const location = useLocation();

  const isAuthPage = () => {
    switch (location.pathname) {
      case "/login":
        return true;
      case "/signup":
        return true;
      default:
        return false;
    }
  };

  return (
    <div className={isAuthPage() ? "" : "App"}>
      {!isAuthPage() && <Sidenav />}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
