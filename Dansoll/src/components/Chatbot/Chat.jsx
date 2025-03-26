import { useState } from "react";
import axios from "axios";
import "./Chat.css";

const APIS_URL = import.meta.env.VITE_BACKEND_URL;

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const newMessages = [...messages, { text: message, sender: "user" }];
    setMessages(newMessages);
    setMessage("");

    try {
      const res = await axios.post(`${APIS_URL}/chat`, { message });

      const aiReply = res.data.response || "No response";
      setMessages([...newMessages, { text: aiReply, sender: "ai" }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages([...newMessages, { text: "Error fetching response", sender: "ai" }]);
    }
  };

  // console.log("APIS_URL from .env:", import.meta.env.VITE_API_URL);

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === "user" ? "user-message" : "ai-message"} // ✅ Fix: Use className
          >
            {msg.text}
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
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
