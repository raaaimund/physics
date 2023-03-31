const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Set the canvas width and height to the window width and height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let circles = [];

function drawCircle(x, y, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}

function update() {
    circles.forEach(circle => {
        circle.x += circle.vx;
        circle.y += circle.vy;

        if (circle.x - circle.radius < 0 || circle.x + circle.radius > canvas.width) {
            circle.vx = -circle.vx;
        }

        if (circle.y - circle.radius < 0 || circle.y + circle.radius > canvas.height) {
            circle.vy = -circle.vy;
        }
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    circles.forEach(circle => {
        drawCircle(circle.x, circle.y, circle.radius, circle.color);
    });

    ctx.closePath();
    ctx.fill();

    window.requestIdleCallback(() => {
        update();
        draw();
    });
}

canvas.addEventListener('mousemove', (event) => {
    const circle = {
        x: event.clientX,
        y: event.clientY,
        radius: 25,
        vx: Math.random() * 10 - 5,
        vy: Math.random() * 10 - 5,
        color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    };

    circles.push(circle);
});

draw();
