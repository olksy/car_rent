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
import glassIcon from "./images/icons/magnifying glass.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../layouts/Header";


export default function Index({ data }) {
    const [brands, setBrands] = useState([]);
    const [images, setImages] = useState([]);
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/brands")
            .then((response) => setBrands(response.data))
            .catch((error) => console.error("Error fetching brands:", error));

        axios
            .get("http://127.0.0.1:8000/api/car_images")
            .then((response) => setImages(response.data))
            .catch((error) =>
                console.error("Error fetching car images:", error)
            );
    }, []);


    const filteredLuxuryCars = data.filter(car => car.category_id === 2).slice(0, 4);
    const filteredSUVCars = data.filter(car => car.body_type_id === 2).slice(0, 4);
    const filteredSportsCars = data.filter(car => car.category_id === 7).slice(0, 4);

    const pathToImg = 'http://127.0.0.1:8000/storage/images';
  
    return (
        <>
            <Header />
            <section className="rent">
                <div className="rent-title">
                    <h2>Rent a car in Dubai</h2>
                    <h3>Find a car of your dream in 60 seconds</h3>
                </div>
                <div className="rent-actions">
                    <div className="search-form">
                        <div className="search-input-group">
                            <input
                                className="search-input"
                                type="text"
                                placeholder="Search a car by brand or model"
                            />
                            <button className="search-form-button">
                                <img
                                    src={glassIcon}
                                    alt="magnifying-glass-icon"
                                />
                            </button>
                        </div>
                        <button className="search-button">
                            <a href="#" className="text-decoration-none">
                                Search
                            </a>
                        </button>
                    </div>
                </div>
            </section>
            <section className="popular wrapper">
                <div className="popular-title">
                    <h6>Popular car rental categories in Dubai</h6>
                </div>
                <div className="car-types">
                    <div className="car-type car-block">
                        <a href="/cars/luxury">
                            <img
                                src="https://renty.ae/assets-nd/icons/desc-car-types/luxury.svg"
                                alt="Luxury"
                            />
                        </a>
                        Luxury
                    </div>
                    <div className="car-block">
                        <a href="/cars/economy">
                            <img
                                src="https://renty.ae/assets-nd/icons/desc-car-types/economy-cars.svg"
                                alt="Economy"
                            />
                        </a>
                        Economy
                    </div>
                    <div className="car-block">
                        <a href="/cars/sports">
                            <img
                                src="https://renty.ae/assets-nd/icons/desc-car-types/sports-cars.svg"
                                alt="Sports"
                            />
                        </a>
                        Sports
                    </div>
                    <div className="car-block">
                        <a href="/cars/suv">
                            <img
                                src="https://renty.ae/assets/icons/cars/suv.svg"
                                alt="SUV"
                            />
                        </a>
                        SUV
                    </div>
                    <div className="car-block">
                        <a href="/cars/convertible">
                            <img
                                src="https://renty.ae/assets/icons/cars/convertible.svg"
                                width="61"
                                height="31"
                                alt="Convertible"
                            />
                        </a>
                        Convertible
                    </div>
                    <div className="car-block">
                        <a href="/cars/business">
                            <img
                                src="https://renty.ae/assets-nd/icons/desc-car-types/business.svg"
                                alt="Business"
                            />
                        </a>
                        Business
                    </div>
                    <div className="car-block">
                        <a href="/cars/electric">
                            <img
                                src="https://renty.ae/assets-nd/icons/desc-car-types/electric-ev-cars.svg"
                                alt="Electric (EV)"
                            />
                        </a>
                        Electric (EV)
                    </div>
                    <div className="car-block">
                        <a href="/cars/van">
                            <img
                                src="https://renty.ae/assets/icons/cars/van.svg"
                                alt="VAN"
                            />
                        </a>
                        VAN
                    </div>
                </div>
            </section>
            <section className="brands special-wrapper">
                <div className="brands-title">
                    <h4>Most wanted car rental brands in Dubai</h4>
                    <h6>
                        <a href="/brands" className="text-decoration-none">
                            All Brands
                        </a>
                    </h6>
                </div>
                <div className="car-brands">
                    <div className="car-brand">
                        <a
                            href="/brands/audi"
                            className="text-decoration-none d-flex flex-column align-items-center"
                        >
                            <img
                                src={audisvg}
                                alt="Audi"
                                width="48"
                                height="48"
                            />
                            Audi
                        </a>
                    </div>
                    <div className="car-brand">
                        <a
                            href="/brands/bmw"
                            className="text-decoration-none d-flex flex-column align-items-center"
                        >
                            <img
                                src={bmwsvg}
                                alt="BMW"
                                width="48"
                                height="48"
                            />
                            BMW
                        </a>
                    </div>
                    <div className="car-brand">
                        <a
                            href="/brands/ferrari"
                            className="text-decoration-none d-flex flex-column align-items-center"
                        >
                            <img
                                src={ferrarisvg}
                                alt="Ferrari"
                                width="48"
                                height="48"
                            />
                            Ferrari
                        </a>
                    </div>
                    <div className="car-brand">
                        <a
                            href="/brands/lamborghini"
                            className="text-decoration-none d-flex flex-column align-items-center"
                        >
                            <img
                                src={lamborghinisvg}
                                alt="Lamborghini"
                                width="48"
                                height="48"
                            />
                            Lamborghini
                        </a>
                    </div>
                    <div className="car-brand">
                        <a
                            href="/brands/mercedes"
                            className="text-decoration-none d-flex flex-column align-items-center"
                        >
                            <img
                                src={mercedessvg}
                                alt="Mercedes"
                                width="48"
                                height="48"
                            />
                            Mercedes
                        </a>
                    </div>
                    <div className="car-brand">
                        <a
                            href="/brands/land_rover"
                            className="text-decoration-none d-flex flex-column align-items-center"
                        >
                            <img
                                src={landroversvg}
                                alt="Land-rover"
                                width="48"
                                height="48"
                            />
                            Range Rover
                        </a>
                    </div>
                    <div className="car-brand">
                        <a
                            href="/brands/porsche"
                            className="text-decoration-none d-flex flex-column align-items-center"
                        >
                            <img
                                src={porchesvg}
                                alt="Porsche"
                                width="48"
                                height="48"
                            />
                            Porsche
                        </a>
                    </div>
                    <div className="car-brand">
                        <a
                            href="/brands/rolls_royce"
                            className="text-decoration-none d-flex flex-column align-items-center"
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
                </div>
            </section>

            <section className="Reviews-partners">
                <div className="reviews-container">
                    <div className="reviews px-5 py-4">
                        <div className="reviews-title">
                            <h3>Why you should rent a car with us?</h3>
                            <p className="fs-16">
                                #1 car rental company in Dubai on Google
                            </p>
                        </div>
                        <div className="reviews-location">
                            <a
                                className="text-decoration-none"
                                href="https://www.google.com/maps/place/Renty+-+Rent+Luxury+Car+in+Dubai/@25.1608085,55.2372231,17z/data=!4m8!3m7!1s0x3e5f6985ae4b1d7d:0x1fea6bf21aa114ba!8m2!3d25.1608085!4d55.2372231!9m1!1b1!16s%2Fg%2F11h4cqq5n4?hl=en"
                            >
                                <img
                                    className="home-page-company-logo"
                                    src="https://renty.ae/assets-nd/icons/site/logo-light.svg"
                                    alt="Renty.ae"
                                    title="Renty.ae"
                                    loading="lazy"
                                    width="125"
                                    height="45"
                                />
                            </a>
                        </div>
                        <div className="google-reviews">
                            <a
                                className="text-decoration-none"
                                href="https://www.google.com/maps/place/Renty+-+Rent+Luxury+Car+in+Dubai/@25.1608085,55.2372231,17z/data=!4m8!3m7!1s0x3e5f6985ae4b1d7d:0x1fea6bf21aa114ba!8m2!3d25.1608085!4d55.2372231!9m1!1b1!16s%2Fg%2F11h4cqq5n4?hl=en"
                            >
                                <img src={googleReviews} alt="Google Reviews" />
                            </a>
                        </div>
                    </div>
                    <div className="partners px-3 py-3">
                        <div className="partners-title">
                            <h4 className="fs-24">Official partners with</h4>
                        </div>
                        <div className="partners-list">
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
            <section className="big-list special-wrapper">
                <div className="car-offers-title">
                    <h4>Enjoy the speed of a sports car</h4>
                    <h6>
                        <a
                            href="/types/sports"
                            className="text-decoration-none"
                        >
                            All sports cars
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
                            <div key={car.id} className="car-offer">
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

                <div className="car-offers-title">
                    <h4>For SUV fans</h4>
                    <h6>
                        <a
                            href="/body-types/suv"
                            className="text-decoration-none"
                        >
                            All SUV cars
                        </a>
                    </h6>
                </div>
                <div className="car-offers">
                    {filteredSUVCars.map((car) => {
                        const brand = brands.find(
                            (brand) => brand.id === car.brand_id
                        );
                        const carImage = images.find(
                            (image) => image.car_id === car.id
                        );

                        return (
                            <div key={car.id} className="car-offer">
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

                <div className="car-offers-title">
                    <h4>Experience the luxury style of Dubai</h4>
                    <h6>
                        <a
                            href="/types/luxury"
                            className="text-decoration-none"
                        >
                            All Luxury cars
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
                            <div key={car.id} className="car-offer">
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
            <section className="location special-wrapper">
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

            <section className="renty special-wrapper">
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
                <div className="renty-content">
                    <div className="car-rental">
                        <img
                            src="https://renty.ae/assets-nd/images/icons/about-car-rental-platform.svg"
                            className="home-about-company-section-card-icon mb-lg-4 mr-lg-0 mr-3"
                            loading="lazy"
                            width="48"
                            height="48"
                            alt="Car Rental Platform"
                        />
                        <h4 className="fs-18">Car Rental Platform</h4>
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
                    <div className="car-rental">
                        <img
                            src="https://renty.ae/assets-nd/images/icons/about-fantastic-choice.svg"
                            className="home-about-company-section-card-icon mb-lg-4 mr-lg-0 mr-3"
                            loading="lazy"
                            width="48"
                            height="48"
                            alt="Fantastic Choice"
                        />
                        <h4 className="fs-18">Fantastic Choice</h4>
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
                        <img
                            src="https://renty.ae/assets-nd/images/icons/about-luxury-or-economy.svg"
                            className="home-about-company-section-card-icon mb-lg-4 mr-lg-0 mr-3"
                            loading="lazy"
                            width="48"
                            height="48"
                            alt="Luxury or Economy"
                        />
                        <h4 className="fs-18">Luxury or Economy</h4>
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
                <div className="rent-additions">
                    <ul className="rent-additions-list">
                        <li className="rent-additions-item p-3">
                            <p className="fs-14">
                                The best car rental company in UAE
                            </p>
                            <img
                                src="https://renty.ae/assets-nd/images/icons/the-best.svg"
                                alt="The best car rental company in UAE"
                                loading="lazy"
                            />
                        </li>
                        <li className="rent-additions-item p-3">
                            <p className="fs-14">A wide range of rental cars</p>
                            <img
                                src="https://renty.ae/assets-nd/images/icons/wide-range.svg"
                                alt="A wide range of rental cars"
                                loading="lazy"
                            />
                        </li>
                        <li className="rent-additions-item p-3">
                            <p className="fs-14">
                                The easiest way to rent a car in Dubai
                            </p>
                            <img
                                src="https://renty.ae/assets-nd/images/icons/easy.svg"
                                alt="The easiest way to rent a car in Dubai"
                                loading="lazy"
                            />
                        </li>
                        <li className="rent-additions-item p-3">
                            <p className="fs-14">The best car rental prices</p>
                            <img
                                src="https://renty.ae/assets-nd/images/icons/price.svg"
                                alt="The best car rental prices"
                                className="home-about-company-sub-section-card-icon"
                                loading="lazy"
                            />
                        </li>
                    </ul>
                </div>
            </section>
            <section className="rental-service special-wrapper">
                <div className="rental-service-content">
                    <h3 className="fs-30">Car rental service</h3>
                    <p className="fs-14">
                        Renty offers different car rental plans, from a standard
                        one-day agreement to yearly rentals. You can usually
                        hire a luxury vehicle for at least one day. However,
                        some cars are eligible for an hourly hire.
                        <br />
                        <br />
                        Customers can also rent cheap cars for a month or even a
                        year. It is also quite common for people to extend their
                        rental agreement. Contact us to learn more about
                        available plans for the vehicle of your choice.
                    </p>
                    {/* <a className="show-more text-decoration-none" href="#">
                        Show More
                    </a> */}
                </div>
            </section>
            <section className="questions special-wrapper mb-5">
                <div className="questions-title">
                    <h3 className="fs-30">Frequently Asked Questions</h3>
                </div>
                <div className="questions-container">
                    <div className="question-section">
                        <h5>Practical Information</h5>
                        <ul className="question-section-list">
                            <li className="question-section-item">
                                What about parking availability?
                            </li>
                            <li className="question-section-item">
                                On what schedule do you charge for the rental?
                            </li>
                            <li className="question-section-item">
                                What can I expect to pay for car rentals in
                                Dubai?
                            </li>
                            <li className="question-section-item">
                                Can I rent a car from Dubai International
                                Airport 24/7?
                            </li>
                            <li className="question-section-item">
                                What types of cars are available to rent on the
                                Renty.ae platform?
                            </li>
                            <li className="question-section-item">
                                Can I hire a car with a driver in Dubai?
                            </li>
                            <li className="question-section-item">
                                Is there a minimum age requirement for car
                                rental deals in Dubai?
                            </li>
                            <li className="question-section-item">
                                Will my personal information be shared with
                                other companies?
                            </li>
                            <li className="question-section-item">
                                How much does fuel cost in Dubai?
                            </li>
                        </ul>
                    </div>
                    <div className="question-section">
                        <h5>Insurance and Deposit</h5>
                        <ul className="question-section-list">
                            <li className="question-section-item">
                                What standard car insurance coverage will I
                                receive?
                            </li>
                            <li className="question-section-item">
                                Can I rent a car from you without a security
                                deposit?
                            </li>
                            <li className="question-section-item">
                                Does your service cover life and health
                                insurance?
                            </li>
                            <li className="question-section-item">
                                At what point will my deposit be refunded?
                            </li>
                            <li className="question-section-item">
                                Can I rent a car in Dubai without a security
                                deposit?
                            </li>
                            <li className="question-section-item">
                                Can I rent a car Dubai for AED 500 per day
                                without a deposit?
                            </li>
                        </ul>
                    </div>
                    <div className="question-section">
                        <h5>Limits and Restrictions</h5>
                        <ul className="question-section-list">
                            <li className="question-section-item">
                                Do you have any policies or restrictions
                                regarding off-road driving with rental car
                                Dubai?
                            </li>
                            <li className="question-section-item">
                                Can my friend or family member operate the
                                rented vehicles?
                            </li>
                            <li className="question-section-item">
                                Is there a limit to the number of miles I can
                                drive? Will you charge me if I exceed that
                                limit?
                            </li>
                            <li className="question-section-item">
                                What are the rules for speed limits in Dubai?
                            </li>
                            <li className="question-section-item">
                                What happens if I return the car late?
                            </li>
                        </ul>
                    </div>
                    <div className="question-section">
                        <h5>Car Rental Services</h5>
                        <ul className="question-section-list">
                            <li className="question-section-item">
                                What is the cost of car rent in Dubai?
                            </li>
                            <li className="question-section-item">
                                Can I rent a car for AED 1000 per month?
                            </li>
                            <li className="question-section-item">
                                What is the monthly rental cost of a car?
                            </li>
                            <li className="question-section-item">
                                What are the benefits of renting a car in Dubai?
                            </li>
                            <li className="question-section-item">
                                What are the advantages of renting a car over
                                public transport?
                            </li>
                            <li className="question-section-item">
                                Do you offer a car delivery service?
                            </li>
                            <li className="question-section-item">
                                What is the best type of transport in Dubai?
                            </li>
                            <li className="question-section-item">
                                What type of car do you recommend for driving in
                                Dubai?
                            </li>
                            <li className="question-section-item">
                                Do you have any promotions?
                            </li>
                            <li className="question-section-item">
                                How long does it take to deliver a rental car?
                            </li>
                            <li className="question-section-item">
                                Do you provide car delivery services?
                            </li>
                            <li className="question-section-item">
                                Is it possible to extend the car rental period?
                            </li>
                        </ul>
                    </div>
                    <div className="question-section">
                        <h5>Payment and Documentation</h5>
                        <ul className="question-section-list">
                            <li className="question-section-item">
                                Is it possible to rent a car in Dubai with a US
                                driver&apos;s license?
                            </li>
                            <li className="question-section-item">
                                Can I rent a car in Dubai with a recently issued
                                driver&apos;s license in the UAE?
                            </li>
                            <li className="question-section-item">
                                What driving licenses are accepted for renting a
                                car in the UAE?
                            </li>
                            <li className="question-section-item">
                                Can I rent a car in Dubai without a credit card?
                            </li>
                            <li className="question-section-item">
                                Can I pay for the rental using someone
                                else&apos;s card, or do I have to use my own?
                            </li>
                            <li className="question-section-item">
                                Can I rent a car in Dubai with cryptocurrency?
                            </li>
                            <li className="question-section-item">
                                What documents are required to rent a car in
                                Dubai?
                            </li>
                            <li className="question-section-item">
                                What is included in the car rental agreement?
                            </li>
                            <li className="question-section-item">
                                What is not included in the rental price for the
                                car?
                            </li>
                            <li className="question-section-item">
                                Can the rental period for the car be extended?
                                What is the payment process?
                            </li>
                        </ul>
                    </div>
                    <div className="question-section">
                        <h5>Tolls, Traffic Violations, and Accidents</h5>
                        <ul className="question-section-list">
                            <li className="question-section-item">
                                What is the fee for crossing the Salik gate?
                            </li>
                            <li className="question-section-item">
                                Do you provide accident and recovery services?
                            </li>
                            <li className="question-section-item">
                                Who is responsible for paying all parking fees?
                            </li>
                            <li className="question-section-item">
                                What occurs if I unintentionally commit a
                                traffic offense?
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
            <script href="Main.js"></script>
        </>
    );
}