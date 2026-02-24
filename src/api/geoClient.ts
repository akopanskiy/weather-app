import axios from "axios";
import type { GeoResponse } from "@/types";
import { GEO_CLIENT_URL } from "@/utils/constants.ts";

export const getCity = async (city: string): Promise<GeoResponse> => {
    const res = await axios.get(`${GEO_CLIENT_URL}/search?name=${city}&count=1&language=en&format=json`);

    return res.data;
}