import * as React from 'react';
// import DashboardPlaceholder from "../DashboardPlaceholder";
import styles from "./DashboardHeader.module.css";
import BuildingDropdown from "..//BuildingDropdown/BuildingDropdown.jsx";
import { DashboardContext } from "../../../contexts/DashboardContext.js";

function DashboardHeader() {
  // @ts-expect-error Property 'error' does not exist on type '{}'.ts(2339)
  const { data, error, isLoading, updateDashboardData } = React.useContext(DashboardContext);
  
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const buildingList = {};

  data.buildingList.forEach((building) => {
    if (Object.prototype.hasOwnProperty.call(buildingList, building.district) === false) {
      buildingList[building.district] = [];
    }
    buildingList[building.district].push({
      label: building.id,
      value: building.title,
    })
  })

  return (
    <>
    <div className={styles.container}>
      <div className={styles.wrapperTitle}>
        <h1 className={styles.title}>Dashboard</h1>
      </div>
      <div className={styles.wrapperDropdown}>
        <BuildingDropdown data={buildingList} updateDashboardData={updateDashboardData} />
      </div>
    </div>
    </>
  );
}

export default DashboardHeader;
