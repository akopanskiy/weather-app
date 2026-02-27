import axios from "axios";
import type { CurrentWeatherParams, WeatherApiResponse } from "@/types";
import { WEATHER_CLIENT_URL } from "@/utils/constants.ts";

export const getWeather = async (params: CurrentWeatherParams): Promise<WeatherApiResponse> => {
    const { data } = await axios.get(`${WEATHER_CLIENT_URL}/forecast`, {
        params: {
            ...params,
            current: "temperature_2m,apparent_temperature,wind_speed_10m,relative_humidity_2m,precipitation",
            daily: "temperature_2m_max,temperature_2m_min,weathercode",
            hourly: "temperature_2m,weathercode",
            forecast_days: 7,
            timezone: "auto",
        },
    });

    return data;
};