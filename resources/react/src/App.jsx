import CarPage from "../pages/main/CarPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  // const [data, setData] = useState([]);

  //   useEffect(() => {
  //       axios.get('http://127.0.0.1:8002/api/cars')
  //           .then(response => {
  //               setData(response.data);
  //           })
  //           .catch(error => {
  //               console.error("There was an error fetching the data!", error);
  //           });
  //   }, []);

    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path="/cars/:slug/:id/detail"
                        element={<CarPage />}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
