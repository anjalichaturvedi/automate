// src/components/customer/AIChat.jsx
import React, { useState } from "react";
import { FiX, FiSend, FiCpu } from "react-icons/fi";

export default function AIChat({ onClose }) {
  const [messages, setMessages] = useState([
    { from: 'ai', text: 'Hello Amit! I noticed your weekly mileage increased. Would you like a tire check?' }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if(!input) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'ai', text: 'I have logged that request. Is there anything else?' }]);
    }, 1000);
  };

  return (
    <div style={{
      position: 'fixed', bottom: 100, right: 30, width: 350, height: 450, 
      background: 'white', borderRadius: 16, boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
      display: 'flex', flexDirection: 'column', zIndex: 200, overflow: 'hidden', border: '1px solid #e2e8f0'
    }}>
      {/* Header */}
      <div style={{background: '#4f46e5', padding: 16, color: 'white', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div style={{display:'flex', alignItems:'center', gap:8}}>
          <FiCpu /> <strong>AutoMate Assistant</strong>
        </div>
        <button onClick={onClose} style={{background:'none', border:'none', color:'white', cursor:'pointer'}}><FiX size={20}/></button>
      </div>

      {/* Body */}
      <div style={{flex: 1, padding: 16, overflowY: 'auto', background: '#f8fafc', display:'flex', flexDirection:'column', gap: 12}}>
        {messages.map((m, i) => (
          <div key={i} style={{
            padding: '10px 14px', borderRadius: 12, fontSize: '0.9rem', maxWidth: '85%',
            alignSelf: m.from === 'user' ? 'flex-end' : 'flex-start',
            background: m.from === 'user' ? '#4f46e5' : 'white',
            color: m.from === 'user' ? 'white' : '#1e293b',
            border: m.from === 'ai' ? '1px solid #e2e8f0' : 'none',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
          }}>
            {m.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div style={{padding: 12, borderTop: '1px solid #e2e8f0', display:'flex', gap: 8, background: 'white'}}>
        <input 
          style={{flex: 1, padding: '10px 14px', borderRadius: 20, border: '1px solid #cbd5e1', outline: 'none', fontSize: '0.9rem'}}
          placeholder="Ask AutoMate..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend} style={{width: 40, height: 40, borderRadius: '50%', background: '#4f46e5', color: 'white', border: 'none', display:'flex', alignItems:'center', justifyContent:'center', cursor: 'pointer'}}>
          <FiSend />
        </button>
      </div>
    </div>
  );
}