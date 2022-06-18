import searcImg from "../../../assets/images/search.svg";
import styles from "./styles.module.css";

export const SearchBox: React.FC = () => {
  return (
    <div className={styles.search}>
      <img src={searcImg} alt="" />
      <input type="text" placeholder="Search..." />
    </div>
  );
};
