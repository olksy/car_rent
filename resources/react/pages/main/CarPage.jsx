import Footer from "../../layouts/Footer"
import 'swiper/css';
import "swiper/css/navigation";
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import RightColumn from "./CarPageComponents/RightColumn";
import LeftColumn from "./CarPageComponents/LeftColumn";
import Header from "../../layouts/Header";
import { IoIosArrowForward } from "react-icons/io";
import ModalWindowReserve from "./ModalWindowReserve";
import { Helmet } from "react-helmet-async";
import { PulseLoader } from "react-spinners";

export default function CarPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { slug, id } = useParams();
    const navigate = useNavigate();
    const [isBurger, setIsBurger] = useState(false);
    const [isBooked, setIsBooked] = useState(false);
    const toggleState = (setter) => {
        setter((prevState) => !prevState);
    };

    useEffect(() => {
        setLoading(true);
        if (data.id) {
            axios
                .get(
                    `http://127.0.0.1:8000/api/check-car-availability/${data.id}`
                )
                .then((response) => {
                    setIsBooked(response.data.isBooked);
                })
                .catch((error) => {
                    console.error("Error checking car availability:", error);
                });
        }

        axios
            .get(`http://127.0.0.1:8000/api/cars/${slug}/${id}/detail`)
            .then((response) => {
                if (!response.data || Object.keys(response.data).length === 0) {
                    navigate("/page/not-found");
                } else {
                    setData(response.data);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
                navigate("/page/not-found");
                setLoading(false);
            });

        if (isBurger === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [slug, id, navigate, isBurger, data.id]);

    if (loading) {
        return (
            <>
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <PulseLoader color="#13428d" className="" />
                </div>
            </>
        );
    }

    const formattedBrandName = data.brand?.name
        ?.toLowerCase()
        .replace(/ /g, "-");

    return (
        <>
            <Helmet>
                <title>
                    Rent a {data.brand?.name} {data.title} ({data.color}),{" "}
                    {String(data.year)} ID-{String(data.id)}, in Dubai - Rently
                </title>
            </Helmet>
            <div className="bg-white">
                <Header />
                <ModalWindowReserve
                    toggleState={toggleState}
                    setIsBurger={setIsBurger}
                    isBurger={isBurger}
                    isBooked={isBooked}
                    data={data}
                />

                <div className="container px-lg-0">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb d-flex align-items-center mt-sm-3 mt-2 mb-2">
                            <li className="breadcrumb-item d-flex align-items-center">
                                <a
                                    href="/"
                                    className="text-decoration-none fw-semibold fs-12"
                                >
                                    Rent a car
                                </a>
                            </li>

                            <li className="mx-1 d-flex align-items-center">
                                <IoIosArrowForward className="fs-12" />
                            </li>

                            <li className="breadcrumb-item d-flex align-items-center">
                                <a
                                    href="/all-brands"
                                    className="text-decoration-none fw-semibold fs-12"
                                >
                                    Brands
                                </a>
                            </li>

                            <li className="mx-1 d-flex align-items-center">
                                <IoIosArrowForward className="fs-12" />
                            </li>

                            <li className="breadcrumb-item d-flex align-items-center">
                                <a
                                    href={`/brands/${data.brand?.slug}`}
                                    className="text-decoration-none fw-semibold fs-12"
                                >
                                    {data.brand?.name}
                                </a>
                            </li>

                            <li className="mx-1 d-flex align-items-center">
                                <IoIosArrowForward className="fs-12" />
                            </li>

                            <li
                                className="breadcrumb-item active fs-12 d-flex align-items-center fw-semibold"
                                aria-current="page"
                            >
                                {data.brand?.name} {data.title} ({data.color}),{" "}
                                {data.year}
                            </li>
                        </ol>
                    </nav>

                    {/* Car name */}
                    <div className="py-sm-3 mt-0 pt-lg-0 d-flex align-items-center mt-lg-0">
                        <span className="mr-2 d-flex align-items-center brand-img">
                            <img
                                src={`https://renty.ae/assets-nd/icons/site/brand_svg/${formattedBrandName}.svg`}
                                width="60"
                                height="60"
                                loading="lazy"
                            />
                        </span>

                        <h1 className="fs-30 fs-m-18 fw-normal mb-0">
                            Rent {data.brand?.name} {data.title} ({data.color}),{" "}
                            {data.year} in Dubai
                        </h1>
                    </div>

                    {/* Else information */}
                    <div
                        className="d-flex position-relative justify-content-between"
                        style={{ columnGap: "60px" }}
                    >
                        <LeftColumn
                            data={data}
                            toggleState={toggleState}
                            setIsBurger={setIsBurger}
                            isBooked={isBooked}
                        />

                        <RightColumn data={data} isBurger={isBurger} isBooked={isBooked} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}