import { calculator } from "./calculator";

test('enter 5 and 2, returns 7', () => {
  expect(calculator.add(5, 2)).toBe(7);
});

test('enter 5 and 2, returns 3', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });

test('enter 8 and 2, returns 4', () => {
  expect(calculator.divide(8, 2)).toBe(4);
});

test('enter 8 and 2, returns 16', () => {
    expect(calculator.divide(8, 2)).toBe(4);
  });

