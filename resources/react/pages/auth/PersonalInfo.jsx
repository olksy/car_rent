export default function PersonalInfo({
    activeNav,
    formErrors,
    successMessage,
    handleSubmit,
    handleChange,
    formData,
    inputRef,
    errorMsg,
}) {
    return (
        <>
            <div
                className={`personalInf ${
                    activeNav === "personalInf" ? "d-block" : "d-none"
                }`}
            >
                {formErrors.formError && (
                    <div
                        id="error-msg"
                        className="fs-14 alert alert-danger mx-3"
                    >
                        {formErrors.formError}
                    </div>
                )}
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

                    <div className="col-md-12 mt-2">
                        <div
                            className={`form-field-wrapper flex-column ${
                                formErrors.email ? "error" : ""
                            }`}
                        >
                            <label htmlFor="email" className="required mb-2">
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

                    <div className="col-md-12 mt-2">
                        <div className="form-field-wrapper p-0 fs-14 d-flex justify-content-start flex-wrap rounded-small default-phone-input">
                            <label className="fs-9 ps-3 required pt-1 fw-bolder letter-spacing-0_5 lh-1 text-uppercase w-100 m-0 text-start mb-2">
                                Phone number
                            </label>
                            <input
                                id="reservation_form_phone-input number"
                                ref={inputRef}
                                onChange={handleChange}
                                type="tel"
                                name="number"
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
