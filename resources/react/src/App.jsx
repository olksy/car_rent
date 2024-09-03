import CarPage from "../pages/main/CarPage";
import Index from "../pages/Index";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/cars')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);
    
    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={<Index data={data} />}
                    />
                    <Route
                        path="/cars/:slug/:id/detail"
                        element={<CarPage />}
                    />
                    <Route
                        path="/privacy-policy"
                        element={<PrivacyPolicy />}
                    />
                    <Route
                        path="/terms-conditions"
                        element={<TermsConditions />}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
