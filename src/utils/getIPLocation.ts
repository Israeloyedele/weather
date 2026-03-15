import axios from "axios";


export async function getIPLocation() {
    try {
        const response = await axios.get("/api/get-ip-location");
        return response.data;
    }
    catch (error) {
        console.log(error);
        return { error: "Something went wrong" };
    }

}