import axios from "axios";

export default async function handler(req, res) {
    try {
        const encodedUrl = req.query.url as string;

        const url = decodeURIComponent(encodedUrl);

        if (!url) {
            return res.status(400).json({ error: "URL is required" });
        }

        const response = await axios.get(url);
        res.status(200).json(response.data);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Failed to fetch Weather, API Error" });
    }
}