const Calculator = require('../src/calculator');

describe('Calculator - Add', () => {
  const calc = new Calculator();

  test('adds 1 + 2 to equal 3', () => {
    expect(calc.add(1, 2)).toBe(3);
  });

  test('adds -1 + 1 to equal 0', () => {
    expect(calc.add(-1, 1)).toBe(0);
  });
});
