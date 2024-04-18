import React from "react";
import { Link } from "react-router-dom";
import { CloseButton } from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    Button,
    InputRightElement,
} from "@chakra-ui/react";

function View1() {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClick = () => setShowPassword(!showPassword);

    return (
        <div className="w-10/12	mx-auto">
            <Link to="/">
                <CloseButton size="lg" className="px-0 my-8" />
            </Link>
            <div className="text my-10">
                <h3 className="text-3xl my-8">Sign in to Coinbase</h3>
            </div>
            <div className="email my-10">
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        placeholder="mobbin.cms2@gmail.com"
                        size="lg"
                        focusBorderColor="blue.600"
                    />
                </FormControl>
            </div>
            <div className="password my-10">
                <FormLabel>Password</FormLabel>
                <InputGroup size="lg">
                    <Input
                        pr="4.5rem"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        focusBorderColor="blue.600"
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {showPassword ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </div>
            <div className="links flex justify-between my-16">
                <Link to="/group1" className="text-blue-600">
                    Forgot Password
                </Link>
                <Link to="/group1" className="text-blue-600">
                    Privacy Policy
                </Link>
            </div>
            <div className="signin">
                <Link to="/" className="">
                    <button
                        type="button"
                        class="text-white text-1xl bg-blue-600 rounded-lg p-5 w-full"
                    >
                        Sign In
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default View1;
