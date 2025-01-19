import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import dayjs from "dayjs";
import InputSearchFill from "../../components/InputSearchFill";

function TambahSetoran() {
    const currentDate = dayjs().locale("id").format("dddd, D MMMM YYYY");
    const [formDataKaryawan, setFormDataKaryawan] = useState({
        name: "",
        mobil: "",
    });
    const [formDataSetoran, setFormDataSetoran] = useState({
        transaksi: "",
        jumlah_setoran: "",
    });
    const [formDataDepot, setFormDataDepot] = useState({
        name: "",
        nominal: "",
    });

    const data = [
        {
            key: "1",
            name: "John Brown",
            mobil: "F2343WAV",
        },
        {
            key: "2",
            name: "John White",
            mobil: "F2344WAV",
        },
        {
            key: "3",
            name: "John Black",
            mobil: "F2345WAV",
        },
        {
            key: "4",
            name: "John Blue",
            mobil: "F2346WAV",
        },
        {
            key: "5",
            name: "John Saripudin",
            mobil: "F2347WAV",
        },
    ];

    const dataDepot = [
        {
            key: "1",
            name: "Depot Pak James",
        },
        {
            key: "2",
            name: "Depot Pak Lebron",
        },
        {
            key: "3",
            name: "Depot Pak Asep Karbu",
        },
        {
            key: "4",
            name: "Depot Pak Thomas Jagra",
        },
        {
            key: "5",
            name: "Depot Pak Hamid",
        },
    ];

    const handleSelectKaryawan = (item) => {
        setFormDataKaryawan({
            name: item.name,
            mobil: item.mobil || "",
        });
    };

    const handleSelectDepot = (item) => {
        setFormDataDepot({
            name: item.name,
        });
    };

    return (
        <>
            <Sidebar />
            <section className="bg-[#F5FAFF] overflow-hidden font-montserrat">
                <div className="w-full h-screen ps-64">
                    <div className="w-full relative">
                        <div className="w-full h-20 border-b-[1px] border-gray-200 bg-[#F9FBFE] flex items-center justify-between px-10 sticky top-0">
                            <h1 className="font-montserrat text-xl">
                                Tambah Setoran
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
                            <div className="w-full flex gap-4 items-start justify-between">
                                <div className="w-full bg-white rounded-xl p-6">
                                    <h1 className="font-xl mb-4 font-medium">
                                        Data Karyawan
                                    </h1>
                                    <form id="TambahKaryawan">
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                                            <div>
                                                <label className="block text-gray-600">
                                                    Nama Karyawan
                                                </label>
                                                <InputSearchFill
                                                    data={data}
                                                    onSelect={
                                                        handleSelectKaryawan
                                                    }
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-gray-600">
                                                    Mobil
                                                </label>
                                                <input
                                                    type="text"
                                                    value={
                                                        formDataKaryawan.mobil
                                                    }
                                                    placeholder="F1234XX"
                                                    readOnly
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="w-full bg-white rounded-xl p-6">
                                    <h1 className="font-xl mb-4 font-medium">
                                        Data Setoran
                                    </h1>
                                    <form id="TambahKaryawan">
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                                            <div>
                                                <label className="block text-gray-600">
                                                    Jumlah Transaksi
                                                </label>
                                                <input
                                                    type="text"
                                                    value={
                                                        formDataSetoran.transaksi
                                                    }
                                                    placeholder="Masukan Kumlah Transaksi"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-gray-600">
                                                    Jumlah Setoran
                                                </label>
                                                <input
                                                    type="text"
                                                    value={
                                                        formDataSetoran.jumlah_setoran
                                                    }
                                                    placeholder="Masukan Jumlah Setoran"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="w-full flex gap-4 items-start justify-between mt-4">
                                <div className="w-full bg-white rounded-xl p-6">
                                    <h1 className="font-xl mb-4 font-medium">
                                        Data Depot
                                    </h1>
                                    <form id="TambahKaryawan">
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                                            <div>
                                                <label className="block text-gray-600">
                                                    Nama Depot
                                                </label>
                                                <InputSearchFill
                                                    data={dataDepot}
                                                    onSelect={handleSelectDepot}
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-gray-600">
                                                    Nominal
                                                </label>
                                                <input
                                                    type="text"
                                                    value={
                                                        formDataDepot.nominal
                                                    }
                                                    placeholder="Rp. 000000"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="w-full bg-white rounded-xl p-6">
                                    <h1 className="font-xl mb-4 font-medium">
                                        Data Setoran
                                    </h1>
                                    <form id="TambahKaryawan">
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                                            <div>
                                                <label className="block text-gray-600">
                                                    Jumlah Transaksi
                                                </label>
                                                <input
                                                    type="text"
                                                    value={
                                                        formDataSetoran.transaksi
                                                    }
                                                    placeholder="Masukan Kumlah Transaksi"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-gray-600">
                                                    Jumlah Setoran
                                                </label>
                                                <input
                                                    type="text"
                                                    value={
                                                        formDataSetoran.jumlah_setoran
                                                    }
                                                    placeholder="Masukan Jumlah Setoran"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TambahSetoran;
