import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Maximize2, Send, Paperclip } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEeInChat } from '../../hooks/useEeInChat';

// Simple markdown bold renderer
const renderMarkdown = (text: string) => {
    return text.split(/(\*\*.*?\*\*)/g).map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return part;
    });
};

export default function EeInWidget() {
  const { messages, sendMessage, isTyping } = useEeInChat();
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Listen for external toggle event from FloatingCTA
  useEffect(() => {
    const handleToggle = () => setIsOpen(true);
    window.addEventListener('toggle-eein-chat', handleToggle);
    return () => window.removeEventListener('toggle-eein-chat', handleToggle);
  }, []);

  const handleSend = () => {
    if (!inputText.trim()) return;
    sendMessage(inputText);
    setInputText('');
  };

  const toggleWidget = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-24 right-4 md:right-8 z-[90] flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-[350px] md:w-[380px] h-[520px] max-h-[80vh] bg-white rounded-[2rem] shadow-[0_30px_100px_-15px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden border border-gray-100 pointer-events-auto"
          >
            {/* Header */}
            <div className="bg-[#1A2B4A] p-4 text-white flex items-center justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12 blur-2xl"></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-white/10 p-1.5 border border-white/20">
                    <img 
                      src="/eein-avatar.png" 
                      alt="Ee-in" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-[#1A2B4A] rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-base tracking-tight text-skyBlue">Ee-in</h3>
                  <div className="flex items-center gap-1.5 text-[10px] text-white/60 font-black uppercase tracking-widest mt-0.5">
                    <span className="animate-pulse-soft text-green-400">●</span> Active Now
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 relative z-10">
                <Link 
                  to="/ee-in" 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-xl transition-colors text-white/80 hover:text-white"
                  title="Full screen experience"
                >
                  <Maximize2 size={18} />
                </Link>
                <button 
                  onClick={toggleWidget}
                  className="p-2 hover:bg-white/10 rounded-xl transition-colors text-white/80 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 hide-scrollbar">
              {/* Initial Message */}
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-[#1A2B4A] flex items-center justify-center flex-shrink-0 shadow-md">
                  <img src="/eein-avatar.png" alt="" className="w-5 h-5 invert" />
                </div>
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm text-sm text-[#2F4156] font-medium max-w-[85%] leading-relaxed">
                  Hi, I'm Ee-in. I'm here to translate complex HR data into strategic results. How can I support your development today?
                </div>
              </div>

              {/* Message History */}
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                   <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${
                      msg.role === 'user' ? 'bg-[#0E7C7B]' : 'bg-[#1A2B4A]'
                    }`}>
                      {msg.role === 'user' ? (
                        <div className="text-white text-[10px] font-bold">ME</div>
                      ) : (
                        <img src="/eein-avatar.png" alt="" className="w-5 h-5 invert" />
                      )}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm leading-relaxed max-w-[85%] ${
                      msg.role === 'user' 
                        ? 'bg-[#0E7C7B] text-white rounded-tr-none' 
                        : 'bg-white text-[#2F4156] rounded-tl-none border border-gray-100 shadow-sm font-medium'
                    }`}>
                      {renderMarkdown(msg.content)}
                    </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#1A2B4A] flex items-center justify-center flex-shrink-0 animate-status-beat">
                    <img src="/eein-avatar.png" alt="" className="w-5 h-5 invert" />
                  </div>
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex gap-1.5 items-center">
                    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-[#0E7C7B] rounded-full"></motion.div>
                    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-[#0E7C7B] rounded-full"></motion.div>
                    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-[#0E7C7B] rounded-full"></motion.div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Footer */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-2xl border-2 border-transparent focus-within:border-[#1A2B4A]/10 transition-all">
                <button className="p-2 text-gray-400 hover:text-[#0E7C7B] transition-colors">
                  <Paperclip size={20} />
                </button>
                <input 
                  type="text" 
                  placeholder="Ask me anything..."
                  className="flex-1 bg-transparent border-none focus:outline-none text-sm font-medium py-1"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <button 
                  onClick={handleSend}
                  className={`p-2.5 rounded-xl transition-all shadow-lg ${inputText.trim() ? 'bg-[#1A2B4A] text-white active:scale-95' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                  disabled={!inputText.trim()}
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="flex flex-col gap-2 mt-4 text-center">
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest leading-tight">
                  Ee-in is AI and can make mistakes.
                </p>
                <div className="flex gap-2 justify-center">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
