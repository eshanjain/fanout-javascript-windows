const Calculator = require('../src/calculator');

describe('Calculator - Multiply', () => {
  const calc = new Calculator();

  test('multiplies 2 * 3 to equal 6', () => {
    expect(calc.multiply(2, 3)).toBe(6);
  });

  test('multiplies -4 * 3 to equal -12', () => {
    expect(calc.multiply(-4, 3)).toBe(-12);
  });
});
