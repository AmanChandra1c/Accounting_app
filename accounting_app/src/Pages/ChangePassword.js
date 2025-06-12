import AccountingComponents from "../Components/Accounting_Components";
import Button from "../Components/Button";

function ChangePassword() {
  return (
    <div className="container mx-auto flex p-10 justify-center items-center h-screen max-md:p-2 max-sm:p-0">
      <div className="conatiner mx-auto flex shadow-lg bg-primary rounded-3xl w-[60%] overflow-hidden max-md:w-full">
      <AccountingComponents />
        <div className=" px-10 py-16 rounded-l-3xl bg-white w-1/2 max-lg:w-full max-md:px-4">
          <h2 className="text-3xl font-bold">Change Password</h2>
          <p className="mt-2 text-sm">
            Almost done! Just create a new password to get back in.{" "}
          </p>
          <form className="my-4">
            <label htmlFor="newPass">New Password</label>
             <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter new password"
                className="border border-gray-300 mb-4 rounded-md p-2 w-full"
              />
            <label htmlFor="confirmPass">Confirm Password</label>
            <div className="text-end mb-20">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Re-enter new password"
                className="border border-gray-300 rounded-md p-2 w-full mb-1"
              />
              <a href="/" className="text-secondary text-sm ">
                forgot password
              </a>
            </div>
            <div className="text-center">
              <Button data="Confirm" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
