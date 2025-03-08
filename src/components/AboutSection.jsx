import React from "react";
import {skills} from '../assets/data.js';
import {motion} from 'framer-motion';
import {fadeIn} from "../varients.js";

const AboutSection = () => {

    return (
        <section className="w-full min-h-screen flex items-center justify-center py-8 md:py-5 text-white" id="about-me">
            <div className="flex flex-col md:flex-row items-center w-full justify-between md:gap-x-20">
                {/* Left Section - About Text */}
                <motion.div
					variants={fadeIn('right', 0.4)}
					initial='hidden'
					whileInView={'show'}
					viewport={{once: false, amount: 0.5}}
					className="w-full md:w-full mb-10 md:mb-0 h-full">
                    <span className="bg-blue-700 text-white px-3 py-1 rounded-md text-sm font-semibold">
                        ABOUT ME
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mt-4">
                    I AM SEEKING {" "}
                        <span className="text-blue-500">WEB DEVELOPMENT</span> INTERNSHIPS
                    </h1>
                    <p className="text-gray-300 mt-4 text-lg text-justify">
                    I am available for web and mobile development internship opportunities, focusing on both front-end and back-end technologies. As a fresher, I am eager to apply my skills in HTML, CSS, JavaScript, React, React Native, Node.js, MongoDB, and Express to build dynamic websites, robust server-side applications, and mobile apps while gaining hands-on experience in the field.
                    </p>


                    <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg">
                        GET IN TOUCH
                    </button>
                </motion.div>

                {/* Right Section - Skills Boxes */}
                <motion.section
					variants={fadeIn('up', 0.7)}
					initial='hidden'
					whileInView={'show'}
					viewport={{once: false, amount: 0.5}}
					className="w-full max-w-lg min-h-screen flex flex-col items-center justify-center text-white">
                    <h2 className="text-4xl font-bold mb-8 text-center">My Skills</h2>

                    <div className="w-full max-w-lg">
                        {skills.map((skill, index) => (
                            <div key={index} className="mb-3 bg-black rounded-md p-4">
                                <div className="flex justify-between text-gray-300">
                                    <span>{skill.name}</span>
                                    <span>{skill.level}</span>
                                </div>
                                <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
                                    <div
                                        className="bg-green-400 h-2 rounded-full transition-all duration-500"
                                        style={{ width: skill.level }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </section>
    );
};

export default AboutSection;
