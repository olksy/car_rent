import CarPage from "../pages/main/CarPage";
import Index from "../pages/Index";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import UserDashboard from "../pages/auth/UserDashboard";
import Brand from "../pages/main/Brand";
import Type from "../pages/main/Type";
import BodyType from "../pages/main/BodyType";
import NotFound from "../pages/NotFound";
import Brands from "../pages/main/Brands";
import Logout from "../pages/auth/Logout";
import { HelmetProvider } from "react-helmet-async";
import PasswordReset from "../pages/auth/PasswordReset";
import PasswordResetForm from "../pages/auth/PasswordResetForm";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/cars")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    return (
        <>
            <HelmetProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Index data={data} />} />
                        <Route path="/cars/:slug/:id/detail" element={<CarPage />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/terms-conditions" element={<TermsConditions />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/password-reset" element={<PasswordReset />} />
                        <Route path="/reset-password/:token" element={<PasswordResetForm />} />
                        <Route path="/brands/:brand" element={<Brand />} />
                        <Route path="/types/:type" element={<Type />} />
                        <Route path="/body-types/:bodyType" element={<BodyType />} />
                        <Route path="/all-brands" element={<Brands />}/>
                        <Route path="/user-dashboard" element={<UserDashboard />}/>

                        <Route path="*" element={<NotFound />} />
                        <Route path="/page/not-found" element={<NotFound />} />
                        <Route path="/logout" element={<Logout />} />
                    </Routes>
                </Router>
            </HelmetProvider>
        </>
    );
}

export default App;
