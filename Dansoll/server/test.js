import axios from 'axios';

const API_KEY = 'AIzaSyBBsOy9i19CthJPFpGRbLESnmWn2HtE7aA'; // Replace with your actual API key
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

async function getGeminiResponse(prompt) {
    try {
        const response = await axios.post(API_URL, {
            contents: [
                {
                    parts: [{ text: prompt }]
                }
            ]
        });

        console.log("AI Response:", response.data.candidates[0].content.parts[0].text);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}

// Example usage
getGeminiResponse("Explain the importance of AI in education.");
