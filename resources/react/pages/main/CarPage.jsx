import Footer from "../../layouts/Footer"
import 'swiper/css';
import "swiper/css/navigation";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import RightColumn from "./CarPageComponents/RightColumn";
import LeftColumn from "./CarPageComponents/LeftColumn";
import Header from "../../layouts/Header";

export default function CarPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { slug, id } = useParams();
    
    useEffect(() => {
        setLoading(true);
        axios
        .get(`http://127.0.0.1:8000/api/cars/${slug}/${id}/detail`)
        .then((response) => {
            setData(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.error("There was an error fetching the data!", error);
            setLoading(false);
        });
    }, [slug, id]);
    console.log(data);
    
    if(loading) {
        return (
            <>
                <div>
                    {/* замінити на гіфку чи щось типу того на лоадінг */}
                    <h1>Loading...</h1>
                </div>
            </>
        );
    }

    const formattedBrandName = data.brand.name.toLowerCase().replace(/ /g, '-');
    return (
        <>
            <div className="bg-white">
                <Header />
                <div className="container pt-lg-4">
                    {/* Car name */}
                    <div className="pb-3 pt-3 mt-0 pt-lg-0 d-flex align-items-center mt-lg-0">
                        <span className="mr-2 d-flex align-items-center">
                            <img
                                src={`https://renty.ae/assets-nd/icons/site/brand_svg/${formattedBrandName}.svg`}
                                width="60"
                                height="60"
                                loading="lazy"
                            />
                        </span>

                        <h1 className="fs-30 fs-m-18 fw-normal mb-0">
                            Rent {data.brand.name} {data.title} ({data.color}),{" "}
                            {data.year} in Dubai
                        </h1>
                    </div>

                    {/* Else information */}
                    <div
                        className="d-flex position-relative justify-content-between"
                        style={{ columnGap: "60px" }}
                    >
                        <LeftColumn data={data} />

                        <RightColumn data={data} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}