import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import OTP from "./OTP";
import ResetPassword from "./ResetPassword";
import ForgotPassword from "./ForgotPassword";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-red-50">
        <div
          className="w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/dribble 1.png')",
          }}
        ></div>
        <div className="w-1/2 flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect to login */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/otp" element={<OTP />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
       
          </div>
        </div>
    </Router>
  );
}

export default App;
