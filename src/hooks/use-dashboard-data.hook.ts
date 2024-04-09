import useSWR from 'swr';

const BASE_URL = 'https://appministrador-server-tob7.onrender.com'
const EXAMPLE_REQUEST = '/dashboard/building/1/bankAccount/1?start=2023-01-01&end=2023-12-31&dates=2024-02-29&dates=2024-03-31'

async function fetcher(endpoint) {
  const response = await fetch(endpoint);
  const json = await response.json();
  console.debug({ swr: json });
  return json;
}

function useDashboardData() {
  const { data, error, isLoading } = useSWR(BASE_URL + EXAMPLE_REQUEST, fetcher);
  return { data, error, isLoading };
}

export default useDashboardData;
