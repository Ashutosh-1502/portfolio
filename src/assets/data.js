import blog_banner from "./blog_banner.jpg";
import doc_banner from "./doc_banner.jpg";
import note_banner from "./note_banner.jpeg";

const navSection = [
	{ id: "home", title: "Home", link: "#home" },
	{ id: "about-me", title: "About Me", link: "#about-me" },
	{ id: "education", title: "Education", link: "#education" },
	{ id: "projects", title: "Projects", link: "#projects" },
	{ id: "contact-me", title: "Contact", link: "#contact-me" },
];

const skills = [
	{ name: "JavaScript", level: "70%" },
	{ name: "Tailwind CSS", level: "75%" },
	{ name: "React.js", level: "75%" },
	{ name: "Node.js", level: "50%" },
	{ name: "Express.js", level: "70%" },
	{ name: "MongoDB", level: "78%" },
];

const education = [
	{
		year: "2018- 2019",
		title: "High School",
		institute: "Avadh International School",
		icon: "https://cdn-icons-png.flaticon.com/128/167/167707.png",
	},
	{
		year: "2020-2021",
		title: "Intermediate",
		institute: "Avadh International School",
		icon: " https://cdn-icons-png.flaticon.com/128/2232/2232688.png",
	},
	{
		year: "2022-2026 (Pursuing)",
		title: "Bachalors of Technology (CSE)",
		institute: "Dr. APJ Abdual Kalam Technical University",
		icon: 'https://cdn-icons-png.flaticon.com/128/3135/3135768.png',
	}
];

const projectDetails = [
	{
		name: "BLOGGING WEBSITE",
		info: "A blogging platform built with MongoDB, Node, Express, React, and Tailwind, enabling users to sign up via Google or email. Users can explore blogs across various topics, comment, like, and reply on posts, as well as write and manage their own blogs with a modern text editor. Notifications are sent for new blogs and comment interactions, enhancing user engagement.",
		tech: ['React', 'Tailwind', 'Node', 'Express', 'MongoDB'],
		bgImage: blog_banner
	},
	{
		name: "DOCTOR APPOINTMENT BOOKING SYSTEM",
		info: "A doctor appointment booking system built with React, Tailwind, Node, Express, and MongoDB. Patients can book, manage appointments, and verify via phone or email. Stripe handles payments. Admins manage doctors, patients, and promotions, while a super admin can promote users via email invites. Doctors track earnings, manage appointments, and view details through dedicated panels.",
		tech: ['React', 'Tailwind', 'Node', 'Express', 'MongoDB'],
		bgImage: doc_banner
	},
	{
		name: 'NOTE TAKING WEBSITE',
		info: "Note Taking website has built with features like creating, updating, deleting, and managing notes. The website is developed using Bootstrap, Node, Express, EJS, and MongoDB. It also includes sign-up and sign-in functionality via email/password or Google, enabling users to securely access and manage their notes.",
		tech: ['Bootstrap', 'Node', 'Express', 'EJS', 'MongoDB'],
		bgImage: note_banner
	}
];

export {navSection, skills, education, projectDetails}
