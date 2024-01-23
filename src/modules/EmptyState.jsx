import Button from '@/components/Button';
import styles from './EmptyState.module.scss';

export default function EmptyState() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>No boards yet.</p>
      <Button
        size="lg"
        content="Create New Board"
        onClick={() => console.log('I was clicked')}
      />
    </div>
  );
}
