import { Dashboard } from "../Dasboard";
import { Painel } from "../Painel";
import styles from "./styles.module.css";

export const Layout: React.FC = () => {
  return (
    <div className={styles.container}>
      <Painel />
      <Dashboard />
    </div>
  );
};