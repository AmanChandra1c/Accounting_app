import { Link, Navigate } from "react-router-dom";
import AccountingComponents from "../Components/Accounting_Components";
import Button from "../Components/Button";

function SignUpPage() {
  return (
    <div className="container mx-auto flex p-10 justify-center items-center h-screen max-md:px-4 max-sm:p-0 ">
      <div className="conatiner mx-auto flex shadow-lg bg-blue-900 rounded-3xl w-[60%] overflow-hidden max-md:w-full ">
      <AccountingComponents />
        <div className=" px-10 py-16 rounded-l-3xl bg-white w-1/2 max-lg:w-full max-md:px-4">
          <h2 className="text-3xl font-bold">Sign Up</h2>
          <p className="mt-2 text-sm">
            Create an account to start managing your finances today.{" "}
          </p>
          <form className="my-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md p-2 w-full mb-6"
            />
            <label htmlFor="password">Create Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create new password"
              className="border border-gray-300 rounded-md p-2 w-full mb-6 cursor-pointer"
            />
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Re-enter new password"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <div className="my-4">
                <input type="checkbox" id="terms" name="terms" className="mr-2" checked="false"/>
                <p className="inline hover:cursor-pointer ">Verify Email</p>
            </div>
            <div className="text-center mt-6">
              <Button data="Sign Up" />
              <p className="mt-2">
                have an account ?{" "}
                <Link to="/" className="text-blue-500 text-sm">
                  {" "}
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignUpPage;
