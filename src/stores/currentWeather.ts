import { ref } from "vue";
import { defineStore } from "pinia";
import _ from "lodash";
import type { CurrentWeather, Units } from "@/types";

export const useCurrentWeatherStore = defineStore("currentWeather", () => {
    const weather = ref<CurrentWeather>({
        temperature: 0,
        feelsLike: 0,
        precipitation: 0,
        humidity: 0,
        windSpeed: 0,
        currentDay: "",
        maxTemperature: [],
        minTemperature: [],
        days: [],
        weatherCode: [],
        hourlyTemperature: [],
        hours: [],
        hourlyWeatherCode: []
    });

    const units = ref<Units>({
        temperature: "celsius",
        windSpeed: "ms",
        precipitation: "mm",
    });

    const setCurrentWeather = (
        data: CurrentWeather,
    ) => {
        weather.value = {
            temperature: _.round(data.temperature, 0),
            feelsLike: _.round(data.feelsLike, 0),
            precipitation: _.round(data.precipitation, 0),
            humidity: data.humidity,
            windSpeed: _.round(data.windSpeed, 0),
            currentDay: data.currentDay,
            maxTemperature: data.maxTemperature,
            minTemperature: data.minTemperature,
            days: data.days,
            weatherCode: data.weatherCode,
            hourlyTemperature: data.hourlyTemperature,
            hours: data.hours,
            hourlyWeatherCode: data.hourlyWeatherCode
        };
    };

    const setUnits = (newUnits: Partial<Units>) => {
        units.value = {
            ...units.value,
            ...newUnits,
        };
    };

    return { weather, units, setCurrentWeather, setUnits };
});