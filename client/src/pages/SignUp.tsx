import React from "react";
import "../tailwind.css"
import Navbar from "../components/Navbar.tsx";
import SignUpForm from "../components/SignUpForm.tsx";

const SignUp: React.FC = () => {

    return (
        <>
            <Navbar/>
            <div className="mt-1">
                <SignUpForm />
            </div>
        </>
    );
};

export default SignUp;