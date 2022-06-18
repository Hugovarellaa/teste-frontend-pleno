import styles from "./styles.module.css";

export const User: React.FC = () => {
  return (
    <div className={styles.userInfo}>
      <span>Hugo Alves Varella</span>
      <p>john.doe@rogalabs.com</p>
    </div>
  );
};
