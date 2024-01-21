import styles from '@/partials/_button.module.scss';

export default function Button({
  content,
  variant = 'default',
  size = 'sm',
  onClick,
}) {
  return (
    // for reference if you want to use classnames library:
    // classnames(styles[variant], styles[size])
    // `${styles[variant]} ${styles[size]}`
    <button onClick={onClick} className={`${styles[variant]} ${styles[size]}`}>
      {content}
    </button>
  );
}
