import React, { useState } from "react";

const InputSearch = ({ data, onSearch }) => {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [isSuggestionClicked, setIsSuggestionClicked] = useState(false);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        setIsSuggestionClicked(false);

        if (value.trim() === "") {
            setSuggestions([]);
        } else {
            const filtered = data.filter((item) =>
                item.name.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filtered);
        }
    };

    const handleInputFocus = () => {
        if (query.trim() === "") {
            setSuggestions(data);
        }
    };

    const handleSuggestionClick = (name) => {
        setQuery(name);
        setSuggestions([]);
        setIsSuggestionClicked(true);
        onSearch(name);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            if (query.trim() === "") {
                setSuggestions([]);
                onSearch("");
            } else {
                const filtered = data.filter((item) =>
                    item.name.toLowerCase().includes(query.toLowerCase())
                );
                if (filtered.length === 0) {
                    onSearch("");
                }
            }
        }
    };

    const handleClear = () => {
        setQuery("");
        setSuggestions([]);
        setIsSuggestionClicked(false);
        onSearch("");
    };

    return (
        <div className="relative w-full max-w-md">
            <div className="flex items-center border border-gray-300 rounded-lg bg-white shadow-sm">
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onFocus={handleInputFocus}
                    placeholder="Cari nama karyawan"
                    className="w-full px-4 py-2 text-gray-700 placeholder-gray-400 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="button"
                    onClick={query.trim() ? handleClear : null}
                    className="px-4 py-2 text-white rounded-r-lg"
                >
                    {query.trim() ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="gray"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="gray"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 7.5-7.5 7.5 7.5 0 0 1-7.5 7.5z"
                            />
                        </svg>
                    )}
                </button>
            </div>
            {!isSuggestionClicked &&
                query.trim() !== "" &&
                suggestions.length === 0 && (
                    <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 px-4 py-2 text-gray-500">
                        Karyawan tidak ditemukan
                    </div>
                )}
            {suggestions.length > 0 && (
                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1">
                    {suggestions.map((item) => (
                        <div
                            key={item.key}
                            onClick={() => handleSuggestionClick(item.name)}
                            className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-gray-700"
                        >
                            {item.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default InputSearch;
