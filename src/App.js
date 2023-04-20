import "./App.css";
import Sidenav from "./components/SideNav";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div className={isLoginPage ? "" : "App"}>
      {!isLoginPage && <Sidenav />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
