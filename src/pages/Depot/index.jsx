import React from "react";
import Sidebar from "../../components/Sidebar";
import dayjs from "dayjs";

const Depot = () => {
    const currentDate = dayjs().locale("id").format("dddd, D MMMM YYYY");

    return (
        <>
            <Sidebar />
            <section className="bg-[#F5FAFF] overflow-hidden">
                <div className="w-full ps-64">
                    <div className="w-full relative">
                        <div className="w-full h-20 border-b-[1px] border-gray-200 bg-[#F9FBFE] flex items-center justify-between px-10 sticky top-0">
                            <h1 className="font-montserrat text-xl">
                                Data Depot
                            </h1>
                            <div className="flex items-center justify-center gap-6">
                                <h1 className=" font-font-montserrat text-gray-400">
                                    {currentDate}
                                </h1>
                                <img
                                    src="/Avatar.png"
                                    alt="Avatar"
                                    loading="lazy"
                                    width={1000}
                                    height={1000}
                                    className="w-10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Depot;
