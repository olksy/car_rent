import { useEffect, useRef, useState } from "react";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

export default function Register() {
    // --- for phone number---
    const [errorMsg, setErrorMsg] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const inputRef = useRef(null);
    const itiRef = useRef(null);
    const errorMap = [
        "Invalid number",
        "Invalid country code",
        "Too short",
        "Too long",
        "Invalid number",
    ];

    useEffect(() => {
        if (inputRef.current) {
            itiRef.current = window.intlTelInput(inputRef.current, {
                utilsScript:
                    "https://cdn.jsdelivr.net/npm/intl-tel-input@24.1.3/build/js/utils.js",
                initialCountry: "ae",
                separateDialCode: true,
                autoPlaceholder: "aggressive",
                strictMode: true,
            });

            inputRef.current.addEventListener("input", () => {
                setPhoneNumber(itiRef.current.getNumber());
            });

            return () => {
                if (itiRef.current) {
                    itiRef.current.destroy();
                }
            };
        }
    }, []);

    const reset = () => {
        inputRef.current
            .closest(".form-field-wrapper")
            .classList.remove("error");
        setErrorMsg("");
    };

    const showError = (msg) => {
        inputRef.current.closest(".form-field-wrapper").classList.add("error");
        setErrorMsg(msg);
    };

    const handleValidate = () => {
        reset();
        const input = inputRef.current;

        if (!input.value.trim()) {
            showError("Required");
            return false;
        } else if (itiRef.current.isValidNumber()) {
            return true;
        } else {
            const errorCode = itiRef.current.getValidationError();
            const msg = errorMap[errorCode] || "Invalid number";
            showError(msg);
            return false;
        }
    };
    // --- for phone number---
    return (
        <>
            <Header />
            <div className="container p-0 mt-3 mb-3 mt-lg-5 mb-lg-5">
                <div className="d-flex justify-content-center">
                    <form
                        action="/"
                        className="register-form col-6 fs-16 p-lg-4 pb-lg-5"
                    >
                        <h5 className="col-md-12 mt-3 mb-3 mb-lg-4 text-uppercase font-weight-bold fs-18">
                            sign up
                        </h5>

                        <div className="col-md-12">
                            <div className="form-field-wrapper flex-column">
                                <label
                                    htmlFor="email"
                                    className="required mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    type="email"
                                    required
                                    className="pl-0 fs-14"
                                />
                            </div>
                        </div>

                        <div className="col-md-12 mt-4">
                            <div className="form-field-wrapper p-0 fs-14 d-flex justify-content-start flex-wrap rounded-small default-phone-input">
                                <label className="fs-9 ps-3 required pt-1 fw-bolder letter-spacing-0_5 lh-1 text-uppercase w-100 m-0 text-start mb-2">
                                    Phone number
                                </label>
                                <input
                                    id="reservation_form_phone-input"
                                    ref={inputRef}
                                    type="tel"
                                    inputMode="numeric"
                                    className="phone-number-input"
                                    required
                                    autoComplete="off"
                                />
                            </div>
                            {errorMsg && (
                                <div
                                    id="error-msg"
                                    className="fs-14 fw-bolder text-danger w-100 text-end"
                                >
                                    {errorMsg}
                                </div>
                            )}
                        </div>

                        <div className="col-md-12 mt-4">
                            <div className="form-field-wrapper flex-column">
                                <label htmlFor="name" className="required mb-2">
                                    First name
                                </label>
                                <input
                                    id="name"
                                    placeholder="Enter your name"
                                    name="name"
                                    type="text"
                                    required
                                    className="pl-0 fs-14"
                                />
                            </div>
                        </div>

                        <div className="col-md-12 mt-4">
                            <div className="form-field-wrapper">
                                <label
                                    htmlFor="password"
                                    className="required mb-2"
                                >
                                    password
                                </label>
                                <input
                                    id="password"
                                    placeholder="Enter your password"
                                    name="password"
                                    type="password"
                                    required
                                    className="pl-0 fs-14"
                                />
                            </div>
                        </div>

                        <div className="col-md-12 mt-4">
                            <div className="form-field-wrapper">
                                <label
                                    htmlFor="password"
                                    className="required mb-2"
                                >
                                    confirm a new password
                                </label>
                                <input
                                    id="password"
                                    placeholder="Enter your password"
                                    name="password"
                                    type="password"
                                    required
                                    className="pl-0 fs-14"
                                />
                            </div>
                        </div>

                        <div className="col-md-12 mt-4 mb-2">
                            <button
                                type="submit"
                                className="col-md-12 register-btn align-items-center
                                    p-0 fs-14 line-height-normal letter-spacing-0_5 text-uppercase fw-bold"
                            >
                                {" "}
                                Sign Up
                            </button>
                        </div>

                        <div className="col-md-12 d-flex align-items-center justify-content-center pt-3">
                            <p className="mb-0 me-2 fs-14">
                                Already have an account?
                            </p>
                            <a
                                href="/register"
                                className="btn btn-sm fs-12 ml-3 p-2 text-uppercase fw-bold"
                                style={{ border: "1px solid #ebeff8" }}
                            >
                                log in
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}