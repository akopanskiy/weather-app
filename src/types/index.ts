export type TemperatureUnit = "celsius" | "fahrenheit";
export type WindSpeedUnit = "ms" | "mph";
export type PrecipitationUnit = "mm" | "inch";

export type WeatherApiResponse = {
    current: {
        temperature_2m: number;
        apparent_temperature: number;
        precipitation: number;
        relative_humidity_2m: number;
        wind_speed_10m: number;
        time: string;
    };
    daily: {
        temperature_2m_max: number[];
        temperature_2m_min: number[];
        time: string[];
        weathercode: number[];
    };
    hourly: {
        temperature_2m: number[];
        time: string[];
        weathercode: number[];
    };
};


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
    weatherCode: number[],
    hourlyTemperature: number[],
    hours: string[],
    hourlyWeatherCode: number[]
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
    hourly?: string;
    forecast_days?: number;
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