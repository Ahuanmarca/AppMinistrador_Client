import React from 'react';
import socketIOClient from 'socket.io-client';
import useDashboardData from '../hooks/use-dashboard-data.hook';

// @ts-expect-error - What default value shoud be passed to a context?
const DashboardContext = React.createContext();

const ENDPOINT = 'https://appministrador-server-tob7.onrender.com';
// const ENDPOINT = 'http://localhost:8000';

function DashboardProvider({ children }) {
  const { data, error, isLoading, updateDashboardData } = useDashboardData();
  const [internalState, setIntetnalState] = React.useState(data);

  React.useEffect(() => {
    setIntetnalState(data);
  }, [data]);

  // @ts-expect-error - type of argument can't be assigned to type of parameter
  React.useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on('incidenceCreated', () => {
      updateInternalState({
        buildingId: internalState ? internalState.buildingData.id : 1,
        accountId: internalState ? internalState.buildingData.id: 1,
      });
    });
    return () => socket.disconnect();
    // eslint-disable-next-line
  }, []);

  async function updateInternalState({ buildingId, accountId }) {
    const newData = await updateDashboardData({ buildingId, accountId });
    setIntetnalState(() => newData);
  }

  return (
    <DashboardContext.Provider
      value={{
        data: internalState ? internalState : data,
        error,
        isLoading,
        updateDashboardData: updateInternalState,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export { DashboardContext, DashboardProvider };
