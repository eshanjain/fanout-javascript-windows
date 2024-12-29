const Calculator = require('../src/calculator');

describe('Calculator - Subtract', () => {
  const calc = new Calculator();

  test('subtracts 5 - 3 to equal 2', () => {
    expect(calc.subtract(5, 3)).toBe(2);
  });

  test('subtracts 2 - 5 to equal -3', () => {
    expect(calc.subtract(2, 5)).toBe(-3);
  });
});
