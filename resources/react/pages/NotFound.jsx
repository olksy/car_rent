import { Helmet } from "react-helmet-async";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

export default function NotFound() {
    return (
        <>
            <Helmet>
                <title>404 Error - Page Not Found | Rently</title>
            </Helmet>
            <Header />
            <div className="container error-page">
                <a href="/" className="d-flex justify-content-center mt-4">
                    <img
                        src="https://renty.ae/assets/images/site/logo-color.png"
                        alt="logo"
                    />
                </a>

                <h2 className="title d-flex justify-content-center">404</h2>

                <div className="desc d-flex justify-content-center mb-4">
                    The page you requested was not found
                </div>
            </div>
            <Footer />
        </>
    );
}