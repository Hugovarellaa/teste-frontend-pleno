import styles from "./styles.module.css";

import { Divider } from "../Divider";
import { Avatar } from "./Avatar";
import { CreateFolder } from "./CreateFolder";
import { ListFavorites } from "./ListFavorites";
import { Text } from "./Text";
import { User } from "./User";

export const Painel: React.FC = () => {
  return (
    <div className={styles.containerPainel}>
      <div className={styles.content}>
        <Avatar />
        <User />
        <CreateFolder />
      </div>
      <Divider />
      <Text text="FAVORITES" />
      <ListFavorites />
    </div>
  );
};
