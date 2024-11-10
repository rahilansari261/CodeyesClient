import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BASE_URL } from "../../utils/config";
import Loader from "../layout/Loader";
import axios from "axios";

const Clients = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);


    const [loading, setLoading] = useState(true);
    const [clientData, setClientData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await axios.get(`${BASE_URL}/all-client-logo?organizationId=codeyes_media`);
                if (resp?.data?.http_status_code === 200) {
                    setClientData(resp?.data?.data || []);
                }
            } catch (error) {
                console.error("Error fetching client data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <Loader />;
    }



    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        rtl: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {clientData?.map((item, i) => (
                <div
                    className={`h-[180px] sm:h-[210px] xl:h-[250px] w-[130px] sm:w-[260px] border border-black flex items-center justify-center hover:rounded-[50px] duration-500 ease-in-out overflow-hidden`}
                    key={i}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <img
                        src={item?.banner_image}
                        alt={`Client ${i}`}
                        className="h-full object-contain"
                    />
                </div>
            ))}
        </Slider>
    );
};

export default Clients;