import itemIsOlderThanThirtyDays from '../itemIsOlderThanThirtyDays';
import { IItem } from '../../services/getUserItems';

describe('itemIsOlderThanThirtyDays function should return true if item was created later than 30 days', () => {
  test('should return true', () => {
    expect(itemIsOlderThanThirtyDays({ createdAt: '2021-06-10T14:27:33.185Z' } as IItem)).toBeTruthy();
    expect(itemIsOlderThanThirtyDays({ createdAt: '2021-05-10T14:27:33.185Z' } as IItem)).toBeTruthy();
    expect(itemIsOlderThanThirtyDays({ createdAt: '2021-04-10T14:27:33.185Z' } as IItem)).toBeTruthy();
    expect(itemIsOlderThanThirtyDays({ createdAt: '2020-06-10T14:27:33.185Z' } as IItem)).toBeTruthy();
    const thirtyDaysFromToday = new Date(new Date().setDate(new Date().getDate() - 30));
    expect(itemIsOlderThanThirtyDays({ createdAt: `${thirtyDaysFromToday}` } as IItem)).toBeTruthy();
  });
  test('should return false', () => {
    const twentyNineDaysFromToday = new Date(new Date().setDate(new Date().getDate() - 29));
    expect(itemIsOlderThanThirtyDays({ createdAt: `${twentyNineDaysFromToday}` } as IItem)).toBeFalsy();
  });
})
