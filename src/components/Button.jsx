import styles from "../partials/_button.module.scss";

export default function Button({ content }) {
  return <button className={styles.secondary}>{content}</button>;
}
