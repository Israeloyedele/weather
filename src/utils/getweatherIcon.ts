export function getWeatherIcon(code: number): string {
    switch (code) {
        // Clear sky
        case 0:
            return "/images/icon-sunny.webp";

        // Mainly clear, partly cloudy, overcast
        case 1:
        case 2:
            return "/images/icon-partly-cloudy.webp";

        case 3:
            return "/images/icon-overcast.webp";

        // Fog
        case 45:
        case 48:
            return "/images/icon-fog.webp";

        // Drizzle
        case 51:
        case 53:
        case 55:
        case 56:
        case 57:
            return "/images/icon-drizzle.webp";

        // Rain
        case 61:
        case 63:
        case 65:
        case 66:
        case 67:
        case 80:
        case 81:
        case 82:
            return "/images/icon-rain.webp";

        // Snow
        case 71:
        case 73:
        case 75:
        case 77:
        case 85:
        case 86:
            return "/images/icon-snow.webp";

        // Thunderstorm
        case 95:
        case 96:
        case 99:
            return "/images/icon-storm.webp";

        // Default → clear sky
        default:
            return "/images/icon-sunny.webp";
    }
}
