import styles from "./styles.module.css";

import spaceImg from "../../assets/images/undraw_taken_re_yn20 1.png";
import { Divider } from "../Divider";
import { ModalGroup } from "../ModalGroup";
import { ButtonAddURL } from "./ButtonAddURL";
import { SearchBox } from "./SerachBox";

export const Dashboard: React.FC = () => {
  return (
    <div>
      <div className={styles.searchBox}>
        <ModalGroup title="URL" text="https://" />

        <SearchBox />
        <ButtonAddURL />
      </div>

      <Divider />

      <main className={styles.content}>
        <img src={spaceImg} alt="" />
        <span>No results</span>
      </main>
    </div>
  );
};
