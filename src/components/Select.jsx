import styles from "../partials/_select.module.scss";

export default function Select({ columns, selectedStatus }) {
  return (
    <select className={styles.selectBox}>
      <option>First status</option>
      <option>Second status</option>
      <option>Third status</option>
    </select>
  );
}
