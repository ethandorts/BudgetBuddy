// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import background_login from "../assets/background_login.png";
import "../tailwind.css";

const SignUpForm: React.FC = () => {

    const navigate = useNavigate();

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    return (
        <div
            className="flex flex-col justify-start items-center pt-20 min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${background_login})` }}
        >

            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-8">
                Start your budgeting journey to success!
            </h1>

            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

                <form className="space-y-5">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            First Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your first name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Last Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your last name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Create a password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold py-2 rounded-lg shadow-md hover:scale-[1.02] transition-all duration-300"
                    >
                        Sign Up
                    </button>

                    <div className="text-center mt-4">
                        <p className="text-gray-600 mb-2 font-bold">
                            Already have an account?
                        </p>
                        <button
                            type="button"
                            onClick={() => navigate("/login")}
                            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:scale-[1.02] transition-all duration-300"
                        >
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;
