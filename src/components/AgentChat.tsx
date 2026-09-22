import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { agentResponses } from '../data/mockData';

interface Message {
  id: string;
  role: 'user' | 'agent';
  content: string;
  timestamp: Date;
}

export default function AgentChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      role: 'agent',
      content: "👋 Bonjour ! Je suis **MarketBot**, votre agent IA de veille marché.\n\nJe surveille en temps réel les tendances sur **Vinted**, **Leboncoin** et **eBay**.\n\nPosez-moi une question sur les tendances, les prix, les volumes ou les meilleures opportunités !",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getResponse = (userInput: string): string => {
    const lower = userInput.toLowerCase();
    if (lower.includes('tendance') || lower.includes('trend')) return agentResponses['tendance'];
    if (lower.includes('prix') || lower.includes('price') || lower.includes('coût')) return agentResponses['prix'];
    if (lower.includes('volume') || lower.includes('vente') || lower.includes('quantité')) return agentResponses['volume'];
    if (lower.includes('meilleur') || lower.includes('opportunité') || lower.includes('investir') || lower.includes('roi')) return agentResponses['meilleur'];
    return agentResponses['default'];
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getResponse(input);
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'agent',
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, agentMessage]);
      setIsTyping(false);
    }, 1200);
  };

  const quickActions = [
    { label: '📊 Tendances', query: 'tendance' },
    { label: '💰 Prix', query: 'prix' },
    { label: '📦 Volumes', query: 'volume' },
    { label: '🏆 Opportunités', query: 'meilleur' },
  ];

  return (
    <div className="flex flex-col h-full bg-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
      {/* Header */}
      <div className="p-4 border-b border-gray-700/50 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
          <Bot size={20} className="text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold flex items-center gap-2">
            MarketBot AI
            <Sparkles size={14} className="text-yellow-400" />
          </h3>
          <p className="text-xs text-gray-400">Agent de veille marché • En ligne</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-xs text-green-400">Actif</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] max-h-[400px]">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
              msg.role === 'agent'
                ? 'bg-gradient-to-br from-purple-500 to-indigo-600'
                : 'bg-gradient-to-br from-blue-500 to-cyan-500'
            }`}>
              {msg.role === 'agent' ? <Bot size={14} className="text-white" /> : <User size={14} className="text-white" />}
            </div>
            <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
              msg.role === 'agent'
                ? 'bg-gray-800/80 text-gray-200 border border-gray-700/50'
                : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
            }`}>
              <div className="text-sm whitespace-pre-line leading-relaxed">{msg.content}</div>
              <div className={`text-[10px] mt-2 ${msg.role === 'agent' ? 'text-gray-500' : 'text-blue-200'}`}>
                {msg.timestamp.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
              <Bot size={14} className="text-white" />
            </div>
            <div className="bg-gray-800/80 rounded-2xl px-4 py-3 border border-gray-700/50">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions */}
      <div className="px-4 pb-2 flex flex-wrap gap-2">
        {quickActions.map((action) => (
          <button
            key={action.query}
            onClick={() => {
              setInput(action.query);
              setTimeout(() => handleSend(), 100);
            }}
            className="text-xs px-3 py-1.5 rounded-full bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white transition-all"
          >
            {action.label}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-700/50">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Posez votre question sur le marché..."
            className="flex-1 bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white hover:from-purple-500 hover:to-indigo-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
