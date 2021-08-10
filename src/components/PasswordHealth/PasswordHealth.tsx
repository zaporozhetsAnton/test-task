import {Route, Switch} from 'react-router-dom';

import {Routes} from '~/constants';
import itemHasWeakPassword from '~/utils/itemHasWeakPassword';
import itemHasReusedPassword from '~/utils/itemHasReusedPassword';
import itemIsOlderThanThirtyDays from '~/utils/itemIsOlderThanThirtyDays';
import { useUserContext } from '~/components/UserContext';
import ErrorBlock from '~/components/ErrorBlock';
import LoadingScreen from '~/components/LoadingScreen';
import List from './components/List/List';

import useItemsProvider from './useItemsProvider';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';

const PasswordHealth = () => {
  const {
    errorMessage: userProviderErrorMessage,
    isLoading: userDataIsLoading,
    username,
  } = useUserContext();

  const {
    items,
    isLoading,
    errorMessage,
    updateItemsList,
  } = useItemsProvider();

  if (isLoading || userDataIsLoading) {
    return <LoadingScreen/>
  }

  if (userProviderErrorMessage || errorMessage) {
    return <ErrorBlock error={userProviderErrorMessage || errorMessage}/>
  }

  return (
    <div className="container">
      <Header items={items} username={username} />
      <Filter items={items}/>
      <Switch>
        <Route exact path={Routes.PasswordHealth}>
          <List items={items} updateItemsList={updateItemsList} />
        </Route>
        <Route path={Routes.Weak}>
          <List items={items.filter(itemHasWeakPassword)} updateItemsList={updateItemsList} />
        </Route>
        <Route path={Routes.Reused}>
          <List items={items.filter((item) => itemHasReusedPassword(item, items))} updateItemsList={updateItemsList} />
        </Route>
        <Route path={Routes.Old}>
          <List items={items.filter(itemIsOlderThanThirtyDays)} updateItemsList={updateItemsList} />
        </Route>
      </Switch>
    </div>
  );
};

export default PasswordHealth;
