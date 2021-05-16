import { forceInt } from './helpers';

describe('helpers passed everything', () => {
  test('force int string number', () => {
    expect(forceInt('100')).toBe(100);
  });

  test('force int string alphabet', () => {
    expect(forceInt('hasdhashdah')).toBe(0);
  });
});
