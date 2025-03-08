import React from "react";
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from "../varients.js";
import resume from '../assets/resume.png';


const HeroSection = () => {

	const pdfUrl = '/resume.pdf';

    return (
		<div
			className="relative text-white min-h-screen flex md:flex-row flex-col-reverse items-center justify-start py-8 md:py-0">
			{/* Left Section */}
			<motion.div
				variants={fadeIn('right',
					0.2)}
				initial='hidden'
				whileInView={'show'}
				viewport={{
					once: false,
					amount: 0.5
				}}
				className="max-w-2xl">
                <span className="bg-blue-700 text-white px-3 py-1 rounded-md text-sm font-semibold">
                    ASHUTOSH SURYAVANSHI
                </span>
				<h1 className="text-4xl md:text-5xl font-bold mt-4">
					HI! I'M ASHUTOSH
				</h1>
				<h2 className="text-3xl md:text-4xl font-bold text-blue-500 mt-2">
					<TypeAnimation
						sequence={[
							'',
							1000,
							"I'M A WEB AND MOBILE APPLICATION DEVELOPER",
							1000,
						]}
						speed={50}
						repeat={0}
					/>
				</h2>
				<p className="text-gray-300 mt-4 text-lg">
					I am a highly motivated and detail-oriented web developer and mobile developer, eager to apply my skills in front-end and
					back-end development as a fresher..
				</p>

				{/* Buttons Section */}
				<div className="flex items-center space-x-4 mt-6">
					<a href='#contact-me'>
						<button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-lg">
							Hire Me
						</button>
					</a>

					{/* Social Media Links */}
					<a
						href="https://www.linkedin.com/in/ashutosh-suryavanshi-1488a8244"
						target="_blank"
						rel="noopener noreferrer"
						className="w-10 h-10 flex items-center justify-center text-blue-200 rounded-full hover:bg-blue-500 bg-[#1E2A47]"
					>
						<i className="fi fi-brands-linkedin"></i>
					</a>

					<a
						href="https://github.com/Ashutosh-1502"
						target="_blank"
						rel="noopener noreferrer"
						className="w-10 h-10 flex items-center justify-center text-gray-200 rounded-full hover:bg-gray-600 bg-[#1E2A47]"
					>
						<i className="fi fi-brands-github"></i>
					</a>
				</div>
			</motion.div>

			<motion.div
				variants={fadeIn('up', 0.4)}
				initial='hidden'
				whileInView={'show'}
				viewport={{once: false, amount: 0.5}}
				className="md:block md:absolute md:right-10 max-w-md">
				{/*className="md:block md:absolute md:right-10 max-w-md">*/}
			    <img
					onClick={() => window.open(pdfUrl, '_blank')}
			        // src="https://janna-react.vercel.app/images/home-banner.png"
					src={`${resume}`}
			        alt="Resume"
			        className="mt-3 z-20 rounded-lg hover:cursor-pointer hover:scale-110 transitiona-all duration-300 ease-in"
			    />
			</motion.div>
		</div>
	);
};

export default HeroSection;
