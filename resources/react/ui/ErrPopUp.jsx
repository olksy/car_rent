export default function ErrPopUp({err, setErr}) {
    return (
        <>
            <div id="container" className={err ? "container_err" : ""}>
                <div id="error-box">
                    <div className="face2">
                        <div className="eye"></div>
                        <div className="eye right"></div>
                        <div className="mouth sad"></div>
                    </div>
                    <div className="shadow move"></div>
                    <div className="message">
                        <h1 className="alert_error">Error!</h1>
                        <p>oh no, something went wrong.</p>
                    </div>
                    <button className="button-box">
                        <h1
                            className="red"
                            onClick={() => setErr(false)}
                        >
                            try again
                        </h1>
                    </button>
                </div>
            </div>
        </>
    );
}