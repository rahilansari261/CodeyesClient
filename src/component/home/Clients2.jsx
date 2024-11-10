import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { BASE_URL } from "../../utils/config";
import Loader from "../layout/Loader";

// const array = [
//     {
//         id: "1",
//         img1: "/image/home/clients1.png",
//         img2: "/image/home/clients1-1.png"
//     },
//     {
//         id: "2",
//         img1: "/image/home/clients2.webp",
//         img2: "/image/home/clients2-2.png"
//     },
//     {
//         id: "3",
//         img1: "/image/home/clients3.webp",
//         img2: "/image/home/clients3-3.png"
//     },
//     {
//         id: "4",
//         img1: "/image/home/clients4.webp",
//         img2: "/image/home/clients4-4.png"
//     },
//     {
//         id: "5",
//         img1: "/image/home/clients5.webp",
//         img2: "/image/home/clients5-5.png"
//     },
//     {
//         id: "6",
//         img1: "/image/home/clients6.webp",
//         img2: "/image/home/clients6-6.png"
//     },
//     {
//         id: "6",
//         img1: "/image/home/clients6.webp",
//         img2: "/image/home/clients6-6.png"
//     },
//     {
//         id: "6",
//         img1: "/image/home/clients6.webp",
//         img2: "/image/home/clients6-6.png"
//     },
//     {
//         id: "6",
//         img1: "/image/home/clients6.webp",
//         img2: "/image/home/clients6-6.png"
//     },
//     {
//         id: "6",
//         img1: "/image/home/clients6.webp",
//         img2: "/image/home/clients6-6.png"
//     },
//     {
//         id: "6",
//         img1: "/image/home/clients6.webp",
//         img2: "/image/home/clients6-6.png"
//     },
//     {
//         id: "6",
//         img1: "/image/home/clients6.webp",
//         img2: "/image/home/clients6-6.png"
//     },
//     {
//         id: "6",
//         img1: "/image/home/clients6.webp",
//         img2: "/image/home/clients6-6.png"
//     },
//     {
//         id: "6",
//         img1: "/image/home/clients6.webp",
//         img2: "/image/home/clients6-6.png"
//     },
//     {
//         id: "6",
//         img1: "/image/home/clients6.webp",
//         img2: "/image/home/clients6-6.png"
//     },
//     {
//         id: "6",
//         img1: "/image/home/clients6.webp",
//         img2: "/image/home/clients6-6.png"
//     },
// ];

const Clients2 = () => {
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
        rtl: true,
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
        <div className="mt-[-8px] client_2">
            <Slider {...settings}>
                {clientData.map((item, i) => (
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
        </div>
    );
};

export default Clients2;
