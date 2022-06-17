import styles from "./styles.module.css";

import addImg from "../../assets/images/add-white.png";
import searcImg from "../../assets/images/search.svg";
import spaceImg from "../../assets/images/undraw_taken_re_yn20 1.png";

export const Dashboard: React.FC = () => {
  return (
    <div>
      <div className={styles.searchBox}>
        <div className={styles.search}>
          <img src={searcImg} alt="" />
          <input type="text" placeholder="Search..." />
        </div>
        <button className={styles.addButton}>
          <img src={addImg} alt="" />
          Add URL
        </button>
      </div>
      <div className={styles.divider} />

      <main className={styles.content}>
        <img src={spaceImg} alt="" />
        <span>No results</span>
      </main>
    </div>
  );
};
