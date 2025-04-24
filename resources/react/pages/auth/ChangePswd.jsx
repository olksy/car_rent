/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";

export default function ChangePswd({
    activeNav,
    formErrors,
    successMessage,
    setFormErrors,
    setSuccessMessage,
}) {
    const [passwordData, setPasswordData] = useState({
        password: "",
        newPassword: "",
        confirmPassword: "",
    });
    const token = localStorage.getItem("token");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPasswordData({ ...passwordData, [name]: value });
    };

    const validateForm = async () => {
        const errors = {};
        const { password, newPassword, confirmPassword } = passwordData;

        // Confirm password validation
        if (newPassword !== confirmPassword) {
            errors.confirmPassword = "Passwords do not match!";
        }

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/check-password",
                {
                    password: password,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response.status !== 200) {
                errors.password = "Incorrect current password!";
            }
        } catch (err) {
            if (err.response && err.response.status === 422) {
                errors.password = "Invalid request data!";
            } else if (err.response && err.response.status === 400) {
                errors.password = "Incorrect current password!";
            } else {
                errors.password = "An error occurred!";
            }
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = {};
        const isValid = await validateForm();

        if (isValid) {
            const { newPassword, confirmPassword } = passwordData;
            // console.log("Form data being sent:", {
            //     password: newPassword,
            //     password_confirmation: confirmPassword,
            // });

            try {
                const response = axios.put(
                    "http://127.0.0.1:8000/api/change-password",
                    {
                        password: newPassword,
                        password_confirmation: confirmPassword,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setSuccessMessage("Password changed successfully!");
            } catch (err) {
                errors.form = "Error occurred!"
                setFormErrors(errors);
            }
        }
    };

    return (
        <>
            <div
                className={`changePswd ${
                    activeNav === "changePswd" ? "d-block" : "d-none"
                }`}
            >
                {Object.keys(formErrors).map((key) => (
                    <div key={key} className="fs-14 alert alert-danger mx-3">
                        {formErrors[key]}
                    </div>
                ))}

                {successMessage && (
                    <div
                        className="alert alert-success fs-14 mx-3"
                        role="alert"
                    >
                        {successMessage}
                    </div>
                )}

                <form
                    onSubmit={handleSubmit}
                    action="/"
                    className="col-lg-6 col-12 fs-16 px-3 py-2 d-flex flex-column"
                >
                    <div className="col-md-12">
                        <div className="form-field-wrapper flex-column">
                            <label htmlFor="password" className="required mb-2">
                                Current password
                            </label>
                            <input
                                id="password"
                                required
                                placeholder="Current password"
                                name="password"
                                type="password"
                                onChange={handleChange}
                                value={passwordData.password}
                                className="pl-0 fs-14"
                            />
                        </div>
                    </div>

                    <div className="col-md-12 mt-2">
                        <div className="form-field-wrapper flex-column">
                            <label
                                htmlFor="newPassword"
                                className="required mb-2"
                            >
                                New Password
                            </label>
                            <input
                                id="newPassword"
                                required
                                minLength={6}
                                placeholder="New password"
                                name="newPassword"
                                type="password"
                                onChange={handleChange}
                                value={passwordData.newPassword}
                                className="pl-0 fs-14"
                            />
                        </div>
                    </div>

                    <div className="col-md-12 mt-2">
                        <div className="form-field-wrapper flex-column">
                            <label
                                htmlFor="confirmPassword"
                                className="required mb-2"
                            >
                                Confirm a new password
                            </label>
                            <input
                                id="confirmPassword"
                                required
                                minLength={6}
                                placeholder="Confirm a new password"
                                name="confirmPassword"
                                type="password"
                                onChange={handleChange}
                                value={passwordData.confirmPassword}
                                className="pl-0 fs-14"
                            />
                        </div>
                    </div>

                    <div className="col-md-12 mt-4 mb-2">
                        <button
                            type="submit"
                            className="col-md-12 register-btn align-items-center
                                    p-0 fs-14 line-height-normal letter-spacing-0_5 text-uppercase fw-bold w-100"
                        >
                            {" "}
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
