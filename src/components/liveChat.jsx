import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import api from '../services/api';

const socket = io('http://localhost:5000');

const LiveChat = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on('message', (msg) => {
      setChat([...chat, msg]);
    });
  }, [chat]);

  const sendMessage = async () => {
    socket.emit('message', message);
    await api.post('/chat', { message });
    setMessage('');
  };

  return (
    <div>
      <div className="chat-box">
        {chat.map((msg, idx) => (
          <p key={idx}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default LiveChat;
