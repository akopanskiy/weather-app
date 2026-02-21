import axios from "axios";

const WEATHER_CLIENT_URL = `https://api.open-meteo.com/v1`;
type CurrentWeatherParams = {
    latitude: number,
    longitude: number,
    current?: "temperature_2m,apparent_temperature,wind_speed_10m,relative_humidity_2m,precipitation`",
    temperature_unit?: "celsius" | "fahrenheit";
    wind_speed_unit?: "ms" | "mph";
    precipitation_unit?: "mm" | "inch";
}
export const getWeather = async ({
                                     latitude,
                                     longitude,
                                     temperature_unit = "celsius",
                                     wind_speed_unit = "ms",
                                     precipitation_unit = "mm",
                                 }: CurrentWeatherParams) => {
    const params = {
        latitude,
        longitude,
        current:
            "temperature_2m,apparent_temperature,wind_speed_10m,relative_humidity_2m,precipitation",
        temperature_unit,
        wind_speed_unit,
        precipitation_unit,
        timezone: "auto",
    };

    const { data } = await axios.get(
        `${WEATHER_CLIENT_URL}/forecast`,
        { params }
    );

    return data;
};