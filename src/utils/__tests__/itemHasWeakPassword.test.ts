import itemHasWeakPassword from '../itemHasWeakPassword';
import { IItem } from '../../services/getUserItems';

describe('should return true if password do not match requirements', () => {
  test.each([
    [
      false,
      {
        password: 'pass',
      }
    ],
    [
      true,
      {
        password: 'Password123~',
      }
    ],
    [
      false,
      {
        password: 'Password',
      }
    ]
  ])('should return %s', (expectedResult, item) => {
    expect(itemHasWeakPassword(item as IItem)).toBe(expectedResult);
  })
});
