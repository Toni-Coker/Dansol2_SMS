import "dotenv/config";
import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(express.json());

const allowedOrigins = ["http://localhost:5173", "https://student-hub-dhs.vercel.app/"];
app.use(
cors({
origin: allowedOrigins,
methods: ["GET", "POST"],
allowedHeaders: ["Content-Type"],
})
);

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

app.post("/chat", async (req, res) => {
try {
const { message } = req.body;
if (!message) {
return res.status(400).json({ error: "Message is required" });
}

const response = await axios.post(API_URL, {
contents: [{ parts: [{ text: message }] }],
});

const aiResponse =
response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
"No response from AI.";

res.json({ response: aiResponse });
} catch (error) {
console.error(
"Error:",
error.response ? error.response.data : error.message
);
res.status(500).json({ error: "Failed to get response from AI" });
}
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));