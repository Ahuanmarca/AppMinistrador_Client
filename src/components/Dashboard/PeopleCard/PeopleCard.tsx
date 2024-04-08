// import * as React from 'react';
// import DashboardPlaceholder from "../DashboardPlaceholder";
import styles from "./PeopleCard.module.css";
import AvatarCard from "./AvatarCard";
import PhoneIcon from "./PhoneIcon";

const building = {
  tenants: 140,
  lanlords: 129,
  president: {
    name: 'Oscar Peralta',
    phone: 665665665,
    pic: 'https://images.pexels.com/photos/12871449/pexels-photo-12871449.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
  }
}

function PeopleCard({placeholderText, isPresident}) {
  return (
    // <DashboardPlaceholder placeholderText={placeholderText} />
    <div className={styles.container}>
      <div className={styles.title}>
        {placeholderText}
      </div>
      {isPresident && 
        <div className={styles.presidentContainer}>
          <div className={styles.presidentWrapper}>
            <AvatarCard imageURL={building.president.pic}></AvatarCard>
            <h2 className={styles.presidentName}>{building.president.name}</h2>
          </div>
          <div className={styles.phoneWrapper}>
            <PhoneIcon></PhoneIcon>
            <p className={styles.phone}>{building.president.phone}</p>
          </div>
        </div>}
    </div>
  );
}

export default PeopleCard;
