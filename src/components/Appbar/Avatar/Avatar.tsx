import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import * as AvatarRadix from '@radix-ui/react-avatar';
import styles from './Avatar.module.css';

const imageURL = 'https://images.pexels.com/photos/11531404/pexels-photo-11531404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

function Avatar() {
  const navigate = useNavigate(); // Obtiene la función navigate

  const handleClick = () => {
    navigate('/perfil'); 
  };

  return (
    <div className={styles.container} onClick={handleClick}>
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
