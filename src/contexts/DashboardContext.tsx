import React from 'react';
import useDashboardData from '../hooks/use-dashboard-data.hook';

// @ts-expect-error - What default value shoud be passed to a context?
const DashboardContext = React.createContext();

function DashboardProvider({ children }) {
  const { data, error, isLoading } = useDashboardData();

  return (
    <DashboardContext.Provider value={{ data, error, isLoading }}>
      {children}
    </DashboardContext.Provider>
  );
}

export { DashboardContext, DashboardProvider };
