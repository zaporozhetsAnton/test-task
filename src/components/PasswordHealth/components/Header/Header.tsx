import {FC} from 'react';
import {useHistory} from 'react-router-dom';

import {IItem} from "~/services/getUserItems";
import logout from '~/services/logout';
import {Routes} from "~/constants";
import getVulnerableItemsCount from "~/utils/getVulnerableItemsCount";

import './header-style.scss';
import {useUserContext} from "~/components/UserContext";

interface IHeader {
  items: Array<IItem>;
  username: string;
}

const Header: FC<IHeader> = ({items, username}) => {
  const {push} = useHistory();
  const {
    deleteData
  } = useUserContext();

  const onLogoutClick = async () => {
    try {
      await logout();
      localStorage.removeItem('token');
      deleteData();
      push(Routes.Login);
    } catch(e) {
      alert(e.message);
    }
  };

  return (
    <div className="header">
      <div className="user-section">
        <button onClick={onLogoutClick}>{`Logout ${username}`}</button>
      </div>
      <h1>{`${getVulnerableItemsCount(items)} Items are vulnerable`}</h1>
      <span>Create new complex passwords to protect your accounts</span>
    </div>
  )
};

export default Header;
