import React from "react";
import "../tailwind.css"
import Navbar from "../components/Navbar.tsx";
import LoginForm from "../components/LoginForm.tsx";

const Login: React.FC = () => {

    return (
        <>
            <Navbar/>
            <div className="mt-1">
                <LoginForm />
            </div>
        </>
    );
};

export default Login;