import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import dayjs from "dayjs";
import { Space, Table, Tag, Modal } from "antd";

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (text) => <a>{text}</a>,
    },
    {
        title: "Age",
        dataIndex: "age",
        key: "age",
    },
    {
        title: "Address",
        dataIndex: "address",
        key: "address",
    },
    {
        title: "Tags",
        key: "tags",
        dataIndex: "tags",
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? "geekblue" : "green";
                    if (tag === "loser") {
                        color = "volcano";
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: "Action",
        key: "action",
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];
const data = [
    {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"],
    },
    {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"],
    },
    {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sydney No. 1 Lake Park",
        tags: ["cool", "teacher"],
    },
    {
        key: "4",
        name: "Joe Black",
        age: 32,
        address: "Sydney No. 1 Lake Park",
        tags: ["cool", "teacher"],
    },
    {
        key: "5",
        name: "Joe Black",
        age: 32,
        address: "Sydney No. 1 Lake Park",
        tags: ["cool", "teacher"],
    },
];

const Karyawan = () => {
    const currentDate = dayjs().locale("id").format("dddd, D MMMM YYYY");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
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
                title="Tambah Karyawan"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Tambahkan"
                cancelText="Kembali"
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
            <section className="bg-[#F5FAFF] overflow-hidden">
                <div className="w-full h-screen ps-64">
                    <div className="w-full relative">
                        <div className="w-full h-20 border-b-[1px] border-gray-200 bg-[#F9FBFE] flex items-center justify-between px-10 sticky top-0">
                            <h1 className="font-montserrat text-xl">
                                Data Karyawan
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
                            <div className="overflow-x-auto w-full h-full max-w-[85rem] m-auto max-h-[30rem] overflow-scroll relative">
                                <div className="w-full bg-white flex items-center justify-between rounded-t-2xl p-6 sticky top-0 z-20">
                                    <h1>Data Karyawan</h1>
                                    <button
                                        className="rounded-lg overflow-hidden relative w-52 h-10 cursor-pointer flex items-center border border-blue-500 bg-blue-500 group hover:bg-blue-500 active:bg-blue-500 active:border-blue-500"
                                        onClick={showModal}
                                    >
                                        <span className="text-gray-200 ml-8 transform group-hover:translate-x-20 transition-all duration-300">
                                            Tambah Karyawan
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
                                <Table columns={columns} dataSource={data} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Karyawan;
