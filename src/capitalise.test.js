import { capitalise } from "./capitalise";

test('enter scotland and returns Scotland', () => {
  expect(capitalise('scotland')).toBe('Scotland');
});