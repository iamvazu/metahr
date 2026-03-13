import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Paperclip, Shield, Download, ChevronRight, FileText, Target, Brain, Users, Sparkles, Activity, Search, Layout } from 'lucide-react';
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
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      {/* Hero Header Section - Dark Theme for Navbar Visibility */}
      <section className="bg-navy pt-44 pb-20 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal/5 rounded-full blur-[100px] -ml-32 -mb-32"></div>
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="max-w-3xl">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <span className="bg-white/10 backdrop-blur-md text-teal text-[10px] font-black uppercase tracking-[0.4em] px-4 py-1.5 rounded-full border border-white/5">
                            AI_STRATEGIC_LAB // V1.2
                        </span>
                        <div className="flex items-center gap-1.5 text-[10px] text-white/40 font-bold uppercase tracking-widest">
                            <Activity size={12} className="text-green-500 animate-pulse" /> Live_Analysis_Mode
                        </div>
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6"
                    >
                        Ian's <span className="text-teal font-serif italic">Digital Twin.</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/50 text-xl font-light max-w-2xl leading-relaxed"
                    >
                        The "Ee-an" Strategic Laboratory: Upload advanced psychometric data to receive high-precision leadership prescriptions.
                    </motion.p>
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-5 bg-white/5 backdrop-blur-xl p-4 rounded-[2.5rem] border border-white/10 shadow-2xl"
                >
                    <div className="w-16 h-16 rounded-[1.5rem] bg-teal flex items-center justify-center shadow-lg shadow-teal/20">
                        <img src="/eean-avatar.png" alt="Ee-an" className="w-10 h-10 invert" />
                    </div>
                    <div>
                    <p className="text-[10px] text-white/30 font-black uppercase tracking-widest leading-none mb-1">System_Status</p>
                    <p className="text-lg font-bold text-white tracking-tight">Active & Ready</p>
                    </div>
                </motion.div>
            </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </section>

      <main className="flex-1 container mx-auto px-6 relative z-10 -mt-10 pb-24">
        <div className="grid lg:grid-cols-12 gap-10">
            {/* Left Column: The Processor (5 cols) */}
            <div className="lg:col-span-5 flex flex-col">
                <div className="bg-white rounded-[3rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden flex flex-col h-[750px] sticky top-32">
                    <div className="p-8 border-b border-gray-50 flex items-center justify-between bg-white">
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
                            <div className="h-full flex flex-col items-center justify-center text-center px-6">
                                <div className="w-20 h-20 bg-teal/5 rounded-[2rem] flex items-center justify-center mb-8">
                                    <Sparkles size={32} className="text-teal animate-pulse" />
                                </div>
                                <h3 className="text-xl font-black text-navy mb-3">Begin Decoding</h3>
                                <p className="text-sm font-medium text-gray-400 max-w-[240px] leading-relaxed italic">"Greeting. Upload a DiSC or Hogan report for strategic level processing."</p>
                            </div>
                        )}
                        
                        {messages.map((msg) => (
                            <motion.div 
                                key={msg.id}
                                initial={{ opacity: 0, scale: 0.95 }}
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
                                        ? 'bg-teal text-white rounded-tr-none shadow-xl shadow-teal/10' 
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

                    {/* Chat Footer */}
                    <div className="p-10 bg-white border-t border-gray-50 mt-auto">
                        <div className="flex flex-wrap gap-2 mb-8">
                            {reportTypes.map((type) => (
                                <button
                                    key={type.id}
                                    onClick={() => setReportType(type.id)}
                                    className={`flex items-center gap-3 px-5 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all border shadow-sm ${
                                        reportType === type.id 
                                            ? 'bg-navy text-white border-navy' 
                                            : 'bg-white text-gray-400 border-gray-100 hover:border-gray-200'
                                    }`}
                                >
                                    {type.icon} {type.label}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-3xl border-2 border-transparent focus-within:border-teal/20 transition-all shadow-inner">
                            <input 
                                type="file" 
                                ref={fileInputRef} 
                                onChange={onFileChange} 
                                className="hidden" 
                                accept=".pdf,image/*" 
                            />
                            <button 
                                onClick={() => fileInputRef.current?.click()}
                                className="p-4 text-gray-400 hover:text-teal transition-colors rounded-2xl hover:bg-white active:scale-95"
                            >
                                <Paperclip size={24} />
                            </button>
                            <input 
                                placeholder="Consult Ee-an regarding your report..."
                                className="flex-1 bg-transparent border-none focus:outline-none text-[15px] font-bold text-navy placeholder:text-gray-300"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            />
                            <button 
                                onClick={handleSend}
                                disabled={!inputText.trim()}
                                className={`p-5 rounded-2xl shadow-2xl transition-all active:scale-95 ${
                                    inputText.trim() ? 'bg-teal text-white hover:bg-navy' : 'bg-gray-200 text-white cursor-not-allowed'
                                }`}
                            >
                                <Send size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Strategic Prescription (7 cols) */}
            <div className="lg:col-span-7 flex flex-col">
                <AnimatePresence mode="wait">
                    {!analysis ? (
                        <motion.div 
                            key="empty"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex-1 min-h-[750px] bg-white rounded-[3rem] border border-gray-100 flex flex-col items-center justify-center p-20 text-center shadow-sm"
                        >
                            <div className="w-32 h-32 bg-gray-50 rounded-[3.5rem] flex items-center justify-center mb-10 border border-gray-100">
                                <Search size={48} className="text-gray-200" />
                            </div>
                            <h3 className="text-3xl font-black text-navy mb-4 tracking-tighter">Awaiting Diagnosis</h3>
                            <p className="text-gray-400 max-w-sm font-medium leading-relaxed italic text-lg opacity-60">"Your results room is on standby. Strategic decoding will initialize upon receipt of report data."</p>
                        </motion.div>
                    ) : (
                        <motion.div 
                            key="results"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col gap-10"
                        >
                            {/* The "Ian's View" Header Card */}
                            <div className="bg-white rounded-[4rem] p-12 md:p-16 text-navy relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(2,12,27,0.08)] border border-gray-100">
                                <div className="absolute top-0 right-0 w-80 h-80 bg-teal/5 rounded-full blur-[100px] -mr-40 -mt-40"></div>
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <span className="bg-teal text-[10px] font-black uppercase tracking-[0.4em] px-6 py-2.5 rounded-full text-white shadow-lg shadow-teal/10">
                                                Strategic Prescription
                                            </span>
                                            <Activity size={16} className="text-teal" />
                                        </div>
                                        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest pl-2">
                                            Reference_Session // {sessionId.split('_')[1]?.toUpperCase() || 'METAHR_SYNC'}
                                        </p>
                                    </div>
                                    <div className="flex gap-4">
                                        <button className="w-14 h-14 rounded-2xl bg-gray-50 hover:bg-teal hover:text-white transition-all flex items-center justify-center border border-gray-100 text-gray-400">
                                            <Download size={22} />
                                        </button>
                                    </div>
                                </div>
                                <h3 className="text-5xl md:text-6xl font-black tracking-tighter mb-10 italic leading-[0.9] text-navy">"Ian's Strategic View"</h3>
                                <p className="text-2xl text-navy/80 font-medium leading-relaxed max-w-4xl border-l-[6px] border-teal pl-10">
                                    {analysis.prescription}
                                </p>
                            </div>

                            {/* Zones Grid */}
                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="bg-[#EFFFFA] rounded-[3.5rem] p-10 border border-teal/10 group hover:shadow-2xl hover:shadow-teal/5 transition-all">
                                    <h4 className="flex items-center gap-2 text-[11px] font-black text-teal uppercase tracking-[0.4em] mb-6">
                                        <Target size={14} /> Core_Capability
                                    </h4>
                                    <p className="text-2xl font-black text-teal-900 leading-[1.1] tracking-tight">{analysis.strength_zone}</p>
                                </div>
                                <div className="bg-[#FFF9F2] rounded-[3.5rem] p-10 border border-amber-100 group hover:shadow-2xl hover:shadow-amber-500/5 transition-all">
                                    <h4 className="flex items-center gap-2 text-[11px] font-black text-amber-600 uppercase tracking-[0.4em] mb-6">
                                        <Shield size={14} /> Critical_Risk
                                    </h4>
                                    <p className="text-2xl font-black text-amber-900 leading-[1.1] tracking-tight">{analysis.watch_out_zone}</p>
                                </div>
                            </div>

                            {/* Actions & Coaching */}
                            <div className="bg-[#1A2B4A] rounded-[4rem] p-12 md:p-16 shadow-2xl text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>
                                <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                                    <div>
                                        <h4 className="text-[11px] font-black text-white/30 uppercase tracking-[0.5em] mb-10 flex items-center gap-3">
                                            <Activity size={16} className="text-teal" /> Evolution_Roadmap
                                        </h4>
                                        <div className="space-y-6">
                                            {analysis.next_actions.map((step, i) => (
                                                <div key={i} className="flex gap-6 items-start group">
                                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-teal font-black text-sm flex-shrink-0 group-hover:bg-teal group-hover:text-white transition-all duration-500">
                                                        {i+1}
                                                    </div>
                                                    <p className="text-[17px] font-bold text-white/90 leading-relaxed pt-2 group-hover:text-white transition-colors">{step}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-3xl rounded-[3rem] p-10 border border-white/10 flex flex-col justify-between shadow-2xl">
                                        <div>
                                            <h4 className="text-[11px] font-black text-teal uppercase tracking-[0.4em] mb-8">Executive_Reflection</h4>
                                            <p className="text-3xl font-black text-white leading-tight italic tracking-tight">
                                                "{analysis.coaching_question}"
                                            </p>
                                        </div>
                                        <button className="mt-12 bg-white text-navy w-full py-6 rounded-3xl font-black uppercase tracking-[0.3em] text-[11px] flex items-center justify-center gap-4 shadow-2xl hover:bg-teal hover:text-white transition-all transform hover:-translate-y-1">
                                            Initiate Partner Logic <ChevronRight size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
      </main>
    </div>
  );
}
