// import Button from "../Components/Button";
// import OtpInput from "react-otp-input";
// import { useState } from "react";

// function verifyCodePage() {
//   // const [code, setCode] = useState;
//   // const handleChange = (code) => setCode(code);

//   return (
//     <div className="container mx-auto flex p-10 justify-center items-center">
//       <div className="conatiner mx-auto flex shadow-lg bg-blue-900 rounded-3xl w-[60%] overflow-hidden">
//         <div className="rounded-l-3xl w-1/2">
//           <div className="mt-14 ml-10 text-white">
//             <h2 className="text-3xl font-bold">Accounting</h2>
//             <p className="mt-2 text-sm">
//               Take control of your finances with ease.
//             </p>
//           </div>
//           <img src="freepik.png" alt="Freepik" className="-cover" />
//         </div>
//         <div className=" px-10 py-16 rounded-l-3xl bg-white w-1/2">
//           <h2 className="text-3xl font-bold">Verify Code</h2>
//           <p className="mt-2 text-base">
//             We've sent a 6-digit verification code to your email.{" "}
//           </p>
//           <p className="my-4">Enter the code below to continue</p>
//           <form className="my-4">
//             <OtpInput
//               // value={code}
//               // onChange={handleChange}
//               numInputs={6}
//               separator={<span style={{ width: "8px" }}></span>}
//               isInputNum={true}
//               shouldAutoFocus={true}
//               inputStyle={{
//                 border: "1px solid transparent",
//                 borderRadius: "8px",
//                 width: "54px",
//                 height: "54px",
//                 fontSize: "12px",
//                 color: "#000",
//                 fontWeight: "400",
//                 caretColor: "blue",
//               }}
//               focusStyle={{
//                 border: "1px solid #CFD3DB",
//                 outline: "none",
//               }}
//             />
//             <div className="text-center mt-24">
//               <Button data="Send Code" />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default verifyCodePage;
