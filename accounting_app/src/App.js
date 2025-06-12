import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage";
import ForgotPage from "./Pages/ForgotPage"
import VerifyCodePage from "./Pages/VerifyCodePage";
import ChangePassword from "./Pages/ChangePassword";
import SignUpPage from "./Pages/SignUpPage";
import DetailsPage from "./Pages/DetailsPage";
import Organization from "./Pages/Organization";
import EmailVerifyPage from "./Pages/EmailVerifyPage";

function App() {
  return (
    <div className="container mx-auto px-4 w-full h-screen">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgot" element={<ForgotPage />} />
        <Route path="/forgot/verify" element={<VerifyCodePage />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="/email-verification" element={<EmailVerifyPage />} />
      </Routes>
    </div>
  );
}

export default App;
