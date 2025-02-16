import React from "react";
import Sidebar from "../../components/Sidebar";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

function BarangTambah() {
    const navigate = useNavigate();
    const currentDate = dayjs().locale("id").format("dddd, D MMMM YYYY");

    return (
        <>
            <Sidebar />
            <section className="bg-[#F5FAFF] overflow-y-scroll font-montserrat">
                <div className="w-full h-screen ps-64">
                    <div className="w-full relative">
                        <div className="w-full h-20 border-b-[1px] border-gray-200 bg-[#F9FBFE] flex items-center justify-between px-10 sticky top-0 z-20">
                            <h1 className="font-montserrat text-xl">
                                Tambah Barang
                            </h1>
                            <div className="flex items-center justify-center gap-6">
                                <h1 className="font-font-montserrat text-gray-400">
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
                        <div className="w-full h-full p-6">
                            <form id="TambahKaryawan">
                                <div className="w-full flex gap-4 items-start justify-between">
                                    <div className="w-full bg-white rounded-xl p-6">
                                        <h1 className="font-xl mb-4 font-medium">
                                            Data Barang
                                        </h1>
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                            <div className="flex flex-col gap-4">
                                                <div className="">
                                                    <label className="block text-gray-600 mb-2">
                                                        Nama Barang
                                                    </label>
                                                    <input
                                                        type="text"
                                                        required
                                                        placeholder="Masukan Nama Barang"
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
                                                    />
                                                </div>
                                                <div className="">
                                                    <label className="block text-gray-600 mb-2">
                                                        Stock Barang
                                                    </label>
                                                    <input
                                                        type="text"
                                                        required
                                                        placeholder="Masukan Stock Barang"
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
                                                    />
                                                </div>
                                                <div className="">
                                                    <label className="block text-gray-600 mb-2">
                                                        Harga Barang
                                                    </label>
                                                    <input
                                                        type="text"
                                                        required
                                                        placeholder="Masukan Harga Barang"
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mt-8 flex items-center justify-end gap-8">
                                    <button
                                        className="rounded-lg relative py-4 px-20 overflow-hidden cursor-pointer flex items-center border border-gray-400 text-gray-400 hover:border-gray-500 hover:text-gray-500 transition-colors ease-in-out duration-200"
                                        onClick={() => navigate("/barang/")}
                                    >
                                        Batalkan
                                    </button>
                                    <button
                                        type="submit"
                                        className="rounded-lg relative py-4 px-16 overflow-hidden cursor-pointer flex items-center border border-blue-500 bg-blue-500 group hover:bg-blue-500 active:bg-blue-500 active:border-blue-500"
                                    >
                                        <span className="text-gray-200 font-semibold transform group-hover:translate-x-20 transition-all duration-300">
                                            Simpan Data
                                        </span>
                                        <span className="absolute right-0 pr-4 h-full w-10 rounded-lg bg-blue-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:pr-0 group-hover:w-full transition-all duration-300">
                                            <svg
                                                className="svg w-8 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    d="M18.437 20.948H5.56299C4.93909 20.9836 4.32636 20.7714 3.85815 20.3575C3.38995 19.9436 3.10416 19.3616 3.06299 18.738V7.73799C3.10391 7.11425 3.38959 6.53193 3.85782 6.11782C4.32605 5.70372 4.93892 5.49136 5.56299 5.52699H6.02499C6.1576 5.52699 6.28477 5.57967 6.37854 5.67344C6.47231 5.7672 6.52499 5.89438 6.52499 6.02699C6.52499 6.1596 6.47231 6.28677 6.37854 6.38054C6.28477 6.47431 6.1576 6.52699 6.02499 6.52699H5.56299C5.20437 6.49315 4.84674 6.60087 4.56647 6.82714C4.2862 7.05341 4.10551 7.3803 4.06299 7.73799V18.738C4.10575 19.0955 4.28654 19.4221 4.56678 19.6482C4.84703 19.8743 5.20453 19.9818 5.56299 19.948H18.437C18.7955 19.9818 19.1529 19.8743 19.4332 19.6482C19.7134 19.4221 19.8942 19.0955 19.937 18.738V7.73799C19.8945 7.3803 19.7138 7.05341 19.4335 6.82714C19.1532 6.60087 18.7956 6.49315 18.437 6.52699H17.975C17.8424 6.52699 17.7152 6.47431 17.6214 6.38054C17.5277 6.28677 17.475 6.1596 17.475 6.02699C17.475 5.89438 17.5277 5.7672 17.6214 5.67344C17.7152 5.57967 17.8424 5.52699 17.975 5.52699H18.437C19.0611 5.49136 19.6739 5.70372 20.1422 6.11782C20.6104 6.53193 20.8961 7.11425 20.937 7.73799V18.738C20.8958 19.3616 20.61 19.9436 20.1418 20.3575C19.6736 20.7714 19.0609 20.9836 18.437 20.948Z"
                                                    fill="black"
                                                />
                                                <path
                                                    d="M15.355 10.592L12.355 13.592C12.2627 13.6862 12.1369 13.7401 12.005 13.742C11.938 13.7424 11.8716 13.7293 11.8097 13.7035C11.7479 13.6778 11.6919 13.6398 11.645 13.592L8.64497 10.592C8.55082 10.4979 8.49792 10.3702 8.49792 10.237C8.49792 10.1039 8.55082 9.97615 8.64497 9.882C8.73912 9.78785 8.86682 9.73496 8.99997 9.73496C9.13312 9.73496 9.26082 9.78785 9.35497 9.882L11.495 12.021V3.552C11.4975 3.4202 11.551 3.2945 11.6442 3.20128C11.7375 3.10806 11.8632 3.05456 11.995 3.052C12.1276 3.052 12.2548 3.10468 12.3485 3.19845C12.4423 3.29222 12.495 3.41939 12.495 3.552V12.042L14.645 9.882C14.6916 9.83538 14.7469 9.7984 14.8078 9.77317C14.8688 9.74794 14.934 9.73496 15 9.73496C15.0659 9.73496 15.1312 9.74794 15.1921 9.77317C15.253 9.7984 15.3084 9.83538 15.355 9.882C15.4016 9.92862 15.4386 9.98397 15.4638 10.0449C15.489 10.1058 15.502 10.1711 15.502 10.237C15.502 10.3029 15.489 10.3682 15.4638 10.4291C15.4386 10.49 15.4016 10.5454 15.355 10.592Z"
                                                    fill="black"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BarangTambah;
