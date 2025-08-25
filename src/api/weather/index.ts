const currentWeather = async (q: string) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${q}`);
    if (!response.ok) {
        throw new Error('Failed to fetch weather data');
    }
    return response.json();
};

const forecastWeather = async (q: string) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${q}&days=3`);
    if (!response.ok) {
        throw new Error('Failed to fetch weather data');
    }
    return response.json();
}


export { currentWeather, forecastWeather };