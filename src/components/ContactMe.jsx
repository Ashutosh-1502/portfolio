import React, {useState} from "react";
import contact_me from '../assets/contact.avif';
import {motion} from 'framer-motion';
import {fadeIn} from "../varients.js";
import {Toaster, toast} from "react-hot-toast";

const ContactForm = () => {

	const [name, setName] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if(name.length < 4)
			return toast.error('Name should be at least 4 character long');
		if(subject.length < 15)
			return toast.error('Subject should be at least 15 character long');
		if(message.length < 70)
			return toast.error('Message should be at least 70 character long');

		toast.success('Thank you. We will get back to you')
		setName('');
		setMessage('');
		setSubject('');
	}

    return (
        <div className="bg-[#0A192F] flex justify-center items-center min-h-screen px-4 py-10" id="contact-me">
			<Toaster/>
            <motion.div
				variants={fadeIn('up', 0.2)}
				initial='hidden'
				whileInView={'show'}
				viewport={{once: false, amount: 0.4}}
				className="bg-[#112240] text-white rounded-lg shadow-lg p-6 md:p-10 max-w-6xl w-full flex flex-col md:flex-row">

                {/* Left Section (Image & Contact Info) */}
                <motion.div
					variants={fadeIn('right', 0.5)}
					initial='hidden'
					whileInView={'show'}
					viewport={{once: false, amount: 0.4}}
					className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
                    {/* Profile Image */}
                    <div className="w-72 h-48 rounded-xl overflow-hidden shadow-lg">
                        <img
                            src={`${contact_me}`}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Contact Details */}
                    <div className="mt-6">
                        <p className="text-gray-400 text-sm uppercase">Write an E-mail</p>
                        <p className="text-lg font-semibold mt-1">
                            <a href="mailto:ashutoshsuryavanshi2@gmail.com" className="text-blue-600 hover:underline">
                                ashutoshsuryavanshi2@gmail.com
                            </a>
                        </p>

                        <p className="text-gray-400 text-sm uppercase mt-4">Call Me</p>
                        <p className="text-lg font-semibold mt-1">
                            <a href="tel:+918604515853" className="text-blue-600 hover:underline">
                                +91 8604515853
                            </a>
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-6">
                        <a href="https://github.com/Ashutosh-1502" target='_blank' className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1E2A47] hover:bg-blue-500 transition">
                            <i className="fi fi-brands-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/ashutosh-suryavanshi-1488a8244" target='_blank' className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1E2A47] hover:bg-blue-700 transition">
                            <i className="fi fi-brands-linkedin"></i>
                        </a>
                    </div>
                </motion.div>

                {/* Right Section (Contact Form) */}
                <motion.div
					variants={fadeIn('left', 0.7)}
					initial='hidden'
					whileInView={'show'}
					viewport={{once: false, amount: 0.4}}
					className="md:w-2/3 mt-8 md:mt-0 md:pl-10">
                    <h2 className="text-2xl md:text-3xl font-semibold">Contact me</h2>


                    {/* Form */}
                    <form className="mt-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                            <div>
                                <label className="text-gray-300 text-sm">Your Name</label>
                                <input
                                    type="text"
									value={name}
									onChange={(e) => setName(e.target.value)}
                                    placeholder="Name *"
                                    className="w-full mt-1 px-4 py-2 rounded-md bg-[#1E2A47] border border-gray-600 focus:outline-none focus:border-blue-400"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="text-gray-300 text-sm">Subject</label>
                            <input
                                type="text"
								value={subject}
								onChange={(e) => setSubject(e.target.value)}
                                placeholder="Subject *"
                                className="w-full mt-1 px-4 py-2 rounded-md bg-[#1E2A47] border border-gray-600 focus:outline-none focus:border-blue-400"
                            />
                        </div>

                        <div className="mt-4">
                            <label className="text-gray-300 text-sm">Your Message</label>
                            <textarea
                                placeholder="Your message *"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
                                rows="4"
                                className="w-full mt-1 px-4 py-2 rounded-md bg-[#1E2A47] border border-gray-600 focus:outline-none focus:border-blue-400"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
							className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-3 rounded-md transition">
                            SEND MESSAGE
                        </button>
                    </form>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ContactForm;
