// import * as React from 'react';
import * as AvatarRadix from '@radix-ui/react-avatar';
import styles from './Avatar.module.css';


const imageURL = 'https://images.pexels.com/photos/11531404/pexels-photo-11531404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

function Avatar() {
  return (
    <div className={styles.container}>
      <AvatarRadix.Root className={styles.AvatarRoot}>
        <AvatarRadix.Image
          className={styles.AvatarImage}
          src={imageURL}
          alt="Lorena"
        />
      </AvatarRadix.Root>
    </div>
  );
}

export default Avatar;
