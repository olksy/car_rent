import { useEffect, useRef, useState } from "react";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Register() {
    const navigate = useNavigate();
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
        if(localStorage.getItem("token")) {
            navigate("/user-dashboard");
        }
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
    }, [navigate]);

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

    const handleValidatePhone = async () => {
        reset();
        const input = inputRef.current;

        if (!input.value.trim()) {
            showError("Required");
            return false;
        }

        if (!itiRef.current.isValidNumber()) {
            const errorCode = itiRef.current.getValidationError();
            const msg = errorMap[errorCode] || "Invalid number";
            showError(msg);
            return false;
        }

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/check-phone", {
                number: phoneNumber,
            });
    
            if (response.data.exists) {
                showError("Phone number is already registered.");
                return false;
            }
        } catch (error) {
            showError("Server error. Please try again later.");
            return false;
        }

        return true;
    };
    // --- for phone number---

    const [formErrors, setFormErrors] = useState({});
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
    });
    const [successMessage, setSuccessMessage] = useState(null);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: "" });
    };

    const validateForm = async () => {
        const errors = {};
        const { email, name, password, confirmPassword } = formData;

        // Email validation
        if (!email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Invalid email format";
        } else {
            try {
                const response = await axios.post(
                    "http://127.0.0.1:8000/api/check-email",
                    { email }
                );
                if (response.data.exists) {
                    errors.email = "This email is already registered!";
                }
            } catch (error) {
                console.error("Error validating email:", error);
                errors.email = "Could not validate email!";
            }
        }

        // Name validation
        if (!name.trim()) {
            errors.name = "Name is required";
        } else if (name.length < 3) {
            errors.name = "Name must be at least 3 characters";
        }

        // Password validation
        if (!password.trim()) {
            errors.password = "Password is required";
        } else if (password.length < 6) {
            errors.password = "Password must be at least 6 characters";
        }

        // Confirm password validation
        if (!confirmPassword.trim()) {
            errors.confirmPassword = "Please confirm your password";
        } else if (password !== confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
        }

        setFormErrors(errors);

        // Return false if there are errors
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = await validateForm();
        const isPhoneValid = await handleValidatePhone();
    
        if (isValid && isPhoneValid) {
            // eslint-disable-next-line no-unused-vars
            const { confirmPassword, ...userData } = formData;
            console.log("Form data being sent:", {
                ...userData,
                number: phoneNumber,
                password_confirmation: formData.confirmPassword,
            });

            try {
                // eslint-disable-next-line no-unused-vars
                const response = await axios.post(
                    "http://127.0.0.1:8000/api/register",
                    {
                        ...userData,
                        number: phoneNumber,
                        password_confirmation: formData.confirmPassword,
                    }
                );
                setSuccessMessage("Registration successful!");

                setTimeout(() => {
                    navigate("/login");
                }, 1000);
            } catch (error) {
                setSuccessMessage("Registration failed :(");
                return false;
            }
        } else {
            return false;
        }
    };

    return (
        <>
            <Helmet>
                <title>Create an Account - Rently</title>
            </Helmet>
            <Header />
            <div className="container p-0 mb-3 mb-lg-5">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb d-flex align-items-center mt-3 px-3 px-sm-0">
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
                            Sign up
                        </li>
                    </ol>
                </nav>

                <div className="d-flex justify-content-center pt-sm-3 pt-lg-0">
                    <form
                        onSubmit={handleSubmit}
                        action="/"
                        className="register-form col-6 fs-16 p-lg-4 px-sm-4 py-sm-3 d-flex flex-column"
                    >
                        <h5 className="col-md-12 mb-2 mt-sm-2 mb-sm-3 mb-lg-4 text-uppercase font-weight-bold fs-18">
                            sign up
                        </h5>

                        {formErrors.formError && (
                            <div
                                id="error-msg"
                                className="fs-14 fw-bolder text-danger w-100 text-start"
                            >
                                {formErrors.formError}
                            </div>
                        )}

                        <div className="col-md-12">
                            <div
                                className={`form-field-wrapper flex-column ${
                                    formErrors.email ? "error" : ""
                                }`}
                            >
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
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="pl-0 fs-14"
                                />
                            </div>
                            {formErrors.email && (
                                <div
                                    id="error-msg"
                                    className="fs-14 fw-bolder text-danger w-100 text-end"
                                >
                                    {formErrors.email}
                                </div>
                            )}
                        </div>

                        <div className="col-md-12 mt-3 mt-lg-4">
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

                        <div className="col-md-12 mt-3 mt-lg-4">
                            <div
                                className={`form-field-wrapper flex-column ${
                                    formErrors.name ? "error" : ""
                                }`}
                            >
                                <label htmlFor="name" className="required mb-2">
                                    First name
                                </label>
                                <input
                                    id="name"
                                    placeholder="Enter your name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="pl-0 fs-14"
                                />
                            </div>
                            {formErrors.name && (
                                <div
                                    id="error-msg"
                                    className="fs-14 fw-bolder text-danger w-100 text-end"
                                >
                                    {formErrors.name}
                                </div>
                            )}
                        </div>

                        <div className="col-md-12 mt-3 mt-lg-4">
                            <div
                                className={`form-field-wrapper flex-column ${
                                    formErrors.password ? "error" : ""
                                }`}
                            >
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
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="pl-0 fs-14"
                                />
                            </div>
                            {formErrors.password && (
                                <div
                                    id="error-msg"
                                    className="fs-14 fw-bolder text-danger w-100 text-end"
                                >
                                    {formErrors.password}
                                </div>
                            )}
                        </div>

                        <div className="col-md-12 mt-3 mt-lg-4">
                            <div
                                className={`form-field-wrapper flex-column ${
                                    formErrors.confirmPassword ? "error" : ""
                                }`}
                            >
                                <label
                                    htmlFor="confirmPassword"
                                    className="required mb-2"
                                >
                                    confirm a new password
                                </label>
                                <input
                                    id="confirmPassword"
                                    placeholder="Enter your password"
                                    name="confirmPassword"
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="pl-0 fs-14"
                                />
                            </div>
                            {formErrors.confirmPassword && (
                                <div
                                    id="error-msg"
                                    className="fs-14 fw-bolder text-danger w-100 text-end"
                                >
                                    {formErrors.confirmPassword}
                                </div>
                            )}
                        </div>

                        {successMessage === "Registration successful!" && (
                            <div
                                className="alert alert-success p-2 mb-0 mt-3 fs-16"
                                role="alert"
                            >
                                {successMessage}
                            </div>
                        )}
                        {successMessage === "Registration failed :(" && (
                            <div
                                className="alert alert-danger p-2 mb-0 mt-3 fs-16"
                                role="alert"
                            >
                                {successMessage}
                            </div>
                        )}

                        <div className="col-md-12 mt-3 mt-lg-4 mb-2">
                            <button
                                type="submit"
                                className="col-md-12 register-btn align-items-center
                                    p-0 fs-14 line-height-normal letter-spacing-0_5 text-uppercase fw-bold w-100"
                            >
                                {" "}
                                Sign Up
                            </button>
                        </div>

                        <div className="col-md-12 d-flex align-items-center justify-content-center pt-2">
                            <p className="mb-0 me-2 fs-14">
                                Already have an account?
                            </p>
                            <a
                                href="/login"
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