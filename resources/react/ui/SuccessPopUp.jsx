export default function SuccessPopUp({ success, setSuccess }) {
    return (
        <>
            <div id="container" className={success ? "container_success" : ""}>
                <div id="success-box">
                    <div className="face">
                        <div className="eye"></div>
                        <div className="eye right"></div>
                        <div className="mouth happy"></div>
                    </div>
                    <div className="shadow scale"></div>
                    <div className="message">
                        <h1 className="alert_success">Success!</h1>
                        <p>
                            you&apos;ve successfully rented a car! <br />
                            wait for the message with the all details
                        </p>
                    </div>
                    <button className="button-box">
                        <h1 className="green" onClick={() => setSuccess(false)}>
                            continue
                        </h1>
                    </button>
                </div>
            </div>
        </>
    );
}
