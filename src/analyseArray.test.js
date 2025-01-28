import { analyseArray } from "./analyseArray";

test('enters a numerical array and returns an analysis', () => {
  expect(analyseArray([1,8,3,4,2,6])).toBe({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});
