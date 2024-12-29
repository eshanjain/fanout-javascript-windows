const Calculator = require('../src/calculator');

describe('Calculator - Divide', () => {
  const calc = new Calculator();

  test('divides 6 / 2 to equal 3', () => {
    expect(calc.divide(6, 2)).toBe(3);
  });

  test('throws error when dividing by zero', () => {
    expect(() => calc.divide(5, 0)).toThrow("Division by zero is not allowed");
  });
});
