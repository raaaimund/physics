export default class Circle implements Direction {
    constructor(
        private _x: number,
        private _y: number,
        private readonly _radius: number,
        private readonly _color: string,
        private _xDirection: number,
        private _yDirection: number,
    ) {
    }


    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }

    get radius(): number {
        return this._radius;
    }

    get color(): string {
        return this._color;
    }

    get xDirection(): number {
        return this._xDirection;
    }

    set xDirection(value: number) {
        this._xDirection = value;
    }

    get yDirection(): number {
        return this._yDirection;
    }

    set yDirection(value: number) {
        this._yDirection = value;
    }

    reverseXDirection(): void {
        this._xDirection = -this._xDirection;
    }

    reverseYDirection(): void {
        this._yDirection = -this._yDirection;
    }
}

interface Direction {
    xDirection: number;
    reverseXDirection: () => void;
    yDirection: number;
    reverseYDirection: () => void;
}