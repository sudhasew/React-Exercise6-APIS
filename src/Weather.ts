export interface Weather {
  number: number;
  name: string;
  startTime: string;
  endTime: string;
  isDaytime: string;
  temperature: number;
  temperatureUnit: string;
  temperatureTrend: string;
  windSpeed: string;
  windDirection: string;
  icon: string;
  shortForecast: string;
  detailedForecast: string;
}
