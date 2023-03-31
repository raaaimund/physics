export default class Circle {
    public static readonly STARTING_ANGLE = 0;
    public static readonly ENDING_ANGLE = Math.PI * 2;

    constructor(
        private _x: number,
        private _y: number,
        private xDirection: number,
        private yDirection: number,
        private readonly _radius: number,
        private readonly _color: string,
    ) {

    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    get radius(): number {
        return this._radius;
    }

    get color(): string {
        return this._color;
    }

    private reverseXDirection(): void {
        this.xDirection = -this.xDirection;
    }

    private reverseYDirection(): void {
        this.yDirection = -this.yDirection;
    }

    private isAtLeftBorder(): boolean {
        return this.x - this._radius < 0;
    }

    private isAtRightBorder(width: number): boolean {
        return this.x + this._radius > width;
    }

    private isAtLeftOrRightBorder(width: number): boolean {
        return this.isAtLeftBorder() || this.isAtRightBorder(width);
    }

    private isAtTopBorder(): boolean {
        return this._y - this._radius < 0;
    }

    private isAtBottomBorder(height: number): boolean {
        return this._y + this._radius > height;
    }

    private isAtTopOrBottomBorder(height: number): boolean {
        return this.isAtTopBorder() || this.isAtBottomBorder(height);
    }

    private moveInXDirection(): void {
        this._x += this.xDirection;
    }

    private moveInYDirection(): void {
        this._y += this.yDirection;
    }

    public move(width: number, height: number) {
        this.moveInXDirection();
        this.moveInYDirection();

        if (this.x - this.radius <= 0) {
            this._x = width - this.radius;
        } else if (this.x + this.radius > width) {
            this._x = this.radius;
        }
        if (this._y - this.radius <= 0) {
            this._y = height - this.radius;
        } else if (this._y + this.radius > height) {
            this._y = this.radius;
        }

        if (this.isAtLeftOrRightBorder(width)) {
            this.reverseXDirection();
        }
        if (this.isAtTopOrBottomBorder(height)) {
            this.reverseYDirection();
        }
    }
}