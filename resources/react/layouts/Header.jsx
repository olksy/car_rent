import { IoGridOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import strings from "../pages/images/icons/strings.png";

export default function Header() {
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
                    <span className="header-person-image">
                        <img
                            src="https://renty.ae/assets-nd/images/placeholder/not-logged-in.png"
                            alt="not-logged-in-profile-icon"
                            height="24"
                            width="24"
                        />{" "}
                        <IoMdArrowDropdown fill="white" />
                    </span>
                </div>
            </header>
        </>
    );
}