import { Link, useNavigate } from "react-router-dom";
import AccountingComponents from "../Components/Accounting_Components";
import Button from "../Components/Button";
import { emailRegex } from "../Regex/Regex";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";


function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate("");

  function handleSubmit (e) {
      if (!emailRegex.test(email)) {
        toast("Please enter a valid email address");
        return;
      }
      if (password.length < 6 || confirmPassword.length < 6){
        toast("password must be at least 6 character");
        return;
      }
      if(password != confirmPassword){
        toast("Password do not match");
        return;
      }
    };

    function handleClickCheck(e) {
      if (!emailRegex.test(email)) {
        toast("Please enter a valid email address");
        return;
      }
      if (password.length < 6 || confirmPassword.length < 6) {
        toast("password must be at least 6 character");
        return;
      }
      if (password !== confirmPassword) {
        toast("Password do not match");
        return;
      }
      if(e.target.checked === true){
        navigate("/email-verification");
      }
      else{
        navigate("/signup")
      }
    }
  return (
    <div className="container mx-auto flex justify-center items-center h-screen max-md:px-4 max-sm:p-0 ">
      <div className="conatiner mx-auto flex shadow-lg bg-primary rounded-3xl w-[60%] overflow-hidden max-md:w-full ">
        <AccountingComponents />
        <div className=" px-10 py-16 rounded-l-3xl bg-white w-1/2 max-lg:w-full max-md:px-4 font-inter">
          <h2 className="text-3xl font-bold">Sign Up</h2>
          <p className="mt-2 text-sm">
            Create an account to start managing your finances today.{" "}
          </p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-md p-2 w-full mb-6"
          />
          <label htmlFor="password">Create Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create new password"
            className="border border-gray-300 rounded-md p-2 w-full mb-6 cursor-pointer"
          />
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            name="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-enter new password"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          <div className="my-4">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="mr-2"
              onClick={handleClickCheck}
            />
            <p className="inline hover:cursor-pointer ">Verify Email</p>
          </div>
          <div className="text-center mt-6">
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full border bg-secondary py-2 rounded"
            >
              Sign up
            </button>
            <ToastContainer />
            <p className="mt-2">
              have an account ?{" "}
              <Link to="/" className="text-secondary text-sm">
                {" "}
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUpPage;
