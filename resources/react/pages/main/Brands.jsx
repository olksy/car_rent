import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import rolls_svg from "../images/img//Cars/rolls-royce.svg";
import ferrari_svg from "../images/img/Cars/ferrari-4.svg";
import lamborghini_svg from "../images/img/Cars/lamborghini.svg";
import audi_svg from "../images/img/Cars/audi.svg";
import rangeRover_svg from "../images/img/Cars/land-rover-2.svg";
import bmw_svg from "../images/img/Cars/logo-bmw-2020.svg";
import mercedes_svg from "../images/img/Cars/mercedes-benz-9.svg";
import porsche_svg from "../images/img/Cars/porsche.svg";
import ford_svg from "../images/img/Cars/ford.svg";
import jaguar_svg from "../images/img/Cars/jaguar.svg";
import chevrolet_svg from "../images/img/Cars/chevrolet.svg";
import { IoIosArrowForward } from "react-icons/io";

const brands = [
    { name: 'Audi', link: '/brands/audi', image: audi_svg },
    { name: 'BMW', link: '/brands/bmw', image: bmw_svg },
    { name: 'Chevrolet', link: '/brands/chevrolet', image: chevrolet_svg },
    { name: 'Ferrari', link: '/brands/ferrari', image: ferrari_svg },
    { name: 'Ford', link: '/brands/ford', image: ford_svg },
    { name: 'Jaguar', link: '/brands/jaguar', image: jaguar_svg },
    { name: 'Lamborghini', link: '/brands/lamborghini', image: lamborghini_svg },
    { name: 'Mercedes', link: '/brands/mercedes', image: mercedes_svg },
    { name: 'Porsche', link: '/brands/porsche', image: porsche_svg },
    { name: 'Range Rover', link: '/brands/range-rover', image: rangeRover_svg },
    { name: 'Rolls-Royce', link: '/brands/rolls-royce', image: rolls_svg },
];  

export default function Brands() {
    return (
        <>
            <Header />
            <div
                className="all-brands-list"
                style={{ backgroundColor: "#f7f9fb" }}
            >
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb d-flex align-items-center mt-3 px-sm-0">
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
                            <li
                                className="breadcrumb-item active fs-12 d-flex align-items-center"
                                aria-current="page"
                            >
                                Brands
                            </li>
                        </ol>
                    </nav>

                    <div className="d-block pb-sm-2 pt-lg-4">
                        <h1 className="type-h d-block d-lg-inline fs-36 mt-lg-0">
                            All brands Dubai
                        </h1>

                        <div className="brands_panel d-flex mt-3 pb-4">
                            <ul className="d-flex gap-15 flex-wrap justify-content-between w-100">
                                {brands.map((brand, index) => (
                                    <li
                                        className="brand-list-item mb-3"
                                        key={index}
                                    >
                                        <a
                                            href={brand.link}
                                            className="text-decoration-none d-flex align-items-center justify-content-center w-100"
                                        >
                                            <img
                                                className="me-4 me-sm-5 me-lg-2"
                                                src={brand.image}
                                                alt={brand.name}
                                                width={70}
                                                height={70}
                                                loading="lazy"
                                            />
                                            <p className="fs-20 fw-bold">
                                                {brand.name}
                                            </p>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}