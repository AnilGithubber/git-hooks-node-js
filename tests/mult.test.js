const mult = require("../src/mult")

it('Sum test', () => {
    const result = mult (2,5)
    expect(result).toBe(10)
})