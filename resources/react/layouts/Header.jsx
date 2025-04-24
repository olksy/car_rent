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
import { useEffect, useState } from "react";
import { IoGridOutline } from "react-icons/io5";
import { IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { MdKeyboardArrowRight, MdLogout } from "react-icons/md";
import { BsCarFront } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { PiBookOpen } from "react-icons/pi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [showBrands, setShowBrands] = useState(false);
    const [showRentCar, setShowRentCar] = useState(false);
    const [isBurger, setIsBurger] = useState(false);
    const [isAccount, setIsAccount] = useState(false);
    const [isCategories, setIsCategories] = useState(false);
    const [isTypes, setIsTypes] = useState(false);
    const [isBrands, setIsBrands] = useState(false);

    const token = localStorage.getItem("token");

    useEffect(() => {
        if (isBurger || isAccount || isCategories || isTypes || isBrands) {
          document.body.classList.add("overflow-hidden");
        } else {
          document.body.classList.remove("overflow-hidden");
        }
    
        return () => {
          document.body.classList.remove("overflow-hidden");
        };
    }, [isBurger, isAccount, isCategories, isTypes, isBrands]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    function goToCar(event, url) {
        event.preventDefault();
        window.location.href = url;
    }

    const toggleState = (setter) => {
        setter(prevState => !prevState);
    };

    return (
        <>
            <header className="header-layout wrapper m-0 py-lg-3 py-sm-0">
                <div className="d-none d-lg-flex container justify-content-between px-lg-0 position-relative">
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
                                className="rent-car-dropdown dropdown-menu w-100 d-flex"
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
                                                href="/types/electric"
                                                title="Electric (EV)"
                                            >
                                                Electric (EV)
                                            </a>
                                            <a
                                                className="dropdown-item rounded-small fs-14 px-2"
                                                href="/types/classic"
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
                                                href="/types/sports"
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
                                                href="/types/economy"
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

                            <div
                                className="brands-dropdown dropdown-menu w-100 d-flex"
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
                                className={`dropdown-menu person-dropdown d-flex flex-column ${
                                    isOpen ? "person-dd" : ""
                                }`}
                            >
                                <a
                                    href={token ? "/user-dashboard" : "/login"}
                                    className="dropdown-item text-right fs-14 rounded-small"
                                >
                                    {token ? "Profile" : "Log in"}
                                </a>
                                <a
                                    href={token ? "/logout" : "/register"}
                                    className="dropdown-item text-right fs-14 rounded-small"
                                >
                                    {token ? "Logout" : "Sign up"}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-lg-none navbar-mobile d-flex align-items-center py-2 w-100">
                    <button
                        className="menu-sm btn btn-medium text-reset border-0"
                        onClick={() => toggleState(setIsBurger)}
                    >
                        <LuMenu className="fs-24" />
                    </button>

                    <a
                        className="mx-auto bg-transparent"
                        aria-label="Home page"
                        href="/"
                    >
                        <img
                            src="https://renty.ae/assets-nd/icons/site/logo-dark.svg"
                            width="98"
                            height="22"
                            alt="Renty.ae"
                            title="Renty.ae"
                        />
                    </a>

                    <button
                        className="btn btn-medium border-0"
                        onClick={() => toggleState(setIsAccount)}
                    >
                        <img
                            src="https://renty.ae/assets-nd/images/placeholder/not-logged-in.png"
                            alt="not-logged-in-profile-icon"
                            height="24"
                            width="24"
                        />
                    </button>
                </div>
            </header>

            {/* ---Main-modal-window--- */}
            <div
                className={`modal-menu h-100 w-100 d-lg-none ${
                    isBurger ? "modal-clicked" : "modal-unclicked"
                }`}
            >
                <div className="modal-header">
                    <button
                        className="menu-sm btn btn-medium text-reset position-absolute border-0"
                        onClick={() => toggleState(setIsBurger)}
                    >
                        <IoMdClose fill="white" className="fs-24" />
                    </button>

                    <a
                        className="mx-auto bg-transparent p-2"
                        aria-label="Home page"
                        href="/"
                    >
                        <img
                            src="https://renty.ae/assets-nd/icons/site/logo-dark.svg"
                            width="98"
                            height="22"
                            alt="Renty.ae"
                            title="Renty.ae"
                        />
                    </a>
                </div>

                <div className="modal-body flex-grow-1 p-0 bg-white h-100">
                    <ul className="nav flex-column border-bottom p-2 pt-3">
                        <li className="nav-item">
                            <div
                                className="nav-link d-flex align-items-center"
                                onClick={() => toggleState(setIsCategories)}
                            >
                                <BiSearch
                                    fill="#009fe2"
                                    className="fs-18 me-3"
                                />
                                <span className="me-1 fs-14 lh-lg">
                                    Categories
                                </span>
                                <MdKeyboardArrowRight
                                    fill="#adb7c7"
                                    className="fs-18 ms-auto"
                                />
                            </div>
                        </li>
                        <li className="nav-item">
                            <div
                                className="nav-link d-flex align-items-center"
                                onClick={() => toggleState(setIsTypes)}
                            >
                                <BsCarFront
                                    fill="#009fe2"
                                    className="fs-18 me-3"
                                />
                                <span className="me-1 fs-14 lh-lg">
                                    Body Types
                                </span>
                                <MdKeyboardArrowRight
                                    fill="#adb7c7"
                                    className="fs-18 ms-auto"
                                />
                            </div>
                        </li>
                        <li className="nav-item">
                            <div
                                className="nav-link d-flex align-items-center"
                                onClick={() => toggleState(setIsBrands)}
                            >
                                <FaRegStar
                                    fill="#009fe2"
                                    className="fs-18 me-3"
                                />
                                <span className="me-1 fs-14 lh-lg">Brands</span>
                                <MdKeyboardArrowRight
                                    fill="#adb7c7"
                                    className="fs-18 ms-auto"
                                />
                            </div>
                        </li>
                    </ul>

                    <ul className="nav p-2 flex-column">
                        <li className="nav-item">
                            <a
                                className="nav-link pl-3 burger-item"
                                href="/contact"
                            >
                                <span className="mr-1 lh-lg fs-14">
                                    Contact us
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link pl-3 burger-item"
                                href="/terms-conditions"
                            >
                                <span className="mr-1 lh-lg fs-14">
                                    Terms & conditions
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link pl-3 burger-item"
                                href="/privacy-policy"
                            >
                                <span className="mr-1 lh-lg fs-14">
                                    Privacy policy
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* ---Categories--- */}
            <div
                className={`modal-menu h-100 w-100 d-lg-none ${
                    isCategories ? "modal-clicked" : "modal-unclicked"
                }`}
            >
                <div className="modal-header">
                    <button
                        className="menu-sm btn btn-medium text-reset position-absolute border-0"
                        onClick={() => toggleState(setIsCategories)}
                    >
                        <MdKeyboardArrowLeft fill="white" className="fs-30" />
                    </button>

                    <span className="fs-16 fw-semibold mx-auto text-white">
                        Categories
                    </span>
                </div>

                <div className="modal-body flex-grow-1 p-2 bg-white h-100">
                    <div className="nav flex-column">
                        <a
                            href="/types/electric"
                            className="nav-link categories-item"
                        >
                            <BiSearch fill="#8c98ab" className="fs-20 me-3" />
                            <span className="me-1 fs-14 lh-lg w-100">
                                Electric (EV)
                            </span>
                        </a>
                        <a
                            href="/types/luxury"
                            className="nav-link categories-item"
                        >
                            <BiSearch fill="#8c98ab" className="fs-20 me-3" />
                            <span className="me-1 fs-14 lh-lg w-100">
                                Luxury
                            </span>
                        </a>
                        <a
                            href="/types/classic"
                            className="nav-link categories-item"
                        >
                            <BiSearch fill="#8c98ab" className="fs-20 me-3" />
                            <span className="me-1 fs-14 lh-lg w-100">
                                Classic
                            </span>
                        </a>
                        <a
                            href="/types/business"
                            className="nav-link categories-item"
                        >
                            <BiSearch fill="#8c98ab" className="fs-20 me-3" />
                            <span className="me-1 fs-14 lh-lg w-100">
                                Business
                            </span>
                        </a>
                        <a
                            href="/types/prestige"
                            className="nav-link categories-item"
                        >
                            <BiSearch fill="#8c98ab" className="fs-20 me-3" />
                            <span className="me-1 fs-14 lh-lg w-100">
                                Prestige
                            </span>
                        </a>
                        <a
                            href="/types/sports"
                            className="nav-link categories-item"
                        >
                            <BiSearch fill="#8c98ab" className="fs-20 me-3" />
                            <span className="me-1 fs-14 lh-lg w-100">
                                Sports
                            </span>
                        </a>
                        <a
                            href="/types/vip"
                            className="nav-link categories-item"
                        >
                            <BiSearch fill="#8c98ab" className="fs-20 me-3" />
                            <span className="me-1 fs-14 lh-lg w-100">VIP</span>
                        </a>
                        <a
                            href="/types/economy"
                            className="nav-link categories-item"
                        >
                            <BiSearch fill="#8c98ab" className="fs-20 me-3" />
                            <span className="me-1 fs-14 lh-lg w-100">
                                Economy
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            {/* ---Body-Types--- */}
            <div
                className={`modal-menu h-100 w-100 d-lg-none ${
                    isTypes ? "modal-clicked" : "modal-unclicked"
                }`}
            >
                <div className="modal-header">
                    <button
                        className="menu-sm btn btn-medium text-reset position-absolute border-0"
                        onClick={() => toggleState(setIsTypes)}
                    >
                        <MdKeyboardArrowLeft fill="white" className="fs-30" />
                    </button>

                    <span className="fs-16 fw-semibold mx-auto text-white">
                        Body types
                    </span>
                </div>

                <div className="modal-body flex-grow-1 p-2 bg-white h-100">
                    <div className="nav flex-column">
                        <a
                            href="/body-types/compact"
                            className="nav-link categories-item"
                        >
                            <BiSearch fill="#8c98ab" className="fs-20 me-3" />
                            <span className="me-1 fs-14 lh-lg w-100">
                                Compact
                            </span>
                        </a>
                        <a
                            href="/body-types/convertible"
                            className="nav-link categories-item"
                        >
                            <BiSearch fill="#8c98ab" className="fs-20 me-3" />
                            <span className="me-1 fs-14 lh-lg w-100">
                                Convertible
                            </span>
                        </a>
                        <a
                            href="/body-types/coupe"
                            className="nav-link categories-item"
                        >
                            <BiSearch fill="#8c98ab" className="fs-20 me-3" />
                            <span className="me-1 fs-14 lh-lg w-100">
                                Coupe
                            </span>
                        </a>
                        <a
                            href="/body-types/hatchback"
                            className="nav-link categories-item"
                        >
                            <BiSearch fill="#8c98ab" className="fs-20 me-3" />
                            <span className="me-1 fs-14 lh-lg w-100">
                                Hatchback
                            </span>
                        </a>
                        <a
                            href="/body-types/pickup"
                            className="nav-link categories-item"
                        >
                            <BiSearch fill="#8c98ab" className="fs-20 me-3" />
                            <span className="me-1 fs-14 lh-lg w-100">
                                Pickup
                            </span>
                        </a>
                        <a
                            href="/body-types/sedan"
                            className="nav-link categories-item"
                        >
                            <BiSearch fill="#8c98ab" className="fs-20 me-3" />
                            <span className="me-1 fs-14 lh-lg w-100">
                                Sedan
                            </span>
                        </a>
                        <a
                            href="/body-types/suv"
                            className="nav-link categories-item"
                        >
                            <BiSearch fill="#8c98ab" className="fs-20 me-3" />
                            <span className="me-1 fs-14 lh-lg w-100">SUV</span>
                        </a>
                        <a
                            href="/body-types/van"
                            className="nav-link categories-item"
                        >
                            <BiSearch fill="#8c98ab" className="fs-20 me-3" />
                            <span className="me-1 fs-14 lh-lg w-100">VAN</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* ---Brands--- */}
            <div
                className={`modal-menu h-100 w-100 d-lg-none ${
                    isBrands ? "modal-clicked" : "modal-unclicked"
                }`}
            >
                <div className="modal-header">
                    <button
                        className="menu-sm btn btn-medium text-reset position-absolute border-0"
                        onClick={() => toggleState(setIsBrands)}
                    >
                        <MdKeyboardArrowLeft fill="white" className="fs-30" />
                    </button>

                    <span className="fs-16 fw-semibold mx-auto text-white">
                        All brands
                    </span>
                </div>

                <div className="modal-body flex-grow-1 p-0 bg-white h-100">
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

            {/* ---Account--- */}
            <div
                className={`modal-menu h-100 w-100 d-lg-none ${
                    isAccount ? "modal-clicked" : "modal-unclicked"
                }`}
            >
                <div className="modal-header">
                    <button
                        className="menu-sm btn btn-medium text-reset position-absolute border-0"
                        onClick={() => toggleState(setIsAccount)}
                    >
                        <IoMdClose fill="white" className="fs-24" />
                    </button>

                    <span className="fs-16 fw-semibold mx-auto text-white">
                        Account
                    </span>
                </div>

                <div className="modal-body flex-grow-1 p-0 bg-white h-100">
                    <ul className="nav flex-column border-bottom p-2 mt-1">
                        <li
                            className="nav-item account-item"
                            onClick={(event) =>
                                goToCar(
                                    event,
                                    `${token ? "/user-dashboard" : "/login"}`
                                )
                            }
                        >
                            <div className="nav-link d-flex align-items-center">
                                {token ? (
                                    <RxAvatar
                                        fill="#8c98ab"
                                        className="fs-18 me-3"
                                    />
                                ) : (
                                    <MdLogin
                                        fill="#8c98ab"
                                        className="fs-18 me-3"
                                    />
                                )}
                                <span className="me-1 fs-14 lh-lg w-100">
                                    {token ? "Profile" : "Log in"}
                                </span>
                            </div>
                        </li>

                        <li
                            className="nav-item"
                            onClick={(event) =>
                                goToCar(
                                    event,
                                    `${token ? "/logout" : "/register"}`
                                )
                            }
                        >
                            <div className="nav-link d-flex align-items-center account-item">
                                {token ? (
                                    <MdLogout
                                        fill="#8c98ab"
                                        className="fs-18 me-3"
                                    />
                                ) : (
                                    <PiBookOpen
                                        fill="#8c98ab"
                                        className="fs-18 me-3"
                                    />
                                )}
                                <span className="me-1 fs-14 lh-lg w-100">
                                    {token ? "Logout" : "Sign up"}
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}