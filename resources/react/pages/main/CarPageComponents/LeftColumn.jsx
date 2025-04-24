/* eslint-disable react/prop-types */
import PrevBtn from "../../../ui/PrevBtn";
import NextBtn from "../../../ui/NextBtn";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";
import Specifications from "./Specifications";
import WhatIsIncAndDeliveryTerm from "./WhatIsIncAndDeliveryTerm";
import { useRef, useState } from "react";
import { LiaCalendarCheck } from "react-icons/lia";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import 'swiper/css/pagination';

export default function LeftColumn({ data, toggleState, setIsBurger, isBooked }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);


    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handleThumbClick = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
            setActiveIndex(index);
        }
    };

    const handleSlideChange = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            setActiveIndex(swiperRef.current.swiper.realIndex);
        }
    };

    // for mob-nav
    const [activeNav, setActiveNav] = useState("Overview");
    // for mob-nav

    const pathToImg = 'http://127.0.0.1:8000/storage/images';
    const defaultImgPath = 'http://127.0.0.1:8000/storage/images/default.png';
    return (
        <>
            <div className="col-12 col-lg-6 p-0 gallery flex-lg-grow-1">
                {/* Main Image */}
                <div className="mb-1 mx-md-0 car-gallery-swiper">
                    <Swiper
                        ref={swiperRef}
                        className="__swiper-style"
                        loop={true}
                        modules={[Navigation, Pagination]}
                        pagination={{ clickable: true }}
                        slidesPerView={1}
                        slidesPerGroup={1}
                        navigation={{
                            prevEl: ".my-prev-button",
                            nextEl: ".my-next-button",
                        }}
                        onSlideChange={handleSlideChange}
                    >
                        <PrevBtn
                            className="my-prev-button"
                            onClick={handlePrev}
                        />
                        <NextBtn
                            className="my-next-button"
                            onClick={handleNext}
                        />
                        {data.images && data.images.length > 0 ? (
                            data.images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div className="gallery-item-link first-image cursor-pointer h-100 ">
                                        <img
                                            style={{ width: "100%" }}
                                            src={
                                                image.path
                                                    ? `${pathToImg}/${data.id}/${image.path}`
                                                    : defaultImgPath
                                            }
                                            title={`${data.brand.name} ${data.title} (${data.color}), ${data.year} for rent in Dubai`}
                                            alt={`${data.brand.name} ${data.title} (${data.color}), ${data.year} for rent in Dubai`}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))
                        ) : (
                            <SwiperSlide>
                                <div className="gallery-item-link first-image cursor-pointer h-100">
                                    <img
                                        style={{ width: "100%" }}
                                        src={defaultImgPath}
                                        title={`${data.brand.name} ${data.title} (${data.color}), ${data.year} for rent in Dubai`}
                                        alt={`${data.brand.name} ${data.title} (${data.color}), ${data.year} for rent in Dubai`}
                                    />
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>

                {/* Car Thumbs */}
                <div className="d-none d-lg-grid mt-2">
                    <div
                        className="car-thumbs d-lg-flex flex-wrap  align-self-start"
                        style={{ columnGap: "5px" }}
                    >
                        {data.images &&
                            data.images.map((image, index) => (
                                <div key={index} className="mb-1">
                                    <div
                                        className={`gallery-item-thumb overflow-hidden gallery-item-thumb position-relative cursor-pointer ${
                                            activeIndex === index
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() => handleThumbClick(index)}
                                    >
                                        <img
                                            src={`${pathToImg}/${data.id}/${image.path}`}
                                            className="small-img"
                                            loading="lazy"
                                            title={`${data.brand.name} ${data.title} (${data.color}), ${data.year} for rent in Dubai`}
                                            alt={`${data.brand.name} ${data.title} (${data.color}), ${data.year} for rent in Dubai`}
                                        />
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                {/* for mobile */}
                <div className="d-block d-lg-none mt-2">
                    <div className="d-lg-none d-flex justify-content-between mt-3">
                        <div className="d-flex flex-column">
                            <div
                                className="d-flex text-uppercase fs-9 fw-bolder letter-spacing-1"
                                style={{ color: "#8c98ab" }}
                            >
                                rent for a 1 day
                            </div>
                            <span className="fs-18 fw-normal">
                                € {data.price}
                            </span>
                        </div>

                        <div
                            className="d-flex align-items-center"
                            style={{ gap: "5px" }}
                        >
                            <button
                                type="button"
                                data-id={`${data.id}`}
                                title="Contact Renty.ae car rental"
                                className="w-100 btn-medium btn contact_btn d-flex d-lg-none p-3"
                            >
                                <span className="span-contact fs-14 lh-20 fw-bold text-uppercase text-nowrap letter-spacing-0_2">
                                    Contact
                                </span>
                            </button>

                            <button
                                className="fw-bold text-uppercase btn btn-primary d-lg-none d-flex align-items-center"
                                style={{ height: "40px" }}
                                onClick={() => toggleState(setIsBurger)}
                            >
                                <span
                                    className="fs-13 letter-spacing-0_5"
                                    style={{ color: "#fff" }}
                                >
                                    Reserve
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="d-lg-none d-flex mt-3 rounded-medium text-bg-light">
                        <div className="p-2 w-100">
                            {/* Змінювати текст в залежності чи арендували авто чи ні */}
                            <div
                                className={`availability-label d-flex align-items-center rounded-small py-1 min-height-35 ${
                                    isBooked ? "bg-none" : "bg-info"
                                }`}
                            >
                                <span className="calendar-check d-flex ms-1 mr-2">
                                    <LiaCalendarCheck
                                        className="calendar-check-svg"
                                        fill={isBooked ? "#6c757d" : "#0ea548"}
                                    />
                                </span>
                                <span
                                    className={`fs-14 ${
                                        isBooked
                                            ? "text-muted"
                                            : "color-brand-accent"
                                    }`}
                                >
                                    {isBooked
                                        ? "Available Soon"
                                        : "Available now"}
                                </span>
                            </div>

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
                    </div>
                </div>

                {/* mobile tabs */}
                <div className="mob-nav d-lg-none border-top border-bottom row mt-3">
                    <ul className="nav p-0">
                        <li
                            className={`d-flex nav-item flex-grow-1 align-items-center justify-content-center fs-14 fw-bolder ${
                                activeNav === "Overview" ? "active-nav" : ""
                            }`}
                            onClick={() => setActiveNav("Overview")}
                        >
                            Overview
                        </li>
                        <li
                            className={`d-flex nav-item flex-grow-1 align-items-center justify-content-center fs-14 fw-bolder ${
                                activeNav === "Terms" ? "active-nav" : ""
                            }`}
                            onClick={() => setActiveNav("Terms")}
                        >
                            Terms
                        </li>
                        <li
                            className={`d-flex nav-item flex-grow-1 align-items-center justify-content-center fs-14 fw-bolder ${
                                activeNav === "FAQ" ? "active-nav" : ""
                            }`}
                            onClick={() => setActiveNav("FAQ")}
                        >
                            FAQ
                        </li>
                    </ul>
                </div>
                {/* end of mobile tabs */}

                {/* end for mobile */}

                <div className="pt-4 pt-lg-5">
                    <div className="tab-content">
                        <div
                            className={`overview d-lg-block ${
                                activeNav === "Overview" ? "d-block" : "d-none"
                            }`}
                        >
                            <div className="mb-4 mb-lg-5">
                                <div className="d-flex flex-wrap align-items-center">
                                    <h2 className="h4 pr-3 mb-3">
                                        Rental pricing
                                    </h2>
                                </div>

                                {/* Rental Period */}
                                <div>
                                    <div className="d-flex flex-row border-bottom py-lg-2">
                                        <div className="col-6 col-lg-0 p-0">
                                            <span className="location-in-dubai fw-bold text-uppercase">
                                                Rental period
                                            </span>
                                        </div>

                                        <div className="col-6 col-lg-0 p-0 text-end">
                                            <span className="location-in-dubai fw-bold text-uppercase">
                                                Price per day
                                            </span>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row border-bottom py-1 py-lg-2">
                                        <div className="col-6 col-lg-0 p-0 rental-pt">
                                            1 day
                                        </div>
                                        <div className="col-6 col-lg-0 p-0 rental-pt text-end">
                                            € {data.price}
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row border-bottom py-1 py-lg-2">
                                        <div className="col-6 col-lg-0 p-0 rental-pt">
                                            VAT Tax Applicable
                                        </div>
                                        <div className="col-6 col-lg-0 p-0 rental-pt text-end">
                                            +5%
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Specifications
                                year={data.year}
                                color={data.color}
                                zerotohundred={data.zeroToHundred}
                                transmission={data.transmission}
                                engine={data.engine}
                                maxspeed={data.maxSpeed}
                                horse={data.horsepower}
                                seats={data.seats}
                                fuelt={data.fuelType}
                                bodyt={data.body_type.name}
                            />

                            <h2 className="h4 mb-2 mb-sm-3">
                                {data.brand.name} {data.title} ({data.color}),{" "}
                                {data.year} Rental in Dubai
                            </h2>
                            <p className="text-justify fs-14 mb-2 mb-sm3 mb-lg-5 mb-sm-4">
                                You can rent {data.brand.name} {data.title} (
                                {data.color}), {data.year} in Dubai, UAE for the
                                next price € {data.price} per day. Rental cost
                                includes basic insurance and standard mileage
                                limit of 250 km/day (with overlimit charge € 3
                                per additional km). Security deposit no needed.
                                So, don`t wait any longer. If you want to drive
                                this car - contact us for booking or any
                                question right now.
                            </p>

                            <p className="h4 pb-sm-2">Type of Car</p>
                            <div className="w-100 mb-2 mb-lg-5 mb-sm-4">
                                <a
                                    className="text-decoration-none mr-2 fs-14"
                                    href={`/types/${data.category.name.toLowerCase()}`}
                                >
                                    {data.category.name} cars
                                </a>
                            </div>
                        </div>

                        {/* What is included and Delivery Term*/}
                        <WhatIsIncAndDeliveryTerm activeNav={activeNav} />

                        <div
                            className={`faq d-lg-block ${
                                activeNav === "FAQ" ? "d-block" : "d-none"
                            }`}
                        >
                            <div className="mb-4 mb-lg-5">
                                <div className="d-flex flex-wrap align-items-center">
                                    <h2 className="h4 pr-3 mb-3 text-justify">
                                        Frequently Asked Questions (FAQ)
                                    </h2>
                                </div>
                                <div>
                                    <h3 className="text-justify fs-14 mb-1">
                                        Can I have the car delivered to my
                                        location?
                                    </h3>
                                    <p className="text-justify fs-14 mb-4">
                                        Enjoy the convenience of having Renty.ae
                                        deliver the car directly to your desired
                                        location within Dubai for free. However,
                                        if you prefer, you can also opt pick-up
                                        from their branch during office hours.
                                    </p>
                                    <h3 className="text-justify fs-14 mb-1">
                                        Why should I make a booking through
                                        Renty.ae?
                                    </h3>
                                    <p className="text-justify fs-14 mb-4">
                                        Experience the benefits of hire this BMW
                                        X5 (Grey), 2024 through Renty.ae. Say
                                        goodbye to commission fees and booking
                                        charges! Discover a vast selection of
                                        cars in an online catalog of one of the
                                        UAE&apos;s most reliable car rental
                                        marketplaces.
                                    </p>
                                    <h3 className="text-justify fs-14 mb-1">
                                        What is the cost of crossing a Salik
                                        Gate?
                                    </h3>
                                    <p className="text-justify fs-14 mb-4">
                                        Every time you glide through one of
                                        those toll checkpoints, a modest charge
                                        of AED 4 will be incurred. Rest assured,
                                        though, as the detailed invoice for
                                        these toll fees will be issued to you
                                        after your rental period. You&apos;ll
                                        have the flexibility to deduct the Salik
                                        amount directly from your security
                                        deposit or make a separate payment,
                                        whichever meets your requirements.
                                    </p>
                                    <h3 className="text-justify fs-14 mb-1">
                                        What is the type of vehicle insurance
                                        that comes as standard?
                                    </h3>
                                    <p className="text-justify fs-14 mb-4">
                                        All rental cars in the UAE come with
                                        comprehensive insurance coverage, known
                                        as basic insurance, as mandated by the
                                        RTA. This ensures that you&apos;re
                                        protected from accidental damage,
                                        granted it&apos;s not your fault.
                                        Remember to obtain a police report in
                                        case an accident occurs. Basic coverage
                                        is already included in your rental
                                        amount. Additionally, many car rental
                                        companies offer collision damage waiver
                                        (CDW) for an extra fee, which extends
                                        coverage to include accidental damage
                                        caused by your own actions. Keep in mind
                                        that a valid police report is still
                                        necessary for both coverages. Your peace
                                        of mind is our priority.
                                    </p>
                                    <h3 className="text-justify fs-14 mb-1">
                                        When can I expect the refund of my
                                        security deposit?
                                    </h3>
                                    <p className="text-justify fs-14 mb-4">
                                        Renty.ae understands the needs of its
                                        customers and offers the option to rent
                                        BMW X5 (Grey), 2024 with no deposit. We
                                        believe in making the car rental process
                                        easy and hassle-free for our customers.
                                        With us, you can enjoy the convenience
                                        of renting a car without having to worry
                                        about a hefty deposit.
                                    </p>
                                    <h3 className="text-justify fs-14 mb-1">
                                        What are the implications if I exceed
                                        the mileage limit?
                                    </h3>
                                    <p className="text-justify fs-14 mb-4">
                                        Each car comes with a set mileage limit
                                        tailored to your rental duration. While
                                        most cars adhere to this limit, some
                                        generous services even provide the
                                        option of unlimited mileage.
                                        Additionally, you might find enticing
                                        packages that allow you to customize
                                        your mileage limit for a small fee. To
                                        ensure transparency, the car rental
                                        agreement will specify the initial
                                        mileage recorded on the car&apos;s
                                        odometer at the start of your rental.
                                        Should you surpass the allotted
                                        kilometres (250 km/day for this car),
                                        please note that extra charges will be
                                        incurred. Precisely for this car, any
                                        mileage exceeding the included limit
                                        will be charged at a rate of € 1 per
                                        kilometre.
                                    </p>
                                    <h3 className="text-justify fs-14 mb-1">
                                        What is the age requirement for renting
                                        this vehicle?
                                    </h3>
                                    <p className="text-justify fs-14 mb-4">
                                        To rent a car in the UAE, you must meet
                                        the minimum age requirement set by the
                                        RTA, which is 21 years. However, the
                                        specific age restriction for the current
                                        car rental is 24 years. It&apos;s
                                        important to note that the age
                                        requirement may vary based on the car
                                        insurance policy. For more information,
                                        please feel free to contact us.
                                    </p>
                                    <h3 className="text-justify fs-14 mb-1">
                                        Can I rent this car if I have a newly
                                        issued driving license in Dubai?
                                    </h3>
                                    <p className="text-justify fs-14 mb-4">
                                        If you possess a newly issued driving
                                        license under six months old, you should
                                        inquire about the specific requirements
                                        with the car rental agent. Worth noting,
                                        the policies may differ based on the
                                        car&apos;s insurance coverage. Some
                                        vehicles may be available for
                                        individuals with new driving licenses,
                                        but they may require a higher security
                                        deposit and have limited insurance
                                        coverage. Additionally, they may be
                                        subject to higher excess fees. On the
                                        other hand, consumers can rent cars with
                                        a driving license over six months, which
                                        is considered valid.
                                    </p>
                                </div>{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
