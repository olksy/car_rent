import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

export default function Login () {
    return (
        <>
            <Header />
            <div className="container p-0 mt-3 mb-3 mt-lg-5 mb-lg-5">
                <div className="d-flex justify-content-center">
                    <form
                        action="/"
                        className="login-form col-6 fs-16 p-lg-4 pb-lg-5"
                    >
                        <h5 className="col-md-12 mt-3 mb-3 mb-lg-4 text-uppercase font-weight-bold fs-18">
                            log in
                        </h5>

                        <div className="col-md-12">
                            <div className="form-field-wrapper flex-column">
                                <label
                                    htmlFor="email"
                                    className="required mb-2"
                                >
                                    Phone or Email
                                </label>
                                <input
                                    id="email"
                                    placeholder="Enter your email or phone"
                                    name="email"
                                    type="text"
                                    required
                                    className="pl-0 fs-14"
                                />
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-field-wrapper mt-4">
                                <label htmlFor="password" className="required">
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

                        <div className="col-md-12 mt-4 mb-2">
                            <button
                                type="submit"
                                className="col-md-12 login-btn align-items-center
                                    p-0 fs-14 line-height-normal letter-spacing-0_5 text-uppercase fw-bold"
                            >
                                {" "}
                                Login
                            </button>
                        </div>

                        <div className="col-md-12 d-flex align-items-center justify-content-center pt-3">
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

                        <div className="col-md-12 d-flex align-items-center justify-content-center pt-3">
                            <p className="mb-0 me-2 fs-14">
                                Forgot your password?
                            </p>
                            <a
                                href="/register"
                                className="btn btn-sm fs-12 ml-3 p-2 text-uppercase fw-bold"
                                style={{ border: "1px solid #ebeff8" }}
                            >
                                password reset
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}