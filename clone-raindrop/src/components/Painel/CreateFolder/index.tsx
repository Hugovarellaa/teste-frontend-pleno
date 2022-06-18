import buttonAddImg from "../../../assets/images/add-black.png";
import styles from "./styles.module.css";

export const CreateFolder: React.FC = () => {
  return (
    <button>
      <img src={buttonAddImg} alt="" className={styles.buttonAdd} />
    </button>
  );
};
