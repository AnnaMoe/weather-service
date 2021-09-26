
interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
export interface City {
  id: number;
  name: string;
  // structure of the api - temp is value of main
  main: Main;
}
