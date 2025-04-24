/* eslint-disable react/prop-types */
import Footer from "../layouts/Footer";
import audisvg from "./images/img/Cars/audi.svg";
import bmwsvg from "./images/img/Cars/logo-bmw-2020.svg";
import ferrarisvg from "./images/img/Cars/ferrari-4.svg";
import lamborghinisvg from "./images/img/Cars/lamborghini.svg";
import mercedessvg from "./images/img/Cars/mercedes-benz-9.svg";
import landroversvg from "./images/img/Cars/land-rover-2.svg";
import porchesvg from "./images/img/Cars/porsche.svg";
import rollssvg from "./images/img/Cars/rolls-royce.svg";
import googleReviews from "./images/img/Reviews.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../layouts/Header";
import { MdChevronRight, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import { PulseLoader } from "react-spinners";

export default function Index({ data }) {
    const [brands, setBrands] = useState([]);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true);
        axios
            .get("http://127.0.0.1:8000/api/brands")
            .then((response) => setBrands(response.data))
            .catch((error) => console.error("Error fetching brands:", error))
        axios
            .get("http://127.0.0.1:8000/api/car_images")
            .then((response) => setImages(response.data))
            .catch((error) =>
                console.error("Error fetching car images:", error)
            )
            .finally(() => setLoading(false));
    }, []);

    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    const [loadingCars, setLoadingCars] = useState(false);

    const handleSearch = async () => {
        if (!searchTerm) {
            setResults([]);
            return;
        }
        setLoadingCars(true);

        try {
            const response = await axios.get(
                `http://127.0.0.1:8000/api/cars/search?search=${searchTerm}`
            );
            setResults(response.data);
        } catch (error) {
            console.error("Error fetching search results:", error);
            setResults([]);
        }

        setLoadingCars(false);
    };

    useEffect(() => {
        if (searchTerm) {
            const timeoutId = setTimeout(() => {
                handleSearch();
            }, 500);
            return () => clearTimeout(timeoutId);
        } else {
            setResults([]);
        }
    }, [searchTerm]);

    if (loading) {
        return (
            <>
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <PulseLoader color="#13428d" />
                </div>
            </>
        );
    }


    const filteredLuxuryCars = data.filter(car => car.category_id === 2).slice(0, 4);
    const filteredSUVCars = data.filter(car => car.body_type_id === 2).slice(0, 4);
    const filteredSportsCars = data.filter(car => car.category_id === 7).slice(0, 4);

    const pathToImg = 'http://127.0.0.1:8000/storage/images';
  
    return (
        <>
            <Helmet>
                <title>Rent a car Dubai. Car Rental - Rently</title>
            </Helmet>
            <Header />
            <section className="rent">
                <div className="rent-title">
                    <h2>Rent a car in Dubai</h2>
                    <h3>Find a car of your dream in 60 seconds</h3>
                </div>
                <div className="rent-actions">
                    <div className="search-form flex-column">
                        <div className="d-flex flex-row gap-10">
                            <div className="search-input-group">
                                <input
                                    className="search-input rounded-top fs-14 rounded"
                                    type="text"
                                    placeholder="Search a car by brand or model"
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                />
                                {loadingCars ? (
                                    <div className="search-result d-flex bg-white rounded-bottom">
                                        <PulseLoader
                                            color="#13428d"
                                            className="fs-14"
                                        />
                                    </div>
                                ) : (
                                    results.length > 0 && (
                                        <div className="search-result d-flex bg-white rounded-bottom p-1 p-lg-2">
                                            <ul className="w-100">
                                                {results.map((car) => {
                                                    const formattedBrandName =
                                                        car.brand?.name
                                                            ?.toLowerCase()
                                                            .replace(/ /g, "-");

                                                    return (
                                                        <a
                                                            key={car.id}
                                                            href={`/cars/${car.slug}/${car.id}/detail`}
                                                            className="text-decoration-none d-flex fs-14 p-1 p-lg-2 align-items-center rounded"
                                                        >
                                                            <span className="mr-2 d-flex align-items-center brand-img">
                                                                <img
                                                                    src={`https://renty.ae/assets-nd/icons/site/brand_svg/${formattedBrandName}.svg`}
                                                                    width="30"
                                                                    height="30"
                                                                    loading="lazy"
                                                                />
                                                            </span>
                                                            <b className="fs-14">
                                                                {car.brand.name}
                                                            </b>
                                                            &nbsp; -&nbsp;
                                                            {car.title}
                                                        </a>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    )
                                )}

                                {searchTerm && results.length === 0 && (
                                    <div className="search-result d-flex bg-white rounded-bottom p-2">
                                        <span className="fs-14">
                                            No results found. Try a different
                                            search.
                                        </span>
                                    </div>
                                )}
                                <button className="search-form-button rounded bg-white">
                                    <FaMagnifyingGlass />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="popular wrapper">
                <div className="popular-title">
                    <h6>Popular car rental categories in Dubai</h6>
                </div>
                <div className="car-types">
                    <a
                        className="car-block text-decoration-none"
                        href="/types/luxury"
                    >
                        <img
                            src="https://renty.ae/assets-nd/icons/desc-car-types/luxury.svg"
                            alt="Luxury"
                        />
                        Luxury
                    </a>
                    <a
                        className="car-block text-decoration-none"
                        href="/types/economy"
                    >
                        <img
                            src="https://renty.ae/assets-nd/icons/desc-car-types/economy-cars.svg"
                            alt="Economy"
                        />
                        Economy
                    </a>
                    <a
                        className="car-block text-decoration-none"
                        href="/types/sports"
                    >
                        <img
                            src="https://renty.ae/assets-nd/icons/desc-car-types/sports-cars.svg"
                            alt="Sports"
                        />
                        Sports
                    </a>
                    <a
                        className="car-block text-decoration-none"
                        href="/body-types/suv"
                    >
                        <img
                            src="https://renty.ae/assets/icons/cars/suv.svg"
                            alt="SUV"
                        />
                        SUV
                    </a>
                    <a
                        className="car-block text-decoration-none d-none d-md-flex"
                        href="/body-types/convertible"
                    >
                        <img
                            src="https://renty.ae/assets/icons/cars/convertible.svg"
                            width="61"
                            height="31"
                            alt="Convertible"
                        />
                        Convertible
                    </a>
                    <a
                        className="car-block text-decoration-none d-none d-lg-flex"
                        href="/types/business"
                    >
                        <img
                            src="https://renty.ae/assets-nd/icons/desc-car-types/business.svg"
                            alt="Business"
                        />
                        Business
                    </a>
                    <a
                        className="car-block text-decoration-none d-none d-lg-flex"
                        href="/types/electric"
                    >
                        <img
                            src="https://renty.ae/assets-nd/icons/desc-car-types/electric-ev-cars.svg"
                            alt="Electric (EV)"
                        />
                        Electric (EV)
                    </a>
                    <a
                        className="car-block text-decoration-none d-none d-lg-flex"
                        href="/body-types/van"
                    >
                        <img
                            src="https://renty.ae/assets/icons/cars/van.svg"
                            alt="VAN"
                        />
                        VAN
                    </a>
                </div>
            </section>
            <div className="brands pt-5 pb-3 pb-lg-4">
                <section className="special-wrapper">
                    <div className="brands-title align-items-center">
                        <h4>Most wanted car rental brands in Dubai</h4>
                        <h6 className="d-none d-lg-block">
                            <a
                                href="/all-brands"
                                className="text-decoration-none p-2 rounded-small"
                            >
                                All Brands
                            </a>
                        </h6>
                    </div>
                    <div className="car-brands mt-4 mt-sm-3">
                        <a
                            href="/brands/audi"
                            className="car-brand d-sm-flex flex-row flex-md-column gap-10 flex-lg-column align-items-sm-center py-2 p-2 text-decoration-none d-flex align-items-center justify-content-lg-center"
                        >
                            <img
                                src={audisvg}
                                alt="Audi"
                                width="48"
                                height="48"
                            />
                            Audi
                        </a>
                        <a
                            href="/brands/bmw"
                            className="car-brand d-sm-flex flex-row flex-md-column gap-10 flex-lg-column align-items-sm-center py-2 p-2 text-decoration-none d-flex align-items-center justify-content-lg-center"
                        >
                            <img
                                src={bmwsvg}
                                alt="BMW"
                                width="48"
                                height="48"
                            />
                            BMW
                        </a>
                        <a
                            href="/brands/ferrari"
                            className="car-brand d-sm-flex flex-row flex-md-column gap-10 flex-lg-column align-items-sm-center py-2 p-2 text-decoration-none d-flex align-items-center justify-content-lg-center"
                        >
                            <img
                                src={ferrarisvg}
                                alt="Ferrari"
                                width="48"
                                height="48"
                            />
                            Ferrari
                        </a>
                        <a
                            href="/brands/lamborghini"
                            className="car-brand d-sm-flex flex-row flex-md-column gap-10 flex-lg-column align-items-sm-center py-2 p-2 text-decoration-none d-flex align-items-center justify-content-lg-center"
                        >
                            <img
                                src={lamborghinisvg}
                                alt="Lamborghini"
                                width="48"
                                height="48"
                            />
                            Lamborghini
                        </a>
                        <a
                            href="/brands/mercedes"
                            className="car-brand d-sm-flex flex-row flex-md-column gap-10 flex-lg-column align-items-sm-center py-2 p-2 text-decoration-none d-flex align-items-center justify-content-lg-center"
                        >
                            <img
                                src={mercedessvg}
                                alt="Mercedes"
                                width="48"
                                height="48"
                            />
                            Mercedes
                        </a>
                        <a
                            href="/brands/range-rover"
                            className="car-brand d-sm-flex flex-row flex-md-column gap-10 flex-lg-column align-items-sm-center py-2 p-2 text-decoration-none d-flex align-items-center justify-content-lg-center"
                        >
                            <img
                                src={landroversvg}
                                alt="Land-rover"
                                width="48"
                                height="48"
                            />
                            Range Rover
                        </a>
                        <a
                            href="/brands/porsche"
                            className="car-brand d-sm-flex flex-row flex-md-column gap-10 flex-lg-column align-items-sm-center py-2 p-2 text-decoration-none d-flex align-items-center justify-content-lg-center"
                        >
                            <img
                                src={porchesvg}
                                alt="Porsche"
                                width="48"
                                height="48"
                            />
                            Porsche
                        </a>
                        <a
                            href="/brands/rolls-royce"
                            className="car-brand d-sm-flex flex-row flex-md-column gap-10 flex-lg-column align-items-sm-center py-2 p-2 text-decoration-none d-flex align-items-center justify-content-lg-center"
                        >
                            <img
                                src={rollssvg}
                                alt="Rolls-royce"
                                width="48"
                                height="48"
                            />
                            Rolls Royce
                        </a>
                    </div>
                    <a
                        href="/all-brands"
                        className="all-brands d-lg-none d-flex gap-10 text-decoration-none rounded-small py-2 mt-2 align-items-center justify-content-center w-100"
                    >
                        <span className="fs-13 letter-spacing-0_2 fw-bold text-uppercase text-truncate">
                            All brands
                        </span>
                        <MdOutlineKeyboardArrowRight
                            fill="#1359ba"
                            className="fs-20"
                        />
                    </a>
                </section>
            </div>

            <section className="Reviews-partners mt-4">
                <div className="reviews-container special-wrapper">
                    <div className="reviews px-lg-5 p-4 align-items-start align-items-lg-center">
                        <div className="reviews-title d-flex flex-column mb-2 mb-lg-0">
                            <h3 className="mb-1 mb-lg-0">
                                Why you should rent a car with us?
                            </h3>
                            <p className="fs-16">
                                #1 car rental company in Dubai on Google
                            </p>
                        </div>
                        <a
                            className="d-flex align-items-center rev-location"
                            href="https://www.google.com/maps/place/Renty+-+Rent+Luxury+Car+in+Dubai/@25.1608085,55.2372231,17z/data=!4m8!3m7!1s0x3e5f6985ae4b1d7d:0x1fea6bf21aa114ba!8m2!3d25.1608085!4d55.2372231!9m1!1b1!16s%2Fg%2F11h4cqq5n4?hl=en"
                        >
                            <div className="d-flex align-items-center rev-location">
                                <div className="reviews-location border-end px-3 px-sm-4">
                                    <img
                                        className="home-page-company-logo"
                                        src="https://renty.ae/assets-nd/icons/site/logo-light.svg"
                                        alt="Renty.ae"
                                        title="Renty.ae"
                                        loading="lazy"
                                        width="125"
                                        height="90"
                                    />
                                </div>
                                <div className="google-reviews m-auto px-lg-4">
                                    <img
                                        src={googleReviews}
                                        alt="Google Reviews"
                                        height={80}
                                    />
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="partners px-lg-5 px-4 py-3 d-block d-lg-flex mt-4 mt-lg-5">
                        <div className="partners-title">
                            <h4 className="fs-24 mb-sm-2">
                                Official partners with
                            </h4>
                        </div>
                        <div className="partners-list d-lg-flex d-md-flex d-sm-grid">
                            <a
                                className="text-decoration-none"
                                href="https://www.emirates.com/ua/english/"
                            >
                                <div className="partners-list-item">
                                    <img
                                        src="https://renty.ae/uploads/banner/partner/ea53b7a523194f35e59035b7d483aa7c.svg"
                                        loading="lazy"
                                        alt="Rent a car partner in Dubai"
                                        title="Car rental partner in Dubai"
                                        width="150"
                                        height="80"
                                    />
                                </div>
                            </a>
                            <a
                                className="text-decoration-none"
                                href="https://www.forbes.com/"
                            >
                                <div className="partners-list-item">
                                    <img
                                        src="https://renty.ae/uploads/banner/partner/1f5650a5623b640b46ea3d920b876dbe.svg"
                                        alt="Rent a car partner in Dubai"
                                        title="Car rental partner in Dubai"
                                        width="150"
                                        height="80"
                                    />
                                </div>
                            </a>
                            <a
                                className="text-decoration-none"
                                href="https://www.skydivedubai.ae/"
                            >
                                <div className="partners-list-item">
                                    <img
                                        src="https://renty.ae/uploads/banner/partner/280f09ef7079783bbf22995a08c539c4.svg"
                                        loading="lazy"
                                        alt="Rent a car partner in Dubai"
                                        title="Car rental partner in Dubai"
                                        width="150"
                                        height="80"
                                    />
                                </div>
                            </a>
                            <a
                                className="text-decoration-none"
                                href="https://virtuzone.com/"
                            >
                                <div className="partners-list-item">
                                    <img
                                        src="https://renty.ae/uploads/banner/partner/eaaa8c5bb090968cb85414f30df0dd39.svg"
                                        loading="lazy"
                                        alt="Rent a car partner in Dubai"
                                        title="Car rental partner in Dubai"
                                        width="150"
                                        height="80"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="big-list mt-sm-3 special-wrapper">
                <div className="car-offers-title">
                    <h4>Enjoy the speed of a sports car</h4>
                    <h6>
                        <a
                            href="/types/sports"
                            className="text-decoration-none py-2 px-3 rounded-small d-flex align-items-center"
                        >
                            All sports cars
                            <MdChevronRight
                                fill="#1359ba"
                                style={{ fontSize: "17.5px" }}
                            />
                        </a>
                    </h6>
                </div>
                <div className="car-offers">
                    {filteredSportsCars.map((car) => {
                        const brand = brands.find(
                            (brand) => brand.id === car.brand_id
                        );
                        const carImage = images.find(
                            (image) => image.car_id === car.id
                        );

                        return (
                            <div
                                key={car.id}
                                className="car-offer mb-2 mb-lg-0"
                            >
                                <a
                                    href={`/cars/${car.slug}/${car.id}/detail`}
                                    className="text-decoration-none"
                                >
                                    <div className="car-offer-img rounded-medium">
                                        <img
                                            className="rounded-medium"
                                            src={
                                                carImage
                                                    ? `${pathToImg}/${car.id}/${carImage.path}`
                                                    : `${pathToImg}/default_image.png`
                                            }
                                            title={`Hiring ${brand.name} ${car.title}`}
                                            alt={`Image of ${brand.name} ${car.title}`}
                                            loading="lazy"
                                            width="240"
                                            height="180"
                                        />
                                    </div>
                                    <div className="car-offer-title mt-1">
                                        <p className="fs-16 fw-normal">
                                            {brand.name} {car.title}{" "}
                                        </p>
                                        <p className="fs-12 fw-normal color-shades-600">
                                            From € {car.price} per day
                                        </p>
                                    </div>
                                </a>
                            </div>
                        );
                    })}
                </div>

                <div className="car-offers-title mt-2 mt-sm-3">
                    <h4>For SUV fans</h4>
                    <h6>
                        <a
                            href="/body-types/suv"
                            className="text-decoration-none py-2 px-3 rounded-small d-flex align-items-center"
                        >
                            All SUV cars
                            <MdChevronRight
                                fill="#1359ba"
                                style={{ fontSize: "17.5px" }}
                            />
                        </a>
                    </h6>
                </div>
                <div className="car-offers ">
                    {filteredSUVCars.map((car) => {
                        const brand = brands.find(
                            (brand) => brand.id === car.brand_id
                        );
                        const carImage = images.find(
                            (image) => image.car_id === car.id
                        );

                        return (
                            <div
                                key={car.id}
                                className="car-offer mb-2 mb-lg-0"
                            >
                                <a
                                    href={`/cars/${car.slug}/${car.id}/detail`}
                                    className="text-decoration-none"
                                >
                                    <div className="car-offer-img rounded-medium">
                                        <img
                                            className="rounded-medium"
                                            src={
                                                carImage
                                                    ? `${pathToImg}/${car.id}/${carImage.path}`
                                                    : `${pathToImg}/default_image.png`
                                            }
                                            title={`Hiring ${brand.name} ${car.title}`}
                                            alt={`Image of ${brand.name} ${car.title}`}
                                            loading="lazy"
                                            width="240"
                                            height="180"
                                        />
                                    </div>
                                    <div className="car-offer-title mt-1">
                                        <p className="fs-16 fw-normal">
                                            {brand.name} {car.title}{" "}
                                        </p>
                                        <p className="fs-12 fw-normal color-shades-600">
                                            From € {car.price} per day
                                        </p>
                                    </div>
                                </a>
                            </div>
                        );
                    })}
                </div>

                <div className="car-offers-title mt-sm-3">
                    <h4>Experience the luxury style of Dubai</h4>
                    <h6>
                        <a
                            href="/types/luxury"
                            className="text-decoration-none py-2 px-3 rounded-small d-flex align-items-center"
                        >
                            All Luxury cars
                            <MdChevronRight
                                fill="#1359ba"
                                style={{ fontSize: "17.5px" }}
                            />
                        </a>
                    </h6>
                </div>

                <div className="car-offers">
                    {filteredLuxuryCars.map((car) => {
                        const brand = brands.find(
                            (brand) => brand.id === car.brand_id
                        );
                        const carImage = images.find(
                            (image) => image.car_id === car.id
                        );

                        return (
                            <div
                                key={car.id}
                                className="car-offer mb-2 mb-lg-0"
                            >
                                <a
                                    href={`/cars/${car.slug}/${car.id}/detail`}
                                    className="text-decoration-none"
                                >
                                    <div className="car-offer-img rounded-medium">
                                        <img
                                            className="rounded-medium"
                                            src={
                                                carImage
                                                    ? `${pathToImg}/${car.id}/${carImage.path}`
                                                    : `${pathToImg}/default_image.png`
                                            }
                                            title={`Hiring ${brand.name} ${car.title}`}
                                            alt={`Image of ${brand.name} ${car.title}`}
                                            loading="lazy"
                                            width="240"
                                            height="180"
                                        />
                                    </div>
                                    <div className="car-offer-title mt-1">
                                        <p className="fs-16 fw-normal">
                                            {brand.name} {car.title}{" "}
                                        </p>
                                        <p className="fs-12 fw-normal color-shades-600">
                                            From € {car.price} per day
                                        </p>
                                    </div>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </section>
            <section className="location special-wrapper mt-4 mt-lg-4">
                <div className="location-title">
                    <h3>Our location</h3>
                </div>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3611.256708115327!2d55.2372231!3d25.1608085!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6985ae4b1d7d%3A0x1fea6bf21aa114ba!2sRenty%20-%20Rent%20Luxury%20Car%20in%20Dubai!5e0!3m2!1sen!2sua!4v1724154650793!5m2!1sen!2sua"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="google-map"
                ></iframe>
            </section>

            <section className="renty special-wrapper mt-sm-5 mb-4 mb-sm-5">
                <div className="renty-title">
                    <h3>Renty: The Leading Car rental company In Dubai</h3>
                    <img
                        src="https://renty.ae/assets/images/company-car.svg"
                        alt="Renty.ae"
                        title="Renty.ae"
                        className="d-none d-lg-flex"
                        loading="lazy"
                    />
                </div>
                <div className="renty-content d-block d-lg-flex mt-lg-4">
                    <div className="car-rental mb-sm-3 mb-4">
                        <div className="d-flex flex-sm-row flex-lg-column pb-2">
                            <img
                                src="https://renty.ae/assets-nd/images/icons/about-car-rental-platform.svg"
                                className="home-about-company-section-card-icon mb-lg-4 me-2 me-lg-0"
                                loading="lazy"
                                width="48"
                                height="48"
                                alt="Car Rental Platform"
                            />
                            <h4 className="fs-18 d-flex align-items-center">
                                Car Rental Platform
                            </h4>
                        </div>
                        <p className="fs-16">
                            Renty is a leading online car rental service
                            specializing in luxury cars, but also, economy
                            motors, business vehicles, and vans. We serve both
                            casual tourists and business professionals looking
                            to hire fully-tested, luxurious rent car Dubai and
                            the UAE. Our platform provides a comprehensive
                            round-up of top-rated vehicles from all the major
                            car rental providers in Dubai, Abu Dhabi, Sharjah
                            and Ras Al Khaimah.
                        </p>
                    </div>
                    <div className="car-rental mb-sm-3 mb-4">
                        <div className="d-flex flex-sm-row flex-lg-column pb-2">
                            <img
                                src="https://renty.ae/assets-nd/images/icons/about-fantastic-choice.svg"
                                className="home-about-company-section-card-icon mb-lg-4 me-2 me-lg-0"
                                loading="lazy"
                                width="48"
                                height="48"
                                alt="Fantastic Choice"
                            />
                            <h4 className="fs-18 d-flex align-items-center">
                                Fantastic Choice
                            </h4>
                        </div>
                        <p className="fs-16">
                            Renty’s one-stop-shop gives customers fantastic
                            choice and best-in-industry value. All the cars
                            listed on Renty are fully-vetted and high-quality.
                            We have strict quality control practices in place.
                            And we only work with dealerships that guarantee
                            excellent service and great value. Customers can be
                            assured of the highest quality when they rent a car
                            at Renty. Our platform provides you with a simple
                            and clear car rental process. Look no further car
                            rental companies if you want to rent a luxury car.
                            Get cheap rent and order a top-notch ride from our
                            huge car rental fleet which is updated daily.
                        </p>
                    </div>
                    <div className="car-rental">
                        <div className="d-flex flex-sm-row flex-lg-column pb-2">
                            <img
                                src="https://renty.ae/assets-nd/images/icons/about-luxury-or-economy.svg"
                                className="home-about-company-section-card-icon mb-lg-4 me-2 me-lg-0"
                                loading="lazy"
                                width="48"
                                height="48"
                                alt="Luxury or Economy"
                            />
                            <h4 className="fs-18 d-flex align-items-center">
                                Luxury or Economy
                            </h4>
                        </div>
                        <p className="fs-16">
                            There are many reasons to rent car in Dubai.
                            Business professionals often rent a car such as a
                            classy motor to impress clients and give the
                            impression of wealth and success. Many tourists hire
                            cars to sample Dubai&apos;s luxurious lifestyle. But
                            our listings do not only encompass high-end
                            supercars like Ferrari and Lamborghini. We also
                            provide a wide range of SUVs and economy cars, which
                            are perfect for sightseeing all that Dubai has to
                            offer.
                        </p>
                    </div>
                </div>
                <div className="rent-additions mt-4 mt-lg-5">
                    <ul className="rent-additions-list">
                        <li className="rent-additions-item p-3 mb-2 mb-lg-0">
                            <p className="fs-14">
                                The best car rental company in UAE
                            </p>
                            <img
                                className="ms-auto"
                                src="https://renty.ae/assets-nd/images/icons/the-best.svg"
                                alt="The best car rental company in UAE"
                                loading="lazy"
                            />
                        </li>
                        <li className="rent-additions-item p-3 mb-2 mb-lg-0">
                            <p className="fs-14">A wide range of rental cars</p>
                            <img
                                className="ms-auto"
                                src="https://renty.ae/assets-nd/images/icons/wide-range.svg"
                                alt="A wide range of rental cars"
                                loading="lazy"
                            />
                        </li>
                        <li className="rent-additions-item p-3 mb-2 mb-lg-0">
                            <p className="fs-14">
                                The easiest way to rent a car in Dubai
                            </p>
                            <img
                                className="ms-auto"
                                src="https://renty.ae/assets-nd/images/icons/easy.svg"
                                alt="The easiest way to rent a car in Dubai"
                                loading="lazy"
                            />
                        </li>
                        <li className="rent-additions-item p-3">
                            <p className="fs-14">The best car rental prices</p>
                            <img
                                className="ms-auto"
                                src="https://renty.ae/assets-nd/images/icons/price.svg"
                                alt="The best car rental prices"
                                loading="lazy"
                            />
                        </li>
                    </ul>
                </div>
            </section>

            <Footer />
            <script href="Main.js"></script>
        </>
    );
}