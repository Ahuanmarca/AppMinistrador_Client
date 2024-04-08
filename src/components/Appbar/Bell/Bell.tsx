// import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { Cross2Icon } from '@radix-ui/react-icons';
import styles from './Bell.module.css';
import BellIcon from './BellIcon';

function PopoverDemo(){
  return (
    <div className={styles.container}>
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className={styles.IconButton} aria-label="Update dimensions">
          <BellIcon/>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className={styles.PopoverContent} sideOffset={1}>
          <div style={{ display: 'flex', flexDirection: 'column', }}>
            <div className={styles.notifications}>
              <p className={styles.text}>No hay nuevas notificaciones 📣</p>
            </div>
          </div>
          <Popover.Close className={styles.PopoverClose} aria-label="Close">
            <Cross2Icon />
          </Popover.Close>
          <Popover.Arrow className={styles.PopoverArrow} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  </div>)
}

export default PopoverDemo;
