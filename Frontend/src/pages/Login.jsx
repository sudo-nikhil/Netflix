import React from "react";
import { useNavigate } from "react-router-dom";
import LoginNavbar from "../components/LoginNavbar";

const Login = ({ setUsername, setPassword, check }) => {
    const navigate = useNavigate();

    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSignup = () => {
        navigate("/signup");
    };

    return (
        <div>
            <LoginNavbar />
            <div className="bg-black/70 w-[100%] mt-10 p-16 md:w-[60%] md:mt-10 lg:w-[30%] lg:mt-5 mx-auto border-none rounded-md">
                <h1 className="text-white text-4xl font-[700]">Sign In</h1>
                <form
                    className="flex flex-col mt-8"
                    onSubmit={(e) => {
                        e.preventDefault();
                        check();
                    }}
                >
                    <input
                        type="email"
                        name="username"
                        placeholder="Email"
                        required
                        onChange={handleUsername}
                        className="p-3 mb-5 w-full bg-transparent text-white placeholder-gray-400 border rounded-md border-gray-400 focus:outline-none focus:border-white"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handlePassword}
                        className="p-3 mb-5 bg-transparent border rounded-md border-gray-400 placeholder-gray-400 text-white"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-[#E50914] py-2 text-md border-none rounded-md font-semibold text-white"
                    >
                        Sign In
                    </button>

                    <p className="text-gray-400 my-3 w-[100%] text-center">OR</p>
                    <button
                        type="button"
                        className="bg-white/25 py-2 text-md border-none rounded-md font-semibold text-white"
                    >
                        Use a sign-in code
                    </button>
                    <a className="text-white my-3 w-full text-center underline cursor-pointer">
                        Forgot password?
                    </a>
                </form>

                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        className="w-4 h-4 border border-white rounded"
                    />
                    <p className="inline-block text-white">Remember me</p>
                </div>
                <div className="flex flex-col gap-3 mt-3">
                    <p className="text-white/60 text-md">
                        New to Netflix?
                        <span
                            className="text-white hover:underline cursor-pointer ml-[2px]"
                            onClick={handleSignup}
                        >
                            {" "}
                            Sign up now.
                        </span>
                    </p>
                    <p className="text-white/60 text-xs">
                        This page is protected by Google reCAPTCHA to ensure you're not a
                        bot.
                    </p>
                    <p className="text-[#266FF4] underline text-xs">Learn more.</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
