import AccountingComponents from "../Components/Accounting_Components";
import { useState } from "react";
import { emailRegex } from "../Regex/Regex";
import { ToastContainer, toast } from "react-toastify";
import Button from "../Components/Button";
import { useNavigate } from "react-router"


function ForgotPage(){
  const [email, setEmail] = useState("");

  const navigate = useNavigate("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      toast("Please enter a valid email address");
    } else {navigate("verify");
      toast.success("Verification code sent to your email");
    }
  };
    return (
    <div className="container mx-auto flex p-10 justify-center items-center h-screen max-md:p-2 max-sm:p-0">
      <div className="conatiner mx-auto flex shadow-lg bg-primary rounded-3xl w-[60%] overflow-hidden max-md:w-full">
        <AccountingComponents />
        <div className=" px-10 py-16 rounded-l-3xl bg-white w-1/2 max-lg:w-full max-md:px-4">
          <h2 className="text-3xl font-bold">Forgot Password</h2>
          <p className="mt-2 mb-6 text-sm">
            Don't worry — it happens to the best of us.
          </p>
          
            <label>
              Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md p-2 w-full mb-4"
            />
            </label>
            <div className="text-center mt-24">
              {/* <Button data="Send Code"/> */}
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full py-2 border rounded-md bg-secondary text-white"
              >
                Send Code
              </button>
              <ToastContainer />
            </div>
        </div>
      </div>
    </div>
  );
}
export default ForgotPage;