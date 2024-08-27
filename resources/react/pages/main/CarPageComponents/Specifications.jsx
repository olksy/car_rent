import { CiCalendar } from "react-icons/ci";
import { MdInvertColors } from "react-icons/md";
import { PiTimer, PiEngineBold, PiSteeringWheelFill } from "react-icons/pi";
import { GiSpeedometer, GiFuelTank } from "react-icons/gi";
import { LiaHorseSolid } from "react-icons/lia";
import { GoPeople } from "react-icons/go";
import { BsCarFront } from "react-icons/bs";

export default function Specifications({
    year,
    color,
    zerotohundred,
    transmission,
    engine,
    maxspeed,
    horse,
    seats,
    fuelt,
    bodyt,
}) {
    return (
        <>
            <p className="h4 pb-3">Specifications</p>
            <div className="row mb-5">
                <div className="col-12 col-lg-4 pb-3">
                    <div className="d-flex align-items-center">
                        <span className="specifications-icon">
                            <CiCalendar fill="#8c98ab" />
                        </span>
                        <div className="row w-100">
                            <div className="specifications-title col-4 col-lg-12 d-flex align-items-center">
                                Year
                            </div>
                            <div className="specifications-main col-8 col-lg-12 ml-auto ml-lg-0">
                                {year}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 pb-3">
                    <div className="d-flex align-items-center">
                        <span className="specifications-icon">
                            <MdInvertColors fill="#8c98ab" />
                        </span>
                        <div className="row w-100">
                            <div className="specifications-title col-4 col-lg-12 d-flex align-items-center">
                                Color
                            </div>
                            <div className="specifications-main col-8 col-lg-12 ml-auto ml-lg-0">
                                {color}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 pb-3">
                    <div className="d-flex align-items-center">
                        <span className="specifications-icon">
                            <PiTimer fill="#8c98ab" />
                        </span>
                        <div className="row w-100">
                            <div className="specifications-title col-4 col-lg-12 d-flex align-items-center">
                                0 - 100km/h
                            </div>
                            <div className="specifications-main col-8 col-lg-12 ml-auto ml-lg-0">
                                {zerotohundred}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 pb-3">
                    <div className="d-flex align-items-center">
                        <span className="specifications-icon">
                            <PiSteeringWheelFill fill="#8c98ab" />
                        </span>
                        <div className="row w-100">
                            <div className="specifications-title col-4 col-lg-12 d-flex align-items-center">
                                Transmission
                            </div>
                            <div className="specifications-main col-8 col-lg-12 ml-auto ml-lg-0">
                                {transmission}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 pb-3">
                    <div className="d-flex align-items-center">
                        <span className="specifications-icon">
                            <PiEngineBold fill="#8c98ab" />
                        </span>
                        <div className="row w-100">
                            <div className="specifications-title col-4 col-lg-12 d-flex align-items-center">
                                Engine
                            </div>
                            <div className="specifications-main col-8 col-lg-12 ml-auto ml-lg-0">
                                {engine}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 pb-3">
                    <div className="d-flex align-items-center">
                        <span className="specifications-icon">
                            <GiSpeedometer fill="#8c98ab" />
                        </span>
                        <div className="row w-100">
                            <div className="specifications-title col-4 col-lg-12 d-flex align-items-center">
                                Max Speed
                            </div>
                            <div className="specifications-main col-8 col-lg-12 ml-auto ml-lg-0">
                                {maxspeed}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 pb-3">
                    <div className="d-flex align-items-center">
                        <span className="specifications-icon">
                            <LiaHorseSolid fill="#8c98ab" />
                        </span>
                        <div className="row w-100">
                            <div className="specifications-title col-4 col-lg-12 d-flex align-items-center">
                                Horse Power
                            </div>
                            <div className="specifications-main col-8 col-lg-12 ml-auto ml-lg-0">
                                {horse}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 pb-3">
                    <div className="d-flex align-items-center">
                        <span className="specifications-icon">
                            <GoPeople fill="#8c98ab" />
                        </span>
                        <div className="row w-100">
                            <div className="specifications-title col-4 col-lg-12 d-flex align-items-center">
                                Seats
                            </div>
                            <div className="specifications-main col-8 col-lg-12 ml-auto ml-lg-0">
                                {seats}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 pb-3">
                    <div className="d-flex align-items-center">
                        <span className="specifications-icon">
                            <GiFuelTank fill="#8c98ab" />
                        </span>
                        <div className="row w-100">
                            <div className="specifications-title col-4 col-lg-12 d-flex align-items-center">
                                Fuel Type
                            </div>
                            <div className="specifications-main col-8 col-lg-12 ml-auto ml-lg-0">
                                {fuelt}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 pb-3">
                    <div className="d-flex align-items-center">
                        <span className="specifications-icon">
                            <BsCarFront fill="#8c98ab" />
                        </span>
                        <div className="row w-100">
                            <div className="specifications-title col-4 col-lg-12 d-flex align-items-center">
                                Body Type
                            </div>
                            <div className="specifications-main col-8 col-lg-12 ml-auto ml-lg-0">
                                {bodyt}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}