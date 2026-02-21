import axios from "axios";

const GEO_CLIENT_URL = 'https://geocoding-api.open-meteo.com/v1';

type GeoResult = {
    name: string
    latitude: number
    longitude: number
    country: string
}

type GeoResponse = {
    results: GeoResult[]
}

export const getCity = async (city: string): Promise<GeoResponse> => {
    const res = await axios.get(`${GEO_CLIENT_URL}/search?name=${city}&count=1&language=en&format=json`);

    return res.data;
}