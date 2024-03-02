import styles from "./Button.module.scss";

export default function Button({
  variant = "default",
  size = "sm",
  onClick,
  children,
}) {
  return (
    // for reference if you want to use classnames library:
    // classnames(styles[variant], styles[size])
    // `${styles[variant]} ${styles[size]}`
    <button onClick={onClick} className={`${styles[variant]} ${styles[size]}`}>
      {children}
    </button>
  );
}
