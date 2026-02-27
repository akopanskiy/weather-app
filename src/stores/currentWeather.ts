import { ref } from "vue";
import { defineStore } from "pinia";
import type { CurrentWeather, Units } from "@/types";

export const useCurrentWeatherStore = defineStore("currentWeather", () => {
    const weather = ref<CurrentWeather | null>(null);

    const units = ref<Units>({
        temperature: "celsius",
        windSpeed: "ms",
        precipitation: "mm",
    });

    const setCurrentWeather = (data: CurrentWeather,) => { weather.value = data};

    const setUnits = (newUnits: Partial<Units>) => { units.value = { ...units.value, ...newUnits }};

    return { weather, units, setCurrentWeather, setUnits };
});