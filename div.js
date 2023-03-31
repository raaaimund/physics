const circleSize = 50;
const circles = [];
const colors = ['#FF3C38', '#1D3F72', '#0CCE6B', '#F7D488'];

// create a new circle element
function createCircle(x, y, color) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.backgroundColor = color;
    circle.style.transform = `translate(${x}px, ${y}px)`;
    document.body.appendChild(circle);
    circles.push(circle);
    return circle;
}

// animate the circles
function animate() {
    for (const circle of circles) {
        const rect = circle.getBoundingClientRect();
        const x = rect.left;
        const y = rect.top;
        const width = rect.width;
        const height = rect.height;
        const maxX = window.innerWidth - width;
        const maxY = window.innerHeight - height;
        circle.style.transform = `translate(${x + circle.vx}px, ${y + circle.vy}px)`;
        if (x + circle.vx < 0 || x + width + circle.vx > window.innerWidth) {
            circle.vx = -circle.vx;
        }
        if (y + circle.vy < 0 || y + height + circle.vy > window.innerHeight) {
            circle.vy = -circle.vy;
        }
    }
    requestAnimationFrame(animate);
}

// add a click event listener to create new circles
document.addEventListener('click', (event) => {
    const x = event.clientX - circleSize / 2;
    const y = event.clientY - circleSize / 2;
    const color = colors[Math.floor(Math.random() * colors.length)];
    createCircle(x, y, color);
});

// initialize the animation
for (let i = 0; i < 100; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const circle = createCircle(x, y, color);
    circle.vx = Math.random() * 4 - 2;
    circle.vy = Math.random() * 4 - 2;
}
animate();
