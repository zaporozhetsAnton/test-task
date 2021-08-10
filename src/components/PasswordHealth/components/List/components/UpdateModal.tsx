import {FC, useState, ChangeEvent} from 'react';
import Modal from 'react-modal';

import updateItem from '~/services/updateItem';
import {IItem} from "~/services/getUserItems";

interface IUpdateModal {
  item: IItem;
  updateItemsList: (item: IItem) => void,
}

Modal.setAppElement('#app');

const UpdateModal: FC<IUpdateModal> = ({ item, updateItemsList }) => {
  const [showModal, setShowModal] = useState(false);
  const [newPass, setNewPass] = useState('');

  const onChangeClick = async () => {
    try {
      const updatedItem = await updateItem({
        ...item,
        password: newPass,
      });
      updateItemsList(updatedItem);
    } catch (e) {
      alert(e.message);
    }
    setNewPass('');
    setShowModal(false);
  };

  const onCancelClick = () => {
    setNewPass('');
    setShowModal(false)
  };

  const onUpdatePasswordClick = () => setShowModal(true);

  const closeModal = () => setShowModal(false);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => setNewPass(event.target.value);

  return (
    <>
      <button className="update" onClick={onUpdatePasswordClick}>
        Update Password
      </button>
      <Modal
        className="modal"
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h1>Update Password</h1>
        <input
          placeholder="new password"
          className="input"
          value={newPass}
          onChange={onInputChange}
        />
        <div className="pt-12px text-center">
          <button className="button" onClick={onChangeClick}>Change</button>
          <button className="button ml-12px" onClick={onCancelClick}>
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
}

export default UpdateModal;
