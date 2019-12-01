
// Day 1
const { calcFuelRecursively } = require('./day1');

// Problem 2
test('Calculates correct fuel amounts', () => {
    expect(calcFuelRecursively(14)).toBe(2);
    expect(calcFuelRecursively(1969)).toBe(966);
    expect(calcFuelRecursively(100756)).toBe(50346);
})
