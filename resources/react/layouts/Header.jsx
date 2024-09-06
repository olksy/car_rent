import { IoGridOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import strings from "../pages/images/icons/strings.png";
import { useState } from "react";
import rolls_svg from "../pages/images/img/Cars/rolls-royce.svg";
import ferrari_svg from "../pages/images/img/Cars/ferrari-4.svg";
import lamborghini_svg from "../pages/images/img/Cars/lamborghini.svg";
import audi_svg from "../pages/images/img/Cars/audi.svg";
import landRover_svg from "../pages/images/img/Cars/land-rover-2.svg";
import bmw_svg from "../pages/images/img/Cars/logo-bmw-2020.svg";
import mercedes_svg from "../pages/images/img/Cars/mercedes-benz-9.svg";
import porsche_svg from "../pages/images/img/Cars/porsche.svg";
import ford_svg from "../pages/images/img/Cars/ford.svg";
import jaguar_svg from "../pages/images/img/Cars/jaguar.svg";
import chevrolet_svg from "../pages/images/img/Cars/chevrolet.svg";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [showBrands, setShowBrands] = useState(false);
    const [showRentCar, setShowRentCar] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header className="header-layout wrapper m-0 py-3">
                <div className="container d-flex justify-content-between px-lg-0 position-relative">
                    <img
                        src={strings}
                        className="strings"
                        width="32"
                        height="32"
                        alt="strings-icon"
                    />
                    <div className="header-actions d-flex align-items-center">
                        <div className="header-logo">
                            <a href="/" className="text-decoration-none">
                                <img
                                    src="https://renty.ae/assets-nd/icons/site/logo-dark.svg"
                                    alt="logo"
                                    width="125"
                                    height="28"
                                    className="header-logo-image"
                                />
                            </a>
                        </div>

                        <div
                            className="rent-car-container ms-3"
                            onMouseEnter={() => setShowRentCar(true)}
                            onMouseLeave={() => setShowRentCar(false)}
                        >
                            <button
                                className={`header-button ${
                                    showRentCar ? "active" : ""
                                }`}
                            >
                                <IoGridOutline />
                                <span
                                    className="text-decoration-none fw-normal fs-16 p-2"
                                    style={{ color: "white" }}
                                >
                                    Rent a car
                                </span>
                            </button>

                            <div
                                className={`rent-car-dropdown dropdown-menu w-100 ${
                                    showRentCar ? "show" : ""
                                }`}
                            >
                                <div className="d-grid">
                                    <div className="p-2 flex-grow-1 dropdown-border-right">
                                        <span className="d-block fs-9 px-2 letter-spacing-0_5 text-uppercase bg-transparent">
                                            Categories
                                        </span>
                                        <div className="d-flex flex-column mt-2">
                                            <a
                                                className="dropdown-item rounded-small fs-14 px-2"
                                                href="/types/luxury"
                                                title="Luxury"
                                            >
                                                Luxury
                                            </a>
                                            <a
                                                className="dropdown-item rounded-small fs-14 px-2"
                                                href="/types/electric-ev-cars"
                                                title="Electric (EV)"
                                            >
                                                Electric (EV)
                                            </a>
                                            <a
                                                className="dropdown-item rounded-small fs-14 px-2"
                                                href="/types/classic-cars-rental"
                                                title="Classic"
                                            >
                                                Classic
                                            </a>
                                            <a
                                                className="dropdown-item rounded-small fs-14 px-2"
                                                href="/types/business"
                                                title="Business"
                                            >
                                                Business
                                            </a>
                                            <a
                                                className="dropdown-item rounded-small fs-14 px-2"
                                                href="/types/prestige"
                                                title="Prestige"
                                            >
                                                Prestige
                                            </a>
                                            <a
                                                className="dropdown-item rounded-small fs-14 px-2"
                                                href="/types/sport"
                                                title="Sports"
                                            >
                                                Sports
                                            </a>
                                            <a
                                                className="dropdown-item rounded-small fs-14 px-2"
                                                href="/types/vip"
                                                title="VIP"
                                            >
                                                VIP
                                            </a>
                                            <a
                                                className="dropdown-item rounded-small fs-14 px-2"
                                                href="/types/economy-cars"
                                                title="Economy"
                                            >
                                                Economy
                                            </a>
                                        </div>
                                    </div>

                                    <div className="p-2 flex-grow-1">
                                        <span className="d-block fs-9 px-2 letter-spacing-0_5 text-uppercase  bg-transparent">
                                            Body types
                                        </span>
                                        <div className="d-flex flex-column mt-2">
                                            <a
                                                className="dropdown-item rounded-small fs-14 px-2"
                                                href="/body-types/compact"
                                                title="Compact"
                                            >
                                                Compact
                                            </a>
                                            <a
                                                className="dropdown-item rounded-small fs-14 px-2"
                                                href="/body-types/convertible"
                                                title="Convertible"
                                            >
                                                Convertible
                                            </a>
                                            <a
                                                className="dropdown-item rounded-small fs-14 px-2"
                                                href="/body-types/coupe"
                                                title="Coupe"
                                            >
                                                Coupe
                                            </a>
                                            <a
                                                className="dropdown-item rounded-small fs-14 px-2"
                                                href="/body-types/hatchback"
                                                title="Hatchback"
                                            >
                                                Hatchback
                                            </a>
                                            <a
                                                className="dropdown-item rounded-small fs-14 px-2"
                                                href="/body-types/pickup"
                                                title="Pickup"
                                            >
                                                Pickup
                                            </a>
                                            <a
                                                className="dropdown-item rounded-small fs-14 px-2"
                                                href="/body-types/sedan"
                                                title="Sedan"
                                            >
                                                Sedan
                                            </a>
                                            <a
                                                className="dropdown-item rounded-small fs-14 px-2"
                                                href="/body-types/suv"
                                                title="SUV"
                                            >
                                                SUV
                                            </a>
                                            <a
                                                className="dropdown-item rounded-small fs-14 px-2"
                                                href="/body-types/van"
                                                title="VAN"
                                            >
                                                VAN
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="brands-container ms-2"
                            onMouseEnter={() => setShowBrands(true)}
                            onMouseLeave={() => setShowBrands(false)}
                        >
                            <button
                                className={`brands-button ${
                                    showBrands ? "active" : ""
                                }`}
                            >
                                <span className="text-decoration-none text-light fs-16 fw-semibold">
                                    Brands
                                </span>
                            </button>

                            {/* {showBrands && (
                                <div
                                    className="overlay-background"
                                    
                                ></div>
                            )} */}
                            <div
                                className={`brands-dropdown dropdown-menu w-100 ${
                                    showBrands ? "show" : ""
                                }`}
                                onMouseLeave={() => setShowBrands(false)}
                            >
                                <div className="row px-2 py-3 p-lg-2 m-1 flex-wrap allBrands">
                                    <div className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 rounded-small brandname">
                                        <a
                                            className="d-flex p-2 align-items-center text-decoration-none fs-14"
                                            title="Rolls Royce"
                                            href="/brands/rolls-royce"
                                        >
                                            <img
                                                className="mr-2"
                                                src={rolls_svg}
                                                alt="Rolls Royce"
                                                width={30}
                                                height={30}
                                            />
                                            Rolls Royce
                                        </a>
                                    </div>

                                    <div className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 rounded-small brandname">
                                        <a
                                            className="d-flex p-2 align-items-center text-decoration-none fs-14"
                                            title="Ferrari"
                                            href="/brands/ferrari"
                                        >
                                            <img
                                                className="mr-2"
                                                src={ferrari_svg}
                                                alt="Ferrari"
                                                width={30}
                                                height={30}
                                            />
                                            Ferrari
                                        </a>
                                    </div>

                                    <div className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 rounded-small brandname">
                                        <a
                                            className="d-flex p-2 align-items-center text-decoration-none fs-14"
                                            title="Lamborghini"
                                            href="/brands/lamborghini"
                                        >
                                            <img
                                                className="mr-2"
                                                src={lamborghini_svg}
                                                alt="Lamborghini"
                                                width={30}
                                                height={30}
                                            />
                                            Lamborghini
                                        </a>
                                    </div>

                                    <div className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 rounded-small brandname">
                                        <a
                                            className="d-flex p-2 align-items-center text-decoration-none fs-14"
                                            title="Audi"
                                            href="/brands/audi"
                                        >
                                            <img
                                                className="mr-2"
                                                src={audi_svg}
                                                alt="Audi"
                                                width={30}
                                                height={30}
                                            />
                                            Audi
                                        </a>
                                    </div>

                                    <div className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 rounded-small brandname">
                                        <a
                                            className="d-flex p-2 align-items-center text-decoration-none fs-14"
                                            title="Range Rover"
                                            href="/brands/range-rover"
                                        >
                                            <img
                                                className="mr-2"
                                                src={landRover_svg}
                                                alt="Range Rover"
                                                width={30}
                                                height={30}
                                            />
                                            Range Rover
                                        </a>
                                    </div>

                                    <div className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 rounded-small brandname">
                                        <a
                                            className="d-flex p-2 align-items-center text-decoration-none fs-14"
                                            title="Mercedes"
                                            href="/brands/mercedes"
                                        >
                                            <img
                                                className="mr-2"
                                                src={mercedes_svg}
                                                alt="Mercedes"
                                                width={30}
                                                height={30}
                                            />
                                            Mercedes
                                        </a>
                                    </div>

                                    <div className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 rounded-small brandname">
                                        <a
                                            className="d-flex p-2 align-items-center text-decoration-none fs-14"
                                            title="Porsche"
                                            href="/brands/porsche"
                                        >
                                            <img
                                                className="mr-2"
                                                src={porsche_svg}
                                                alt="Porsche"
                                                width={30}
                                                height={30}
                                            />
                                            Porsche
                                        </a>
                                    </div>

                                    <div className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 rounded-small brandname">
                                        <a
                                            className="d-flex p-2 align-items-center text-decoration-none fs-14"
                                            title="BMW"
                                            href="/brands/bmw"
                                        >
                                            <img
                                                className="mr-2"
                                                src={bmw_svg}
                                                alt="BMW"
                                                width={30}
                                                height={30}
                                            />
                                            BMW
                                        </a>
                                    </div>

                                    <div className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 rounded-small brandname">
                                        <a
                                            className="d-flex p-2 align-items-center text-decoration-none fs-14"
                                            title="Ford"
                                            href="/brands/ford"
                                        >
                                            <img
                                                className="mr-2"
                                                style={{
                                                    transform: "scale(1.4)",
                                                }}
                                                src={ford_svg}
                                                alt="Ford"
                                                width={30}
                                                height={30}
                                            />
                                            Ford
                                        </a>
                                    </div>

                                    <div className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 rounded-small brandname">
                                        <a
                                            className="d-flex p-2 align-items-center text-decoration-none fs-14"
                                            title="Jaguar"
                                            href="/brands/jaguar"
                                        >
                                            <img
                                                className="mr-2"
                                                src={jaguar_svg}
                                                alt="Jaguar"
                                                width={30}
                                                height={30}
                                            />
                                            Jaguar
                                        </a>
                                    </div>

                                    <div className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 rounded-small brandname">
                                        <a
                                            className="d-flex p-2 align-items-center text-decoration-none fs-14"
                                            title="Chevrolet"
                                            href="/brands/chevrolet"
                                        >
                                            <img
                                                className="mr-2"
                                                src={chevrolet_svg}
                                                alt="Chevrolet"
                                                width={30}
                                                height={30}
                                            />
                                            Chevrolet
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group">
                        <span className="header-language">
                            English
                            <IoMdArrowDropdown fill="white" />
                        </span>

                        <div className="dropdown-container">
                            <div
                                className="header-person-image"
                                onClick={toggleDropdown}
                            >
                                <img
                                    src="https://renty.ae/assets-nd/images/placeholder/not-logged-in.png"
                                    alt="not-logged-in-profile-icon"
                                    height="24"
                                    width="24"
                                />{" "}
                                <IoMdArrowDropdown fill="white" />
                            </div>

                            <div
                                className={`dropdown-menu person-dropdown ${
                                    isOpen ? "show" : ""
                                }`}
                            >
                                <a
                                    href="/login"
                                    className="dropdown-item text-right fs-14 rounded-small"
                                >
                                    Log in
                                </a>
                                <a
                                    href="/register"
                                    className="dropdown-item text-right fs-14 rounded-small"
                                >
                                    Sign up
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}