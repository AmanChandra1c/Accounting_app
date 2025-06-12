import Button from "../Components/Button";
import AccountingComponents from "../Components/Accounting_Components";

function DetailsPage() {
  return (
    <div className="container mx-auto flex p-10 justify-center items-center h-screen max-md:px-4 max-sm:p-0 ">
      <div className="conatiner mx-auto flex shadow-lg bg-primary rounded-3xl w-[60%] overflow-hidden max-md:w-full ">
        <AccountingComponents />
        <div className=" px-10 py-16 rounded-l-3xl bg-white w-1/2 max-lg:w-full max-md:px-4">
          <h2 className="text-3xl font-bold">Personal Details</h2>
          <p className="mt-2 text-sm">
            Just a few more details to customize your accounting dashboard.{" "}
          </p>
          <form className="my-4">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your Full Name"
              className="border border-gray-300 rounded-md p-2 w-full mb-4"
            />
            <label htmlFor="contact">Contact Information</label>
            <input
              type="text"
              id="contact"
              name="contact"
              placeholder="Enter your contact information"
              className="border border-gray-300 rounded-md p-2 w-full mb-4"
            />
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Enter your country"
              className="border border-gray-300 rounded-md p-2 w-full mb-4"
            />
            <label htmlFor="account">Account Type</label>
            <br />
            <select className="w-full py-2 rounded-md px-2 mt-2">
              <option value="">Select your account type</option>
              <option value="individual">individual</option>
              <option value="organization">Organization</option>
            </select>
            <div className="mt-14 space-y-4">
              <Button data="Confirm" className="bg-secondary" />
              <Button data="Discard " className="mt-6" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;