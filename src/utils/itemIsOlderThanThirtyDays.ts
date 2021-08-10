import {IItem} from "~/services/getUserItems";

const itemIsOlderThanThirtyDays = (item: IItem) => {
  const itemDateInMilliseconds = new Date(item.createdAt).getTime();
  const currentTimeInMilliseconds = new Date().getTime();
  const thirtyDaysInMilliseconds = 2592000000;
  return currentTimeInMilliseconds - itemDateInMilliseconds > thirtyDaysInMilliseconds;
};

export default itemIsOlderThanThirtyDays;
