/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Litepicker from "litepicker";

export default function LitePicker({ onDatesSelected, onError }) {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const [selectedDates, setSelectedDates] = useState({
        startDate: null,
        endDate: null,
    });

    useEffect(() => {
        const picker = new Litepicker({
            element: document.getElementById("datepicker"),
            format: 'DD-MMM-YYYY',
            inlineMode: true,
            singleMode: false,
            autoRefresh: true,
            minDate: today - 1,
            minDays: 1,
            startDate: selectedDates.startDate,
            endDate: selectedDates.endDate,
            setup: (picker) => {
                picker.on('selected', (date1, date2) => {
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
            }
        });

        return () => picker.destroy();
    }, [selectedDates, onDatesSelected, onError]);

    return <div id="datepicker" />;
}
