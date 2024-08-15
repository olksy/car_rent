import Footer from "../../layouts/Footer"
import PrevBtn from "../../ui/PrevBtn";
import NextBtn from "../../ui/NextBtn";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";


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

                    <h1 className="fs-30 fw-normal mb-0">
                        Rolls Royce Wraith Black Badge (Black), 2019 for rent in Dubai
                    </h1>
                </div>

                {/* Else information */}
                <div
                    className="d-flex position-relative justify-content-between"
                    style={{ columnGap: "60px" }}
                >
                    <div className="col-12 col-lg-6 p-0 gallery flex-lg-grow-1">
                        {/* Main Image */}
                        <div className="mb-1 mx-md-0" style={{width: "52.8%"}}>
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
                                <PrevBtn className="my-prev-button" onClick={handlePrev} />
                                <NextBtn className="my-next-button" onClick={handleNext} />
                                <SwiperSlide>
                                    <div className="gallery-item-link first-image cursor-pointer h-100">
                                        <img
                                            style={{ width: "588px" }}
                                            src="https://renty.ae/cdn-cgi/image/format=auto,fit=contain,width=816,height=516,sharpen=0/https://renty.ae/uploads/car/photo/l/black_rolls-royce-wraith-black-badge_2018_3733_main_ab614dbffd77d00a9c76d43cf28c6f4e.jpg"
                                            title="Rolls Royce Wraith Black Badge (Black), 2019 for rent in Dubai"
                                            alt="Rolls Royce Wraith Black Badge (Black), 2019 for rent in Dubai"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="gallery-item-link first-image cursor-pointer h-100">
                                        <img
                                            style={{ width: "588px", borderRadius: "5px" }}
                                            src="https://renty.ae/cdn-cgi/image/format=auto,fit=contain,width=816,height=516,sharpen=0/https://renty.ae/uploads/car/photos/l/black_rolls-royce-wraith-black-badge_2018_9373_f5d45a1f2d238e220ee6b891ba55114f.jpg"
                                            title="Rolls Royce Wraith Black Badge (Black), 2019 for rent in Dubai"
                                            alt="Rolls Royce Wraith Black Badge (Black), 2019 for rent in Dubai"
                                        />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>

                        {/* Car Thumbs */}
                        <div className="d-lg-grid mt-2" style={{width: "52.8%"}}>
                            <div className="car-thumbs d-lg-flex flex-wrap  align-self-start pdp-preview-gallery-photos" style={{columnGap: "5px"}}>
                                <div className="mb-1">
                                    <div className={`gallery-item-thumb overflow-hidden gallery-item-thumb position-relative cursor-pointer ${activeIndex === 0 ? 'active' : ''}`} 
                                    onClick={() => handleThumbClick(0)}>
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
                                    <div className={`gallery-item-thumb overflow-hidden gallery-item-thumb position-relative cursor-pointer ${activeIndex === 1 ? 'active' : ''}`}
                                    onClick={() => handleThumbClick(1)}>
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
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
);
}