import React, {useState} from "react";
import {FaBars, FaUserCircle} from "react-icons/fa";
import "../tailwind.css"

const Navbar: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className="fixed top-0 left-0 w-full bg-gradient-to-r from-black via-gray-900 to-black text-white p-4 font-bold flex items-center justify-between">
                <button className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
                        onClick={() => setIsOpen(!isOpen)}>
                    <FaBars/>
                </button>

                <div className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold">
                    BudgetBuddy
                </div>
                <div className="flex items-center space-x-2">
                    <div
                        className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-bold">
                        <FaUserCircle size={32}/>
                    </div>
                    <span className="text-white font-semibold">Example User</span>
                </div>
            </div>
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-6 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-40`}
            >
                <h2 className="text-xl font-bold mb-6">Menu</h2>
                <ul className="space-y-4">
                    <li className="hover:text-green-400 cursor-pointer">Home</li>
                    <li className="hover:text-green-400 cursor-pointer">Dashboard</li>
                    <li className="hover:text-green-400 cursor-pointer">Profile</li>
                    <li className="hover:text-green-400 cursor-pointer">Settings</li>
                </ul>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </>
    );
};

// @ts-ignore
export default Navbar;
