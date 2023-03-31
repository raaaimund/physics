import Circle from "./Circle";

test('it sets the radius', () => {
    const circle = new Circle(0, 0, 0, 0, 10, 'null');
    expect(circle.radius).toBe(10);
});