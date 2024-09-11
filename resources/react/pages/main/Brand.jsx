import { useState, useRef, useEffect } from "react";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import { BiSortAlt2 } from "react-icons/bi";
import { RiArrowDownSLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function Brand () {
    const [isSortPrice, setIsSortPrice] = useState(false);
    const { brand } = useParams();
    const dropdownRef = useRef(null);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true);
        axios
        .get(`http://127.0.0.1:8000/api/brands/${brand}`)
        .then((response) => {
            setData(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.error("There was an error fetching the data!", error);
            setLoading(false);
        });
    }, [brand]);
    console.log(data);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsSortPrice(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsSortPrice(!isSortPrice);
    }

    if(loading) {
        return (
            <>
                <div>
                    {/* замінити на гіфку чи щось типу того на лоадінг */}
                    <h1>Loading...</h1>
                </div>
            </>
        );
    }

    const brandHeader =
        data.length > 0
            ? data[0].brand.name
            : brand.charAt(0).toUpperCase() + brand.slice(1).toLowerCase();

    return (
        <>
            <Header />
            <div className="container pt-3 pt-lg-4 px-lg-0">
                <div className="d-block pb-2">
                    <h1 className="d-inline fs-36">
                        Rent {brandHeader} in Dubai
                    </h1>
                </div>

                <div className="d-flex pt-1 align-items-end pb-lg-4">
                    <div
                        className="d-lg-flex d-none"
                        style={{ maxHeight: "max-content" }}
                    >
                        <div className="sort-price" ref={dropdownRef}>
                            <button
                                className="btn h-100 px-0"
                                type="button"
                                onClick={toggleDropdown}
                                style={{ border: "none" }}
                            >
                                <span className="mr-2">
                                    <BiSortAlt2
                                        className="fs-16"
                                        fill="#1359ba"
                                    />
                                </span>
                                <span className="fs-12 color-shades-black mr-2 text-nowrap">
                                    Recommended
                                </span>
                                <span>
                                    <RiArrowDownSLine
                                        className="fs-16"
                                        fill="#009fe2"
                                    />
                                </span>
                            </button>

                            <div
                                className={`dropdown-menu mb-0 ${
                                    isSortPrice ? "show" : ""
                                }`}
                            >
                                <button className="btn fs-14 justify-content-start dropdown-item rounded-small disabled">
                                    Recommended
                                </button>
                                <button className="btn fs-14 justify-content-start dropdown-item rounded-small">
                                    From hight to low
                                </button>
                                <button className="btn fs-14 justify-content-start dropdown-item rounded-small">
                                    From low to high
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pb-4">
                    <div className="row">
                        {data.map((car) => {
                            const formattedBrandName = car.brand.name
                                .toLowerCase()
                                .replace(/ /g, "-");
                            return (
                                <div
                                    key={car.id}
                                    className="col-12 col-md-6 col-lg-12 car-list-item"
                                >
                                    <div
                                        className="py-3"
                                        data-offer-ends="This offer is no longer available"
                                    >
                                        <div className="row car-list-item-row">
                                            <a
                                                href={`/cars/${car.slug}/${car.id}/detail`}
                                                className="text-decoration-none d-block col-lg-4 col-xl-3 car-image-link"
                                            >
                                                <div className="car-image-img rounded-small">
                                                    <img
                                                        className="rounded-small"
                                                        src={`http://127.0.0.1:8000/storage/images/${car.id}/${car.images[0].path}`}
                                                        title={`Hiring ${car.brand.name} ${car.title} (${car.color}), ${car.year} in Dubai`}
                                                        alt={`${car.brand.name} ${car.title} (${car.color}), ${car.year}`}
                                                        loading="lazy"
                                                        width="265"
                                                        height="167"
                                                    />
                                                </div>
                                            </a>

                                            <div
                                                className="d-flex flex-column col-lg-8 col-xl-9 px-3 px-lg-0 pl-lg-0 py-lg-3
                                                    justify-content-center align-items-center justify-content-between flex-lg-row"
                                            >
                                                {/* left-side */}
                                                <div className="d-flex flex-column flex-grow-1 w-100 pr-lg-3 gap-10">
                                                    <div className="d-flex flex-column flex-lg-row align-items-lg-center align-items-start position-relative car-list-name-container blend-mode-luminosity">
                                                        <div className="d-flex m-w-100 align-items-center overflow-hidden mr-auto">
                                                            <span className="icon-brand">
                                                                <img
                                                                    src={`https://renty.ae/assets-nd/icons/site/brand_svg/${formattedBrandName}.svg`}
                                                                    width="30"
                                                                    height="30"
                                                                    loading="lazy"
                                                                />
                                                            </span>
                                                            <a
                                                                className="px-1 text-truncate white_space car-main-link fs-16 fw-normal text-decoration-none"
                                                                title={`Hiring ${car.brand.name} ${car.title} (${car.color}), ${car.year} in Dubai`}
                                                                href={`/cars/${car.slug}/${car.id}/detail`}
                                                            >
                                                                {`${car.brand.name} ${car.title} (${car.color}), ${car.year}`}
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="d-none d-lg-flex flex-lg-column overflow-hidden gap-10">
                                                        <div className="d-flex align-items-center">
                                                            <span className="px-1 d-flex">
                                                                <AiOutlineInfoCircle
                                                                    className="fs-15"
                                                                    fill="#596372"
                                                                />
                                                            </span>
                                                            <span
                                                                className="fs-14 fw-normal text-nowrap km-per-day"
                                                                style={{
                                                                    color: "#596372",
                                                                }}
                                                            >
                                                                250 km for 1 day
                                                            </span>
                                                            <span
                                                                className="fs-14 fw-normal ps-1 text-nowrap"
                                                                style={{
                                                                    color: "#596372",
                                                                }}
                                                            >
                                                                Insurance
                                                                included
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* left-side */}

                                                {/* right-side */}
                                                <div className="d-flex flex-column w-fit-content h-100 justify-content-between col-lg-3">
                                                    <div className="d-lg-flex d-none flex-column w-100 align-items-end">
                                                        <span
                                                            className="fs-11 fw-bold text-uppercase letter-spacing-1"
                                                            style={{
                                                                color: "#596372",
                                                            }}
                                                        >
                                                            price per day
                                                        </span>
                                                        <span className="fs-24 fw-normal">
                                                            € {car.price}
                                                        </span>
                                                    </div>

                                                    <div
                                                        className="d-flex justify-content-end"
                                                        style={{ gap: "5px" }}
                                                    >
                                                        <a
                                                            className="btn btn-details align-items-center d-none d-lg-flex fw-bolder"
                                                            href={`/cars/${car.slug}/${car.id}/detail`}
                                                            role="button"
                                                        >
                                                            <span className="fs-13 text-nowrap text-uppercase letter-spacing-0_2">
                                                                Rental details
                                                            </span>
                                                        </a>

                                                        <button
                                                            className="btn btn-medium contact_btn d-none d-lg-flex fw-bolder"
                                                            title="Contact Renty.ae car rental"
                                                        >
                                                            <span className="fs-14 span-contact text-nowrap text-uppercase letter-spacing-0_2">
                                                                Contact
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                {/* right-side */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}