// import React from 'react'; 
import * as AvatarRadix from '@radix-ui/react-avatar';
import styles from './AvatarCard.module.css';

function Avatar({imageURL}) {
  
  return (
    <div className={styles.container}>
      <AvatarRadix.Root className={styles.AvatarRoot}>
        <AvatarRadix.Image
          className={styles.AvatarImage}
          src={imageURL}
          alt="President"
        />
      </AvatarRadix.Root>
    </div>
  );
}

export default Avatar;
