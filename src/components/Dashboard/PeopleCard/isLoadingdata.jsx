import styles from "./PeopleCard.module.css";
import AvatarCard from "./AvatarCard";
import PhoneIcon from "./icons/PhoneIcon";
import ArrowIcon from "./icons/ArrowIcon";
import GroupIcon from "./icons/GroupIcon";
import * as React from 'react';

const building = {
  tenants: 140,
  text: "8,5% Último mes",
  president: {
    name: 'Oscar Peralta',
    phone: 665665665,
    pic: '', 
  }
}

function isLoadingdata({placeholderText, isPresident}){
return(<div className={styles.container}>
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
        {!isPresident &&
          <div className={styles.peopleWrapper}>
            <div className={styles.insideWrapper}>
            <p className={styles.peopleNumber}>{building.tenants}</p>
            <div className={styles.groupDiv}>
              <GroupIcon></GroupIcon>
            </div>
            </div>
            <div className={styles.numberWrapper}>
              <ArrowIcon></ArrowIcon>
              <p className={styles.peopleText}>{building.text}</p>
            </div>
          </div>}
    </div>)}

    export default isLoadingdata