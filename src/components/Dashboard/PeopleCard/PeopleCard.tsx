// import * as React from 'react';
// import DashboardPlaceholder from "../DashboardPlaceholder";
import styles from "./PeopleCard.module.css";
import AvatarCard from "./AvatarCard";
import PhoneIcon from "./icons/PhoneIcon";
import ArrowIcon from "./icons/ArrowIcon";
import GroupIcon from "./icons/GroupIcon";

// const building = {
//   text: "8,5% Último mes",
// }

function PeopleCard({placeholderText, isPresident, data}) {
const neighbours = data.neighbours;
let percentage = 0;
if (neighbours >= 35) {
  percentage = 3
}
if (neighbours < 35) {
  percentage = 7
}
  // console.log('typeof dataneighbors',typeof data.neighboursCount);
  
// function percentageObject(obj){
//   const neighbours = data.neighboursCount;
//   console.log('nEIGHBOURS DATA',neighbours);
//   console.log(neighbours[0].count);
  
  
//   let count = 0;
//   let percentageValue = 999;
// for (const key in obj) {
//       if (typeof obj[key] === 'object') {
//         count++;
//         console.log(count, 'arrayCount', key);
        
//       }
//     }
//   if (count >= 2) {
//     const actualValue = Number(neighbours[1].count);
//     console.log(actualValue, 'actualvalue');
//       const pastValue = Number(neighbours[0].count);
//       console.log(pastValue, 'pastvalue');
//       percentageValue = ((actualValue - pastValue) / pastValue) * 100;
//       // console.log(percentageValue, 'percentagevaluepostif');
      
//       // console.log('Último mes',`NUEVO El aumento porcentual es aproximadamente ${percentageValue.toFixed(0)}%`);
//   }
//   return (percentageValue.toFixed(0))
// } 
//   percentageObject(data)


//   function percentage({data}){
//     const neighbours = data.neighboursCount;
//     let percentageValue = 0;
//     if (Array.isArray(neighbours) && neighbours.length >= 2) {
//       const actualValue = neighbours[1].count;
//       const pastValue = neighbours[0].count;
//       percentageValue = ((actualValue - pastValue) / pastValue) * 100;
//       console.log('Último mes',`El aumento porcentual es aproximadamente ${percentageValue.toFixed(0)}%`);
      
//     }
//     return (percentageValue.toFixed(0))
//   }
//   percentage({data});
  // const percentageValue = percentage({ data })
  return (
    // <DashboardPlaceholder placeholderText={placeholderText} />
    <div className={styles.container}>
      <div className={styles.title}>
        {placeholderText}
      </div>
      {isPresident && data.president && 
        <div className={styles.presidentContainer}>
          <div className={styles.presidentWrapper}>
            <AvatarCard imageURL={`https://images.unsplash.com/photo-${data.president.pic}?q=80&w=800`}></AvatarCard>
            <h2 className={styles.presidentName}>{data.president.name}</h2>
          </div>
          <div className={styles.phoneWrapper}>
            <PhoneIcon></PhoneIcon>
            <p className={styles.phone}>{data.president.phone}</p>
          </div>
        </div>}
        {!isPresident &&
          <div className={styles.peopleWrapper}>
            <div className={styles.insideWrapper}>
            <p className={styles.peopleNumber}>{data.neighbours}</p>
            <div className={styles.groupDiv}>
              <GroupIcon></GroupIcon>
            </div>
            </div>
            <div className={styles.numberWrapper}>
              <ArrowIcon></ArrowIcon>
              <p className={styles.peopleText}>{`${percentage}% Último mes`}</p>
            </div>
          </div>}
    </div>
  );
}

export default PeopleCard;
