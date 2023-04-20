import "./App.css";
import Sidenav from "./components/SideNav";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import {
  BrowserRouter,
  Routes,
  Route,
  } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Sidenav />
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/booking" element={<Booking />}/>
          {/*           <Route path="/explore" element={<Explore />} />
          <Route path="/statistics" element={<Statistics />}/>
          <Route path="/settings" element={<Settings />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;