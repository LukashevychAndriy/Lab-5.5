const { getX } = require('./functions');

test('getX should', () => {
  expect(getX(-10, -5, 0.001)).toBe(-8.63922119140625);
});
