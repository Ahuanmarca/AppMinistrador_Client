import useSWR, { mutate } from 'swr';
import { format } from 'date-fns';

const BASE_URL = 'https://appministrador-server-tob7.onrender.com';

// Building Id (hardcoded for now) // TODO: Implement non hardcoded value
const BUILDING_ID = '1';

// Bank Account Id // TODO: Implement non hardcoded value
const ACCOUNT_ID = '1';

// Create default date range for cashflow histogram
// -> The last 12 months, up to the current day of the present month
const cashDate = new Date();
const END = format(cashDate, 'yyyy-MM-dd');
cashDate.setDate(1);
cashDate.setMonth(cashDate.getMonth() - 11);
const START = format(cashDate, 'yyyy-MM-dd');

// Create date for couning previous month neighbours
const neighboursDate = new Date();
neighboursDate.setMonth(neighboursDate.getMonth() - 1);
const DATE_ITEM = format(neighboursDate, 'yyyy-MM-dd');

// Helper function to build endpoint
function buildEndpoint(baseUrl, buildingId, accountId, start, end, dateItem) {
  const params = `/dashboard/building/${buildingId}/bankAccount/${accountId}/`;
  const queryParams = `?start=${start}&end=${end}&dates=${dateItem}`;
  return baseUrl + params + queryParams;
}

// Default URL to be returned when component is first mounted
const DEFAULT_REQUEST = buildEndpoint(
  BASE_URL,
  BUILDING_ID,
  ACCOUNT_ID,
  START,
  END,
  DATE_ITEM
);

// Fetcher function for swr
async function fetcher(endpoint) {
  const response = await fetch(endpoint);
  const json = await response.json();
  return json;
}

function useDashboardData() {

  async function updateDashboardData({
    buildingId = BUILDING_ID,
    accountId = ACCOUNT_ID,
    start = START,
    end = END,
    dateItem = DATE_ITEM,
  }): Promise<void> {
    
    const updatedRequest = buildEndpoint(
      BASE_URL,
      String(buildingId),
      String(accountId),
      start,
      end,
      dateItem
    );
    
    return await mutate(updatedRequest, () => fetcher(updatedRequest), true);
  }

  const { data, error, isLoading } = useSWR(DEFAULT_REQUEST, fetcher, {
    revalidateOnMount: true,
  });
  return { data, error, isLoading, updateDashboardData };
}

export default useDashboardData;
