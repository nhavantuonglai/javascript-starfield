function initStarfield() {

	let canvas = document.getElementById('starfield');
	if (!canvas) {
		canvas = document.createElement('canvas');
		canvas.id = 'starfield';
		document.body.appendChild(canvas);
	}
	const ctx = canvas.getContext('2d');
	let stars = [];
	const initialStarCount = 50;
	const newStarsPerSecond = 5;
	const minSize = 0.5;
	const maxSize = 2;
	const speedMultiplier = 0.5;
	const colors = ['#ff725e', '#ffb199', '#ff8c73', '#ff4832'];
	let lastAddTime = 0;
	let animationId = null;
	let isPageVisible = true;

	const styleSheet = document.createElement('style');
	styleSheet.textContent = `
		#starfield {
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			z-index: -1;
			pointer-events: none;
		}
	`;
	document.head.appendChild(styleSheet);

	function createStar() {
		const centerX = canvas.width / 2;
		const centerY = canvas.height / 2;
		const angle = Math.random() * Math.PI * 2;
		const size = Math.random() * (maxSize - minSize) + minSize;
		const speed = size * speedMultiplier;
		return {
			x: centerX,
			y: centerY,
			angle: angle,
			radius: 0,
			maxRadius: Math.max(canvas.width, canvas.height) * 1.2,
			size: size,
			speed: speed,
			color: colors[Math.floor(Math.random() * colors.length)],
			opacity: Math.random() * 0.7 + 0.3,
		};
	}

	function init() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		stars = [];
		for (let i = 0; i < initialStarCount; i++) {
			stars.push(createStar());
		}
		lastAddTime = performance.now();
	}

	function addNewStars(currentTime) {
		const elapsedSeconds = (currentTime - lastAddTime) / 1000;
		const starsToAdd = Math.floor(newStarsPerSecond * elapsedSeconds);
		if (starsToAdd > 0) {
			for (let i = 0; i < starsToAdd; i++) {
				stars.push(createStar());
			}
			lastAddTime = currentTime;
		}
	}

	function updateStars() {
		for (let i = stars.length - 1; i >= 0; i--) {
			const star = stars[i];
			star.radius += star.speed;
			star.x = canvas.width / 2 + Math.cos(star.angle) * star.radius;
			star.y = canvas.height / 2 + Math.sin(star.angle) * star.radius;
			if (star.radius > star.maxRadius) {
				stars.splice(i, 1);
			}
		}
	}

	function drawStars() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for (const star of stars) {
			const distanceRatio = star.radius / star.maxRadius;
			const adjustedOpacity = star.opacity * (1 - Math.min(0.95, distanceRatio));
			ctx.globalAlpha = adjustedOpacity;
			if (star.size > 1) {
				const glow = star.size * 2;
				const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, glow);
				gradient.addColorStop(0, star.color);
				gradient.addColorStop(1, 'transparent');
				ctx.fillStyle = gradient;
				ctx.beginPath();
				ctx.arc(star.x, star.y, glow, 0, Math.PI * 2);
				ctx.fill();
			}
			ctx.fillStyle = star.color;
			ctx.beginPath();
			ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
			ctx.fill();
		}
		ctx.globalAlpha = 1.0;
	}

	function animate(currentTime) {
		if (!isPageVisible) return;

		addNewStars(currentTime);
		updateStars();
		drawStars();
		animationId = requestAnimationFrame(animate);
	}

	function handleVisibilityChange() {
		if (document.hidden) {
			isPageVisible = false;
			if (animationId !== null) {
				cancelAnimationFrame(animationId);
				animationId = null;
			}
			stars = [];
			ctx.clearRect(0, 0, canvas.width, canvas.height);
		} else {
			isPageVisible = true;
			init();
			if (animationId === null) {
				animationId = requestAnimationFrame(animate);
			}
		}
	}

	document.addEventListener('visibilitychange', handleVisibilityChange);
	window.addEventListener('resize', init);

	const observer = new MutationObserver(() => {
		if (isPageVisible) {
			drawStars();
		}
	});
	observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

	init();
	animationId = requestAnimationFrame(animate);

	function destroy() {
		if (animationId !== null) {
			cancelAnimationFrame(animationId);
			animationId = null;
		}
		document.removeEventListener('visibilitychange', handleVisibilityChange);
		window.removeEventListener('resize', init);
		observer.disconnect();
		if (canvas && canvas.parentNode) {
			canvas.parentNode.removeChild(canvas);
		}
	}

	return { destroy };
}

document.addEventListener('DOMContentLoaded', () => {
	initStarfield();
});

module.exports = { initStarfield };