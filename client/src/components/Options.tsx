import React from "react";
import "../tailwind.css";
import financeImg from "../assets/finance_img.jpg";

const Options: React.FC = () => {
    return (
        <div
            className="w-full min-h-[calc(100vh-64px)] flex flex-col items-center mt-16 bg-center bg-cover relative"
            style={{ backgroundImage: `url(${financeImg})` }}
        >
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 flex flex-col items-center justify-center w-full gap-4 px-4 text-white text-center max-w-4xl">
                <h1 className="text-5xl font-bold mt-8">
                    Track your expenses, Master your money.
                </h1>
                <p className="text-lg max-w-xl">
                    Take control of your spending with BudgetBuddy. Effortless expense tracking, smarter budgeting.
                </p>

                <button
                    className="mt-8 bg-white text-black font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition"
                >
                    Get Started
                </button>
            </div>
        </div>

    );
};

export default Options;
