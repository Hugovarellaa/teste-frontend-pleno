import styles from "./styles.module.css";

import buttonAddImg from "../../assets/images/add-black.png";
import avatarImg from "../../assets/images/user.png";

export const Painel: React.FC = () => {
  return (
    <div className={styles.containerPainel}>
      
      <div className={styles.content}>
        <img src={avatarImg} alt="" className={styles.avatar} />
        <div className={styles.userInfo}>
          <span>Hugo Alves Varella</span>
          <p>john.doe@rogalabs.com</p>
        </div>
        <button>
          <img src={buttonAddImg} alt="" className={styles.buttonAdd} />
        </button>
      </div>

      <div className={styles.divider} />

      <div className={styles.text}>
        <span>FAVORITES</span>
      </div>

      <div className={styles.message}>
        <span>Click in the plus icon above to create a new collection</span>
      </div>
    </div>
  );
};
