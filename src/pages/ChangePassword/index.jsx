import { Input, Tooltip, message } from "antd";
import { Button } from "flowbite-react";
import {
    InfoCircleOutlined,
    EyeInvisibleOutlined,
    EyeTwoTone,
} from "@ant-design/icons";

export default function ChangePassword() {
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
                            Change Password
                        </h1>
                    </div>
                    <form className="w-full h-auto">
                        <div className="mt-4">
                            <label
                                htmlFor="newpassword"
                                className="font-montserrat text-sm font-light text-white"
                            >
                                New Password
                            </label>
                            <Input.Password
                                id="newpassword"
                                name="newpassword"
                                placeholder="New Password"
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
                        <div className="mt-4">
                            <label
                                htmlFor="confirmpassword"
                                className="font-montserrat text-sm font-light text-white"
                            >
                                Password
                            </label>
                            <Input.Password
                                id="confirmpassword"
                                name="confirmpassword"
                                placeholder="Confirm Password"
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
                            <Button
                                color="brown"
                                type="submit"
                                className="w-full h-10 md:h-12 bg-[#003465] text-white rounded-md font-montserrat mt-6 flex justify-center items-center"
                            >
                                Change Password
                            </Button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}
