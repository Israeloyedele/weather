import axios from "axios";


export async function getIPLocation() {
    const response = await axios.get("/api/get-ip-location");
    try {
        const { latitude, longitude, city, country_name } = response.data;
        return { latitude, longitude, city, country_name };
    }
    catch (error) {
        console.log(error);
        return { error: "Something went wrong" };
    }

}