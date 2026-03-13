import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Paperclip, Shield, Download, ChevronRight, FileText, Target, Brain, Users, Sparkles, Search, Layout, ArrowRight } from 'lucide-react';
import { useEeAnChat } from '../hooks/useEeAnChat';

export default function EeAnPage() {
  const { messages, sendMessage, isTyping, analysis, handleFileUpload, uploadProgress, sessionId } = useEeAnChat();
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
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col pb-24">
      {/* Navbar Visibility Guard */}
      <div className="bg-navy pt-32 pb-12 mb-12">
        <div className="container mx-auto px-6">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4"
            >
                Ee-an <span className="text-skyBlue font-serif italic">Digital Twin.</span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-beige/60 text-xl font-medium max-w-2xl"
            >
                Upload your reports for a high-precision leadership prescription.
            </motion.p>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-6 space-y-12">
        
        {/* TOP: Diagnosis Terminal (Chat/Upload) */}
        <section className="bg-white rounded-[3rem] shadow-xl shadow-navy/5 border border-gray-100 overflow-hidden flex flex-col h-[650px]">
            <div className="p-8 border-b border-gray-50 flex items-center justify-between">
                <h2 className="font-black text-navy text-[11px] uppercase tracking-[0.3em] flex items-center gap-3">
                   <Layout size={18} className="text-teal" /> Diagnosis_Terminal
                </h2>
                {uploadProgress > 0 && (
                    <div className="flex items-center gap-3">
                        <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div 
                                animate={{ width: `${uploadProgress}%` }}
                                className="h-full bg-teal"
                            />
                        </div>
                        <span className="text-[10px] font-black text-teal">{uploadProgress}%</span>
                    </div>
                )}
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-10 space-y-10 bg-gray-50/20 hide-scrollbar">
                {messages.length === 0 && (
                    <div className="h-full flex flex-col items-center justify-center text-center px-6 opacity-40">
                        <Sparkles size={40} className="text-teal mb-6" />
                        <p className="text-base font-bold text-navy max-w-[280px]">Upload a DiSC, Hogan, or Strengths report to begin the synthesis.</p>
                    </div>
                )}
                
                {messages.map((msg) => (
                    <motion.div 
                        key={msg.id}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`flex gap-5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                    >
                        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 border shadow-sm ${
                            msg.role === 'user' ? 'bg-teal border-teal text-white' : 'bg-navy border-navy text-white'
                        }`}>
                            {msg.role === 'user' ? <Users size={16} /> : <img src="/eean-avatar.png" className="w-6 h-6 invert" alt="" />}
                        </div>
                        <div className={`max-w-[85%] p-6 rounded-[2rem] text-[15px] leading-relaxed ${
                            msg.role === 'user' 
                                ? 'bg-teal text-white rounded-tr-none shadow-xl' 
                                : 'bg-white text-navy rounded-tl-none border border-gray-100 shadow-sm font-medium'
                        }`}>
                            {msg.content}
                        </div>
                    </motion.div>
                ))}

                {isTyping && (
                    <div className="flex gap-5">
                        <div className="w-10 h-10 rounded-2xl bg-navy border border-navy flex items-center justify-center flex-shrink-0 animate-status-beat">
                            <img src="/eean-avatar.png" className="w-6 h-6 invert" alt="" />
                        </div>
                        <div className="bg-white p-6 rounded-[2rem] rounded-tl-none border border-gray-100 shadow-sm flex gap-2 items-center">
                            <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-2 h-2 bg-teal rounded-full"></motion.div>
                            <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-2 h-2 bg-teal rounded-full"></motion.div>
                            <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-2 h-2 bg-teal rounded-full"></motion.div>
                        </div>
                    </div>
                )}
                <div ref={chatEndRef} />
            </div>

            {/* Terminal Footer */}
            <div className="p-8 bg-white border-t border-gray-50">
                <div className="flex flex-wrap gap-2 mb-6">
                    {reportTypes.map((type) => (
                        <button
                            key={type.id}
                            onClick={() => setReportType(type.id)}
                            className={`flex items-center gap-3 px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all border shadow-sm ${
                                reportType === type.id 
                                    ? 'bg-navy text-white' 
                                    : 'bg-white text-gray-400 border-gray-100 hover:border-teal/30'
                            }`}
                        >
                            {type.icon} {type.label}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-3xl border-2 border-transparent focus-within:border-teal/20 transition-all">
                    <input type="file" ref={fileInputRef} onChange={onFileChange} className="hidden" accept=".pdf,image/*" />
                    <button onClick={() => fileInputRef.current?.click()} className="p-3 text-gray-400 hover:text-teal transition-colors rounded-xl hover:bg-white">
                        <Paperclip size={24} />
                    </button>
                    <input 
                        placeholder="Consult Ee-an..."
                        className="flex-1 bg-transparent border-none focus:outline-none text-[15px] font-bold text-navy"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <button 
                        onClick={handleSend}
                        disabled={!inputText.trim()}
                        className={`p-4 rounded-xl shadow-xl transition-all active:scale-95 ${
                            inputText.trim() ? 'bg-teal text-white' : 'bg-gray-200 text-white cursor-not-allowed'
                        }`}
                    >
                        <Send size={20} />
                    </button>
                </div>
            </div>
        </section>

        {/* BOTTOM: Strategic Results */}
        <section>
            <AnimatePresence mode="wait">
                {!analysis ? (
                    <motion.div 
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="py-20 bg-white/40 rounded-[3rem] border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-12 text-center"
                    >
                        <div className="w-20 h-20 bg-white rounded-[2rem] shadow-sm flex items-center justify-center mb-6">
                            <Search size={32} className="text-gray-200" />
                        </div>
                        <h3 className="text-2xl font-black text-navy mb-2">Awaiting Analysis</h3>
                        <p className="text-gray-400 max-w-sm font-medium">Your interactive prescription will appear here once the diagnosis is complete.</p>
                    </motion.div>
                ) : (
                    <motion.div 
                        key="results"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-12"
                    >
                        {/* Prescription Card */}
                        <div className="bg-white rounded-[4rem] p-12 md:p-16 text-navy relative overflow-hidden shadow-2xl shadow-navy/5 border border-gray-100">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-teal/5 rounded-full blur-[100px] -mr-40 -mt-40"></div>
                            <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
                                <div className="space-y-4">
                                    <span className="bg-teal text-[10px] font-black uppercase tracking-[0.4em] px-6 py-2.5 rounded-full text-white shadow-lg shadow-teal/20">
                                        Ian's Prescription
                                    </span>
                                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest pl-2">
                                        ID: {sessionId.split('_')[1]?.toUpperCase() || 'SESSION'}
                                    </p>
                                </div>
                                <button className="w-14 h-14 rounded-2xl bg-gray-50 hover:bg-teal hover:text-white transition-all flex items-center justify-center border border-gray-100 text-gray-400">
                                    <Download size={24} />
                                </button>
                            </div>
                            <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-10 italic leading-[0.9] text-navy">"The Strategic <span className="text-teal">Anchor.</span>"</h3>
                            <p className="text-2xl md:text-3xl font-bold text-navy/90 leading-tight max-w-5xl border-l-[8px] border-teal pl-10 py-2">
                                {analysis.prescription}
                            </p>
                        </div>

                        {/* Impact Zones */}
                        <div className="grid md:grid-cols-2 gap-10">
                            <div className="bg-[#EFFFFA] rounded-[3.5rem] p-10 border border-teal/10 shadow-lg shadow-teal/5">
                                <h4 className="flex items-center gap-2 text-[11px] font-black text-teal uppercase tracking-[0.4em] mb-6">
                                    <Target size={14} /> Core_Capability
                                </h4>
                                <p className="text-2xl font-black text-teal-900 leading-tight">{analysis.strength_zone}</p>
                            </div>
                            <div className="bg-[#FFF9F2] rounded-[3.5rem] p-10 border border-amber-100 shadow-lg shadow-amber-500/5">
                                <h4 className="flex items-center gap-2 text-[11px] font-black text-amber-600 uppercase tracking-[0.4em] mb-6">
                                    <Shield size={14} /> Critical_Risk
                                </h4>
                                <p className="text-2xl font-black text-amber-900 leading-tight">{analysis.watch_out_zone}</p>
                            </div>
                        </div>

                        {/* Action Roadmap */}
                        <div className="bg-navy rounded-[4rem] p-12 md:p-16 shadow-2xl text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>
                            <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                                <div>
                                    <h4 className="text-[11px] font-black text-white/30 uppercase tracking-[0.5em] mb-10">Evolution_Roadmap</h4>
                                    <div className="space-y-6">
                                        {analysis.next_actions.map((step, i) => (
                                            <div key={i} className="flex gap-6 items-start">
                                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-teal font-black text-sm flex-shrink-0">
                                                    {i+1}
                                                </div>
                                                <p className="text-lg font-bold text-white/90 leading-relaxed pt-2">{step}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-3xl rounded-[3rem] p-10 border border-white/10 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-[11px] font-black text-teal uppercase tracking-[0.4em] mb-8">Executive_Reflection</h4>
                                        <p className="text-3xl font-black text-white leading-tight italic tracking-tight">
                                            "{analysis.coaching_question}"
                                        </p>
                                    </div>
                                    <a href="/contact" className="mt-12 bg-white text-navy w-full py-6 rounded-3xl font-black uppercase tracking-[0.3em] text-[11px] flex items-center justify-center gap-4 shadow-2xl hover:bg-teal hover:text-white transition-all transform hover:-translate-y-1">
                                        Initiate Partner Logic <ChevronRight size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
      </main>
    </div>
  );
}
