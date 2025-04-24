import { Helmet } from "react-helmet-async";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import axios from "axios";

export default function PasswordReset() {
    const [formErrors, setFormErrors] = useState({});
    const [formData, setFormData] = useState({
        email: "",
    });
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: "" });
    };

    const validateForm = async() => {
        const errors = {};
        const { email } = formData;

        if (!email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Invalid email format";
        }

        try {
            const response = await axios.post(
                `http://127.0.0.1:8000/api/find-email/${email}`
            );

            if (response.data.emailExists === true) {
                return true;
            } else {
                errors.form = "Email doesn't exist!";
            }
        } catch(err) {
            console.log(`Error occurred: ${err}`);
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return false;
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const isValid = await validateForm();
        if (!isValid) return;

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/forgot-password', {
                email: formData.email
            });
    
            if (response.status === 200) {
                setSuccess(true);
                setFormErrors({});
            }
        } catch (error) {
            if (error.response && error.response.data.email) {
                setFormErrors({ form: error.response.data.email });
            } else {
                setFormErrors({ form: "Something went wrong. Try again." });
            }
        }
    };

    return (
        <>
            <Helmet>
                <title>Password Reset - Rently</title>
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
                            Password reset
                        </li>
                    </ol>
                </nav>
                <div className="d-flex justify-content-center py-sm-3 pt-lg-0">
                    <form
                        action="/"
                        className="login-form col-6 fs-16 p-lg-4 px-sm-4 py-sm-3 d-flex flex-column"
                        onSubmit={handleSubmit}
                    >
                        <h5 className="col-md-12 mb-2 my-sm-3 mb-lg-4 text-uppercase font-weight-bold fs-18">
                            password reset
                        </h5>

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
                                    type="text"
                                    className="pl-0 fs-14"
                                    value={formData.email}
                                    onChange={handleChange}
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
                            {success && (
                                <div
                                    className="alert alert-success mb-0 mt-4 p-2 fs-16"
                                    role="alert"
                                >
                                    Code has been sent!
                                </div>
                            )}
                        </div>
                        {formErrors.form && (
                            <div
                                id="error-msg"
                                className="fs-14 fw-bolder text-danger w-100 text-end"
                            >
                                {formErrors.form}
                            </div>
                        )}

                        <div className="col-md-12 mt-3 mt-lg-4 mb-2">
                            <button
                                type="submit"
                                className="col-md-12 login-btn align-items-center
                                    p-0 fs-14 line-height-normal letter-spacing-0_5 text-uppercase fw-bold w-100"
                            >
                                send a verification code
                            </button>
                        </div>

                        <div className="col-md-12 d-flex align-items-center justify-content-center pt-2 pt-sm-3">
                            <p className="mb-0 me-2 fs-14">
                                Don&apos;t have an account?
                            </p>
                            <a
                                href="/register"
                                className="btn btn-sm fs-12 ml-3 p-2 text-uppercase fw-bold"
                                style={{ border: "1px solid #ebeff8" }}
                            >
                                create an account
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}