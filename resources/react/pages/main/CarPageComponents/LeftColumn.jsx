/* eslint-disable react/prop-types */
import PrevBtn from "../../../ui/PrevBtn";
import NextBtn from "../../../ui/NextBtn";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import Specifications from "./Specifications";
import WhatIsIncAndDeliveryTerm from "./WhatIsIncAndDeliveryTerm";
import { useRef, useState } from "react";

export default function LeftColumn({ data }) {
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
    return (
        <>
            <div className="col-12 col-lg-6 p-0 gallery flex-lg-grow-1">
                {/* Main Image */}
                <div className="mb-1 mx-md-0">
                    <Swiper
                        ref={swiperRef}
                        className="__swiper-style"
                        loop={true}
                        modules={[Navigation]}
                        slidesPerView={1}
                        slidesPerGroup={1}
                        navigation={{
                            prevEl: ".my-prev-button",
                            nextEl: ".my-next-button",
                        }}
                        onSlideChange={handleSlideChange}
                    >
                        <PrevBtn className="my-prev-button" onClick={handlePrev} />
                        <NextBtn className="my-next-button" onClick={handleNext} />
                        {/* будуть братись з бд картинки */}
                        <SwiperSlide>
                            <div className="gallery-item-link first-image cursor-pointer h-100">
                                <img
                                    style={{ width: "100%" }}
                                    src="https://renty.ae/cdn-cgi/image/format=auto,fit=contain,width=816,height=516,sharpen=0/https://renty.ae/uploads/car/photo/l/black_rolls-royce-wraith-black-badge_2018_3733_main_ab614dbffd77d00a9c76d43cf28c6f4e.jpg"
                                    title={`${data.brand.name} ${data.title} (${data.color}), ${data.year} for rent in Dubai`}
                                    alt={`${data.brand.name} ${data.title} (${data.color}), ${data.year} for rent in Dubai`}
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallery-item-link first-image cursor-pointer h-100">
                                <img
                                    style={{
                                        width: "100%",
                                        borderRadius: "5px",
                                    }}
                                    src="https://renty.ae/cdn-cgi/image/format=auto,fit=contain,width=816,height=516,sharpen=0/https://renty.ae/uploads/car/photos/l/black_rolls-royce-wraith-black-badge_2018_9373_f5d45a1f2d238e220ee6b891ba55114f.jpg"
                                    title={`${data.brand.name} ${data.title} (${data.color}), ${data.year} for rent in Dubai`}
                                    alt={`${data.brand.name} ${data.title} (${data.color}), ${data.year} for rent in Dubai`}
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* Car Thumbs */}
                <div className="d-lg-grid mt-2">
                    <div
                        className="car-thumbs d-lg-flex flex-wrap  align-self-start"
                        style={{ columnGap: "5px" }}
                    >
                        <div className="mb-1">
                            <div
                                className={`gallery-item-thumb overflow-hidden gallery-item-thumb position-relative cursor-pointer ${
                                    activeIndex === 0 ? "active" : ""
                                }`}
                                onClick={() => handleThumbClick(0)}
                            >
                                <img
                                    src="https://renty.ae/cdn-cgi/image/format=auto,fit=contain,width=816,height=516,sharpen=0/https://renty.ae/uploads/car/photo/l/black_rolls-royce-wraith-black-badge_2018_3733_main_ab614dbffd77d00a9c76d43cf28c6f4e.jpg"
                                    className="small-img"
                                    loading="lazy"
                                    title={`${data.brand.name} ${data.title} (${data.color}), ${data.year} for rent in Dubai`}
                                    alt={`${data.brand.name} ${data.title} (${data.color}), ${data.year} for rent in Dubai`}
                                />
                            </div>
                        </div>

                        <div className="mb-1">
                            <div
                                className={`gallery-item-thumb overflow-hidden gallery-item-thumb position-relative cursor-pointer ${
                                    activeIndex === 1 ? "active" : ""
                                }`}
                                onClick={() => handleThumbClick(1)}
                            >
                                <img
                                    src="https://renty.ae/cdn-cgi/image/format=auto,fit=contain,width=816,height=516,sharpen=0/https://renty.ae/uploads/car/photos/l/black_rolls-royce-wraith-black-badge_2018_9373_f5d45a1f2d238e220ee6b891ba55114f.jpg"
                                    className="small-img"
                                    loading="lazy"
                                    title={`${data.brand.name} ${data.title} (${data.color}), ${data.year} for rent in Dubai`}
                                    alt={`${data.brand.name} ${data.title} (${data.color}), ${data.year} for rent in Dubai`}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-4 pt-lg-5">
                    <div className="tab-content">
                        <div className="mb-4 mb-lg-5">
                            <div className="d-flex flex-wrap align-items-center">
                                <h2 className="h4 pr-3 mb-3">Rental pricing</h2>
                            </div>

                            {/* Rental Period */}
                            <div>
                                <div className="d-flex flex-row border-bottom py-lg-2">
                                    <div className="col-md-6 p-0">
                                        <span className="location-in-dubai fw-bold text-uppercase">
                                            Rental period
                                        </span>
                                    </div>

                                    <div className="col-md-6 p-0">
                                        <span className="location-in-dubai fw-bold text-uppercase">
                                            Price per day
                                        </span>
                                    </div>
                                </div>

                                <div className="d-flex flex-row border-bottom py-1 py-lg-2">
                                    <div className="col-md-6 p-0 rental-pt">
                                        1 day
                                    </div>
                                    <div className="col-md-6 p-0 rental-pt">
                                        € {data.price}
                                    </div>
                                </div>

                                {/* <div className="d-flex flex-row border-bottom py-1 py-lg-2">
                                    <div className="col-md-6 p-0 rental-pt">
                                        2 days
                                    </div>
                                    <div className="col-md-6 p-0 rental-pt">
                                        € {data.price}
                                    </div>
                                </div>

                                <div className="d-flex flex-row border-bottom py-1 py-lg-2">
                                    <div className="col-md-6 p-0 rental-pt">
                                        3-6 days
                                    </div>
                                    <div className="col-md-6 p-0 rental-pt">
                                        € 517
                                    </div>
                                </div>

                                <div className="d-flex flex-row border-bottom py-1 py-lg-2">
                                    <div className="col-md-6 p-0 rental-pt">
                                        7-13 days
                                    </div>
                                    <div className="col-md-6 p-0 rental-pt">
                                        € 491
                                    </div>
                                </div>

                                <div className="d-flex flex-row border-bottom py-1 py-lg-2">
                                    <div className="col-md-6 p-0 rental-pt">
                                        14-20 days
                                    </div>
                                    <div className="col-md-6 p-0 rental-pt">
                                        € 465
                                    </div>
                                </div>

                                <div className="d-flex flex-row border-bottom py-1 py-lg-2">
                                    <div className="col-md-6 p-0 rental-pt">
                                        21-29 days
                                    </div>
                                    <div className="col-md-6 p-0 rental-pt">
                                        € 439
                                    </div>
                                </div>

                                <div className="d-flex flex-row border-bottom py-1 py-lg-2">
                                    <div className="col-md-6 p- rental-pt">
                                        30+ days
                                    </div>
                                    <div className="col-md-6 p-0 rental-pt">
                                        € 414
                                    </div>
                                </div> */}

                                <div className="d-flex flex-row border-bottom py-1 py-lg-2">
                                    <div className="col-md-6 p-0 rental-pt">
                                        VAT Tax Applicable
                                    </div>
                                    <div className="col-md-6 p-0 rental-pt">
                                        +5%
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* буде загружатись з бд та зробити окремий файл для того щоб зекономити місце, свг через пропси передавати і т.д */}
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

                        <h2 className="h4 mb-3">
                            {data.brand.name} {data.title} ({data.color}),{" "}
                            {data.year} Rental in Dubai
                        </h2>
                        <p className="text-justify fs-14 mb-5">
                            You can rent {data.brand.name} {data.title} (
                            {data.color}), {data.year} in Dubai, UAE for the
                            next price € {data.price} per day or € 12,450 per
                            month. Rental cost includes basic insurance and
                            standard mileage limit of 250 km/day (with overlimit
                            charge € 3 per additional km). Security deposit no
                            needed. So, don`t wait any longer. If you want to
                            drive this car - contact us for booking or any
                            question right now.
                        </p>

                        <p className="h4 pb-2">Type of Car</p>
                        <div className="w-100 mb-5">
                            <a
                                className="text-decoration-none mr-2 fs-14"
                                href="/"
                            >
                                {data.category.name} cars
                            </a>
                        </div>

                        {/* What is included and Delivery Term*/}
                        <WhatIsIncAndDeliveryTerm />
                    </div>
                </div>
            </div>
        </>
    );
}
