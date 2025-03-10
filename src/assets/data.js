import blog_banner from "./blog_banner.jpg";
import note_banner from "./note_banner.jpeg";
import job_banner from './job_banner.jpg';

const navSection = [
	{ id: "home", title: "Home", link: "#home" },
	{ id: "about-me", title: "About Me", link: "#about-me" },
	{ id: "education", title: "Education", link: "#education" },
	{ id: "projects", title: "Projects", link: "#projects" },
	{ id: "contact-me", title: "Contact", link: "#contact-me" },
];

const skills = [
	{ name: "Javascript", level: "70%" },
	{ name: 'Typescript', level: '60%' },
	{ name: "Tailwind CSS", level: "75%" },
	{ name: "React", level: "75%" },
	{ name: "React Native", level: '75%' },
	{name: 'Next.js', level: '40%'},
	{ name: "Node.js", level: "50%" },
	{ name: "Express", level: "70%" },
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
		title: "Bachelors of Technology (CSE)",
		institute: "Dr. APJ Abdual Kalam Technical University",
		icon: 'https://cdn-icons-png.flaticon.com/128/3135/3135768.png',
	}
];

const projectDetails = [
	{
		name: "BLOGGING WEBSITE",
		info: "A blogging platform built with MongoDB, Node, Express, React, and Tailwind, enabling users to sign up via Google or email. Users can explore blogs across various topics, comment, like, and reply on posts, as well as write and manage their own blogs with a modern text editor. Notifications are sent for new blogs and comment interactions, enhancing user engagement.",
		tech: ['React', 'Tailwind', 'Node', 'Express', 'MongoDB'],
		bgImage: blog_banner,
		githubLink: 'https://github.com/Ashutosh-1502/blog-web-app.git'
	},
	{
		name: "JOB FINDER",
		info: "A React Native job search app lets users browse and apply for jobs across various domains. With secure Google authentication, users get a personalized experience. The app fetches job listings from the JSearch API, aggregating jobs from platforms like LinkedIn and Internshala. Users can view job details and apply directly via links to company websites.",
		tech: ['React Native', 'JSearch API'],
		bgImage: job_banner,
		githubLink: 'https://github.com/Ashutosh-1502/job_finder.git'
	},
	{
		name: 'NOTE TAKING WEBSITE',
		info: "Note Taking website has built with features like creating, updating, deleting, and managing notes. The website is developed using Bootstrap, Node, Express, EJS, and MongoDB. It also includes sign-up and sign-in functionality via email/password or Google, enabling users to securely access and manage their notes.",
		tech: ['Bootstrap', 'Node', 'Express', 'EJS', 'MongoDB'],
		bgImage: note_banner,
		githubLink: 'https://github.com/Ashutosh-1502/Note-taking-app.git'
	}
];

export { navSection, skills, education, projectDetails }
