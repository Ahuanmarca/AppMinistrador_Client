import useSWR, { mutate } from 'swr';
import { format } from 'date-fns';

// Building Id (hardcoded for now) // TODO: Implement non hardcoded value
const BUILDING_ID = '1';

// Bank Account Id // TODO: Implement non hardcoded value
const ACCOUNT_ID = '1';

// Create default date range for cashflow histogram
// -> The last 12 months, up to the current day of the present month
const cashDate = new Date();
const end = format(cashDate, 'yyyy-MM-dd');
cashDate.setDate(1);
cashDate.setMonth(cashDate.getMonth() - 11);
const start = format(cashDate, 'yyyy-MM-dd');

// Create date for couning previous month neighbours
const neighboursDate = new Date();
neighboursDate.setMonth(neighboursDate.getMonth() - 1);
const dateItem = format(neighboursDate, 'yyyy-MM-dd');

// Endpoint build
const BASE_URL = 'https://appministrador-server-tob7.onrender.com';
const params = `/dashboard/building/${BUILDING_ID}/bankAccount/${ACCOUNT_ID}/`
const queryParams = `?start=${start}&end=${end}&dates=${dateItem}`

async function fetcher(endpoint) {
  const response = await fetch(endpoint);
  const json = await response.json();
  console.debug({ swr: json });
  return json;
}

function useDashboardData() {
  function handleChangeRequest(newRequest) {
    mutate(BASE_URL + newRequest);
  }

  const { data, error, isLoading } = useSWR(
    BASE_URL + params + queryParams,
    fetcher
  );
  return { data, error, isLoading, handleChangeRequest };
}

export default useDashboardData;
