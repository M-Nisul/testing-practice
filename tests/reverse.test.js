const reverse = require("../reverseString");

test('Is it reversed', () => {
    expect(reverse("clear")).toBe("raelc")
})

test("Let's test again",() => {
    expect(reverse("Deed")).toBe("deeD");
})