import React, { useState } from 'react';
import api from '../services/api';

const SupportTicket = () => {
  const [ticketContent, setTicketContent] = useState('');

  const submitTicket = async () => {
    await api.post('/tickets', { content: ticketContent });
    setTicketContent('');
  };

  return (
    <div>
      <textarea
        value={ticketContent}
        onChange={(e) => setTicketContent(e.target.value)}
      />
      <button onClick={submitTicket}>Submit Ticket</button>
    </div>
  );
};

export default SupportTicket;
