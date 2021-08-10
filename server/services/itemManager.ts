import { passwords } from '../data';

let items = [];

export const updateItem = (updatedItem) => {
  const index = items.findIndex(item => item.id === updatedItem.id);
  if (index !== -1) {
    items[index] = updatedItem;
  } else {
    items.push(updatedItem);
  }
};

export const getItems = () => {
  return passwords.map((passwordItem) => {
    const updatedItem = items.find(({ id }) => id === passwordItem.id);

    return {
      ...(updatedItem || passwordItem),
    };
  })
};



