import {FC} from 'react';

import {IItem} from '~/services/getUserItems';

import ItemIcon from './components/ItemIcon';
import UpdateModal from './components/UpdateModal';

import './list-style.scss';

interface IList {
  items: Array<IItem>,
  updateItemsList: (item: IItem) => void,
}

const List: FC<IList> = ({items, updateItemsList}) => (
  <ul className="list">
    {
      items.map((item, index) => (
        <li className="item" key={index}>
          <ItemIcon title={item.title}/>
          <div>
            <div className="title">
              {item.title}
            </div>
            <div className="description">
              {item.description}
            </div>
          </div>
          <UpdateModal item={item} updateItemsList={updateItemsList} />
        </li>
      ))
    }
  </ul>
)

export default List;
