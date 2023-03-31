export default class Direction {
    public static getRandomDirection(): number {
        return Math.random() * 10 - 5;
    }
}