import {IItem} from '../services/getUserItems';

import itemHasWeakPassword from './itemHasWeakPassword';
import itemIsOlderThanThirtyDays from './itemIsOlderThanThirtyDays';
import itemHasReusedPassword from './itemHasReusedPassword';

const getVulnerableItemsCount = (itemList: Array<IItem>) => {
  return itemList.filter(item => {
    return itemHasWeakPassword(item) || itemIsOlderThanThirtyDays(item) || itemHasReusedPassword(item, itemList)
  }).length;
};

export default getVulnerableItemsCount;
