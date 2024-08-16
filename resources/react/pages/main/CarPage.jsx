import Footer from "../../layouts/Footer"
import PrevBtn from "../../ui/PrevBtn";
import NextBtn from "../../ui/NextBtn";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import Specifications from "./CarPageComponents/Specifications";
import WhatIsIncAndDeliveryTerm from "./CarPageComponents/WhatIsIncAndDeliveryTerm";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function CarPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    const handleThumbClick = (index) => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideTo(index);
            setActiveIndex(index);
        }
    };

    const handleSlideChange = () => {
        if (swiperRef.current) {
            setActiveIndex(swiperRef.current.swiper.realIndex);
        }
    };

    const [data, setData] = useState([]);
    const { slug, id } = useParams();
    
          console.log('Slug:', slug);
          console.log('ID:', id);
          console.log(data);
  
  
      useEffect(() => {
          axios
              .get(`http://127.0.0.1:8002/api/cars/${slug}/${id}/detail`)
              .then((response) => {
                  setData(response.data);
              })
              .catch((error) => {
                  console.error("There was an error fetching the data!", error);
              });
      }, [slug, id]);

    return (
        <>
            <div className="bg-shades-white pt-lg-4">
                <div className="container">
                    {/* Car name */}
                    <div className="pb-3 pt-3 mt-0 pt-lg-0 d-flex align-items-center mt-lg-0">
                        <span className="mr-2 d-flex align-items-center">
                            <img
                                src="https://renty.ae/assets-nd/icons/site/brand_svg/rolls-royce.svg"
                                width="60"
                                height="60"
                                loading="lazy"
                            />
                        </span>

                        {/* з бд буде братись назва */}
                        <h1 className="fs-30 fw-normal mb-0">
                            Rolls Royce Wraith Black Badge (Black), 2019 for
                            rent in Dubai
                        </h1>
                    </div>

                    {/* Else information */}
                    <div
                        className="d-flex position-relative justify-content-between"
                        style={{ columnGap: "60px" }}
                    >
                        <div className="col-12 col-lg-6 p-0 gallery flex-lg-grow-1">
                            {/* Main Image */}
                            <div className="mb-1 mx-md-0">
                                <Swiper
                                    className="__swiper-style"
                                    loop={true}
                                    modules={[Navigation]}
                                    slidesPerView={1}
                                    slidesPerGroup={1}
                                    navigation={{
                                        prevEl: ".my-prev-button",
                                        nextEl: ".my-next-button",
                                    }}
                                    ref={swiperRef}
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
                                    {/* будуть братись з бд картинки */}
                                    <SwiperSlide>
                                        <div className="gallery-item-link first-image cursor-pointer h-100">
                                            <img
                                                style={{ width: "100%" }}
                                                src="https://renty.ae/cdn-cgi/image/format=auto,fit=contain,width=816,height=516,sharpen=0/https://renty.ae/uploads/car/photo/l/black_rolls-royce-wraith-black-badge_2018_3733_main_ab614dbffd77d00a9c76d43cf28c6f4e.jpg"
                                                title="Rolls Royce Wraith Black Badge (Black), 2019 for rent in Dubai"
                                                alt="Rolls Royce Wraith Black Badge (Black), 2019 for rent in Dubai"
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
                                                title="Rolls Royce Wraith Black Badge (Black), 2019 for rent in Dubai"
                                                alt="Rolls Royce Wraith Black Badge (Black), 2019 for rent in Dubai"
                                            />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>

                            {/* Car Thumbs */}
                            <div className="d-lg-grid mt-2">
                                <div
                                    className="car-thumbs d-lg-flex flex-wrap  align-self-start pdp-preview-gallery-photos"
                                    style={{ columnGap: "5px" }}
                                >
                                    <div className="mb-1">
                                        <div
                                            className={`gallery-item-thumb overflow-hidden gallery-item-thumb position-relative cursor-pointer ${
                                                activeIndex === 0
                                                    ? "active"
                                                    : ""
                                            }`}
                                            onClick={() => handleThumbClick(0)}
                                        >
                                            <img
                                                src="https://renty.ae/cdn-cgi/image/format=auto,fit=contain,width=816,height=516,sharpen=0/https://renty.ae/uploads/car/photo/l/black_rolls-royce-wraith-black-badge_2018_3733_main_ab614dbffd77d00a9c76d43cf28c6f4e.jpg"
                                                className="small-img"
                                                loading="lazy"
                                                title="Rolls Royce Wraith Black Badge (Black), 2019 for rent in Dubai"
                                                alt="Rolls Royce Wraith Black Badge (Black), 2019 for rent in Dubai"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-1">
                                        <div
                                            className={`gallery-item-thumb overflow-hidden gallery-item-thumb position-relative cursor-pointer ${
                                                activeIndex === 1
                                                    ? "active"
                                                    : ""
                                            }`}
                                            onClick={() => handleThumbClick(1)}
                                        >
                                            <img
                                                src="https://renty.ae/cdn-cgi/image/format=auto,fit=contain,width=816,height=516,sharpen=0/https://renty.ae/uploads/car/photos/l/black_rolls-royce-wraith-black-badge_2018_9373_f5d45a1f2d238e220ee6b891ba55114f.jpg"
                                                className="small-img"
                                                loading="lazy"
                                                title="Rolls Royce Wraith Black Badge (Black), 2019 for rent in Dubai"
                                                alt="Rolls Royce Wraith Black Badge (Black), 2019 for rent in Dubai"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 pt-lg-5">
                                <div className="tab-content">
                                    <div className="mb-4 mb-lg-5">
                                        <div className="d-flex flex-wrap align-items-center">
                                            <h2 className="h4 pr-3 mb-3">
                                                Rental pricing
                                            </h2>
                                        </div>

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
                                                    € 543
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row border-bottom py-1 py-lg-2">
                                                <div className="col-md-6 p-0 rental-pt">
                                                    2 days
                                                </div>
                                                <div className="col-md-6 p-0 rental-pt">
                                                    € 543
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
                                            </div>

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
                                        year="2019"
                                        color="Black"
                                        zerotohundred="4.6"
                                        transmission="Automatic"
                                        engine="6.6L V12 twin turbo"
                                        maxspeed="250"
                                        horse="624"
                                        seats="4"
                                        fuelt="Petrol"
                                        bodyt="Coupe"
                                    />

                                    <h2 className="h4 mb-3">
                                        Rolls Royce Wraith Black Badge (Black),
                                        2019 Rental in Dubai, UAE
                                    </h2>
                                    <p className="text-justify fs-14 mb-5">
                                        You can rent Rolls Royce Wraith Black
                                        Badge (Black), 2019 in Dubai, UAE for
                                        the next price € 545 per day or € 12,450
                                        per month. Rental cost includes basic
                                        insurance and standard mileage limit of
                                        250 km/day (with overlimit charge € 3
                                        per additional km). Security deposit no
                                        needed. So, don`t wait any longer. If
                                        you want to drive this car - contact us
                                        for booking or any question right now.
                                    </p>

                                    <p className="h4 pb-2">Type of Car</p>
                                    <div className="w-100 mb-5">
                                        <a
                                            className="text-decoration-none mr-2 fs-14"
                                            href="/"
                                        >
                                            Prestige cars
                                        </a>
                                        <a
                                            className="text-decoration-none mr-2 fs-14"
                                            href="/"
                                        >
                                            VIP cars
                                        </a>
                                        <a
                                            className="text-decoration-none mr-2 fs-14"
                                            href="/"
                                        >
                                            Business cars
                                        </a>
                                    </div>

                                    {/* What is included and Delivery Term*/}
                                    <WhatIsIncAndDeliveryTerm />
                                </div>
                            </div>
                        </div>

                        {/* left column */}
                        <div className="col-12 col-lg-5 p-0 d-none d-lg-block"></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}