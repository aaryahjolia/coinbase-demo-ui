import React from "react";
import { Link } from "react-router-dom";
import { CloseButton } from "@chakra-ui/react";
import BitCoinImage from "../../Assets/bitcoin.png";
import Data from "./data.json";

function View2() {
    return (
        <div className="w-10/12	mx-auto my-6">
            <div className="heading flex justify-between items-center">
                <Link to="/">
                    <CloseButton size="lg" className="px-0 my-8 inline" />
                </Link>
                <p className="inline-block w-6/12 text-xl text-center">
                    Select Asset to Buy
                </p>
                <Link to="/" className="opacity-0">
                    <CloseButton size="lg" className="px-0 my-8 inline" />
                </Link>
            </div>

            <div className="prices">
                {Data.map((item) => (
                    <div className="flex items-center my-5">
                        <div className="image w-2/12 p-1">
                            <img src={BitCoinImage} alt="" />
                        </div>
                        <div className="text-divs flex justify-between w-full m-1">
                            <div className="name w-5/10 flex flex-col justify-center mx-3">
                                <p>{item.name}</p>
                                <p className="text-gray-400">{item.symbol}</p>
                            </div>
                            <div className="last flex flex-col justify-center items-end">
                                <p>${item.price}</p>
                                <p
                                    className={`${
                                        item.change[0] === "-" ? "text-red-400" : "text-green-500"
                                    }`}
                                >
                                    {item.change}%
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
                <hr className="my-3" />
                <h2 className="text-center text-lg text-purple-700">
                    Data is fetched from JSON File!
                </h2>
            </div>
        </div>
    );
}

export default View2;
