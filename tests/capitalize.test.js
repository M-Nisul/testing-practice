const capitalize = require('../capitalize');

test('One word capitalization', () => {
    expect(capitalize("stick")).toBe('Stick');
})

test("Another Test", () => {
    expect(capitalize("bertholamew")).toBe("Bertholamew");
})