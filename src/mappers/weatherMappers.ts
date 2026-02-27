import _ from "lodash";
import type { WeatherApiResponse, CurrentWeather } from "@/types";

export const mapWeatherResponse = (
    data: WeatherApiResponse
): CurrentWeather => {
    return {
        temperature: _.round(data.current.temperature_2m, 0),
        feelsLike: _.round(data.current.apparent_temperature, 0),
        precipitation: _.round(data.current.precipitation, 0),
        humidity: data.current.relative_humidity_2m,
        windSpeed: _.round(data.current.wind_speed_10m, 0),
        currentDay: data.current.time,
        maxTemperature: data.daily.temperature_2m_max,
        minTemperature: data.daily.temperature_2m_min,
        days: data.daily.time,
        weatherCode: data.daily.weathercode,
        hourlyTemperature: data.hourly.temperature_2m,
        hours: data.hourly.time,
        hourlyWeatherCode: data.hourly.weathercode,
    };
};