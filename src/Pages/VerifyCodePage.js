import Button from "../Components/Button";
import { InputOtp } from "@heroui/input-otp";
import AccountingComponents from "../Components/Accounting_Components";
import { useState } from "react";

function verifyCodePage() {
    // const [value, setValue] = useState("");

  return (
    <div className="container mx-auto flex p-10 justify-center items-center">
      <div className="conatiner mx-auto flex shadow-lg bg-primary rounded-3xl w-[60%] overflow-hidden">
        <AccountingComponents />
        <div className=" px-10 py-16 rounded-l-3xl bg-white w-1/2">
          <h2 className="text-3xl font-bold">Verify Code</h2>
          <p className="mt-2 text-base">
            We've sent a 6-digit verification code to your email.{" "}
          </p>
          {/* <div className="flex flex-col items-start gap-2">
            <InputOtp length={4} value={value} onValueChange={setValue} />
            <div className="text-small text-default-500">
              OTP value: <span className="text-md font-medium">{value}</span>
            </div>
          </div> */}
          <p className="my-4">Enter the code below to continue</p>
          <div className="text-center mt-24">
            <button
              type="submit"
              className="w-full py-2 border rounded-md bg-secondary text-white"
            >
              Send Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default verifyCodePage;
