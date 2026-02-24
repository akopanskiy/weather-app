export const WEATHER_CLIENT_URL = `https://api.open-meteo.com/v1`;

export const GEO_CLIENT_URL = 'https://geocoding-api.open-meteo.com/v1';

export const METRIC_OPTIONS = [
    {
        label: 'Temperature',
        options: [
            { value: 'celsius', label: 'Celsius(°C)' },
            { value: 'fahrenheit', label: 'Fahrenheit(°F)' },
        ],
    },
    {
        label: 'Wind Speed',
        options: [
            { value: 'ms', label: 'Ms' },
            { value: 'mph', label: 'Mph' },
        ],
    },
    {
        label: 'Precipitation',
        options: [
            { value: 'mm', label: 'Millimeters(mm)' },
            { value: 'inch', label: 'Inches(in)' },
        ],
    },
];