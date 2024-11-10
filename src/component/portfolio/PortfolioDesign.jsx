import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../utils/config';
import Loader from '../layout/Loader';

export default function PortfolioDesign() {
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const [tooltipAlignment, setTooltipAlignment] = useState({ x: 'left', y: 'top' });


    const [blogPosts, setBlogData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/all-portfolio?organizationId=codeyes_media`);

                setBlogData(response.data.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch blog data.");
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div>{error}</div>;
    }




    const handleMouseMove = (e, container) => {
        const rect = container.getBoundingClientRect();
        const tooltipWidth = 300;
        const tooltipHeight = 60;

        let xPos = e.clientX - rect.left;
        let yPos = e.clientY - rect.top;

        let xAlign = 'left';
        let yAlign = 'top';

        if (xPos + tooltipWidth > rect.width) {
            xAlign = 'right';
            xPos = rect.width - tooltipWidth;
        }

        if (yPos + tooltipHeight > rect.height) {
            yAlign = 'bottom';
            yPos = rect.height - tooltipHeight;
        }

        setTooltipPosition({ x: xPos, y: yPos });
        setTooltipAlignment({ x: xAlign, y: yAlign });
    };


    return (
        <>

            <svg className="svg-distort">
                <defs>
                    <filter id="displacement-filter" className='svg_filter'>
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.02 0.05"
                            numOctaves="5"
                            result="warp"
                        />
                        <feGaussianBlur
                            in="warp"
                            stdDeviation="8"
                            result="blurredWarp"
                        />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="blurredWarp"
                            scale="150"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>
                </defs>
            </svg>
            <div className="grid grid-cols-2">
                <div className="col-span-2 lg:col-span-1">
                    <div className="grid sm:grid-cols-2">
                        {
                            blogPosts && blogPosts.length > 0 && blogPosts.map((item, index) => (
                                <div className="col-span-1 border border-black relative cursor-pointer group rounded-[40px] overflow-hidden port_img" key={index}
                                    onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}>
                                    <Link to={`/portfolio-slug/${item?.id}`}>
                                        <img
                                            src={item?.banner_image[0]}
                                            alt="Error1"
                                            className="h-full w-full object-cover img_hover_effect"
                                        />
                                        <img
                                            src={item?.banner_image[0]}
                                            alt="Error1"
                                            className="h-full w-full object-cover img_hover_effect"
                                        />
                                        <div
                                            style={{
                                                top: tooltipAlignment.y === 'top' ? tooltipPosition.y : 'auto',
                                                bottom: tooltipAlignment.y === 'bottom' ? 0 : 'auto',
                                                left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
                                                right: tooltipAlignment.x === 'right' ? '50px' : 'auto',
                                            }}
                                            className="absolute z-20 border border-black uppercase px-3 hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white text-sm rounded-lg shadow-lg"
                                        >
                                            Art
                                        </div>
                                        <div
                                            style={{
                                                top: tooltipAlignment.y === 'top' ? tooltipPosition.y + 40 : 'auto',
                                                bottom: tooltipAlignment.y === 'bottom' ? 40 : 'auto',
                                                left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
                                                right: tooltipAlignment.x === 'right' ? '50px' : 'auto',
                                            }}
                                            className="absolute custom_tool_tip z-20 text-xl font-semibold border border-black hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white rounded-lg shadow-lg"
                                        >
                                            Visual Concept
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }


                    </div>
                </div>
            </div>
        </>
    );
}