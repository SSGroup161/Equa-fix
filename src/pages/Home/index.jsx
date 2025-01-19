import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import CustomCalendar from "../../components/CustomCalendar";
import InputSearch from "../../components/InputSearch";
import { useNavigate } from "react-router-dom";
import { Space, Table, Modal } from "antd";
import dayjs from "dayjs";

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (text) => <a>{text}</a>,
    },
    {
        title: "Mobil",
        dataIndex: "mobil",
        key: "mobil",
    },
    {
        title: "Transaksi",
        dataIndex: "transaksi",
        key: "transaksi",
    },
    {
        title: "Jumlah Setoran",
        dataIndex: "setoran",
        key: "setoran",
    },
    {
        title: "Action",
        key: "action",
        render: (_, record) => (
            <Space size="middle">
                <a>Edit</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data = [
    {
        key: "1",
        name: "John Brown",
        mobil: "F2343WAV",
        transaksi: 20,
        setoran: "Rp." + 3400000,
    },
    {
        key: "2",
        name: "John White",
        mobil: "F2344WAV",
        transaksi: 10,
        setoran: "Rp." + 3400000,
    },
    {
        key: "3",
        name: "John Black",
        mobil: "F2345WAV",
        transaksi: 22,
        setoran: "Rp." + 3400000,
    },
    {
        key: "4",
        name: "John Blue",
        mobil: "F2346WAV",
        transaksi: 13,
        setoran: "Rp." + 3400000,
    },
    {
        key: "5",
        name: "John Saripudin",
        mobil: "F2347WAV",
        transaksi: 30,
        setoran: "Rp." + 3400000,
    },
];

function Home() {
    const currentDate = dayjs().locale("id").format("dddd, D MMMM YYYY");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);
    const [filteredData, setFilteredData] = useState(data);
    const navigate = useNavigate();

    const handleSearch = (name) => {
        if (name === "") {
            setFilteredData(data); // Reset to all data
        } else {
            const filtered = data.filter((item) => item.name === name);
            setFilteredData(filtered);
        }
    };

    const showModal = (record) => {
        setModalData(record);
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <main className="w-full overflow-y-scroll">
            <Sidebar />
            <Modal
                title="Detail Karyawan"
                open={isModalOpen}
                onCancel={handleCancel}
                onOk={handleOk}
                footer={null}
            >
                {modalData && (
                    <div>
                        <p>
                            <strong>Name:</strong> {modalData.name}
                        </p>
                        <p>
                            <strong>Mobil:</strong> {modalData.mobil}
                        </p>
                        <p>
                            <strong>Transaksi:</strong> {modalData.transaksi}
                        </p>
                        <p>
                            <strong>Jumlah Setoran:</strong> {modalData.setoran}
                        </p>
                    </div>
                )}
            </Modal>
            <section className="bg-[#F5FAFF] overflow-hidden">
                <div className="w-full ps-64">
                    <div className="w-full relative">
                        <div className="w-full h-20 border-b-[1px] border-gray-200 bg-[#F9FBFE] flex items-center justify-between px-10 sticky top-0">
                            <h1 className="font-montserrat text-xl">
                                Setoran Harian
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
                        <div className="w-full h-full xl:p-6 2xl:p-10">
                            <div className="w-full flex items-start justify-between max-w-screen-2xl m-auto ">
                                <div className="grid grid-cols-2 xl:gap-4 2xl:gap-8 ">
                                    <div
                                        className="flex items-start justify-between xl:gap-6 2xl:gap-12 px-4 py-8 2xl:py-11 2xl:px-14 bg-white rounded-lg"
                                        id="omset"
                                    >
                                        <div className="flex flex-col items-start justify-between gap-5">
                                            <h1 className="font-montserrat 2xl:text-base xl:text-xs text-gray-400">{`Total Pendapatan (Omset)`}</h1>
                                            <h1 className="font-montserrat 2xl:text-3xl xl:text-2xl font-medium">{`Rp 12.302.203`}</h1>
                                        </div>
                                        <div className="xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 p-4 rounded-full bg-green-200 flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 30 30"
                                                fill="none"
                                                className="xl:w-30 2xl:w-40"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M23.3784 20.5852L23.3791 5.09115L12.946 5.13746V6.53351H21.9371V20.5853L23.3784 20.5852ZM20.8897 23.0751L20.8904 7.58111L10.4573 7.62742V9.02347H19.4484V23.0752L20.8897 23.0751ZM17.4556 17.2806C17.4556 14.7548 15.4091 12.7073 12.8847 12.7073C10.3602 12.7073 8.31379 14.755 8.31379 17.2806C8.31379 19.806 10.3601 21.8539 12.8847 21.8539C15.409 21.8539 17.4556 19.8062 17.4556 17.2806ZM24.4262 4.04346V21.6789H21.9375V24.1689H19.4489V24.8616L17.7213 26.5898L16.5064 25.3745L15.2744 26.5869L14.0729 25.3848L12.851 26.5869L11.6498 25.3848L10.4277 26.5869L9.21907 25.3775L8.00747 26.5899L6.3208 24.9027V9.02351H9.36399V6.53355H11.8528V4.04359L24.4262 4.04346ZM14.4483 17.5727C14.7908 18.2374 14.6505 19.2253 14.0225 19.6982C13.826 19.846 13.5897 19.939 13.3432 19.9881L13.4255 20.6247H12.3143L12.399 19.9688C12.1638 19.9103 11.9427 19.8088 11.7586 19.6581C11.4059 19.3702 11.2232 18.9399 11.1398 18.5013L11.9856 18.3103C12.0586 18.7643 12.3957 19.1231 12.8954 19.1231C13.1771 19.1231 13.3894 19.0514 13.5322 18.9081C13.7147 18.7252 13.8104 18.4486 13.7119 18.206C13.5827 17.8882 13.1883 17.7959 12.8814 17.7049C12.5349 17.6023 12.1748 17.5109 11.8772 17.3052C10.9896 16.6926 11.0517 15.2109 12.0796 14.7625C12.1846 14.7165 12.2953 14.6858 12.408 14.662L12.3143 13.9364H13.4255L13.3303 14.6744C13.5151 14.7172 13.6934 14.7827 13.8515 14.8827C14.1856 15.0941 14.3666 15.4319 14.446 15.7934L13.5588 15.9692C13.516 15.8432 13.4482 15.7258 13.3427 15.6409C13.2194 15.5422 13.0556 15.4967 12.8942 15.4916C12.6055 15.4822 12.2282 15.5572 12.1181 15.8483C12.0571 16.0093 12.0983 16.1964 12.2213 16.3207C12.3318 16.4322 12.5998 16.548 13.0254 16.6688C13.4508 16.7895 13.7658 16.9146 13.9697 17.0436C14.1736 17.1727 14.333 17.349 14.4483 17.5727L14.4483 17.5727Z"
                                                    fill="#549114"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    <div
                                        className="flex items-start justify-between xl:gap-6 2xl:gap-12 px-4 py-8 2xl:py-11 2xl:px-14 bg-white rounded-lg"
                                        id="pendapatan_bersih"
                                    >
                                        <div className="flex flex-col items-start justify-between gap-5">
                                            <h1 className="font-montserrat 2xl:text-base xl:text-xs text-gray-400">{`Total Pendapatan Bersih`}</h1>
                                            <h1 className="font-montserrat 2xl:text-3xl xl:text-2xl font-medium">{`Rp 8.302.203`}</h1>
                                        </div>
                                        <div className="xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 p-4 rounded-full bg-blue-200 flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 30 30"
                                                fill="none"
                                                className="xl:w-30 2xl:w-40"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M23.3784 20.5852L23.3791 5.09115L12.946 5.13746V6.53351H21.9371V20.5853L23.3784 20.5852ZM20.8897 23.0751L20.8904 7.58111L10.4573 7.62742V9.02347H19.4484V23.0752L20.8897 23.0751ZM17.4556 17.2806C17.4556 14.7548 15.4091 12.7073 12.8847 12.7073C10.3602 12.7073 8.31379 14.755 8.31379 17.2806C8.31379 19.806 10.3601 21.8539 12.8847 21.8539C15.409 21.8539 17.4556 19.8062 17.4556 17.2806ZM24.4262 4.04346V21.6789H21.9375V24.1689H19.4489V24.8616L17.7213 26.5898L16.5064 25.3745L15.2744 26.5869L14.0729 25.3848L12.851 26.5869L11.6498 25.3848L10.4277 26.5869L9.21907 25.3775L8.00747 26.5899L6.3208 24.9027V9.02351H9.36399V6.53355H11.8528V4.04359L24.4262 4.04346ZM14.4483 17.5727C14.7908 18.2374 14.6505 19.2253 14.0225 19.6982C13.826 19.846 13.5897 19.939 13.3432 19.9881L13.4255 20.6247H12.3143L12.399 19.9688C12.1638 19.9103 11.9427 19.8088 11.7586 19.6581C11.4059 19.3702 11.2232 18.9399 11.1398 18.5013L11.9856 18.3103C12.0586 18.7643 12.3957 19.1231 12.8954 19.1231C13.1771 19.1231 13.3894 19.0514 13.5322 18.9081C13.7147 18.7252 13.8104 18.4486 13.7119 18.206C13.5827 17.8882 13.1883 17.7959 12.8814 17.7049C12.5349 17.6023 12.1748 17.5109 11.8772 17.3052C10.9896 16.6926 11.0517 15.2109 12.0796 14.7625C12.1846 14.7165 12.2953 14.6858 12.408 14.662L12.3143 13.9364H13.4255L13.3303 14.6744C13.5151 14.7172 13.6934 14.7827 13.8515 14.8827C14.1856 15.0941 14.3666 15.4319 14.446 15.7934L13.5588 15.9692C13.516 15.8432 13.4482 15.7258 13.3427 15.6409C13.2194 15.5422 13.0556 15.4967 12.8942 15.4916C12.6055 15.4822 12.2282 15.5572 12.1181 15.8483C12.0571 16.0093 12.0983 16.1964 12.2213 16.3207C12.3318 16.4322 12.5998 16.548 13.0254 16.6688C13.4508 16.7895 13.7658 16.9146 13.9697 17.0436C14.1736 17.1727 14.333 17.349 14.4483 17.5727L14.4483 17.5727Z"
                                                    fill="#3B81F6"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    <div
                                        className="flex items-start justify-between xl:gap-6 2xl:gap-12 px-4 py-8 2xl:py-11 2xl:px-14 bg-white rounded-lg"
                                        id="pengeluaran"
                                    >
                                        <div className="flex flex-col items-start justify-between gap-5">
                                            <h1 className="font-montserrat 2xl:text-base xl:text-xs text-gray-400">{`Total Pengeluaran`}</h1>
                                            <h1 className="font-montserrat 2xl:text-3xl xl:text-2xl font-medium">{`Rp 4.302.203`}</h1>
                                        </div>
                                        <div className="xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 p-4 rounded-full bg-red-200 flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 30 30"
                                                fill="none"
                                                className="xl:w-30 2xl:w-40"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M23.3784 20.5852L23.3791 5.09115L12.946 5.13746V6.53351H21.9371V20.5853L23.3784 20.5852ZM20.8897 23.0751L20.8904 7.58111L10.4573 7.62742V9.02347H19.4484V23.0752L20.8897 23.0751ZM17.4556 17.2806C17.4556 14.7548 15.4091 12.7073 12.8847 12.7073C10.3602 12.7073 8.31379 14.755 8.31379 17.2806C8.31379 19.806 10.3601 21.8539 12.8847 21.8539C15.409 21.8539 17.4556 19.8062 17.4556 17.2806ZM24.4262 4.04346V21.6789H21.9375V24.1689H19.4489V24.8616L17.7213 26.5898L16.5064 25.3745L15.2744 26.5869L14.0729 25.3848L12.851 26.5869L11.6498 25.3848L10.4277 26.5869L9.21907 25.3775L8.00747 26.5899L6.3208 24.9027V9.02351H9.36399V6.53355H11.8528V4.04359L24.4262 4.04346ZM14.4483 17.5727C14.7908 18.2374 14.6505 19.2253 14.0225 19.6982C13.826 19.846 13.5897 19.939 13.3432 19.9881L13.4255 20.6247H12.3143L12.399 19.9688C12.1638 19.9103 11.9427 19.8088 11.7586 19.6581C11.4059 19.3702 11.2232 18.9399 11.1398 18.5013L11.9856 18.3103C12.0586 18.7643 12.3957 19.1231 12.8954 19.1231C13.1771 19.1231 13.3894 19.0514 13.5322 18.9081C13.7147 18.7252 13.8104 18.4486 13.7119 18.206C13.5827 17.8882 13.1883 17.7959 12.8814 17.7049C12.5349 17.6023 12.1748 17.5109 11.8772 17.3052C10.9896 16.6926 11.0517 15.2109 12.0796 14.7625C12.1846 14.7165 12.2953 14.6858 12.408 14.662L12.3143 13.9364H13.4255L13.3303 14.6744C13.5151 14.7172 13.6934 14.7827 13.8515 14.8827C14.1856 15.0941 14.3666 15.4319 14.446 15.7934L13.5588 15.9692C13.516 15.8432 13.4482 15.7258 13.3427 15.6409C13.2194 15.5422 13.0556 15.4967 12.8942 15.4916C12.6055 15.4822 12.2282 15.5572 12.1181 15.8483C12.0571 16.0093 12.0983 16.1964 12.2213 16.3207C12.3318 16.4322 12.5998 16.548 13.0254 16.6688C13.4508 16.7895 13.7658 16.9146 13.9697 17.0436C14.1736 17.1727 14.333 17.349 14.4483 17.5727L14.4483 17.5727Z"
                                                    fill="#EF4444"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    <div
                                        className="flex items-start justify-between xl:gap-6 2xl:gap-12 px-4 py-8 2xl:py-11 2xl:px-14 bg-white rounded-lg"
                                        id="orderan"
                                    >
                                        <div className="flex flex-col items-start justify-between gap-5">
                                            <h1 className="font-montserrat 2xl:text-base xl:text-xs text-gray-400">{`Total orderan`}</h1>
                                            <h1 className="font-montserrat 2xl:text-3xl xl:text-2xl font-medium">{`120`}</h1>
                                        </div>
                                        <div className="xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 p-4 rounded-full bg-yellow-200 flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 30 30"
                                                fill="none"
                                                className="xl:w-30 2xl:w-40"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M23.3784 20.5852L23.3791 5.09115L12.946 5.13746V6.53351H21.9371V20.5853L23.3784 20.5852ZM20.8897 23.0751L20.8904 7.58111L10.4573 7.62742V9.02347H19.4484V23.0752L20.8897 23.0751ZM17.4556 17.2806C17.4556 14.7548 15.4091 12.7073 12.8847 12.7073C10.3602 12.7073 8.31379 14.755 8.31379 17.2806C8.31379 19.806 10.3601 21.8539 12.8847 21.8539C15.409 21.8539 17.4556 19.8062 17.4556 17.2806ZM24.4262 4.04346V21.6789H21.9375V24.1689H19.4489V24.8616L17.7213 26.5898L16.5064 25.3745L15.2744 26.5869L14.0729 25.3848L12.851 26.5869L11.6498 25.3848L10.4277 26.5869L9.21907 25.3775L8.00747 26.5899L6.3208 24.9027V9.02351H9.36399V6.53355H11.8528V4.04359L24.4262 4.04346ZM14.4483 17.5727C14.7908 18.2374 14.6505 19.2253 14.0225 19.6982C13.826 19.846 13.5897 19.939 13.3432 19.9881L13.4255 20.6247H12.3143L12.399 19.9688C12.1638 19.9103 11.9427 19.8088 11.7586 19.6581C11.4059 19.3702 11.2232 18.9399 11.1398 18.5013L11.9856 18.3103C12.0586 18.7643 12.3957 19.1231 12.8954 19.1231C13.1771 19.1231 13.3894 19.0514 13.5322 18.9081C13.7147 18.7252 13.8104 18.4486 13.7119 18.206C13.5827 17.8882 13.1883 17.7959 12.8814 17.7049C12.5349 17.6023 12.1748 17.5109 11.8772 17.3052C10.9896 16.6926 11.0517 15.2109 12.0796 14.7625C12.1846 14.7165 12.2953 14.6858 12.408 14.662L12.3143 13.9364H13.4255L13.3303 14.6744C13.5151 14.7172 13.6934 14.7827 13.8515 14.8827C14.1856 15.0941 14.3666 15.4319 14.446 15.7934L13.5588 15.9692C13.516 15.8432 13.4482 15.7258 13.3427 15.6409C13.2194 15.5422 13.0556 15.4967 12.8942 15.4916C12.6055 15.4822 12.2282 15.5572 12.1181 15.8483C12.0571 16.0093 12.0983 16.1964 12.2213 16.3207C12.3318 16.4322 12.5998 16.548 13.0254 16.6688C13.4508 16.7895 13.7658 16.9146 13.9697 17.0436C14.1736 17.1727 14.333 17.349 14.4483 17.5727L14.4483 17.5727Z"
                                                    fill="#EAB305"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <CustomCalendar />
                            </div>
                            <div className="overflow-x-auto w-full h-full max-h-[30rem] overflow-scroll mt-6 relative">
                                <div className="w-full bg-white flex items-center justify-between rounded-t-2xl p-6 sticky top-0 z-20">
                                    <div className="flex items-center justify-center gap-4">
                                        <InputSearch
                                            data={data}
                                            onSearch={handleSearch}
                                        />
                                    </div>
                                    <button
                                        className="rounded-lg overflow-hidden relative w-52 h-10 cursor-pointer flex items-center border border-blue-500 bg-blue-500 group hover:bg-blue-500 active:bg-blue-500 active:border-blue-500"
                                        onClick={() =>
                                            navigate(
                                                "/setoran-harian/tambah-setoran"
                                            )
                                        }
                                    >
                                        <span className="text-gray-200 ml-8 transform group-hover:translate-x-20 transition-all duration-300">
                                            Tambah Setoran
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
                                    dataSource={filteredData}
                                    pagination={{ pageSize: 5 }}
                                    rowKey="key"
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
}

export default Home;
