import { useState, useRef, useEffect } from "react";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import { BiSortAlt2 } from "react-icons/bi";
import { RiArrowDownSLine } from "react-icons/ri";
import { useParams } from "react-router-dom";

export default function Brand () {
    const [isSortPrice, setIsSortPrice] = useState(false);
    const { brand } = useParams();
    const dropdownRef = useRef(null);

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
    return (
        <>
            <Header />
            <div className="container pt-3 pt-lg-4 px-lg-0">
                <div className="d-block pb-2">
                    <h1 className="d-inline fs-36">
                        Rent {brand.charAt(0).toUpperCase() + brand.slice(1)} in
                        Dubai
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
            </div>
            <Footer />
        </>
    );
}