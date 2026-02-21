import { ref } from "vue";
import { defineStore } from "pinia";
import _ from "lodash";

type TemperatureUnit = "celsius" | "fahrenheit";
type WindSpeedUnit = "ms" | "mph";
type PrecipitationUnit = "mm" | "inch";

type CurrentWeather = {
    temperature: number;
    feelsLike: number;
    precipitation: number;
    humidity: number;
    windSpeed: number;
};

export const useCurrentWeatherStore = defineStore("currentWeather", () => {
    const weather = ref<CurrentWeather>({
        temperature: 0,
        feelsLike: 0,
        precipitation: 0,
        humidity: 0,
        windSpeed: 0,
    });

    const units = ref({
        temperature: "celsius" as TemperatureUnit,
        windSpeed: "ms" as WindSpeedUnit,
        precipitation: "mm" as PrecipitationUnit,
    });

    const setCurrentWeather = (
        data: CurrentWeather,
        newUnits?: Partial<typeof units.value>
    ) => {
        weather.value = {
            temperature: _.round(data.temperature, 0),
            feelsLike: _.round(data.feelsLike, 0),
            precipitation: data.precipitation,
            humidity: data.humidity,
            windSpeed: _.round(data.windSpeed, 0),
        };

        if (newUnits) {
            units.value = { ...units.value, ...newUnits };
        }
    };

    return { weather, units, setCurrentWeather };
});