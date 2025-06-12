import AccountingComponents from "../Components/Accounting_Components";
import Button from "../Components/Button";
import { RiArrowRightWideFill } from "react-icons/ri";


function Organization() {
  const data = [
    { img: "oakmere.png", name: "oakmere Groups", email: "oakmeregroups@work.in" },
    { img: "ahuja.png", name: "ahuja & co.", email: "ahuja@gmail.com" },
    { img: "studio.png", name: "Studio levin", email: "studion@work.com" },
  ];
  return (
    <div className="container mx-auto flex p-10 justify-center items-center h-screen max-md:px-4 max-sm:p-0 ">
      <div className="conatiner mx-auto flex shadow-lg bg-primary rounded-3xl w-[60%] overflow-hidden max-md:w-full ">
        <AccountingComponents />
        <div className=" px-10 py-16 rounded-l-3xl bg-white w-1/2 max-lg:w-full max-md:px-4 font-inter">
          <h2 className="text-3xl font-bold">Organization</h2>
          <p className="mt-2 text-sm">
            Select your organization or add a new one to get started.
          </p>
          <div>
            <div className="mt-10 rounded-md border-2">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b-2 py-2 px-4"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={item.img}
                      alt="Organization"
                      className="w-10 h-10 aspect-square rounded-full"
                    />
                    <div>
                      <h3 className="text-xl">{item.name}</h3>
                      <p className="text-sm">{item.email}</p>
                    </div>
                  </div>
                  <RiArrowRightWideFill className="size-8" />
                </div>
              ))}
              <div
                className="flex items-center justify-between border-b-2 py-2 px-4"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={item.img}
                    alt="Organization"
                    className="w-10 h-10 aspect-square rounded-full"
                  />
                  <div>
                    <h3 className="text-xl">{item.name}</h3>
                    <p className="text-sm">{item.email}</p>
                  </div>
                </div>
                <RiArrowRightWideFill className="size-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organization;
