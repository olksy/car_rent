/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import LitePicker from "./CarPageComponents/LitePicker";
import { format } from 'date-fns';
import axios from "axios";
import { PiWarningCircleBold } from "react-icons/pi";
import ErrPopUp from "../../ui/ErrPopUp";
import SuccessPopUp from "../../ui/SuccessPopUp";

export default function ModalWindowReserve({ toggleState, setIsBurger, isBurger, data }) {
    const [dates, setDates] = useState({ startDate: null, endDate: null });

    const handleDatesSelected = (startDate, endDate) => {
        setDates({ startDate, endDate });
    };

    // --- display date, price, numOfDays, startDate, endDate---
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
    const totalPriceWTax = totalPrice + vaxTax;

    const formattedStartDate = dates.startDate
        ? format(new Date(dates.startDate.dateInstance), "dd MMM yyyy")
        : "";
    const formattedEndDate = dates.endDate
        ? format(new Date(dates.endDate.dateInstance), "dd MMM yyyy")
        : "";

    const startDateDisplay = dates.startDate ? formattedStartDate : "Choose";
    const endDateDisplay = dates.endDate ? formattedEndDate : "Choose";

    const [dateError, setdateError] = useState(null);

    const handleError = (message) => {
        setdateError(message);
    };
    // --- display date, price, numOfDays, startDate, endDate---

    // --- for phone number---
    const [errorMsg, setErrorMsg] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const inputRef = useRef(null);
    const itiRef = useRef(null);
    const errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];

    useEffect(() => {
        const token = localStorage.getItem("token");

        if(token) {
            axios
                .get("http://127.0.0.1:8000/api/user", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((response) => {
                    const userPhoneNumber = response.data.number;
                    if (userPhoneNumber && itiRef.current) {
                        itiRef.current.setNumber(userPhoneNumber);
                        setPhoneNumber(userPhoneNumber);
                    }
                })
                .catch((err) => {
                    console.log(`Error: ${err}!`);
                });
        }
        
        if (inputRef.current) {
            itiRef.current = window.intlTelInput(inputRef.current, {
                utilsScript:
                    "https://cdn.jsdelivr.net/npm/intl-tel-input@24.1.3/build/js/utils.js",
                initialCountry: "ae",
                separateDialCode: true,
                autoPlaceholder: "aggressive",
                strictMode: true,
            });

            inputRef.current.addEventListener("input", () => {
                setPhoneNumber(itiRef.current.getNumber());
            });

            return () => {
                if (itiRef.current) {
                    itiRef.current.destroy();
                }
            };
        }
    }, []);

    const reset = () => {
        inputRef.current.closest('.form-field-wrapper').classList.remove('error');
        setErrorMsg("");
    };

    const showError = (msg) => {
        inputRef.current.closest('.form-field-wrapper').classList.add('error');
        setErrorMsg(msg);
    };

    const handleValidate = () => {
        reset();
        const input = inputRef.current;
    
        if (!input.value.trim()) {
          showError('Required');
          return false;
        } else if (itiRef.current.isValidNumber()) {
          return true;
        } else {
          const errorCode = itiRef.current.getValidationError();
          const msg = errorMap[errorCode] || 'Invalid number';
          showError(msg);
          return false;
        }
      };
    // --- for phone number---

    // --- mini validation for button --- 
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    useEffect(() => {
        if (numberOfDays === 0 || dates.startDate === null) {
            setIsButtonDisabled(true);
        } else {
            setIsButtonDisabled(false);
        }
    }, [numberOfDays, dates]);
    // --- mini validation for button ---

    // --- time start/end for form ---
    const [time, setTime] = useState("12:00");
    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };
    // --- time start/end for form ---

    // --- submitting data---
    const [bookingErr, setBookingErr] = useState(false);
    const [success, setSuccess] = useState (false);
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!handleValidate()) {
            return;
        }

        const formatDate = (date) =>
            date ? format(new Date(date.dateInstance), "yyyy-MM-dd") : "";
    
        const formData = {
            start_date: formatDate(dates.startDate),
            end_date: formatDate(dates.endDate),
            number: phoneNumber,
            from_time: time,
            end_time: time,
            car_id: data.id,
        };

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/bookings",
                formData
            );
            
            if (response.data.error) {
                setBookingErr(true);
                return false;
            }

            setSuccess(true);
        } catch (error) {
            console.error("Error saving booking:", error);
        }
    };
    // --- submitting data---

    return (
        <>
            <div
                className={`modal-menu overlay bg-white w-100 d-lg-none ${
                    isBurger ? "modal-clicked" : "modal-unclicked"
                }`}
            >
                <ErrPopUp err={bookingErr} setErr={setBookingErr} />
                <SuccessPopUp success={success} setSuccess={setSuccess} />
                <div className="modal-header">
                    <button
                        className="menu-sm btn btn-medium text-reset position-absolute border-0"
                        onClick={() => toggleState(setIsBurger)}
                    >
                        <IoMdClose fill="white" className="fs-24" />
                    </button>

                    <span className="fs-16 fw-semibold mx-auto text-white">
                        Reserving
                    </span>
                </div>

                <div className="modal-body flex-grow-1 p-2 bg-white h-100">
                    {/* ---DATE PICKER */}
                    <div className="d-block bg-white rounded-medium p-3 mx-3 mt-lg-0">
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

                        {/* ---CALENDAR */}
                        <div className="row my-2">
                            {isBurger && (
                                <LitePicker
                                    id={"modal-datepicker"}
                                    onDatesSelected={handleDatesSelected}
                                    onError={handleError}
                                    carId={data.id}
                                />
                            )}
                        </div>
                        {dateError && (
                            <div className="rental-min-warning">
                                <div
                                    className="d-flex align-items-center bg-warning rounded-small px-2 py-1 mb-3"
                                    style={{ "--bs-bg-opacity": 0.15 }}
                                >
                                    <span className="warning-svg d-flex">
                                        <PiWarningCircleBold
                                            fill="#ffc107"
                                            className="fs-18"
                                        />
                                    </span>
                                    <span className="fs-14 text-warning">
                                        {dateError}
                                    </span>
                                </div>
                            </div>
                        )}
                        <div className="d-flex flex-column">
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
                            <div className="col-12">
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
                                            value={time}
                                            onChange={handleTimeChange}
                                        >
                                            <option value="00:00">00:00</option>
                                            <option value="01:00">01:00</option>
                                            <option value="02:00">02:00</option>
                                            <option value="03:00">03:00</option>
                                            <option value="04:00">04:00</option>
                                            <option value="05:00">05:00</option>
                                            <option value="06:00">06:00</option>
                                            <option value="07:00">07:00</option>
                                            <option value="08:00">08:00</option>
                                            <option value="09:00">09:00</option>
                                            <option value="10:00">10:00</option>
                                            <option value="11:00">11:00</option>
                                            <option value="12:00">12:00</option>
                                            <option value="13:00">13:00</option>
                                            <option value="14:00">14:00</option>
                                            <option value="15:00">15:00</option>
                                            <option value="16:00">16:00</option>
                                            <option value="17:00">17:00</option>
                                            <option value="18:00">18:00</option>
                                            <option value="19:00">19:00</option>
                                            <option value="20:00">20:00</option>
                                            <option value="21:00">21:00</option>
                                            <option value="22:00">22:00</option>
                                            <option value="23:00">23:00</option>
                                        </select>
                                        <IoIosArrowDown className="arrow-down-svg fs-14" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ---PERSONAL INFO */}
                    <div id="personalInfo" className="mx-3 bg-shades-white">
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
                                <div className="mb-3">
                                    <div className="form-field-wrapper p-0 fs-14 d-flex justify-content-start flex-wrap rounded-small default-phone-input">
                                        <label className="fs-9 ps-3 required pt-1 fw-bolder letter-spacing-0_5 lh-1 text-uppercase w-100 m-0 text-start">
                                            Phone number
                                        </label>
                                        <input
                                            id="reservation_form_phone-input"
                                            ref={inputRef}
                                            type="tel"
                                            inputMode="numeric"
                                            className="phone-number-input"
                                            required
                                            autoComplete="off"
                                        />
                                    </div>
                                    {errorMsg && (
                                        <div
                                            id="error-msg"
                                            className="fs-14 fw-bolder text-danger w-100 text-end"
                                        >
                                            {errorMsg}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* ---Booking Summary */}
                    <div className="d-block" id="summary">
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
                                    € {totalPriceWTax}
                                </span>
                            </div>
                        </div>

                        {/* Reserve */}
                        <form
                            id="requestBookings"
                            method="POST"
                            onSubmit={handleSubmit}
                            className="rc_validate"
                            data-validate="true"
                        >
                            <input
                                type="hidden"
                                name="start_date"
                                value={
                                    dates.startDate
                                        ? dates.startDate.dateInstance
                                        : ""
                                }
                            />
                            <input
                                type="hidden"
                                name="end_date"
                                value={
                                    dates.endDate
                                        ? dates.endDate.dateInstance
                                        : ""
                                }
                            />
                            <input
                                type="hidden"
                                name="number"
                                value={phoneNumber}
                            />
                            <input
                                type="hidden"
                                name="from_time"
                                value={time}
                            />
                            <input type="hidden" name="end_time" value={time} />

                            <input id="car_id" value={data.id} type="hidden" />

                            <div
                                className="rounded-medium-bottom p-3"
                                id="reserve_booking"
                            >
                                <div className="d-flex align-items-center justify-content-between">
                                    <button
                                        type="submit"
                                        data-car-type={data.category.name}
                                        data-id={data.id}
                                        className={`reserve-btn m-w-100 requestModal fw-bold text-uppercase btn btn-primary ${
                                            isButtonDisabled
                                                ? "disabled"
                                                : "active"
                                        }`}
                                        disabled={isButtonDisabled}
                                        onClick={handleValidate}
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