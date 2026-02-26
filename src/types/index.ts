export type TemperatureUnit = "celsius" | "fahrenheit";
export type WindSpeedUnit = "ms" | "mph";
export type PrecipitationUnit = "mm" | "inch";

export type CurrentWeather = {
    temperature: number;
    feelsLike: number;
    precipitation: number;
    humidity: number;
    windSpeed: number;
    currentDay: string;
    maxTemperature: number[];
    minTemperature: number[];
    days: string[];
    weatherCode: number[]
};

export type Units = {
    temperature: TemperatureUnit;
    windSpeed: WindSpeedUnit;
    precipitation: PrecipitationUnit;
};

export type CurrentWeatherParams = {
    latitude: number;
    longitude: number;
    current?: string;
    daily?: string;
    temperature_unit?: TemperatureUnit;
    wind_speed_unit?: WindSpeedUnit;
    precipitation_unit?: PrecipitationUnit;
};

export type GeoResult = {
    name: string;
    latitude: number;
    longitude: number;
    country: string;
}

export type GeoResponse = {
    results: GeoResult[]
}