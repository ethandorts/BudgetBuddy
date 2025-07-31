import React from "react";
import "../tailwind.css";
import { useNavigate } from "react-router-dom";
import financeImg from "../assets/finance_img.jpg";

const Options: React.FC = () => {

    const navigate = useNavigate();

    return (
        <div
            className="w-full min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-center bg-cover relative mt-16"
            style={{ backgroundImage: `url(${financeImg})` }}
        >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>

            <div
                className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 max-w-3xl animate-fadeIn">

                <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg tracking-tight">
                    Track your expenses, <br></br>
                    <span className="text-green-400">master your money</span>.
                </h1>

                <p className="mt-4 text-lg md:text-xl text-gray-200 drop-shadow-md">
                    Take control of your spending with BudgetBuddy. Effortless expense tracking, smarter budgeting.
                </p>

                <button
                    className="mt-8 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold px-10 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                    onClick={() => navigate("/login")}
                    >
                    Get Started
                </button>
            </div>
        </div>


    );
};

export default Options;
