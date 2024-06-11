const analyze = require('../analyzeArray');

test("doesn't return the correct average", () => {
    expect(analyze([1,8,3,4,2,6]).average).toBe(4);
})

test("doesn't return the min value correctly", () => {
    expect(analyze([1,8,3,4,2,6]).min).toBe(1);
})

test("doesn't return the max value correctly", () => {
    expect(analyze([1,8,3,4,2,6]).max).toBe(8);
})

test("doesn't return the length correctly", () => {
    expect(analyze([1,8,3,4,2,6]).length).toBe(6);
})