import React from "react";
import { Link } from "react-router-dom";

function ErrorPage404() {
    return (
        <>
            <div className="text-center text-6xl h-screen flex flex-col justify-center items-center">
                <h1>404</h1>
                <h1>Error</h1>
                <p className="text-3xl my-10 ">
                    Head Back to{" "}
                    <Link
                        to="/"
                        className="text-blue-700 underline underline-offset-8"
                    >
                        Home Page
                    </Link>
                </p>
            </div>
        </>
    );
}

export default ErrorPage404;
