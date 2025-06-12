import AccountingComponents from "../Components/Accounting_Components";
import { MuiOtpInput } from "mui-one-time-password-input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EmailVerifyPage() {
  
  const [otp, setOtp] = useState("");
  const navigate = useNavigate("");
  
    const handleChange = (newValue) => {
      setOtp(newValue);
    };
  return (
   <div className="container mx-auto flex p-10 justify-center items-center h-screen max-md:p-2 max-sm:p-0">
      <div className="conatiner mx-auto flex shadow-lg bg-primary rounded-3xl w-[60%] overflow-hidden max-md:w-full">
        <AccountingComponents />
        <div className=" px-10 py-16 rounded-l-3xl bg-white w-1/2 max-lg:w-full max-md:px-4 max-sm:py-6">
          <h2 className="text-3xl font-bold">Email Verification</h2>
          <p className="mt-2 text-base">
            We've sent a 6-digit verification code to your email.{" "}
          </p>
          <p className="my-4">Enter the code below to continue</p>


          <div className="text-center mt-24">
            <button
              type="submit"
              className="w-full py-2 border rounded-md bg-secondary text-white"
              onClick={() => navigate("/signup")}
            >
              Confirm
            </button>
            {/* <Button variant="outline">Button</Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailVerifyPage;
