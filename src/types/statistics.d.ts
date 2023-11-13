interface StatisticsRequestType {
  from?: string;
  to?: string;
  size?: number;
}
interface StatisticsResponseType {
  [key: string]: number;
}
