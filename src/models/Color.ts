export default class Color {
    public static getRandomColor(): string {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`
    }

    public static getRgbaFromHex(hex: string, alpha: number): string {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);

        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    public static getCreationAnimationColor(): string {
        return 'rgba(30, 30, 30, 0.25)';
    }
}