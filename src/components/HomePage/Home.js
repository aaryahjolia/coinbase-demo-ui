import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

function Home() {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-cyan-50">
                <div className="text my-16">
                    <h1 className="text-center text-5xl">Welcome</h1>
                </div>
                <div className="flex flex-col">
                    <Link to="/group1" className="m-5">
                        <Button colorScheme="blue" className="w-full">
                            Group 1 - Screen 3
                        </Button>
                    </Link>
                    <Link to="/group2" className="m-5">
                        <Button colorScheme="blue" className="w-full">
                            Group 2 - Screen 133
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;
