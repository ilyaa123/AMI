export const getRandomColor = () => {
	const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];

	const randomIndex = Math.floor(Math.random() * colors.length);

	const randomColor = colors[randomIndex];

	return randomColor;
};
