import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Maximize2, Send, Paperclip } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EeAnWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setIsTyping(false), 2000);
      setIsTyping(true);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Toggle widget
  const toggleWidget = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-[380px] h-[550px] bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-[#1A2B4A] p-6 text-white flex items-center justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12 blur-2xl"></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-white/10 p-1.5 border border-white/20">
                    <img 
                      src="/eean-avatar.png" 
                      alt="Ee-an" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-[#1A2B4A] rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-base tracking-tight">Ee-an</h3>
                  <div className="flex items-center gap-1.5 text-[10px] text-white/60 font-black uppercase tracking-widest mt-0.5">
                    <span className="animate-pulse-soft">●</span> Active Now
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 relative z-10">
                <Link 
                  to="/ee-an" 
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
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/50 hide-scrollbar">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1A2B4A] flex items-center justify-center flex-shrink-0 shadow-md">
                  <img src="/eean-avatar.png" alt="" className="w-5 h-5 invert" />
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm text-sm text-[#2F4156] font-medium max-w-[85%] leading-relaxed">
                  Hi, I'm Ee-an. I'm here to translate complex HR data into strategic results. How can I support your development today?
                </div>
              </div>

              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1A2B4A] flex items-center justify-center flex-shrink-0 animate-status-beat">
                    <img src="/eean-avatar.png" alt="" className="w-5 h-5 invert" />
                  </div>
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex gap-1.5 items-center">
                    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-[#0E7C7B] rounded-full"></motion.div>
                    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-[#0E7C7B] rounded-full"></motion.div>
                    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-[#0E7C7B] rounded-full"></motion.div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Footer */}
            <div className="p-6 bg-white border-t border-gray-100">
              <div className="flex items-center gap-2 p-2.5 bg-gray-50 rounded-2xl border-2 border-transparent focus-within:border-[#1A2B4A]/10 transition-all">
                <button className="p-2 text-gray-400 hover:text-[#0E7C7B] transition-colors">
                  <Paperclip size={20} />
                </button>
                <input 
                  type="text" 
                  placeholder="Ask me anything..."
                  className="flex-1 bg-transparent border-none focus:outline-none text-sm font-medium py-1"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button 
                  className={`p-2.5 rounded-xl transition-all shadow-lg ${message.trim() ? 'bg-[#1A2B4A] text-white' : 'bg-gray-200 text-gray-400'}`}
                  disabled={!message.trim()}
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">
                  Powered by MetaHR AI
                </p>
                <div className="flex gap-2">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleWidget}
        className={`w-16 h-16 rounded-full shadow-[0_10px_25px_-5px_rgba(26,43,74,0.4)] flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-white text-[#1A2B4A]' : 'bg-[#1A2B4A] text-white hover:bg-[#0E7C7B]'}`}
      >
        {isOpen ? <X size={28} /> : (
          <div className="relative">
            <MessageSquare size={30} fill="currentColor" />
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }} 
              transition={{ repeat: Infinity, duration: 2 }} 
              className="absolute -top-1 -right-1 w-4 h-4 bg-[#0E7C7B] border-2 border-[#1A2B4A] rounded-full"
            ></motion.div>
          </div>
        )}
      </motion.button>
    </div>
  );
}
