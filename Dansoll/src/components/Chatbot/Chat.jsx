import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown"; // Import Markdown Renderer
import "./Chat.css";

const API_URL = "https://student-hub-dhs.vercel.app/";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const newMessages = [...messages, { text: message, sender: "user" }];
    setMessages(newMessages);
    setMessage("");

    try {
      const res = await axios.post(`${API_URL}/chat`, { message });
      const aiReply = res.data.response || "No response";
      setMessages([...newMessages, { text: aiReply, sender: "ai" }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages([...newMessages, { text: "Error fetching response", sender: "ai" }]);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === "user" ? "user-message" : "ai-message"}
          >
            {msg.sender === "ai" ? (
              <ReactMarkdown>{msg.text}</ReactMarkdown> // Render AI messages as Markdown
            ) : (
              msg.text
            )}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask AI..."
        />
        <button onClick={sendMessage} disabled={!message.trim()}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
