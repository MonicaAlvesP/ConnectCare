import Home from "./Pages/Home/Home.jsx";
import SignIn from "./Pages/SignIn/SignIn.jsx";
import { SignUp } from "./Pages/Register/SignUp.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Scheduling from "./Pages/Scheduling/Scheduling.jsx";

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/scheduling" element={<Scheduling />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
