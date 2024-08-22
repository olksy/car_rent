/* eslint-disable react/prop-types */
import { LiaCalendarCheck } from "react-icons/lia";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import LitePicker from "./LitePicker";
import { useState, useRef, useEffect } from "react";
import { format } from 'date-fns';
import intlTelInput from 'intl-tel-input';

export default function RightColumn({ data }) {
    const [dates, setDates] = useState({ startDate: null, endDate: null });

    const handleDatesSelected = (startDate, endDate) => {
        setDates({ startDate, endDate });
    };

    const calculateDaysDifference = () => {
        if (dates.startDate && dates.endDate) {
            const timeDiff =
                dates.endDate.getTime() - dates.startDate.getTime();
            return Math.ceil(timeDiff / (1000 * 3600 * 24));
        }
        return 0;
    };
    const numberOfDays = calculateDaysDifference();
    const totalPrice = data.price * numberOfDays;
    const vaxTax = Math.round(totalPrice * 0.05);

    // console.log(dates);

    const formattedStartDate = dates.startDate
        ? format(new Date(dates.startDate.dateInstance), "dd MMM yyyy")
        : "";
    const formattedEndDate = dates.endDate
        ? format(new Date(dates.endDate.dateInstance), "dd MMM yyyy")
        : "";

    const startDateDisplay = dates.startDate ? formattedStartDate : "Choose";
    const endDateDisplay = dates.endDate ? formattedEndDate : "Choose";

    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            const iti = intlTelInput(inputRef.current, {
                utilsScript:
                    "https://cdn.jsdelivr.net/npm/intl-tel-input@24.1.3/build/js/utils.js",
                initialCountry: "ae",
                separateDialCode: true,
                autoPlaceholder: "aggressive",
                strictMode: true,
            });

            return () => {
                if (iti) {
                    iti.destroy();
                }
            };
        }
    }, []);

    // const [timeLeft, setTimeLeft] = useState(60 * 60);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    // useEffect(() => {
    //     const updateCountdown = () => {
    //         setTimeLeft(prevTime => {
    //             if (prevTime <= 0) {
    //                 setIsButtonDisabled(true);
    //                 return 0;
    //             }
    //             return prevTime - 1;
    //         });
    //     };
    //     const timerId = setInterval(updateCountdown, 1000);

    //     return () => clearInterval(timerId);
    // }, []);

    // const formatTime = (seconds) => {
    //     const minutes = Math.floor(seconds / 60);
    //     const secs = seconds % 60;
    //     return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    // };

    useEffect(() => {
        if (numberOfDays === 0 || dates.startDate === null) {
            setIsButtonDisabled(true);
        } else {
            setIsButtonDisabled(false);
        }
    }, [numberOfDays, dates]);

    return (
        <>
            <div className="col-12 col-lg-5 p-0 d-none d-lg-block">
                <div className="title-car-mobile">
                    <div className="d-none d-lg-block py-3 px-4">
                        <div className="d-flex align-items-start justify-content-between mb-3 flex-column">
                            <div className="d-flex flex-row pl-3 w-100">
                                <div className="priceText d-flex align-items-start text-nowrap flex-grow-1">
                                    <span className="fs-12 text-uppercase mr-2">
                                        Price for a
                                    </span>
                                    <span className="fs-12 text-uppercase px-1 bg-brand-primary rounded-small">
                                        1 day
                                    </span>
                                </div>
                                <span className="feel-free fs-14 pl-2 d-block text-end">
                                    Feel free to chat or call us directly
                                </span>
                            </div>
                            <div className="pl-3">
                                <span className="price-val fs-30">
                                    € {data.price}
                                </span>
                            </div>
                        </div>

                        {/* ---price, some info and contact */}
                        <div className="mb-3">
                            {/* Змінювати текст в залежності чи арендували авто чи ні */}
                            <div className="availability-label d-flex align-items-center rounded-small py-1 min-height-35 bg-info">
                                <span className="calendar-check d-flex ms-1 mr-2">
                                    <LiaCalendarCheck
                                        className="calendar-check-svg"
                                        fill="#0ea548"
                                    />
                                </span>
                                <span className="color-brand-accent fs-14">
                                    Available now
                                </span>
                            </div>

                            {/* зробити модальне вікно */}
                            <div className="d-flex align-items-center rounded-small py-1 min-height-35">
                                <span className="d-flex ms-1 mr-2">
                                    <AiOutlineInfoCircle
                                        className="no-deposit-svg"
                                        fill="#0ea548"
                                    />
                                </span>
                                <span className="fs-14">No deposit needed</span>
                            </div>

                            <div className="d-flex align-items-center block-height-35">
                                <span className="ms-1 mr-2">
                                    <MdDone />
                                </span>
                                <span className="fs-14">
                                    Mileage limit - 250 km for 1 day
                                </span>
                            </div>

                            <div className="d-flex align-items-center block-height-35">
                                <span className="ms-1 mr-2">
                                    <MdDone />
                                </span>
                                <span className="fs-14">
                                    Free delivery in Dubai
                                </span>
                            </div>

                            <div className="d-flex align-items-center block-height-35">
                                <span className="ms-1 mr-2">
                                    <MdDone />
                                </span>
                                <span className="fs-14">
                                    Cash, Crypto, Credit/debit cards accepted
                                </span>
                            </div>
                        </div>

                        {/* зробити модальне вікно */}
                        <button
                            type="button"
                            data-id={`${data.id}`}
                            title="Contact Renty.ae car rental"
                            className="w-100 mb-3 btn-medium btn contact_btn  d-none d-lg-flex"
                        >
                            <span className="span-contact fs-14 lh-20 fw-bold text-uppercase text-nowrap letter-spacing-0_2">
                                Contact
                            </span>
                        </button>

                        <div className="or-book-online d-flex justify-content-center position-relative">
                            <span className="o-b-o-text fs-14 text-uppercase position-relative px-2">
                                or book online
                            </span>
                        </div>
                    </div>

                    {/* ---DATE PICKER */}
                    <div className="d-none d-lg-block bg-white rounded-medium p-3 mx-3 mb-2 mt-3 mt-lg-0">
                        <div className="d-flex justify-content-between pt-1">
                            <span className="header-date-span text-uppercase letter-spacing-1">
                                Rental date range
                            </span>
                            <span className="header-date-span text-uppercase letter-spacing-1">
                                Your rental
                            </span>
                        </div>

                        <div className="d-flex justify-content-between mb-3">
                            <h2 className="h4 text-truncate fw-normal fs-24">
                                Choose rental dates
                            </h2>
                            <span className="flex-shrink-0">
                                {numberOfDays} day
                            </span>
                        </div>

                        <div className="row mx-0">
                            <div className="col-12 col-lg-8 p-0 mb-3 mb-lg-0 pr-0 pr-lg-2">
                                <div className="row custom-input-group mx-0">
                                    <div className="form-border-right col-6 form-group px-0 mb-0">
                                        <label
                                            className="custom-label text-nowrap"
                                            htmlFor="datepicker_start"
                                        >
                                            Pick-Up Date
                                        </label>
                                        <input
                                            className="form-control fs-14"
                                            id="datepicker_start"
                                            readOnly
                                            type="text"
                                            value={startDateDisplay}
                                        />
                                    </div>
                                    <div className="col-6 form-group px-0 mb-0">
                                        <label
                                            className="custom-label text-nowrap"
                                            htmlFor="datepicker_end"
                                        >
                                            Drop-Off Date
                                        </label>
                                        <input
                                            className="form-control fs-14"
                                            id="datepicker_end"
                                            readOnly
                                            type="text"
                                            value={endDateDisplay}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 pl-0 pl-lg-2 pr-0">
                                <div className="row custom-input-group mx-0">
                                    <div className="col-12  form-group px-0 mb-0 select-start-time-container">
                                        <label
                                            className="custom-label text-nowrap"
                                            htmlFor="select-start-time"
                                        >
                                            Start Time
                                        </label>
                                        <select
                                            name="from_time"
                                            className="form-control fs-14"
                                            id="select-start-time"
                                            defaultValue={"12:00"}
                                        >
                                            <option>00:00</option>
                                            <option>01:00</option>
                                            <option>02:00</option>
                                            <option>03:00</option>
                                            <option>04:00</option>
                                            <option>05:00</option>
                                            <option>06:00</option>
                                            <option>07:00</option>
                                            <option>08:00</option>
                                            <option>09:00</option>
                                            <option>10:00</option>
                                            <option>11:00</option>
                                            <option>12:00</option>
                                            <option>13:00</option>
                                            <option>14:00</option>
                                            <option>15:00</option>
                                            <option>16:00</option>
                                            <option>17:00</option>
                                            <option>18:00</option>
                                            <option>19:00</option>
                                            <option>20:00</option>
                                            <option>21:00</option>
                                            <option>22:00</option>
                                            <option>23:00</option>
                                        </select>
                                        <IoIosArrowDown className="arrow-down-svg fs-14" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ---CALENDAR */}
                        <div className="row mt-2 mb-2">
                            <LitePicker onDatesSelected={handleDatesSelected} />
                        </div>
                    </div>

                    {/* ---PERSONAL INFO */}
                    <div
                        id="personalInfo"
                        className="mx-3 mb-3 bg-shades-white"
                    >
                        <form
                            action="/"
                            method="post"
                            className="rentCar_validate"
                            id="driver_details_form"
                        >
                            <div className="p-3">
                                <div className="d-flex justify-content-between">
                                    <span className="personal-inf fs-11 fw-bold text-uppercase letter-spacing-1">
                                        Personal information
                                    </span>
                                </div>

                                <div className="d-flex align-items-center justify-content-between">
                                    <h2 className="h4 mb-3 text-truncate fw-normal fs-24 ">
                                        Your booking details
                                    </h2>
                                </div>

                                {/* ---PHONE NUMBER */}
                                {/* додати перевірку на правильність номеру телефона */}
                                <div className="mb-3">
                                    <div className="form-field-wrapper p-0 fs-14 d-flex justify-content-start flex-wrap rounded-small default-phone-input">
                                        <label className="fs-9 ps-3 required pt-1 fw-bolder letter-spacing-0_5 lh-1 text-uppercase w-100 m-0 text-start">
                                            Phone number
                                        </label>
                                        <input
                                            ref={inputRef}
                                            type="tel"
                                            pattern="[0-9]*"
                                            inputMode="numeric"
                                            id="reservation_form_phone-input"
                                            className="phone-number-input"
                                            required
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* ---Booking Summary */}
                    <div className="d-none d-lg-block" id="summary">
                        <div
                            className="rounded-small mx-3 pt-2 pb-3 px-3"
                            id="booking_summary"
                        >
                            <div className="d-flex justify-content-between mb-1">
                                <span className="book-sum fs-11 fw-bold text-uppercase letter-spacing-1">
                                    Booking summary
                                </span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <span
                                    className="text-truncate fs-14"
                                    id="rental_days_summary"
                                >
                                    Rental {numberOfDays} day
                                </span>
                                <span
                                    className="fw-normal flex-shrink-0 fs-14"
                                    id="rental_price_summary"
                                >
                                    € {totalPrice}
                                </span>
                            </div>

                            <div className="d-flex align-items-center justify-content-between pb-2">
                                <span
                                    className="text-truncate fs-14"
                                    id="tax_text_summary"
                                >
                                    VAT Tax (5%)
                                </span>
                                <span
                                    className="font-weight-normal flex-shrink-0 fs-14"
                                    id="total_tax_price"
                                >
                                    + € {vaxTax}
                                </span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-top border-shades-300 border-top-dotted border-top-medium pt-2">
                                <span className="fs-24 font-weight-normal text-truncate">
                                    Total
                                </span>
                                <span
                                    className="fs-24 font-weight-normal flex-shrink-0"
                                    id="total_price"
                                >
                                    € {totalPrice + vaxTax}
                                </span>
                            </div>
                        </div>

                        {/* Reserve */}
                        <form
                            id="requestBookings"
                            method="/"
                            className="rc_validate"
                            data-validate="true"
                            // noValidate="novalidate"
                        >
                            {/* треба буде замінити значення */}
                            {/* <input
                                type="hidden"
                                name="start_date"
                                value="22/08/2024"
                            />
                            <input
                                type="hidden"
                                name="from_time"
                                value="12:00"
                            />
                            <input
                                type="hidden"
                                name="end_date"
                                value="23/08/2024"
                            />
                            <input
                                type="hidden"
                                name="end_time"
                                value="12:00"
                            />

                            <input
                                id="pickup_place_id"
                                name="pickup_place_id"
                                type="hidden"
                            />
                            <input
                                id="pickup_latitude"
                                name="pickup_latitude"
                                type="hidden"
                            />
                            <input
                                id="pickup_longitude"
                                name="pickup_longitude"
                                type="hidden"
                            />

                            <input
                                id="drop_place_id"
                                name="drop_place_id"
                                type="hidden"
                            />
                            <input
                                id="drop_latitude"
                                name="drop_latitude"
                                type="hidden"
                            />
                            <input
                                id="drop_longitude"
                                name="drop_longitude"
                                type="hidden"
                            />

                            <input
                                type="hidden"
                                id="delivery_amount"
                                name="delivery_amount"
                                value="0"
                            />
                            <input
                                type="hidden"
                                id="pickup_amount"
                                name="pickup_amount"
                                value="0"
                            />
                            <input
                                type="hidden"
                                id="insurance_amount"
                                name="insurance_amount"
                                value="0"
                            />
                            <input
                                type="hidden"
                                value="3733"
                                id="booking-car-id"
                            /> */}

                            <div
                                className="rounded-medium-bottom p-3"
                                id="reserve_booking"
                            >
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className="d-none d-lg-block fs-9 color-semantic-success fw-bold text-uppercase letter-spacing-0_5 ps-3">
                                        {" "}
                                        Your journey starts in …
                                    </span>
                                    <span
                                        className="d-none d-lg-block fs-24 color-semantic-success text-uppercase"
                                        id="countdown"
                                    >
                                        60:00
                                        {/* {formatTime(timeLeft)} */}
                                    </span>
                                    <button
                                        type="submit"
                                        data-car-type={data.category.name}
                                        data-id={data.id}
                                        className={`reserve-btn m-w-100 requestModal fw-bold text-uppercase btn btn-primary ${isButtonDisabled ? 'disabled' : 'active'}`}
                                        disabled={isButtonDisabled}
                                    >
                                        <span className="fs-15 letter-spacing-0_5">
                                            Reserve
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}