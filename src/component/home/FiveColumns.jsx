import React, { useState } from 'react';

export default function FiveColumns() {
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const [tooltipAlignment, setTooltipAlignment] = useState({ x: 'left', y: 'top' });

    const handleMouseMove = (e, container) => {
        const rect = container.getBoundingClientRect();
        const tooltipWidth = 300;
        const tooltipHeight = 60;

        let xPos = e.clientX - rect.left;
        let yPos = e.clientY - rect.top;

        // Adjust the alignment when the tooltip is near the edges
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

    const array = [
        { image: 'img1.jpg', title: 'Art', description: 'Visual Concept' },
        { image: 'img2.jpg', title: 'Design', description: 'Creative Space' },
        { image: 'img3.jpg', title: 'Photography', description: 'Capture Moments' },
        { image: 'img4.jpg', title: 'Graphics', description: 'Digital Art' },
        { image: 'img5.jpg', title: 'Painting', description: 'Canvas Expression' },
        { image: 'img6.jpg', title: 'Illustration', description: 'Sketching Life' },
        { image: 'img7.jpg', title: 'Sculpture', description: '3D Creation' },
        { image: 'img8.jpg', title: 'Architecture', description: 'Building Dreams' },
        { image: 'img9.jpg', title: 'Fashion', description: 'Style & Trends' },
        { image: 'img10.jpg', title: 'Film', description: 'Visual Storytelling' },
        { image: 'img11.jpg', title: 'Music', description: 'Sound Waves' },
        { image: 'img12.jpg', title: 'Literature', description: 'Words in Motion' },
    ];

    return (
        <>
            <div className={`pt-10 sm:pt-20 `}>
                <div className="space-y-2 grid justify-center">
                    <div className='m-auto relative'>
                        <img src="/image/about/smile.png" alt="Error1" className='absolute -top-10 sm:top-0 left-0 sm:-left-20 md:-left-10 w-[30px] animate_zoom_in delay-500' />
                        <img src="/image/about/woohoo.png" alt="Error1" className='absolute w-[100px] md:w-[150px] -right-10 -top-14 animate_zoom_in delay-1000' />
                        <h2 className="text-4xl  sm:text-[52px] sm:leading-[55px] font-semibold text-center z-10 relative">Keeping Track Of <br /> Our New Projects</h2>
                    </div>
                </div>
            </div>
            <div className={`overflow-hidden custom_global_space`}>
                <div className="grid grid-cols-2 border-b border-l border-r border-black sm:grid-cols-3 md:grid-cols-4">
                    {array.map((item, index) => (
                        <div
                            key={index}
                            className="col-span-1 border-l border-t border-black p-2 sm:p-5 lg:p-10 img_box relative cursor-pointer group"
                            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                        >
                            <img
                                src={`/image/home/img/img${index + 1}.jpg`}
                                alt={`Error${index}`}
                                className="rounded-3xl"
                            />
                            <div
                                style={{
                                    top: tooltipAlignment.y === 'top' ? tooltipPosition.y : 'auto',
                                    bottom: tooltipAlignment.y === 'bottom' ? 0 : 'auto',
                                    left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
                                    right: tooltipAlignment.x === 'right' ? '50px' : 'auto', // Add 10px space from the right
                                }}
                                className="absolute z-20 border border-black uppercase px-3 hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white text-sm rounded-lg shadow-lg"
                            >
                                {item.title}
                            </div>
                            <div
                                style={{
                                    top: tooltipAlignment.y === 'top' ? tooltipPosition.y + 40 : 'auto',
                                    bottom: tooltipAlignment.y === 'bottom' ? 40 : 'auto',
                                    left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
                                    right: tooltipAlignment.x === 'right' ? '50px' : 'auto', // Add 10px space from the right
                                }}
                                className="absolute custom_tool_tip z-20 text-xl font-semibold border border-black hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white rounded-lg shadow-lg"
                            >
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
