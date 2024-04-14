import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';
import useKeyDown from '../../hooks/use-keydown.hook';
import styles from './Modal.module.css';

function Modal({ handleDismiss, children }) {
  useKeyDown('Escape', handleDismiss);

  return (
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <div className={styles.wrapper}>
          <div
            className={styles.backdrop}
            onClick={handleDismiss}
          >
            {children}
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
}

export default Modal;
