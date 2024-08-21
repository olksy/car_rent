import { useEffect } from "react";
import Litepicker from "litepicker";

export default function LitePicker() {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    useEffect(() => {
        const picker = new Litepicker({
            element: document.getElementById("datepicker"),
            inlineMode: true,
            singleMode: false,
            autoRefresh: true,
            minDate: new Date() - 1,
            minDays: 1,
            startDate: today,
            endDate: tomorrow,
        });

        return () => picker.destroy();
    });

    return <div id="datepicker" />;
}
