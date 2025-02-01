// eslint-disable-next-line
import React from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import Projects from './components/MyProjects';
import ContactForm from './components/ContactMe';
import Education from './components/Education';

const Divider = () => <div className="h-[1px] bg-gray-500" />;

function App() {
	return (
		<>
			<header className="px-6 md:px-[8%] bg-[#08172E]">
				<Navbar />
				<HeroSection />
			</header>

			<Divider />

			<main className="px-6 md:px-[8%] bg-gradient-to-r from-[#07233b] via-[#041d34] to-[#050c16]">
				<AboutSection />
				<Divider />
				<Education />
				<Divider />
				<Projects />
				<ContactForm />
			</main>
		</>
	);
}

export default App;
