import Modal from "react-modal";
import { useModal } from "../../hooks/useModal";
import styles from "./styles.module.css";

import saveImg from "../../assets/images/save.svg";

interface ModalGroupProps {
  text: string;
  title: string;
}

export const ModalGroup: React.FC<ModalGroupProps> = ({ text, title }) => {
  const { isOpenModal, handleCloseModal } = useModal();
  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlayClassName"
      className="react-modal-content"
    >
      <h2 className={styles.title}>{title}</h2>
      <input type="text" placeholder={text} className={styles.addButton} />
      <div className={styles.buttons}>
        <button className={styles.cancelButton} onClick={handleCloseModal}>
          Cancel
        </button>

        <button className={styles.savebutton}>
          <img src={saveImg} alt="" />
          Save
        </button>
      </div>
    </Modal>
  );
};
