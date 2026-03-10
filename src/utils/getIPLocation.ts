import axios from "axios";


export async function getIPLocation() {
    const response = await axios.get("/api/get-ip-location");
    try {
        const { latitude, longitude } = response.data;
        return { latitude, longitude };
    }
    catch (error) {
        return { error: "Something went wrong" };
    }

}