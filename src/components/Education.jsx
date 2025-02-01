import React from "react";
import {education} from '../assets/data.js';
import {motion} from 'framer-motion';
import {fadeIn} from "../varients.js";

const Education = () => {

    return (
        <div className="my-10" id="education">
            <motion.h1
				variants={fadeIn('right', 0.2)}
				initial='hidden'
				whileInView={'show'}
				viewport={{once: false, amount: 0.5}}
				className="text-4xl md:text-5xl font-bold">
                <span className="text-blue-500">EDUCATION</span> <span className="text-gray-400">BACKGROUND</span>
            </motion.h1>
            <div className="relative md:mb-16">
                {/* Horizontal Line */}
                <div className="absolute left-0 right-0 top-10 h-1 bg-blue-500"></div>
                <motion.div
					variants={fadeIn('up', 0.4)}
					initial='hidden'
					whileInView={'show'}
					viewport={{once: false, amount: 0.5}}
					className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative">
                    {education.map((edu, index) => (
                        <div key={index} className="flex flex-col items-center text-center mt-10">
                            {/* Connector Dots */}
                            <div className="w-4 h-4 bg-blue-500 rounded-full relative top-4"></div>

                            {/* Experience Card */}
                            <div className="bg-white shadow-md rounded-lg md:p-4 w-full mt-6 hover:scale-110 transition-all duration-200 ease-in-out hover:bg-gray-800 edu-font">
                                <img src={edu.icon} alt="icon" className="w-12 h-12 mx-auto mb-2" />
                                <p className="text-green-500 text-sm font-bold">{edu.year}</p>
                                <h4 className="font-semibold text-md hover:text-gray-100">{edu.title}</h4>
                                <p className="text-gray-400 text-sm font-semibold">{edu.institute}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Education;
