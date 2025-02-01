import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {projectDetails} from '../assets/data.js';
import {motion} from 'framer-motion';
import {fadeIn} from "../varients.js";

const Projects = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <button>Next</button>,
        prevArrow: <button>Prev</button>,
    };


    return (
        <div className="text-white py-16" id="projects">
            {/* Header Section */}
            <div className="max-w-6xl mx-auto md:px-1">
                <div className="flex flex-col">
                    <button className="bg-blue-700 text-sm px-4 py-1 rounded-md self-start">
                        MY WORK
                    </button>
                    <h2 className="text-4xl font-bold mt-4">RECENT PROJECT</h2>
                </div>
            </div>

            {/* Project Showcase Section */}
            <motion.div
				variants={fadeIn('down', 0.5)}
				initial='hidden'
				whileInView={'show'}
				viewport={{once: false, amount: 0.3}}
				className="slider-container mt-12 max-w-6xl mx-auto">
                <Slider {...settings}>
                    {projectDetails.map((project, index) => (
                        <div key={index} className="bg-black rounded-xl overflow-hidden shadow-lg min-h-[380px] flex flex-col">
                            {/* Background Image */}
                            <div
                                className="bg-cover bg-center h-60 md:h-[250px] opacity-50"
                                style={{ backgroundImage: `url(${project.bgImage})` }}
                            ></div>

                            {/* Content Section */}
                            <div className="bg-opacity-60 p-6 rounded-lg backdrop-blur-xs shadow-lg flex flex-col space-y-4 flex-grow">
                                <h3 className="text-2xl font-bold">{project.name}</h3>
                                <p className={`text-gray-300 text-justify`}>
                                    {project.info}
                                </p>
                                <button className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition">
                                    View Project →
                                </button>
                            </div>

                            {/* Tech Stack */}
                            <h1 className="text-4xl md:text-3xl font-bold mt-4 px-6">
                                <span className="text-blue-500">TECHNOLOGY</span>
                            </h1>
                            <div className="flex flex-wrap gap-3 p-6 justify-start">
                                {project.tech.map((techUsed, techIndex) => (
                                    <div
                                        key={techIndex}
                                        className="text-white px-4 py-2 rounded-md text-sm md:text-base bg-opacity-80 border border-gray-600 hover:bg-gray-700 transition backdrop-blur-lg"
                                    >
                                        {techUsed}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </Slider>
            </motion.div>
        </div>
    );
};

export default Projects;
