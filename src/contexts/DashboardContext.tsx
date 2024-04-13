import React from 'react';
import useDashboardData from '../hooks/use-dashboard-data.hook';

// @ts-expect-error - What default value shoud be passed to a context?
const DashboardContext = React.createContext();

function DashboardProvider({ children }) {
  const { data, error, isLoading, updateDashboardData } = useDashboardData();

  const [internalState, setIntetnalState] = React.useState(data);
  
  React.useEffect(() => {
    setIntetnalState(data);
  }, [data]);

  async function updateInternalState({ buildingId, accountId }) {
    const newData = await updateDashboardData({ buildingId, accountId });
    setIntetnalState(() => newData);
  }
  
  return (
    <DashboardContext.Provider value={{ data: internalState ? internalState : data, error, isLoading, updateDashboardData: updateInternalState }}>
      {children}
    </DashboardContext.Provider>
  );
}

export { DashboardContext, DashboardProvider };
