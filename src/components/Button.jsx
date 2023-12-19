import styles from "../partials/_button.module.scss";

export default function Button({ content, variant }) {
  return <button className={styles[variant]}>{content}</button>;
}
