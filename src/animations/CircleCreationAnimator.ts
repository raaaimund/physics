import GameBoard from "../models/GameBoard";
import Color from "../models/Color";
import Circle from "../models/Circle";

export default class CircleCreationAnimator {
    private creationAnimationId: number;
    private animationStartedTime: number;
    private x: number;
    private y: number;

    constructor(private readonly _gameBoard: GameBoard) {

    }

    public startCreationAnimation(x: number, y: number): void {
        this.animationStartedTime = new Date().getTime();
        this.x = x;
        this.y = y;
        this.drawCreationAnimation();
    }

    public stopCreationAnimation(): number {
        cancelAnimationFrame(this.creationAnimationId);
        return new Date().getTime() - this.animationStartedTime;
    }

    private drawCreationAnimation(): void {
        const duration = new Date().getTime() - this.animationStartedTime;

        this._gameBoard.ctx.fillStyle = Color.getCreationAnimationColor();
        this._gameBoard.ctx.beginPath();
        this._gameBoard.ctx.arc(this.x, this.y, duration / 10, Circle.STARTING_ANGLE, Circle.ENDING_ANGLE);
        this._gameBoard.ctx.closePath();
        this._gameBoard.ctx.fill();

        this.creationAnimationId = requestAnimationFrame(() => this.drawCreationAnimation());
    }
}