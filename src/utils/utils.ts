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
    if ([61,63,65,80,81,82].includes(code)) return "/icon-rain.webp";
    if ([66,67].includes(code)) return "/icon-rain.webp";
    if ([71,73,75,77,85,86].includes(code)) return "/icon-snow.webp";
    if ([95,96,99].includes(code)) return "/icon-storm.webp";

    return "/icon-sunny.webp";
}