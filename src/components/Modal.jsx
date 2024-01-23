import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';

// open: boolean prop to render the component if true
// setOpen: function prop to change open state to true or false
// chilren: component to be rendered inside the modal
export default function Modal({ open, setOpen, children }) {
  return (
    open &&
    createPortal(
      <div className={styles.modalBackdrop} onClick={() => setOpen(false)}>
        <div className={styles.modalWrapper}>
          <div
            className={styles.modalContainer}
            onClick={e => e.stopPropagation()}
            role="dialog"
          >
            {children}
          </div>
        </div>
      </div>,
      document.body
    )
  );
}
