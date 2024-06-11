const calculator = require('../calculator');

const cal = new calculator;

test("Addition test", () => {
    expect(cal.addition(5, 45)).toBe(50);
})

test("Subtraction test", () => {
    expect(cal.subtraction(20, 15)).toBe(5);
})

test("Division test", () => {
    expect(cal.division(20, 4)).toBe(5);
})

test("Muliplication test", () => {
    expect(cal.multiplication(2, 10)).toBe(20);
})