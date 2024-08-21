/* eslint-disable react/prop-types */
import { LiaCalendarCheck } from "react-icons/lia";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import LitePicker from "./LitePicker";
// import { useEffect, useRef, useState } from "react";

export default function RightColumn ({data}) {
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
                                        fill="#009fe2"
                                    />
                                </span>
                                <span className="color-brand-accent fs-14">
                                    Available today
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
                    <div className="d-none d-lg-block bg-white rounded-small p-3 mx-3 mb-2 mt-3 mt-lg-0">
                        <div className="d-flex justify-content-between pt-1">
                            <span className="header-date-span text-uppercase">
                                Rental date range
                            </span>
                            <span className="header-date-span text-uppercase">
                                Your rental
                            </span>
                        </div>

                        <div className="d-flex justify-content-between mb-3">
                            <h2 className="h4 text-truncate fw-normal fs-24">
                                Choose rental dates
                            </h2>
                            {/* заміниться */}
                            <span className="flex-shrink-0">1 day</span>
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
                                        {/* дані будуть братись з календаря */}
                                        <input
                                            className="form-control fs-14"
                                            id="datepicker_start"
                                            readOnly
                                            type="text"
                                            value={"21 Aug 2024"}
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
                                            value={"21 Aug 2024"}
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
                            <LitePicker />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}