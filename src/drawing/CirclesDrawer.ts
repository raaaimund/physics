import Circle from "../models/Circle";
import GameBoard from "../models/GameBoard";
import Color from "../models/Color";

export default class CirclesDrawer {

    constructor(private readonly _gameboard: GameBoard) {

    }

    public drawAllCircles(circles: Circle[]): void {
        this._gameboard.ctx.clearRect(0, 0, this._gameboard.width, this._gameboard.height);
        this._gameboard.ctx.beginPath();

        circles.forEach(circle => {
            circle.move(this._gameboard.width, this._gameboard.height);
            this.drawCircle(circle);
        });

        this._gameboard.ctx.closePath();
        this._gameboard.ctx.fill();
    }

    private drawCircle(circle: Circle) {
        this._gameboard.ctx.fillStyle = circle.color;
        this._gameboard.ctx.beginPath();
        this._gameboard.ctx.shadowColor = Color.getRgbaFromHex(circle.color, 0.20);
        this._gameboard.ctx.shadowBlur = 5;
        this._gameboard.ctx.shadowOffsetX = 15;
        this._gameboard.ctx.shadowOffsetY = 15;
        this._gameboard.ctx.arc(circle.x, circle.y, circle.radius, Circle.STARTING_ANGLE, Circle.ENDING_ANGLE);
        this._gameboard.ctx.closePath();
        this._gameboard.ctx.fill();
    }
}