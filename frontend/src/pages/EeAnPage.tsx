import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Send, Paperclip, Shield, Download, ChevronRight, FileText, Target, Brain, Users, Sparkles, Activity, Search, Layout, ArrowRight } from 'lucide-react';
import { useEeAnChat } from '../hooks/useEeAnChat';

export default function EeAnPage() {
  const { messages, sendMessage, isTyping, analysis, handleFileUpload, uploadProgress, sessionId } = useEeAnChat();
  const [inputText, setInputText] = useState('');
  const [reportType, setReportType] = useState('DiSC');
  const chatEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  // Parallax / Scroll Effects
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-10, 10]);
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (rect) {
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

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
      {/* Premium Hero Section */}
      <section 
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-navy"
      >
        {/* Background Layers */}
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <iframe
              className="absolute top-1/2 left-1/2 min-w-full min-h-full w-[177.77vh] h-[56.25vw] -translate-x-1/2 -translate-y-1/2 opacity-30 scale-110"
              src="https://www.youtube.com/embed/qzDm2ur9iWc?autoplay=1&mute=1&loop=1&playlist=qzDm2ur9iWc&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0&playsinline=1&enablejsapi=1"
              allow="autoplay; encrypted-media"
              title="Ee-an Background"
              frameBorder="0"
            ></iframe>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/70 to-navy z-10"></div>
          <div className="absolute inset-0 opacity-10 z-20"
                style={{
                    backgroundImage: 'linear-gradient(to right, #567C8D 1px, transparent 1px), linear-gradient(to bottom, #567C8D 1px, transparent 1px)',
                    backgroundSize: '80px 80px',
                    maskImage: 'radial-gradient(circle at 50% 50%, black, transparent)'
                }}
            ></div>
        </motion.div>

        <motion.div 
            style={{ perspective: 1200, rotateX, rotateY, opacity: opacityHero }}
            className="container mx-auto px-6 text-center z-10 flex flex-col items-center pt-20"
        >
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 mb-8"
            >
                <span className="bg-white/10 backdrop-blur-md text-teal text-[10px] font-black uppercase tracking-[0.4em] px-5 py-2 rounded-full border border-white/5">
                    AI_STRATEGIC_LAB // V1.5
                </span>
                <div className="flex items-center gap-1.5 text-[10px] text-white/40 font-bold uppercase tracking-widest">
                    <Activity size={12} className="text-green-500 animate-pulse" /> Live_Sync
                </div>
            </motion.div>

            <motion.h1 
                initial={{ opacity: 0, y: 30, z: -100 }}
                animate={{ opacity: 1, y: 0, z: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]"
            >
                Ian Kishander <br />
                <motion.span 
                    className="font-serif italic font-bold text-skyBlue drop-shadow-[0_0_15px_rgba(200,217,230,0.4)]"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    Digital Twin.
                </motion.span>
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-2xl text-beige/60 max-w-3xl font-light leading-relaxed mb-12"
            >
                The "Ee-an" Strategic Laboratory: Where psychometric data meets executive wisdom. Upload your reports for a high-precision leadership prescription.
            </motion.p>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-6 bg-white/5 backdrop-blur-xl p-5 rounded-[3rem] border border-white/10 shadow-2xl"
            >
                <div className="w-20 h-20 rounded-[2rem] bg-teal flex items-center justify-center shadow-2xl shadow-teal/30 relative">
                  <div className="absolute inset-0 bg-teal rounded-[2rem] animate-ping opacity-20"></div>
                  <img src="/eean-avatar.png" alt="Ee-an" className="w-12 h-12 invert relative z-10" />
                </div>
                <div className="text-left pr-6">
                   <p className="text-[10px] text-white/30 font-black uppercase tracking-widest leading-none mb-1">Status</p>
                   <p className="text-xl font-bold text-white tracking-tight">System Online</p>
                   <p className="text-[10px] text-green-400 font-bold uppercase mt-1 tracking-widest">Diagnostic Level: High</p>
                </div>
            </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent"></div>
      </section>

      {/* Lab Interface */}
      <main className="flex-1 container mx-auto px-6 relative z-10 -mt-20 pb-32">
        <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Column: Input Laboratory (5 cols) */}
            <div className="lg:col-span-5 flex flex-col">
                <div className="bg-white rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(2,12,27,0.15)] border border-gray-100 overflow-hidden flex flex-col h-[750px] sticky top-32">
                    <div className="p-8 border-b border-gray-50 flex items-center justify-between bg-white relative z-10">
                        <h2 className="font-black text-navy text-[11px] uppercase tracking-[0.4em] flex items-center gap-3">
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
                    <div className="flex-1 overflow-y-auto p-10 space-y-10 bg-gray-50/20 hide-scrollbar relative">
                        {messages.length === 0 && (
                            <div className="h-full flex flex-col items-center justify-center text-center px-6">
                                <div className="w-24 h-24 bg-teal/5 rounded-[2.5rem] flex items-center justify-center mb-8 relative">
                                    <div className="absolute inset-0 bg-teal/10 rounded-[2.5rem] animate-pulse"></div>
                                    <Sparkles size={40} className="text-teal relative z-10" />
                                </div>
                                <h3 className="text-2xl font-black text-navy mb-4">Initialize Analysis</h3>
                                <p className="text-base font-medium text-gray-400 max-w-[280px] leading-relaxed italic opacity-80">"Upload a DiSC, Hogan, or Strengths report to beginIan's digital synthesis of your potential."</p>
                            </div>
                        )}
                        
                        {messages.map((msg) => (
                            <motion.div 
                                key={msg.id}
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                className={`flex gap-5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                            >
                                <div className={`w-12 h-12 rounded-[1.25rem] flex items-center justify-center flex-shrink-0 border shadow-md ${
                                    msg.role === 'user' ? 'bg-teal border-teal text-white' : 'bg-navy border-navy text-white'
                                }`}>
                                    {msg.role === 'user' ? <Users size={20} /> : <img src="/eean-avatar.png" className="w-7 h-7 invert" alt="" />}
                                </div>
                                <div className={`max-w-[85%] p-7 rounded-[2.5rem] text-base leading-[1.6] ${
                                    msg.role === 'user' 
                                        ? 'bg-teal text-white rounded-tr-none shadow-xl shadow-teal/10 font-bold' 
                                        : 'bg-white text-navy rounded-tl-none border border-gray-100 shadow-sm font-semibold'
                                }`}>
                                    {msg.content}
                                </div>
                            </motion.div>
                        ))}

                        {isTyping && (
                            <div className="flex gap-5">
                                <div className="w-12 h-12 rounded-[1.25rem] bg-navy border border-navy flex items-center justify-center flex-shrink-0 animate-status-beat">
                                    <img src="/eean-avatar.png" className="w-7 h-7 invert" alt="" />
                                </div>
                                <div className="bg-white p-7 rounded-[2.5rem] rounded-tl-none border border-gray-100 shadow-sm flex gap-2 items-center">
                                    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-2 h-2 bg-teal rounded-full"></motion.div>
                                    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-2 h-2 bg-teal rounded-full"></motion.div>
                                    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-2 h-2 bg-teal rounded-full"></motion.div>
                                </div>
                            </div>
                        )}
                        <div ref={chatEndRef} />
                    </div>

                    {/* Chat Footer */}
                    <div className="p-10 bg-white border-t border-gray-50 mt-auto relative z-10 shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.05)]">
                        <div className="flex flex-wrap gap-2 mb-8">
                            {reportTypes.map((type) => (
                                <button
                                    key={type.id}
                                    onClick={() => setReportType(type.id)}
                                    className={`flex items-center gap-3 px-6 py-4 rounded-[1.5rem] text-[11px] font-black uppercase tracking-[0.3em] transition-all border shadow-sm ${
                                        reportType === type.id 
                                            ? 'bg-navy text-white border-navy' 
                                            : 'bg-white text-gray-400 border-gray-100 hover:border-teal/30 hover:text-teal'
                                    }`}
                                >
                                    {type.icon} {type.label}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-[2rem] border-2 border-transparent focus-within:border-teal/20 transition-all shadow-inner relative group">
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
                                <Paperclip size={26} />
                            </button>
                            <input 
                                placeholder="Consult Ee-an regarding your report..."
                                className="flex-1 bg-transparent border-none focus:outline-none text-base font-bold text-navy placeholder:text-gray-300"
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
                                <Send size={24} />
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
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex-1 min-h-[750px] bg-white rounded-[4rem] border border-gray-100 flex flex-col items-center justify-center p-20 text-center shadow-xl shadow-navy/5"
                        >
                            <div className="w-40 h-40 bg-gray-50 rounded-[4rem] flex items-center justify-center mb-12 border border-gray-100 relative">
                                <Search size={56} className="text-gray-200" />
                                <div className="absolute inset-0 border border-teal/10 rounded-[4rem] animate-pulse"></div>
                            </div>
                            <h3 className="text-4xl font-black text-navy mb-6 tracking-tighter">Strategic Results Workspace</h3>
                            <p className="text-gray-400 max-w-sm font-medium leading-relaxed italic text-lg opacity-60">
                                "The laboratory is on standby. Ian's prescriptive view and coaching roadmap will materialize here once diagnostic data is received."
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div 
                            key="results"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col gap-12"
                        >
                            {/* Prescription Card */}
                            <div className="bg-white rounded-[4rem] p-16 text-navy relative overflow-hidden shadow-[0_60px_120px_-30px_rgba(2,12,27,0.1)] border border-gray-100">
                                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <span className="bg-teal text-[11px] font-black uppercase tracking-[0.5em] px-8 py-3 rounded-full text-white shadow-xl shadow-teal/20">
                                                Ian's Prescription
                                            </span>
                                            <Activity size={20} className="text-teal" />
                                        </div>
                                        <p className="text-gray-400 text-[11px] font-black uppercase tracking-[0.3em] pl-2 border-l-2 border-teal/20">
                                            Sync_Identity // {sessionId.split('_')[1]?.toUpperCase() || 'SYS_ACTIVE'}
                                        </p>
                                    </div>
                                    <button className="w-16 h-16 rounded-[1.5rem] bg-gray-50 hover:bg-teal hover:text-white transition-all flex items-center justify-center border border-gray-100 text-gray-400 group">
                                        <Download size={24} className="group-hover:scale-110 transition-transform" />
                                    </button>
                                </div>
                                <h3 className="text-6xl font-black tracking-tighter mb-12 italic leading-[0.8] text-navy">"The Strategic <span className="text-teal">Anchor.</span>"</h3>
                                <p className="text-3xl font-bold text-navy/90 leading-[1.4] max-w-5xl border-l-[8px] border-teal pl-12 py-4">
                                    {analysis.prescription}
                                </p>
                            </div>

                            {/* Impact Zones */}
                            <div className="grid md:grid-cols-2 gap-10">
                                <motion.div 
                                    whileHover={{ y: -10 }}
                                    className="bg-[#EFFFFA] rounded-[4rem] p-12 border border-teal/10 group shadow-lg shadow-teal/5"
                                >
                                    <h4 className="flex items-center gap-3 text-[11px] font-black text-teal uppercase tracking-[0.5em] mb-8">
                                        <Target size={18} /> Strategic_Leverage
                                    </h4>
                                    <p className="text-3xl font-black text-teal-900 leading-[1.1] tracking-tight">{analysis.strength_zone}</p>
                                </motion.div>
                                <motion.div 
                                    whileHover={{ y: -10 }}
                                    className="bg-[#FFF9F2] rounded-[4rem] p-12 border border-amber-100 group shadow-lg shadow-amber-500/5"
                                >
                                    <h4 className="flex items-center gap-3 text-[11px] font-black text-amber-600 uppercase tracking-[0.5em] mb-8">
                                        <Shield size={18} /> Execution_Risk
                                    </h4>
                                    <p className="text-3xl font-black text-amber-900 leading-[1.1] tracking-tight">{analysis.watch_out_zone}</p>
                                </motion.div>
                            </div>

                            {/* Strategic Actions */}
                            <div className="bg-[#1A2B4A] rounded-[4rem] p-16 shadow-[0_60px_120px_-30px_rgba(26,43,74,0.3)] text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] -mr-96 -mt-96"></div>
                                <div className="grid lg:grid-cols-2 gap-20 relative z-10">
                                    <div>
                                        <h4 className="text-[11px] font-black text-white/30 uppercase tracking-[0.5em] mb-12 flex items-center gap-4">
                                            <Activity size={20} className="text-teal" /> Recommended_Logic
                                        </h4>
                                        <div className="space-y-8">
                                            {analysis.next_actions.map((step, i) => (
                                                <div key={i} className="flex gap-8 items-start group">
                                                    <div className="w-14 h-14 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center text-teal font-black text-lg flex-shrink-0 group-hover:bg-teal group-hover:text-white transition-all duration-500 shadow-lg">
                                                        {i+1}
                                                    </div>
                                                    <p className="text-xl font-bold text-white/90 leading-relaxed pt-3 group-hover:text-white transition-colors">{step}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-3xl rounded-[4rem] p-12 border border-white/10 flex flex-col justify-between shadow-3xl">
                                        <div>
                                            <h4 className="text-[11px] font-black text-teal uppercase tracking-[0.4em] mb-10 pb-4 border-b border-white/10 w-fit">Mindset_Check</h4>
                                            <p className="text-4xl font-black text-white leading-[1.1] italic tracking-tight">
                                                "{analysis.coaching_question}"
                                            </p>
                                        </div>
                                        <Link 
                                            to="/contact"
                                            className="mt-16 bg-white text-navy w-full py-7 rounded-[2rem] font-black uppercase tracking-[0.4em] text-[12px] flex items-center justify-center gap-5 shadow-2xl hover:bg-teal hover:text-white transition-all transform hover:-translate-y-1 active:scale-95 px-8"
                                        >
                                            Book Implementation Strategy <ArrowRight size={22} />
                                        </Link>
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
