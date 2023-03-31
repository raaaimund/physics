export default class GameBoard {
    private readonly _ctx: CanvasRenderingContext2D;

    constructor(
        private readonly _canvas: HTMLCanvasElement,
        private readonly _width: number,
        private readonly _height: number,
    ) {
        this._canvas.width = this._width;
        this._canvas.height = this._height;
        this._ctx = this._canvas.getContext('2d');
    }

    get canvas(): HTMLCanvasElement {
        return this._canvas;
    }

    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }

    get ctx(): CanvasRenderingContext2D {
        return this._ctx;
    }
}