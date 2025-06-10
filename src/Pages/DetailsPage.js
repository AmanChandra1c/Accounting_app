import Button from "../Components/Button";

function DetailsPage() {
  return (
    <div className="container mx-auto flex p-4 justify-center items-center">
      <div className="conatiner mx-auto flex shadow-lg bg-blue-900 rounded-3xl w-[60%] overflow-hidden">
        <div className="rounded-l-3xl w-1/2">
          <div className="mt-14 ml-10 text-white">
            <h2 className="text-3xl font-bold">Accounting</h2>
            <p className="mt-2 text-sm">
              Take control of your finances with ease.
            </p>
          </div>
          <img src="freepik.png" alt="Freepik" className="-cover" />
        </div>
        <div className=" px-10 py-4 rounded-l-3xl bg-white w-1/2">
          <h2 className="text-3xl font-bold">Personal Details</h2>
          <p className="mt-2 text-sm">
Just a few more details to customize your accounting dashboard.          </p>
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
            <br/>
            <select className="w-full py-2 rounded-md px-2 mt-2">
                <option value="">Select your account type</option>
                <option value="individual">individual</option>
                <option value="organization">Organization</option>
            </select>
            <div className="mt-14 space-y-4">

            <Button data="Confirm" className="bg-blue-400" />
            <Button data="Discard " className="mt-6" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;