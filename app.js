window.onload = () => {
	main();
};
function main() {
	const root = document.querySelector('body');
	let btn = document.querySelector('#btn');
	btn.addEventListener('click', function() {
		const bgColor = GenerateRgb();
		root.style.background = bgColor;
	});
}

function GenerateRgb() {
	const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);
	return `rgb(${red},${green},${blue})`;
}
