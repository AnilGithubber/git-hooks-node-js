const sum = require("../src/sum")

it('Sum test', () => {
    const result = sum (2,5)
    expect(result).toBe(7)
})