import React, { useState } from "react";
import { Input, Tooltip, message } from "antd";
import { Button } from "flowbite-react";
import { InfoCircleOutlined } from "@ant-design/icons";
import axios from "axios";

// const url = process.env.NEXT_PUBLIC_API_URL;

export default function Forget() {
    const [inputData, setInputData] = useState({
        email: "",
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

    //     if (!inputData.email) {
    //         message.error("Please fill in all fields");
    //         setIsLoading(false);
    //         return;
    //     }

    //     try {
    //         await axios.post(`${url}/users/forgot-password`, {
    //             email: inputData.email,
    //         });
    //         message.success(
    //             "Please check your email for instructions to reset your password"
    //         );

    //         setIsLoading(false);
    //         setInputData({ email: "" });
    //     } catch (error) {
    //         console.log(error);
    //         message.error(
    //             error.response?.data?.error ||
    //                 "An error occurred during the request"
    //         );
    //         setIsLoading(false);
    //     }
    // };

    return (
        <main className="w-full h-screen">
            <section className="bg-radial w-full h-screen flex flex-col justify-start items-center py-20 gap-10">
                <img
                    src="/Logo2.png"
                    alt="LogoEqua"
                    loading="lazy"
                    width={500}
                    height={500}
                    className="w-32"
                    quality={100}
                />
                <div className="w-[35rem] glassmorpism flex flex-col justify-start items-center py-8 px-16">
                    <div className="w-full ">
                        <h1 className="text-3xl text-white font-montserrat">
                            Forgot Password
                        </h1>
                    </div>
                    <form className="w-full h-auto mt-6">
                        <div>
                            <label
                                htmlFor="email"
                                className="font-montserrat text-sm font-light text-white"
                            >
                                Email
                            </label>
                            <Input
                                id="email"
                                name="email"
                                value={inputData.email}
                                onChange={onChange}
                                placeholder="example@email.com"
                                suffix={
                                    <Tooltip title="Input your Email">
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
                        <div className="flex flex-col">
                            <Button
                                color="brown"
                                type="submit"
                                disabled={isLoading} // Disable button saat loading
                                className="w-full h-10 md:h-12 bg-[#003465] text-white rounded-md font-montserrat mt-6 flex justify-center items-center"
                            >
                                {isLoading ? "Sending..." : "Send Email"}
                            </Button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}
