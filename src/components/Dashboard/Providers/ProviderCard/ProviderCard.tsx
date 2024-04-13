// import * as React from 'react';

// import styles from './ProviderCard.module.css';
import styles from './BadCC.module.css'
import AvatarCard from '../../PeopleCard/AvatarCard';

function ProviderCard({img, phone, name, review, description}) {
  const shortDescription = description.length > 100 ? `${description.substring(0, 70)}...` : description;
  console.log(shortDescription);
  
  return <div className={styles.cardContainer}>
    {/* <img className={styles.img} src={img}></img> */}
    <div className={styles.avatar}>
      {/* <AvatarCard imageURL={img}></AvatarCard> */}
    </div>
    <div className={styles.wrapper}>
      <p className={styles.name}>{name}</p>
    {/* <p>{shortDescription}</p> */}
    {/* <p>{review}</p>
    <p>{phone}</p> */}
    </div>
  </div>;
}

export default ProviderCard;
