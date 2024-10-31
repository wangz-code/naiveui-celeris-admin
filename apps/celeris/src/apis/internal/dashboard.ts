import axios from 'axios';

// Define the API endpoint URLs as an enum
enum API {
  queryDataOverview = '/dashboard/data-overview',
}

export interface DataOverviewRes {
  xAxis: string[];
  data: Array<{ name: string; value: number[]; count: number }>;
}
export interface UserAnalysisDataRes {
  count: number;
  growth: number;
  chartData: {
    xAxis: string[];
    data: { name: string; value: number[] };
  };
}
export function queryDataOverview() {
  return axios.post<DataOverviewRes>(API.queryDataOverview);
}
export function queryUserAnalysisData(params: { quota: string }) {
  return axios.post<UserAnalysisDataRes>(API.queryDataOverview, params);
}
