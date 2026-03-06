export const getWeatherIcon = (code: number) => {
    if (code === 0) return "/icon-sunny.webp";
    if (code === 1) return "icon-mainly-clear.png";
    if (code === 2) return "/icon-partly-cloudy.png";
    if (code === 3) return "/icon-overcast.png";
    if (code === 45) return "/icon-fog.webp";
    if (code === 48) return "/icon-depositing-rime-fog.png";
    if (code === 51) return "/icon-drizzle-light.png";
    if (code === 53) return "/icon-drizzle-moderate.png";
    if (code === 55) return "/icon-drizzle-dense-intensity.png";
    if (code === 56) return "/icon-freezing-drizzle-light.png";
    if (code === 57) return "/icon-freezing-drizzle-dense-intensity.png";
    if (code === 61) return "/icon-rain-slight.png";
    if (code === 63) return "/icon-rain-moderate.png";
    if (code === 65) return "/icon-rain-heavy-intensity.png";
    if (code === 66) return "/icon-freezing-rain-light.png";
    if (code === 67) return "/icon-freezing-rain-heavy-intensity.png";
    if (code === 71) return "/icon-snow-fall-slight.png";
    if (code === 73) return "/icon-snow-fall-moderate.png";
    if (code === 75) return "/icon-snow-fall-heavy-intensity.png";
    if (code === 77) return "/icon-snow-grains.png";
    if (code === 80) return "/icon-rain-showers-slight.png";
    if ([81,82].includes(code)) return "/icon-rain.webp";
    if ([85,86].includes(code)) return "/icon-snow.webp";
    if ([95,96,99].includes(code)) return "/icon-storm.webp";

    return "/icon-sunny.webp";
}

const weatherIcons: Record<number, string> = {
    0: "/icon-sunny.webp",
    1: "/icon-mainly-clear.png",
    2: "/icon-partly-cloudy.png",
    3: "/icon-overcast.png",
    45: "/icon-fog.webp",
    48: "/icon-depositing-rime-fog.png",
    51: "/icon-drizzle-light.png",
    53: "/icon-drizzle-moderate.png",
    55: "/icon-drizzle-dense-intensity.png",
    56: "/icon-freezing-drizzle-light.png",
    57: "/icon-freezing-drizzle-dense-intensity.png",
    61: "/icon-rain-slight.png",
    63: "/icon-rain-moderate.png",
    65: "/icon-rain-heavy-intensity.png",
    66: "/icon-freezing-rain-light.png",
    67: "/icon-freezing-rain-heavy-intensity.png",
    71: "/icon-snow-fall-slight.png",
    73: "/icon-snow-fall-moderate.png",
    75: "/icon-snow-fall-heavy-intensity.png",
    77: "/icon-snow-grains.png",
    80: "/icon-rain-showers-slight.png"
};

// const getWeatherIcon = (code: number): string => {
//     return weatherIcons[code] ?? "/icon-default.png";
// };