import styles from "./styles.module.css";

import avatarImg from "../../../assets/images/user.png";

export const Avatar: React.FC = () => {
  return (
    <>
      <img src={avatarImg} alt="" className={styles.avatar} />
    </>
  );
};
