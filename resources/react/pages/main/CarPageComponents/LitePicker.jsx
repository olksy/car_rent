/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Litepicker from "litepicker";
import axios from "axios";
import { PulseLoader } from "react-spinners";

export default function LitePicker({ id, onDatesSelected, onError, carId }) {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const [bookedDates, setBookedDates] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [selectedDates, setSelectedDates] = useState({
        startDate: null,
        endDate: null,
    });

    useEffect(() => {
        if(!carId) return;

        setIsLoading(true);
        axios
            .get(`http://127.0.0.1:8000/api/booked-dates/${carId}`)
            .then((response) => {
                setBookedDates(response.data.bookedDates);
            })
            .catch((err) => {
                console.log(`Error occurred: ${err}`);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [carId]);

    useEffect(() => {
        if (!document.getElementById(id) || isLoading) return;

        const picker = new Litepicker({
            element: document.getElementById(id),
            format: "DD-MMM-YYYY",
            inlineMode: true,
            singleMode: false,
            autoRefresh: true,
            minDate: today - 1,
            minDays: 1,
            lockDays: bookedDates,
            startDate: selectedDates.startDate,
            endDate: selectedDates.endDate,
            setup: (picker) => {
                picker.on("selected", (date1, date2) => {
                    if (date1 && date2 && date1.getTime() === date2.getTime()) {
                        date2.setDate(date1.getDate() + 1);
                        setSelectedDates({ startDate: date1, endDate: date2 });
                        if (onError) {
                            onError("Minimum 1 day rental");
                        }
                    } else {
                        setSelectedDates({ startDate: date1, endDate: date2 });
                        if (onError) {
                            onError(null);
                        }
                    }

                    if (onDatesSelected) {
                        onDatesSelected(date1, date2);
                    }
                });
            },
            tooltipNumber: (totalDays) => {
                return totalDays - 1;
            },
        });

        return () => picker.destroy();
    }, [id, onDatesSelected, onError, bookedDates, isLoading]);

    return (
        <>
            {isLoading ? (
                <PulseLoader
                    color="#13428d"
                    className="d-flex align-items-center justify-content-center my-5 py-5"
                />
            ) : (
                <div id={id} />
            )}
        </>
    );
}