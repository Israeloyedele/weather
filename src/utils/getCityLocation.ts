export async function getCityLocation(city: string) {
    const res = await fetch(`/api/get-city-location?city=${city}`);
    // console.log(res.json());

    return res.json();
}