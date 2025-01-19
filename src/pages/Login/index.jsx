import React, { useState } from "react";
import { Input, Tooltip, message } from "antd";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import Cookies from "js-cookie";
import axios from "axios";
import {
    InfoCircleOutlined,
    EyeInvisibleOutlined,
    EyeTwoTone,
} from "@ant-design/icons";

// const url = process.env.NEXT_PUBLIC_API_URL;

export default function Login() {
    const navigate = useNavigate();
    const [inputData, setInputData] = useState({
        username: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const onChange = (e) => {
        setInputData((prevInputData) => ({
            ...prevInputData,
            [e.target.name]: e.target.value,
        }));
    };

    // const onSubmit = async (e) => {
    //     e.preventDefault();
    //     setIsLoading(true);

    //     if (!inputData.username || !inputData.password) {
    //         message.error("Please fill in all fields");
    //         setIsLoading(false);
    //         return;
    //     }

    //     try {
    //         const response = await axios.post(`${url}/users/login`, {
    //             username: inputData.username,
    //             password: inputData.password,
    //         });
    //         const token = response.data.token;
    //         Cookies.set("Authorization", token, { expires: 7, path: "/" });
    //         message.success("Login successful!");

    //         setIsLoading(false);
    //         navigate("/");
    //     } catch (error) {
    //         console.log(error);
    //         message.error(
    //             error.response?.data?.error || "An error occurred during login"
    //         );
    //         setIsLoading(false);
    //         console.error("Login error:", error);
    //     }
    // };

    return (
        <main className="w-full h-screen">
            <section className="bg-radial w-full h-screen flex flex-col justify-start items-center py-20 gap-10">
                <img
                    src="/Logo2.png"
                    alt="LogoEqua"
                    loading="lazy"
                    width={1000}
                    height={1000}
                    className="w-32"
                    quality={100}
                />
                <div className="w-[35rem] glassmorpism flex flex-col justify-start items-center py-8 px-16">
                    <div className="w-full ">
                        <h1 className="text-3xl text-white font-montserrat">
                            Login
                        </h1>
                    </div>
                    <form className="w-full h-auto mt-6">
                        <div>
                            <label
                                htmlFor="username"
                                className="font-montserrat text-sm font-light text-white"
                            >
                                Username
                            </label>
                            <Input
                                id="username"
                                name="username"
                                placeholder="Username"
                                value={inputData.username}
                                onChange={onChange}
                                suffix={
                                    <Tooltip title="Input your Username">
                                        <InfoCircleOutlined
                                            style={{
                                                color: "rgba(0,0,0,.45)",
                                            }}
                                        />
                                    </Tooltip>
                                }
                                required={true}
                                className="h-12 px-4 mt-1"
                            />
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="font-montserrat text-sm font-light text-white"
                            >
                                Password
                            </label>
                            <Input.Password
                                id="password"
                                name="password"
                                value={inputData.password}
                                onChange={onChange}
                                placeholder="Password"
                                iconRender={(visible) =>
                                    visible ? (
                                        <EyeTwoTone />
                                    ) : (
                                        <EyeInvisibleOutlined />
                                    )
                                }
                                required={true}
                                className="h-12 px-4 mt-1 mb-2"
                            />
                        </div>
                        <div className="flex flex-col">
                            <p
                                className="font-montserrat text-sm font-light mt-2 cursor-pointer text-white"
                                onClick={() => navigate("/forget")}
                            >
                                Forget Password?
                            </p>
                            {isLoading ? (
                                <Button
                                    color="brown"
                                    type="submit"
                                    className="w-full h-10 md:h-12 bg-gray-400 cursor-not-allowed text-white rounded-m font-roboto mt-6 py-2"
                                    isProcessing
                                    disabled
                                >
                                    Waiting...
                                </Button>
                            ) : (
                                <Button
                                    color="brown"
                                    type="submit"
                                    className="w-full h-10 md:h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-m font-roboto mt-6 py-2"
                                >
                                    Login
                                </Button>
                            )}
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}
