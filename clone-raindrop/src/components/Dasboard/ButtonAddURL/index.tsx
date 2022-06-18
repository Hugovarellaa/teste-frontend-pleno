import addImg from "../../../assets/images/add-white.png";
import styles from "./styles.module.css";

export const ButtonAddURL: React.FC = () => {

  return (
    <button className={styles.addButton} >
      <img src={addImg} alt="" />
      Add URL
    </button>
  );
};
