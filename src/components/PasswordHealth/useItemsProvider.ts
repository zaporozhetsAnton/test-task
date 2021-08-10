import {useEffect, useState} from 'react';
import getUserItems, {IItem} from '~/services/getUserItems';

const userItemsProvider = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<String>();
  const [items, setItems] = useState<Array<IItem>>([]);

  // it would be better to use context to pass this callback by components tree
  const updateItemsList = (updatedItem: IItem) => {
    setItems(state => state.map(item => {
      if (item.id === updatedItem.id) return updatedItem;
      return item;
    }))
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const userItems = await getUserItems();

        setItems(userItems);
      } catch (error) {
        setErrorMessage(error.message);
      }

      setIsLoading(false);
    })()
  }, []);

  return {
    isLoading,
    errorMessage,
    items,
    updateItemsList,
  }
};

export default userItemsProvider;
