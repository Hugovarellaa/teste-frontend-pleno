import styles from "./styles.module.css";

interface TextProps {
  text: string;
}

export const Text: React.FC<TextProps> = ({ text }) => {
  return (
    <div className={styles.text}>
      <span>{text}</span>
    </div>
  );
};
