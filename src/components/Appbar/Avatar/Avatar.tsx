// import * as React from 'react';
import * as AvatarRadix from '@radix-ui/react-avatar';
import styles from './Avatar.module.css';
import fData from '../../../assets/fdata/lorena.jpg';

function Avatar() {
  return (
    <div className={styles.container}>
      <AvatarRadix.Root className={styles.AvatarRoot}>
        <AvatarRadix.Image
          className={styles.AvatarImage}
          src={fData} /* FAKE DATA*/
          alt="Lorena"
        />
      </AvatarRadix.Root>
    </div>
  );
}

export default Avatar;
