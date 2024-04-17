// import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as AvatarRadix from '@radix-ui/react-avatar';
import styles from './Avatar.module.css';
import * as Popover from '@radix-ui/react-popover';
import { Cross2Icon } from '@radix-ui/react-icons';

const fallbackImageUrl =
  'https://images.pexels.com/photos/11531404/pexels-photo-11531404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const UNSPLASH_BASE_URL = 'https://images.unsplash.com/photo-';
const UNSPLASH_QUERY_PARAM = '?q=80&w=800';

function Avatar() {
  const navigate = useNavigate(); // Obtiene la función navigate
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const imageURL = user
    ? `${UNSPLASH_BASE_URL}${user.portrait_url}${UNSPLASH_QUERY_PARAM}`
    : fallbackImageUrl;

  const handleClick = () => {
    navigate('/perfil');
  };

  function handleCloseSessionClick() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/dashboard');
  }

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <div className={styles.container}>
          <AvatarRadix.Root className={styles.AvatarRoot}>
            <AvatarRadix.Image
              className={styles.AvatarImage}
              src={imageURL}
              alt={user.surname}
            />
          </AvatarRadix.Root>
        </div>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content className={styles.PopoverContent} sideOffset={5}>
          <p>
            {user.forename} {user.surname}
          </p>
          <button
            style={{ width: "105px"}}
            onClick={handleClick}
            className={'generic-green-button'}
          >
            Ver Perfil
          </button>
          <button
            style={{ width: "105px"}}
            onClick={handleCloseSessionClick}
            className={'generic-red-button'}
          >
            Cerrar Sesión
          </button>

          <Popover.Close className={styles.PopoverClose} aria-label="Close">
            <Cross2Icon />
          </Popover.Close>

        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default Avatar;
