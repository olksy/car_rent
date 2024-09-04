import { IoGridOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import strings from "../pages/images/icons/strings.png";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header className="header-layout wrapper m-0 py-3">
                <img
                    src={strings}
                    className="strings"
                    width="32"
                    height="32"
                    alt="strings-icon"
                />
                <div className="header-actions">
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
                        <button className="header-button">
                            <IoGridOutline />
                            <a
                                href="#"
                                className="text-decoration-none fw-normal fs-16"
                            >
                                Rent a car
                            </a>
                        </button>

                        <button className="brands-button">
                            <span className="text-decoration-none text-light fs-16 fw-semibold">
                                Brands
                            </span>
                        </button>
                    </div>
                </div>
                <div className="group">
                    <span className="header-language">
                        English
                        <IoMdArrowDropdown fill="white" />
                    </span>

                    <div className="dropdown-container">
                        <div className="header-person-image" onClick={toggleDropdown}>
                            <img
                                src="https://renty.ae/assets-nd/images/placeholder/not-logged-in.png"
                                alt="not-logged-in-profile-icon"
                                height="24"
                                width="24"
                            />{" "}
                            <IoMdArrowDropdown fill="white" />
                        </div>

                        <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
                            <a href="/login" className="dropdown-item text-right fs-14">
                                Log in
                            </a>
                            <a href="/register" className="dropdown-item text-right fs-14">
                                Sign up
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}