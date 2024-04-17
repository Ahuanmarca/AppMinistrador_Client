import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';
import useKeyDown from '../../hooks/use-keydown.hook';
import styles from './Modal.module.css';
import { Cross1Icon } from '@radix-ui/react-icons';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

function Modal({ title, handleDismiss, children }) {
  useKeyDown('Escape', handleDismiss);

  return (
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <div className={styles.wrapper}>

          {/* Careful: Dialog is a self closing div... */}
          {/* Backdrop and Dialog must be Siblings! @Footguns */}
          <div className={styles.backdrop} onClick={handleDismiss} />
          
          {/* Dialog is a wrapper for the actual modal content */}
          <div
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >

            <button className={styles.closeBtn} onClick={handleDismiss}>
              <Cross1Icon />
              <VisuallyHidden>Dismiss modal</VisuallyHidden>
            </button>
            {children}

          </div> {/* end of dialog */}
        </div> {/* end of wrapper */}
      </RemoveScroll>
    </FocusLock>
  );
}

export default Modal;
