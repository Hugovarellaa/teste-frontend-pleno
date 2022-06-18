import buttonAddImg from "../../../assets/images/add-black.png";
import { useModal } from "../../../hooks/useModal";
import styles from "./styles.module.css";

export const CreateFolder: React.FC = () => {
  const { handleOpenModal } = useModal();

  return (
    <button type="button" onClick={handleOpenModal}>
      <img src={buttonAddImg} alt="" className={styles.buttonAdd} />
    </button>
  );
};
