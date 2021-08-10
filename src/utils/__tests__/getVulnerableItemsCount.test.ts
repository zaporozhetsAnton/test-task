import getVulnerableItemsCount from '../getVulnerableItemsCount';
import { IItem } from '../../services/getUserItems';

test('getVulnerableItemsCount function should return count of vulnerable items', () => {
  expect(getVulnerableItemsCount([{password: '211'} ]  as IItem[])).toBe(0);
  expect(getVulnerableItemsCount([{password: '211'}, {password: '2113'} ]  as IItem[])).toBe(0);
  expect(getVulnerableItemsCount([{password: '211'}, {password: '211'} ]  as IItem[])).toBe(2);
})
