import CirclesDrawer from "../drawing/CirclesDrawer";
import Circle from "../models/Circle";
import Direction from "../models/Direction";

export default class CirclesAnimator {
    private readonly _circles: Circle[];

    constructor(
        private readonly _circlesDrawer: CirclesDrawer,
    ) {
        this._circles = [];
    }

    public startAnimation() {
        requestAnimationFrame(() => {
            this._circlesDrawer.drawAllCircles(this._circles);
            this.startAnimation();
        });
    }

    public addCircle(x: number, y: number, radius: number, color: string): void {
        const circle = new Circle(x, y, Direction.getRandomDirection(), Direction.getRandomDirection(), radius, color);
        this._circles.push(circle);
    }
}