import Button from "../Components/Button";
import { ToastContainer, toast } from "react-toastify";
import AccountingComponents from "../Components/Accounting_Components";
import { useState } from "react";
import { emailRegex } from "../Regex/Regex";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      toast("Please enter a valid email address");
    }
  };
  console.log(email);

  return (
    <div className="container mx-auto flex p-10 h-screen justify-center items-center max-md:px-4 max-sm:p-0">
      <div className="conatiner mx-auto flex shadow-lg bg-blue-900 rounded-3xl w-[60%] overflow-hidden items-center justify-center max-md:w-full">
        <AccountingComponents />
        <div className=" px-10 py-16 rounded-l-3xl bg-white w-1/2 max-lg:w-full  max-md:px-4">
          <h2 className="text-3xl font-bold">Log In</h2>
          <p className="mt-2 text-sm">
            Good to see you again! Let's get back to managing smarter.
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
            <label>
              Password
              <div className="text-end mb-20">
                <input
                  type="password"
                  name={"password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="border border-gray-300 rounded-md p-2 w-full mb-1"
                />
                <Link to="/forgot" className="text-blue-500 text-sm ">
                  forgot password
                </Link>
              </div>
            </label>
            <div className="text-center">
              {/* <Button data="Log in" onClick={() => handleSubmit}/> */}
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full py-2 border rounded-md bg-blue-600"
              >
                {" "}
                Log in{" "}
              </button>
               <ToastContainer />
              <p className="mt-2">
                Don't have an account ?{" "}
                
                <Link to="/signup" className="text-blue-500 text-sm">
                  {" "}
                  Sign up
                </Link>
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
