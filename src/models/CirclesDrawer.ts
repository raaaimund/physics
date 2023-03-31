import Circle from "./Circle";
import GameBoard from "./GameBoard";

export default class CirclesDrawer {
    private readonly _circles: Circle[];

    constructor(
        private readonly _gameboard: GameBoard,
    ) {
        this._circles = [];
        this.draw();
    }

    public addCircle(x: number, y: number, radius: number, color: string): void {
        const circle = new Circle(x, y, radius, color, Math.random() * 10 - 5, Math.random() * 10 - 5);
        this._circles.push(circle);
    }

    private update() {
        this._circles.forEach(circle => {
            circle.x += circle.xDirection;
            circle.y += circle.yDirection;

            if (circle.x - circle.radius < 0 || circle.x + circle.radius > this._gameboard.width) {
                circle.reverseXDirection();
            }

            if (circle.y - circle.radius < 0 || circle.y + circle.radius > this._gameboard.height) {
                circle.reverseYDirection();
            }
        });
    }

    private drawCircle(x, y, radius, color) {
        this._gameboard.ctx.fillStyle = color;
        this._gameboard.ctx.beginPath();
        this._gameboard.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this._gameboard.ctx.closePath();
        this._gameboard.ctx.fill();
    }

    private draw() {
        this._gameboard.ctx.clearRect(0, 0, this._gameboard.width, this._gameboard.height);
        this._gameboard.ctx.beginPath();

        this._circles.forEach(circle => {
            this.drawCircle(circle.x, circle.y, circle.radius, circle.color);
        });

        this._gameboard.ctx.closePath();
        this._gameboard.ctx.fill();

        requestAnimationFrame(() => {
            this.update();
            this.draw();
        });
    }
}