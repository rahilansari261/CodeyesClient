import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules'; // Import Autoplay

export default function Banner() {
    const videoData = [
        {
            url: "https://randall.qodeinteractive.com/wp-content/uploads/2023/06/ezgif-1-478adaaf61.mp4",
            thumbnail: "/image/banner/video-home-img1.png",
            title: "Marie Scollari",
            subtitle: "Beyond the Canvas"
        },
        {
            url: "https://randall.qodeinteractive.com/wp-content/uploads/2023/06/ezgif-3-c1c2678f1b.mp4",
            thumbnail: "/image/banner/video-home-img2.png",
            title: "The Colors Of Life",
            subtitle: "Innovative"
        },
        {
            url: "https://randall.qodeinteractive.com/wp-content/uploads/2023/06/ezgif-1-44edd3006c.mp4",
            thumbnail: "/image/banner/video-home-img4.png",
            title: "Visual Concept Design",
            subtitle: "free art"
        },
        {
            url: "https://randall.qodeinteractive.com/wp-content/uploads/2023/06/ezgif-3-2a3236d3e8.mp4",
            thumbnail: "/image/banner/video-home-img3.png",
            title: "We Are The Best",
            subtitle: "Branding"
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return (
                `<span class="${className}">
                    <img src="${videoData[index].thumbnail}" alt="thumbnail" class="swiper-thumbnail custom_img_pagination"/>
                </span>`
            );
        },
    };

    return (
        <>
            <div className='custom_container relative home_banner !py-0'>
                <div className={`video_info ${videoData[activeIndex].title}`}>
                    <h2 className="video_subtitle">{videoData[activeIndex].subtitle}</h2>
                    <p className="video_title">{videoData[activeIndex].title}</p>
                </div>

                <Swiper
                    effect="fade"
                    pagination={pagination}
                    modules={[Pagination, EffectFade, Autoplay]}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                    onSlideChange={(swiper) => {
                        setActiveIndex(swiper.activeIndex);
                        const title = document.querySelector('.video_title');
                        const subtitle = document.querySelector('.video_subtitle');
                        title.style.animation = 'none';
                        subtitle.style.animation = 'none';
                        setTimeout(() => {
                            title.style.animation = '';
                            subtitle.style.animation = '';
                        }, 10);
                    }}
                >
                    {videoData.map((video, index) => (
                        <SwiperSlide key={index}>
                            <div className='video_container'>
                                <video
                                    src={video.url}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}





// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { IoMdPlay } from "react-icons/io";
// import { Pagination } from 'swiper/modules';

// export default function Banner() {
//     const videoData = [
//         {
//             url: "https://randall.qodeinteractive.com/wp-content/uploads/2023/06/ezgif-1-478adaaf61.mp4",
//             thumbnail: "/image/banner/video-home-img1.png",
//             title: "Beyond the Canvas",
//             subtitle: "Marie Scollari"
//         },
//         {
//             url: "https://randall.qodeinteractive.com/wp-content/uploads/2023/06/ezgif-3-c1c2678f1b.mp4",
//             thumbnail: "/image/banner/video-home-img2.png",
//             title: "Innovative",
//             subtitle: "The Colors Of Life"
//         },
//         {
//             url: "https://randall.qodeinteractive.com/wp-content/uploads/2023/06/ezgif-1-44edd3006c.mp4",
//             thumbnail: "/image/banner/video-home-img3.png",
//             title: "free art",
//             subtitle: "Visual Concept Design"
//         },
//         {
//             url: "https://randall.qodeinteractive.com/wp-content/uploads/2023/06/ezgif-3-2a3236d3e8.mp4",
//             thumbnail: "/image/banner/video-home-img4.png",
//             title: "Branding",
//             subtitle: "We Are The Best"
//         }
//     ];

//     const [activeIndex, setActiveIndex] = useState(0);
//     const pagination = {
//         clickable: true,
//         renderBullet: function (index, className) {
//             // const isActive = index === activeIndex;

//             return (
//                 `<span class="${className}">
//                     <img src="${videoData[index].thumbnail}" alt="thumbnail" class="swiper-thumbnail custom_img_pagination"/>
//         <span class="play-icon">${activeIndex == index ? '<i class="play-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></i>' : ''}</span>

//                 </span>`
//             );

//         },
//     };

//     return (
//         <>
//             <div className='custom_container relative !py-0'>
//                 <div className="video_info">
//                     <h2 className="video_subtitle">({videoData[activeIndex].subtitle})</h2>
//                     <p className="video_title">{videoData[activeIndex].title}</p>
//                 </div>

//                 <Swiper
//                     pagination={pagination}
//                     modules={[Pagination]}
//                     className="mySwiper"
//                     onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//                 >
//                     {videoData.map((video, index) => (
//                         <SwiperSlide key={index}>
//                             <div className='video_container'>
//                                 <video
//                                     src={video.url}
//                                     autoPlay
//                                     loop
//                                     muted
//                                     playsInline
//                                 />
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </>
//     );
// }
