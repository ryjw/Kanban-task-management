import { useState } from 'react';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import TextField from '@/components/TextField';

import styles from './EmptyState.module.scss';

export default function EmptyState() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>No boards yet.</p>
      <Button size="lg" onClick={() => setModalOpen(true)}>
        Create New Board
      </Button>
      {/* Example use of modal, you will need to store the modal visibility state,
      in this example, the state is stored in `modalOpen` */}
      <Modal open={modalOpen} setOpen={setModalOpen}>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <TextField variant="default" placeholder="Title" />
          <TextField variant="default" />
          <TextField variant="default" />
          <TextField variant="default" />
          <Button onClick={() => console.log('test')}>Submit</Button>
        </form>
      </Modal>
    </div>
  );
}
