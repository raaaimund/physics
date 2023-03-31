import GameBoard from "./models/GameBoard";
import CirclesAnimator from "./animations/CirclesAnimator";
import Color from "./models/Color";
import CirclesDrawer from "./drawing/CirclesDrawer";
import CircleCreationAnimator from "./animations/CircleCreationAnimator";

new EventSource('/esbuild').addEventListener('change', () => location.reload())

const gameBoard = new GameBoard(document.querySelector('canvas'), window.innerWidth, window.innerHeight);
const circlesDrawer = new CirclesDrawer(gameBoard);
const circleCreationAnimator = new CircleCreationAnimator(gameBoard);
const circlesAnimator = new CirclesAnimator(circlesDrawer);

circlesAnimator.startAnimation();

gameBoard.canvas.addEventListener('mousedown', (event) =>
    circleCreationAnimator.startCreationAnimation(event.clientX, event.clientY))

gameBoard.canvas.addEventListener('mouseup', (event) => {
    const duration = circleCreationAnimator.stopCreationAnimation();
    circlesAnimator.addCircle(event.clientX, event.clientY, duration / 10, Color.getRandomColor());
})