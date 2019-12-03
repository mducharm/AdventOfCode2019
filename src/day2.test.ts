const { processCodes } = require('./day2');

// Problem 1

test('Calculates codes correctively', () => {
    expect(processCodes([1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50])).toBe(3500);
})
