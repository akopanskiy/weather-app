import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLocationStore = defineStore('location', () => {
  const city = ref<string>("Lviv");
  const latitude = ref<number | string>("");
  const longitude = ref<number | string>("");
  const country = ref<string>("");

  const getLocationParams = (cityName: string, latitudeValue: number | string, longitudeValue: number | string, countryName: string) => {
    city.value = cityName;
    latitude.value = latitudeValue;
    longitude.value = longitudeValue;
    country.value = countryName;
  }

  return { city, latitude, longitude, country, getLocationParams };
})
