const cipher = require('../caeserCipher');

test("Base Case", () => {
    expect(cipher("hello", 3)).toBe("khoor");
})

test("Wrapping", () => {
    expect(cipher("xyz", 3)).toBe('abc');
})

test("Base Case 2", () => {
    expect(cipher("nisul", 5)).toBe("snxzq");
})

test("Case Test", () => {
    expect(cipher("HeLLo", 3)).toBe("KhOOr");
})

test("Special Char Case", () => {
    expect(cipher("Hello World!", 5)).toBe("Mjqqt Btwqi!");
})