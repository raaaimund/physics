import GameBoard from "./models/GameBoard";
import CirclesDrawer from "./models/CirclesDrawer";
import Color from "./models/Color";

new EventSource('/esbuild').addEventListener('change', () => location.reload())

const gameBoard = new GameBoard(document.querySelector('canvas'), window.innerWidth, window.innerHeight);
const circlesDrawer = new CirclesDrawer(gameBoard);

gameBoard.canvas.addEventListener('mousemove', (event) =>
    circlesDrawer.addCircle(event.clientX, event.clientY, 10, Color.getRandomColor()))
gameBoard.canvas.addEventListener('touchmove', (event) =>
    circlesDrawer.addCircle(event.touches[0].clientX, event.touches[0].clientY, 10, Color.getRandomColor()))
