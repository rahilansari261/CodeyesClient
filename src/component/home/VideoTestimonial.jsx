import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from 'react-modal';
import { MdPlayCircle } from 'react-icons/md';
import axios from 'axios';
import { BASE_URL } from '../../utils/config';
import Loader from '../layout/Loader';

// Ensure accessibility for the modal
Modal.setAppElement('#root'); // Use '#root' if this is a standard React project

const VideoTestimonial = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [testimonialData, setTestimonialData] = useState([]);
    const [loading, setLoading] = useState(true);
console.log("testimonialData",testimonialData);

    // Fetch testimonial data from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await axios.get(`${BASE_URL}/all-testimonial-video?organizationId=codeyes_media`);
                if (resp?.data?.http_status_code === 200) {
                    // Map the response to extract video_id and title
                    const formattedData = resp?.data?.data.map((video) => ({
                        id: video.id,
                        title: video.title,
                        videoUrl: video.video_url,
                    }));
                    setTestimonialData(formattedData);
                    setLoading(false);
                } else {
                    console.error('Failed to load testimonial data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <Loader />;
    }

    // Open modal with the selected video
    const openModal = (videoUrl) => {
        // Extract video ID from the YouTube URL
        const videoId = new URL(videoUrl).searchParams.get('v');
        setSelectedVideo(videoId);
        setModalIsOpen(true);
    };

    // Close modal
    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedVideo(null);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="relative custom_container">
            <Slider {...settings}>
                {testimonialData.map((video) => (
                    <div key={video.id} className="relative mb-10 sm:px-4">
                        <div className="relative">
                            <img
                                src={`https://img.youtube.com/vi/${new URL(video.videoUrl).searchParams.get('v')}/hqdefault.jpg`}
                                className="rounded-xl overflow-hidden w-full"
                                alt={`Video Thumbnail`}
                            />
                            {/* Play button overlay */}
                            <MdPlayCircle
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl cursor-pointer"
                                onClick={() => openModal(video.videoUrl)}
                            />
                        </div>
                        <h3 className="font-semibold text-xl mt-4 text-center">{video.title}</h3>
                    </div>
                ))}
            </Slider>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Watch Video"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg"
                overlayClassName="fixed inset-0 bg-black bg-opacity-75"
            >
                <button onClick={closeModal} className="absolute top-2 right-2 text-2xl">✖</button>
                {selectedVideo && (
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${selectedVideo}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="YouTube video"
                    ></iframe>
                )}
            </Modal>
        </div>
    );
};

export default VideoTestimonial;
