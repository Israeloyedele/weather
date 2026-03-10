import axios from "axios";




export default async function handler(req, res) {
    try {
        const clientIP = req.headers['x-forwarded-for']?.toString().split(',')[0] || req.socket.remoteAddress;
        // const clientIP = "102.89.85.114"

        const response = await axios.get(`https://ipapi.co/${clientIP}/json`);

        res.status(200).json(response.data);

    } catch (error) {
        console.error(error.message || error);
        res.status(500).json({ error: 'Could not fetch location' });
    }
}