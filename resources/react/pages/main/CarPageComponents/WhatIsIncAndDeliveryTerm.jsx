import { MdDone } from "react-icons/md";

export default function WhatIsIncAndDeliveryTerm() {
    return (
        <>
            <div>
                <p className="h4 pb-3">What is included in my booking?</p>
                <div className="bg-badge-info rounded-medium py-3 px-4 mb-5">
                    <div className="d-flex align-items-center pb-1">
                        <span className="color-semantic-success mr-2">
                            <MdDone className="fs-18" fill="#0ea548" />
                        </span>
                        <span className="fs-14 mr-2">250 km for 1 day</span>
                    </div>
                    <div className="d-flex align-items-center pb-1">
                        <span className="color-semantic-success mr-2">
                            <MdDone className="fs-18" fill="#0ea548" />
                        </span>
                        <span className="fs-14 mr-2">Fuel Policy</span>
                    </div>
                    <div className="d-flex align-items-center pb-1">
                        <span className="color-semantic-success mr-2">
                            <MdDone className="fs-18" fill="#0ea548" />
                        </span>
                        <span className="fs-14 mr-2">Mileage Policy</span>
                    </div>
                    <div className="d-flex align-items-center pb-1">
                        <span className="color-semantic-success mr-2">
                            <MdDone className="fs-18" fill="#0ea548" />
                        </span>
                        <span className="fs-14 mr-2">Deposit Policy</span>
                    </div>
                    <div className="d-flex align-items-center pb-1">
                        <span className="color-semantic-success mr-2">
                            <MdDone className="fs-18" fill="#0ea548" />
                        </span>
                        <span className="fs-14 mr-2">Rental Policy</span>
                    </div>
                </div>
            </div>
            <div className="mb-5">
                <p className="h4 pb-3">Delivery terms</p>
                <div>
                    <div className="d-flex flex-row border-bottom pt-2 pb-2">
                        <div className="col-md-6 p-0">
                            <span className="fs-16">From office</span>
                        </div>
                        <div className="col-md-6 p-0 text-right">
                            <span className="fs-16">Free</span>
                        </div>
                    </div>
                    <div className="d-flex flex-row border-bottom pt-2 pb-2">
                        <div className="col-md-6 p-0">
                            <span className="fs-16">Airport</span>
                        </div>
                        <div className="col-md-6 p-0 text-right">
                            <span className="fs-16">Parking charges</span>
                        </div>
                    </div>
                    <div className="d-flex flex-row border-bottom pt-2 pb-2">
                        <div className="col-md-6 p-0">
                            <span className="fs-16">Abu-Dhabi</span>
                        </div>
                        <div className="col-md-6 p-0 text-right">
                            <span className="fs-16">182 €</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}