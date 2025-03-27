import { useState } from "react";
import axios from "axios";
import "./Chat.css";

const API_URL = import.meta.env.VITE_BACKEND_URL;

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const newMessages = [...messages, { text: message, sender: "user" }];
    setMessages(newMessages);
    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post(`${API_URL}/chat`, { message });
      const aiReply = res.data.response || "No response";

      setMessages([...newMessages, { text: aiReply, sender: "ai" }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages([...newMessages, { text: "Error fetching response", sender: "ai" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-header">AI Chat Assistant</div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === "user" ? "user-message" : "ai-message"}
          >
            {msg.text}
          </div>
        ))}
        {loading && <div className="loading">AI is typing...</div>}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask AI..."
        />
        <button onClick={sendMessage} disabled={loading}>Send</button>
      </div>
    </div>
  );
};

export default Chat;