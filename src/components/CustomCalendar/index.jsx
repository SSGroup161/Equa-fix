import React, { useState } from "react";

const CustomCalendar = ({ data }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [today, setToday] = useState(new Date());

    const daysOfWeek = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
    const monthsIndonesian = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];

    // Generate days in the current month
    const generateDays = () => {
        const daysInMonth = new Date(
            currentYear,
            currentMonth + 1,
            0
        ).getDate();
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const days = Array(firstDay).fill(null); // Padding for the first week
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(new Date(currentYear, currentMonth, i));
        }
        return days;
    };

    const handleDateClick = (date) => {
        if (date > today) return; // Disable future dates
        setSelectedDate(date);
    };

    const handleMonthChange = (increment) => {
        let newMonth = currentMonth + increment;
        let newYear = currentYear;
        if (newMonth > 11) {
            newMonth = 0;
            newYear += 1;
        } else if (newMonth < 0) {
            newMonth = 11;
            newYear -= 1;
        }
        setCurrentMonth(newMonth);
        setCurrentYear(newYear);
    };

    const renderDays = () => {
        const days = generateDays();
        return days.map((day, index) => {
            if (!day) {
                return (
                    <div
                        key={index}
                        className="day p-2 border-transparent"
                    ></div>
                ); // Empty space
            }
            const isToday =
                day.toDateString() === today.toDateString()
                    ? "bg-blue-500 text-white"
                    : "";
            const isDisabled =
                day > today
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "hover:bg-gray-300";
            return (
                <button
                    key={day.toDateString()}
                    className={`day py-1.5 2xl:py-3 rounded-full ${isToday} ${isDisabled}`}
                    onClick={() => handleDateClick(day)}
                    disabled={day > today}
                >
                    {day.getDate()}
                </button>
            );
        });
    };

    const fetchData = (date) => {
        if (!date) return 0;
        const key = date.toISOString().split("T")[0];
        return data[key] || 0;
    };

    return (
        <div className="custom-calendar font-sans text-center bg-white rounded-2xl p-4 text-xs 2xl:text-sm">
            <div className="header flex justify-between items-center mb-4 px-10">
                <button
                    onClick={() => handleMonthChange(-1)}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                >
                    &lt;
                </button>
                <span className="mx-4 text-lg font-semibold">
                    {monthsIndonesian[currentMonth]} {currentYear}
                </span>
                <button
                    onClick={() => handleMonthChange(1)}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                >
                    &gt;
                </button>
            </div>
            <div className="days-of-week grid grid-cols-7 gap-2 text-gray-500 font-semibold">
                {daysOfWeek.map((day) => (
                    <div key={day} className="p-2">
                        {day}
                    </div>
                ))}
            </div>
            <div className="days-container grid grid-cols-7 gap-2">
                {renderDays()}
            </div>
            {selectedDate && (
                <div className="data-display mt-4 text-lg">
                    Data untuk {selectedDate.toDateString()}:{" "}
                    {fetchData(selectedDate)}
                </div>
            )}
        </div>
    );
};

export default CustomCalendar;
