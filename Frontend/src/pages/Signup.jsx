import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginNavbar from "../components/LoginNavbar";

const Signup = ({ userdata, setUserdata }) => {
  const [eusername, setUsername] = useState("");
  const [epassword, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [pcheck, setPcheck] = useState(false)

  const navigate = useNavigate();

  const check = () => {
    if (epassword !== repassword) {
      setPcheck(true); 
    } else {
      setUserdata([...userdata, { username: eusername, password: epassword }]);
      alert("Sign-up done! Please log in to continue.");
      navigate("/");
      setPcheck(false); 
    }
  };


  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSignin = () => {
    navigate("/");
  };

  const handleRePassword = (event) => {
    setRePassword(event.target.value);
  }

  return (
    <div>
      <LoginNavbar />
      <div className="bg-black/70 w-[100%] mt-10 p-16 md:w-[60%] md:mt-10 lg:w-[30%] lg:mt-5 mx-auto border-none rounded-md">
        <h1 className="text-white text-4xl font-[700]">Sign Up</h1>
        <form
          className="flex flex-col mt-8"
          onSubmit={(e) => {
            e.preventDefault();
            check();
          }}
        >
          <input
            type="email"
            value={eusername}
            placeholder="Email"
            onChange={handleUsername}
            className="p-3 mb-5 w-full bg-transparent text-white placeholder-gray-400 border rounded-md border-gray-400 focus:outline-none focus:border-white"
            required
          />
          <input
            type="password"
            value={epassword}
            placeholder="Password"
            onChange={handlePassword}
            className="p-3 mb-5 bg-transparent border rounded-md border-gray-400 placeholder-gray-400 text-white"
            required
          />
          <input
            type="password"
            value={repassword}
            placeholder="Re-Password"
            onChange={handleRePassword}
            className="p-3 mb-1 bg-transparent border rounded-md border-gray-400 placeholder-gray-400 text-white"
            required
          />
          {pcheck && (
            <p className="text-xs text-red-600">
              Passwords do not match. Please re-enter correctly
            </p>
          )}


          <button
            type="submit"
            className="bg-[#E50914] py-2 mt-3 text-md border-none rounded-md font-semibold text-white"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center gap-2 mt-3">
          <input
            type="checkbox"
            className="w-4 h-4 border border-white rounded"
          />
          <p className="inline-block text-white">Remember me</p>
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <p className="text-white/60 text-md">
            Already have an account?
            <span
              className="text-white hover:underline cursor-pointer ml-[2px]"
              onClick={handleSignin}
            >
              {" "}
              Sign in now.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
