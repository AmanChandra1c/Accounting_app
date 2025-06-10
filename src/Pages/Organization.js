import Button from "../Components/Button";

function Organization() {
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
          <h2 className="text-3xl font-bold">Organization</h2>
          <p className="mt-2 text-sm">
            Select your organization or add a new one to get started.
          </p>
          <div>
            <div>
              <div>
                <div>
                  <img
                    src="organization.png"
                    alt="Organization"
                    className="w-16 h-16 mb-4"
                  />
                  <div>
                    <h3 className="text-xl">Oakmere Groups</h3>
                    <p className="text-sm">Oakmeregroups@work.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organization;
