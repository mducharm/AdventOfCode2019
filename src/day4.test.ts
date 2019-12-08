import { hasAdjacentDigits, neverDecreases } from './day4';

const testCases = [
    {
        value: 111111,
        hasDouble: true,
        neverDecreases: true
    },
    {
        value: 223450,
        hasDouble: true,
        neverDecreases: false
    },
    {
        value: 123789,
        hasDouble: false,
        neverDecreases: true
    }
]

testCases.forEach((data) => {
    test("Tests whether it has double values",
    () => {
        expect(hasAdjacentDigits(data.value)).toBe(data.hasDouble);
    })
})

testCases.forEach((data) => {
    test("Tests whether it never decreases",
    () => {
        expect(neverDecreases(data.value)).toBe(data.neverDecreases);
    })
})

