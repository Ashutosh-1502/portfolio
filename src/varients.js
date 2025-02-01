export const fadeIn = (direction = "up", delay = 0) => {
	return {
		hidden: {
			opacity: 0,
			y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
			x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
		},
		show: {
			opacity: 1,
			y: 0,
			x: 0,
			transition: {
				type: "tween",
				duration: 1.2,
				delay: delay,
				ease: [0.33, 1, 0.68, 1],
			},
		},
	};
};
