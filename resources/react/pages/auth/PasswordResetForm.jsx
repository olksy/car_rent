import Header from "../../layouts/Header"
import Footer from "../../layouts/Footer"
import axios from "axios"
import { useSearchParams, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Helmet } from "react-helmet-async";

export default function PasswordResetForm() {
    const { token } = useParams();
    const [searchParams] = useSearchParams();
    const email = searchParams.get("email") || "";
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: email,
        password: "",
        password_confirmation: "",
        token: token,
    });

    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        const validateToken = async () => {
            try {
                const res = await axios.post(
                    "http://127.0.0.1:8000/api/validate-reset-token",
                    {
                        token,
                        email,
                    }
                );

                if (!res.data.valid) {
                    navigate("/");
                }
            } catch (e) {
                navigate("/");
            }
        };

        if (token && email) {
            validateToken();
        }
    }, [token, email, navigate]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setFormErrors({ ...formErrors, [e.target.name]: "" });
    };

    const validateForm = async () => {
        const errors = {};
        const { password, password_confirmation } = formData;

        // Password validation
        if (!password.trim()) {
            errors.password = "Password is required";
        } else if (password.length < 6) {
            errors.password = "Password must be at least 6 characters";
        }

        // Confirm password validation
        if (!password_confirmation.trim()) {
            errors.password_confirmation = "Please confirm your password";
        } else if (password !== password_confirmation) {
            errors.password_confirmation = "Passwords do not match";
        }

        setFormErrors(errors);

        // Return false if there are errors
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors({});
        const isValid = await validateForm();

        if (isValid) {
            try {
                const response = await axios.post(
                    "http://127.0.0.1:8000/api/reset-password",
                    formData
                );
                if (response.status === 200) {
                    navigate("/login", {
                        state: { resetSuccess: true },
                    });
                }
            } catch (e) {
                if (e.response && e.response.data.errors) {
                    setFormErrors(e.response.data.errors);
                } else {
                    setFormErrors({ form: "Something went wrong!" });
                }
            }
        } else {
            return false;
        }
    };

    return (
        <>
            <Helmet>
                <title>Password Reset Form - Rently</title>
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
                            Password Reset Form
                        </li>
                    </ol>
                </nav>

                <div className="d-flex justify-content-center pt-sm-3 pt-lg-0">
                    <form
                        className="register-form col-6 fs-16 p-lg-4 px-sm-4 py-sm-3 d-flex flex-column"
                        onSubmit={handleSubmit}
                    >
                        <h5 className="col-md-12 mt-sm-2 text-uppercase font-weight-bold fs-18">
                            Password reset form
                        </h5>

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
                                    formErrors.password_confirmation
                                        ? "error"
                                        : ""
                                }`}
                            >
                                <label
                                    htmlFor="password_confirmation"
                                    className="required mb-2"
                                >
                                    confirm a new password
                                </label>
                                <input
                                    id="password_confirmation"
                                    placeholder="Enter your password"
                                    name="password_confirmation"
                                    type="password"
                                    value={formData.password_confirmation}
                                    onChange={handleChange}
                                    className="pl-0 fs-14"
                                />
                            </div>
                            {formErrors.password_confirmation && (
                                <div
                                    id="error-msg"
                                    className="fs-14 fw-bolder text-danger w-100 text-end"
                                >
                                    {formErrors.password_confirmation}
                                </div>
                            )}
                        </div>

                        <div className="col-md-12 mt-3 mt-lg-4 mb-2">
                            <button
                                type="submit"
                                className="col-md-12 register-btn align-items-center
                                    p-0 fs-14 line-height-normal letter-spacing-0_5 text-uppercase fw-bold w-100"
                            >
                                {" "}
                                reset password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}