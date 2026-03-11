export async function getCityLocation(city: string) {

    const res = await fetch(`/api/get-city-location?city=${city}`);

    return res.json();
}