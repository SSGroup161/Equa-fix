import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import dayjs from "dayjs";
import { Space, Table, Tag, Modal } from "antd";
import { useNavigate } from "react-router-dom";

const columns = [
    {
        title: "Nama Karyawan",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Tempat, Tanggal Lahir",
        dataIndex: "birthPlaceDate",
        key: "birthPlaceDate",
    },
    {
        title: "No. Whatsapp",
        dataIndex: "whatsapp",
        key: "whatsapp",
    },
    {
        title: "Mobil",
        dataIndex: "car",
        key: "car",
    },
    {
        title: "Alamat",
        dataIndex: "address",
        key: "address",
    },
    {
        title: "Dokumen",
        key: "documents",
        dataIndex: "documents",
        render: (_, { documents }) => (
            <>
                {documents.map((doc) => (
                    <Tag color="blue" key={doc}>
                        {doc.toUpperCase()}
                    </Tag>
                ))}
            </>
        ),
    },
    {
        title: "Action",
        key: "action",
        render: (_, record) => (
            <Space size="middle">
                <a
                    href={`/edit/${record.key}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    Edit
                </a>
                <a
                    href={`/delete/${record.key}`}
                    onClick={(e) => e.stopPropagation()}
                    className="hover:text-red-500"
                >
                    Delete
                </a>
            </Space>
        ),
    },
];

const data = [
    {
        key: "1",
        name: "John Doe",
        birthPlaceDate: "Jakarta, 12 Maret 1990",
        whatsapp: "0812-3456-7890",
        car: "F 1234 XYZ",
        address: "Jl. Merdeka No. 10, Jakarta",
        documents: ["KTP", "SIM"],
    },
    {
        key: "2",
        name: "Sarah Johnson",
        birthPlaceDate: "Bandung, 5 April 1985",
        whatsapp: "0813-4567-8901",
        car: "F 1235 XYZ",
        address: "Jl. Diponegoro No. 20, Bandung",
        documents: ["KTP"],
    },
    {
        key: "3",
        name: "Michael Lee",
        birthPlaceDate: "Surabaya, 8 Juli 1993",
        whatsapp: "0812-9876-5432",
        car: "F 1236 XYZ",
        address: "Jl. Pemuda No. 15, Surabaya",
        documents: ["KTP", "SIM"],
    },
];

const Mobil = () => {
    const currentDate = dayjs().locale("id").format("dddd, D MMMM YYYY");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);
    const navigate = useNavigate();

    const showModal = (record) => {
        setModalData(record);
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <main className="w-full overflow-y-scroll">
            <Sidebar />
            <Modal
                title={
                    <span className="text-xl font-semibold text-gray-800">
                        Detail Mobil
                    </span>
                }
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                {modalData && (
                    <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
                        <div className="flex items-center space-x-4 mb-4">
                            {/* Avatar dengan dua inisial */}
                            <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-bold uppercase">
                                {modalData.name
                                    .split(" ")
                                    .slice(0, 2)
                                    .map((word) => word.charAt(0))
                                    .join("")}
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800">
                                    {modalData.name}
                                </h2>
                                <p className="text-gray-500">
                                    Mobil: {modalData.car}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-gray-700">
                            <div className="p-3 bg-white rounded-lg shadow">
                                <p className="text-sm font-medium text-gray-500">
                                    Tempat, Tanggal Lahir
                                </p>
                                <p className="text-lg font-semibold">
                                    {modalData.birthPlaceDate}
                                </p>
                            </div>
                            <div className="p-3 bg-white rounded-lg shadow">
                                <p className="text-sm font-medium text-gray-500">
                                    No. Whatsapp
                                </p>
                                <p className="text-lg font-semibold">
                                    {modalData.whatsapp}
                                </p>
                            </div>
                            <div className="p-3 bg-white rounded-lg shadow">
                                <p className="text-sm font-medium text-gray-500">
                                    Alamat
                                </p>
                                <p className="text-lg font-semibold">
                                    {modalData.address}
                                </p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="text-sm font-medium text-gray-500 mb-2">
                                Dokumen
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {modalData.documents.map((doc, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg"
                                    >
                                        {doc}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </Modal>

            <section className="bg-[#F5FAFF] overflow-hidden">
                <div className="w-full h-screen ps-64">
                    <div className="w-full relative">
                        <div className="w-full h-20 border-b-[1px] border-gray-200 bg-[#F9FBFE] flex items-center justify-between px-10 sticky top-0">
                            <h1 className="font-montserrat text-xl">
                                Data Mobil
                            </h1>
                            <div className="flex items-center justify-center gap-6">
                                <h1 className="font-montserrat text-gray-400">
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
                        <div className="w-full h-full xl:p-6 2xl:p-10">
                            <div className="overflow-x-auto w-full h-full max-w-[85rem] m-auto max-h-[30rem] overflow-scroll relative">
                                <div className="w-full bg-white flex items-center justify-between rounded-t-2xl p-6 sticky top-0 z-20">
                                    <h1>Data Mobil</h1>
                                    <button
                                        className="rounded-lg overflow-hidden relative w-52 h-10 cursor-pointer flex items-center border border-blue-500 bg-blue-500 group hover:bg-blue-500 active:bg-blue-500 active:border-blue-500"
                                        onClick={() =>
                                            navigate(`/mobil/tambah-mobil`)
                                        }
                                    >
                                        <span className="text-gray-200 ml-8 transform group-hover:translate-x-20 transition-all duration-300">
                                            Tambah Mobil
                                        </span>
                                        <span className="absolute right-0 h-full w-10 rounded-lg bg-blue-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
                                            <svg
                                                className="svg w-8 text-white"
                                                fill="none"
                                                height="24"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <line
                                                    x1="12"
                                                    x2="12"
                                                    y1="5"
                                                    y2="19"
                                                ></line>
                                                <line
                                                    x1="5"
                                                    x2="19"
                                                    y1="12"
                                                    y2="12"
                                                ></line>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                                <Table
                                    columns={columns}
                                    dataSource={data}
                                    onRow={(record) => ({
                                        onClick: () => showModal(record),
                                    })}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Mobil;
