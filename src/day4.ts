
export const puzzleInput = [245318, 765747];

export const hasAdjacentDigits = (num: number): boolean => {
    let numArray = parseIntoArray(num);

    let [, hasDoubleDigits] = numArray.reduce((acc, val) => acc[0] === val || acc[1] ? [acc[0], true] : [val, false], [-1, false])
    return hasDoubleDigits;
}

export const neverDecreases = (num: number): boolean => {
    let numArray = parseIntoArray(num);
    let [, doesNotDecrease] = numArray.reduce((acc, val) => (acc[0] > val || !acc[1]) ? [val, false] : [val, true], [-1, true])
    return doesNotDecrease;
}

export const parseIntoArray = (num: number, numArray: number[] = []): number[] => {
    if ((num - (num % 10)) < 10) {
        return [num % 10, ...numArray];
    }
    return parseIntoArray((num - (num % 10)) / 10, [num % 10, ...numArray]);
}

const start = puzzleInput[0];
const end = puzzleInput[1];
var current = start;
var possiblePasswords = [];

while (current <= end) {
    if (hasAdjacentDigits(current) && neverDecreases(current)) {
        possiblePasswords.push(current);
    }
    current += 1
}

console.log(possiblePasswords.length);
console.log(possiblePasswords);

