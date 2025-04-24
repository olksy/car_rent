import { useNavigate } from "react-router-dom";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import { MdLogout } from "react-icons/md";
import PersonalInfo from "./PersonalInfo";
import ChangePswd from "./ChangePswd";
import { PulseLoader } from "react-spinners";

export default function UserDashboard() {
    const navigate = useNavigate();
    const [activeNav, setActiveNav] = useState("personalInf");
    const inputRef = useRef(null);
    const itiRef = useRef(null);
    const [user, setUser] = useState(null);
    const [currName, setCurrName] = useState("");
    const [currEmail, setCurrEmail] = useState("");
    const [currPhone, setCurrPhone] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [changedNumber, setChangedNumber] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        number: "",
    });
    const errorMap = [
        "Invalid number",
        "Invalid country code",
        "Too short",
        "Too long",
        "Invalid number",
    ];
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
            return;
        }

        axios
            .get("http://127.0.0.1:8000/api/user", {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((response) => {
                const userData = response.data;
                setUser(userData);
                setFormData({
                    email: userData.email,
                    name: userData.name,
                    number: userData.number,
                });
                setPhoneNumber(userData.number);
                setCurrEmail(userData.email);
                setCurrPhone(userData.number);
                setChangedNumber(userData.number);
                setCurrName(userData.name);
            })
            .catch((err) => {
                navigate("/login");
                localStorage.removeItem("token");
                console.log(`Error: ${err}!`);
            });
    }, [navigate]);

    useEffect(() => {
        if (phoneNumber && inputRef.current) {
            itiRef.current = window.intlTelInput(inputRef.current, {
                utilsScript:
                    "https://cdn.jsdelivr.net/npm/intl-tel-input@24.1.3/build/js/utils.js",
                initialCountry: "ae",
                separateDialCode: true,
                autoPlaceholder: "aggressive",
                strictMode: true,
            });

            itiRef.current.setNumber(phoneNumber);
            inputRef.current.addEventListener("input", () => {
                setChangedNumber(itiRef.current.getNumber());
            });

            return () => {
                if (itiRef.current) {
                    itiRef.current.destroy();
                }
            };
        }
    }, [phoneNumber]);

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: "" });
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

        if (changedNumber !== currPhone) {
            try {
                const response = await axios.post(
                    "http://127.0.0.1:8000/api/check-phone",
                    {
                        number: changedNumber,
                    }
                );

                if (response.data.exists) {
                    showError("Phone number is already registered.");
                    return false;
                }
            } catch (error) {
                showError("Server error. Please try again later.");
                return false;
            }
        }

        return true;
    };

    const validateForm = async () => {
        const errors = {};
        const { email, name, } = formData;

        // Email validation
        if (!email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Invalid email format";
        } else if (email !== currEmail) {
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

        setFormErrors(errors);

        // Return false if there are errors
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = {};
        const token = localStorage.getItem("token");
        if(formData.email === currEmail && formData.name.trim() === currName && changedNumber === currPhone) {
            errors.formError = "Nothing to change!";
            setFormErrors(errors);
            return;
        }

        const isValid = await validateForm();
        const isPhoneValid = await handleValidatePhone();

        if (isValid && isPhoneValid) {
            const { ...userData } = formData;
            // console.log("Form data being sent:", {
            //     ...userData,
            //     number: changedNumber ? changedNumber : phoneNumber,
            // });

            try {
                // eslint-disable-next-line no-unused-vars
                const response = await axios.put(
                    "http://127.0.0.1:8000/api/user-update",
                    {
                        ...userData,
                        number: changedNumber ? changedNumber : phoneNumber,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        }
                    }
                );
                setSuccessMessage("Profile updated successfully!");

                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } catch (er) {
                errors.formError = "Update failed :(";
            }
        } else {
            return false;
        }
    };
    
    return (
        <>
            <Header />
            <div className="container p-0 mb-lg-5 mb-2">
                <nav aria-label="breadcrumb" className="px-3 px-lg-0">
                    <ol className="breadcrumb d-flex align-items-center mt-3">
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
                            Profile
                        </li>
                    </ol>
                </nav>

                {user ? (
                    <>
                        <div className="container p-0">
                            <div className="d-flex align-items-center justify-content-between px-3 px-lg-0">
                                <div className="d-flex align-items-center">
                                    {/* <div>ava</div> */}
                                    <div className="d-flex flex-column">
                                        <h2 className="fs-36 fw-normal letter-spacing-0_2 lh-sm text-break">
                                            {user.name}
                                        </h2>
                                        <h4 className="fs-18 fw-normal lh-sm py-2 text-grey text-break text-secondary">
                                            {user.email}
                                        </h4>
                                    </div>
                                </div>
                                <div className="justify-content-end">
                                    <button
                                        className="btn py-2 border-none"
                                        style={{
                                            background: "#009FE2",
                                        }}
                                        onClick={() => {
                                            localStorage.removeItem("token");
                                            navigate("/login");
                                        }}
                                    >
                                        <span className="d-flex fs-14 text-light fw-bold text-uppercase align-items-center">
                                            <MdLogout
                                                className="me-3"
                                                style={{
                                                    fill: "rgb(248,249,250)",
                                                }}
                                            />{" "}
                                            Logout
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div className="mob-nav d-flex border-bottom">
                                <ul className="nav">
                                    <li
                                        className={`d-flex px-4 nav-item flex-grow-1 align-items-center justify-content-center fs-14 fw-bolder text-uppercase ${
                                            activeNav === "personalInf"
                                                ? "active-nav"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            setActiveNav("personalInf")
                                        }
                                    >
                                        personal information
                                    </li>
                                    <li
                                        className={`d-flex px-4 nav-item flex-grow-1 align-items-center justify-content-center fs-14 fw-bolder text-uppercase ${
                                            activeNav === "changePswd"
                                                ? "active-nav"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            setActiveNav("changePswd")
                                        }
                                    >
                                        change password
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-lg-4 pt-3">
                                <div className="tab-content">
                                    <PersonalInfo
                                        activeNav={activeNav}
                                        formErrors={formErrors}
                                        successMessage={successMessage}
                                        handleSubmit={handleSubmit}
                                        handleChange={handleChange}
                                        formData={formData}
                                        inputRef={inputRef}
                                        errorMsg={errorMsg}
                                    />
                                    <ChangePswd
                                        activeNav={activeNav}
                                        formErrors={formErrors}
                                        successMessage={successMessage}
                                        handleSubmit={handleSubmit}
                                        handleChange={handleChange}
                                        formData={formData}
                                        setFormErrors={setFormErrors}
                                        setSuccessMessage={setSuccessMessage}
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="d-flex justify-content-center align-items-center vh-100">
                            <PulseLoader color="#13428d" />
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </>
    );
}