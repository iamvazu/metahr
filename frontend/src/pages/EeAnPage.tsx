import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Paperclip, Shield, Download, ChevronRight, FileText, Target, Brain, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEeAnChat } from '../hooks/useEeAnChat';

export default function EeAnPage() {
  const { messages, sendMessage, isTyping, analysis, handleFileUpload, uploadProgress } = useEeAnChat();
  const [inputText, setInputText] = useState('');
  const [reportType, setReportType] = useState('DiSC');
  const chatEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    sendMessage(inputText);
    setInputText('');
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file, reportType);
    }
  };

  const reportTypes = [
    { id: 'DiSC', icon: <Users size={16} />, label: 'DiSC' },
    { id: 'Hogan', icon: <Brain size={16} />, label: 'Hogan' },
    { id: 'CliftonStrengths', icon: <Target size={16} />, label: 'Strengths' },
    { id: 'General', icon: <FileText size={16} />, label: 'Other' }
  ];

  return (
    <div className="min-h-screen bg-[#F0F4F8] flex flex-col pt-24">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Left Side: Chat Interface */}
        <div className="w-full lg:w-1/2 flex flex-col bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 h-[700px]">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white z-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1A2B4A]/10 flex items-center justify-center border border-[#1A2B4A]/20">
                <img src="/eean-avatar.png" alt="Ee-an" className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#1A2B4A]">Ee-an</h1>
                <p className="text-xs text-[#0E7C7B] flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Ian Kishander's Digital Twin
                </p>
              </div>
            </div>
            {uploadProgress > 0 && (
              <div className="flex items-center gap-2">
                <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${uploadProgress}%` }}
                    className="h-full bg-[#0E7C7B]"
                  />
                </div>
                <span className="text-[10px] font-bold text-[#0E7C7B]">{uploadProgress}%</span>
              </div>
            )}
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/30 hide-scrollbar">
            {messages.length === 0 && (
              <div className="text-center py-10">
                <img src="/eean-avatar.png" alt="" className="w-16 h-16 opacity-10 mx-auto mb-4" />
                <p className="text-sm text-gray-400 italic">"Welcome. Let's maximize your potential today."</p>
              </div>
            )}
            
            {messages.map((msg) => (
              <motion.div 
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-10 h-10 rounded-full bg-[#1A2B4A] flex items-center justify-center flex-shrink-0">
                    <img src="/eean-avatar.png" alt="" className="w-6 h-6 invert" />
                  </div>
                )}
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-[#1A2B4A] text-white rounded-tr-none' 
                    : 'bg-white text-[#2F4156] rounded-tl-none border border-gray-100'
                }`}>
                  {msg.content}
                </div>
              </motion.div>
            ))}

            {isTyping && (
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1A2B4A] flex items-center justify-center animate-status-beat flex-shrink-0">
                  <img src="/eean-avatar.png" alt="" className="w-6 h-6 invert" />
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex gap-1 items-center">
                  <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></motion.div>
                  <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></motion.div>
                  <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></motion.div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-6 bg-white border-t border-gray-100">
            {/* Report Type Selection */}
            <div className="flex gap-2 mb-4 overflow-x-auto pb-2 hide-scrollbar">
              {reportTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setReportType(type.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold transition-all whitespace-nowrap shadow-sm border ${
                    reportType === type.id 
                      ? 'bg-[#1A2B4A] text-white border-[#1A2B4A]' 
                      : 'bg-white text-gray-500 border-gray-100 hover:border-gray-300'
                  }`}
                >
                  {type.icon}
                  {type.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-2xl border-2 border-transparent focus-within:border-[#1A2B4A]/10 transition-all">
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={onFileChange} 
                className="hidden" 
                accept=".pdf,image/*" 
              />
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="p-2 text-gray-400 hover:text-[#0E7C7B] transition-colors relative group"
              >
                <Paperclip size={24} />
              </button>
              <input 
                placeholder={`Ask Ee-an about your ${reportType} report...`}
                className="flex-1 bg-transparent border-none focus:outline-none text-sm py-2"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={handleSend}
                disabled={!inputText.trim()}
                className={`p-3 rounded-xl shadow-lg transition-all active:scale-95 ${
                  inputText.trim() ? 'bg-[#1A2B4A] text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Analysis Results */}
        <div className="w-full lg:w-1/2 flex flex-col h-[700px]">
          <AnimatePresence mode="wait">
            {!analysis ? (
              <motion.div 
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex flex-col items-center justify-center text-center p-12 bg-white/40 border-2 border-dashed border-gray-200 rounded-3xl"
              >
                <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center mb-6">
                  <FileText size={32} className="text-gray-300" />
                </div>
                <h2 className="text-xl font-bold text-[#1A2B4A] mb-2">Ian's Analysis Workspace</h2>
                <p className="text-sm text-gray-500 max-w-xs mb-8 leading-relaxed">
                  Upload your report to receive a personalized **HR Prescription** and strategic coaching roadmap.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    <Shield size={12} className="text-[#0E7C7B]" /> AES-256 Secured
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    <Target size={12} className="text-[#C9922A]" /> ROI-Focused
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="analysis"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex-1 space-y-6 overflow-y-auto pr-2 hide-scrollbar"
              >
                {/* Premium Prescription Card */}
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden sticky top-0 z-20">
                  <div className="bg-[#1A2B4A] p-8 text-white relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex flex-col gap-2">
                        <span className="bg-[#0E7C7B] text-[10px] uppercase tracking-[0.2em] font-black px-4 py-1.5 rounded-full w-fit">
                          Strategic Prescription
                        </span>
                        <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest">
                          Session ID: {sessionId.split('_')[1]?.toUpperCase() || 'SESSION'}
                        </p>
                      </div>
                      <button className="p-2 hover:bg-white/10 rounded-xl transition-colors">
                        <Download size={20} />
                      </button>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 tracking-tight italic">"Ian's View"</h3>
                    <p className="text-white/80 text-base leading-relaxed font-medium">
                      {analysis.prescription}
                    </p>
                  </div>
                  
                  <div className="p-8 space-y-8 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 bg-green-50/50 rounded-2xl border border-green-100 relative group overflow-hidden">
                        <div className="absolute top-0 right-0 w-12 h-12 bg-green-100/50 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
                        <h4 className="text-[10px] uppercase font-black text-green-600 mb-3 tracking-widest">The Strength Zone</h4>
                        <p className="text-sm text-green-900 font-bold leading-relaxed">{analysis.strength_zone}</p>
                      </div>
                      <div className="p-6 bg-amber-50/50 rounded-2xl border border-amber-100 relative group overflow-hidden">
                        <div className="absolute top-0 right-0 w-12 h-12 bg-amber-100/50 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
                        <h4 className="text-[10px] uppercase font-black text-amber-600 mb-3 tracking-widest">The Watch-out Zone</h4>
                        <p className="text-sm text-amber-900 font-bold leading-relaxed">{analysis.watch_out_zone}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xs uppercase font-black text-gray-400 tracking-widest">Priority Next Steps</h4>
                      <div className="space-y-3">
                        {analysis.next_actions.map((step, i) => (
                          <motion.div 
                            key={i} 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex gap-4 items-center p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#0E7C7B]/30 hover:bg-white hover:shadow-md transition-all group"
                          >
                            <div className="w-8 h-8 rounded-full bg-[#1A2B4A] text-white flex items-center justify-center flex-shrink-0 text-xs font-black shadow-lg">
                              {i + 1}
                            </div>
                            <p className="text-sm text-[#2F4156] font-bold group-hover:text-[#1A2B4A] transition-colors">{step}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="p-6 bg-[#F0F4F8] rounded-2xl border border-gray-100 text-center">
                      <h4 className="text-[10px] uppercase font-black text-[#0E7C7B] mb-3 tracking-widest">Coaching Reflection</h4>
                      <p className="text-lg font-bold text-[#1A2B4A] leading-snug italic">
                        "{analysis.coaching_question}"
                      </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-100">
                      <div className="text-center md:text-left">
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">Action Required</p>
                        <button className="group relative px-6 py-3 bg-[#1A2B4A] text-white rounded-xl text-sm font-black uppercase tracking-widest overflow-hidden transition-all hover:scale-[1.03] active:scale-95 shadow-xl shadow-navy/20">
                          <span className="relative z-10 flex items-center gap-2">
                            Book Strategy Session <ChevronRight size={18} />
                          </span>
                          <div className="absolute inset-0 bg-[#0E7C7B] translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                        </button>
                      </div>
                      <img src="/eean-avatar.png" alt="" className="w-16 h-16 opacity-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}
