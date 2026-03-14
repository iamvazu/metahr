import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Paperclip, Shield, Download, ChevronRight, FileText, Target, Brain, Users, Sparkles, Search, Layout, Share2, Copy, Check } from 'lucide-react';
import { useEeInChat } from '../hooks/useEeInChat';
import { LeadCapture } from '../components/leads/LeadCapture';
import axios from 'axios';

const WP_API_BASE = 'https://metahr.co.in/wp-json/ee-in/v1';

// Simple markdown bold renderer
const renderMarkdown = (text: string) => {
    return text.split(/(\*\*.*?\*\*)/g).map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return part;
    });
};

export default function EeInPage() {
  const { sessionId: urlSessionId } = useParams();
  const { messages, sendMessage, isTyping, isAnalyzing, analysis: liveAnalysis, handleFileUpload, uploadProgress, sessionId: currentSessionId, extractedText, fileName } = useEeInChat();
  
  const [inputText, setInputText] = useState('');
  const [reportType, setReportType] = useState('DiSC');
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [sharedAnalysis, setSharedAnalysis] = useState<any>(null);
  const [isLoadingShared, setIsLoadingShared] = useState(false);
  const [unlockAction, setUnlockAction] = useState<'download' | 'share' | null>(null);

  const chatEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const activeSessionId = urlSessionId || currentSessionId;
  const analysis = urlSessionId ? sharedAnalysis : liveAnalysis;
  const isLeadCaptured = localStorage.getItem(`lead_captured_${activeSessionId}`) === 'true';

  // Fetch shared analysis if URL has sessionId
  useEffect(() => {
    if (urlSessionId) {
      setIsLoadingShared(true);
      axios.post(`${WP_API_BASE}/fetch-analysis`, { sessionId: urlSessionId })
        .then(res => {
          setSharedAnalysis(res.data.analysis);
        })
        .catch(err => console.error("Failed to fetch shared analysis", err))
        .finally(() => setIsLoadingShared(false));
    }
  }, [urlSessionId]);

  // Auto-scroll to bottom of chat — only when there are actual user interactions (length > 1)
  useEffect(() => {
    if (messages.length <= 1) return;
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length, isTyping]);

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

  const handleDownload = () => {
    if (!analysis) return;
    if (!isLeadCaptured) {
      setUnlockAction('download');
      setShowLeadForm(true);
      return;
    }

    const content = `
METAHR // EE-IN LEADERSHIP PRESCRIPTION
---------------------------------------
SESSION ID: ${activeSessionId}
ARCHETYPE: ${analysis.personality_archetype}
STRATEGIC LEVER: ${analysis.primary_strength}
GROWTH TRAP: ${analysis.growth_trap}
EXECUTIVE REFLECTION: ${analysis.coaching_question}

© ${new Date().getFullYear()} MetaHR. All rights reserved.
    `;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `MetaHR_Prescription_${activeSessionId}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleShare = () => {
    if (!isLeadCaptured) {
      setUnlockAction('share');
      setShowLeadForm(true);
      return;
    }
    setShowShareModal(true);
  };

  const copyToClipboard = () => {
    const url = `${window.location.origin}/ee-in/results/${activeSessionId}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
      {/* Hero Section */}
      <div className="bg-navy pt-32 pb-12 mb-12 relative overflow-hidden">
        {/* Abstract Background for Depth */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="/eein_hero_bg.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/60"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-2 mb-8"
            >
                <div className="flex items-center gap-4">
                    <motion.h1
                        className="text-5xl md:text-8xl font-serif italic font-bold mb-2 text-[#87CEEB] drop-shadow-[0_0_25px_rgba(135,206,235,0.95)] leading-tight"
                        animate={{ scale: [1, 1.04, 1, 1.04, 1] }}
                        transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity, repeatDelay: 2.5 }}
                    >
                        Ee-in <Sparkles className="inline-block text-[#87CEEB] animate-pulse ml-2 md:ml-4 drop-shadow-[0_0_15px_rgba(135,206,235,0.9)]" size={48} />
                    </motion.h1>
                    <span className="bg-skyBlue text-navy text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1 rounded-md mb-4 self-center shadow-[0_0_16px_rgba(135,206,235,0.7)]">
                        BETA
                    </span>
                </div>
                <motion.h2
                    className="text-2xl md:text-4xl font-serif italic leading-tight text-[#87CEEB]/90 drop-shadow-[0_0_15px_rgba(135,206,235,0.8)]"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                    Digital Twin of Ian Kishander
                </motion.h2>
            </motion.div>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-beige/60 text-lg md:text-xl font-medium max-w-3xl leading-relaxed drop-shadow-lg"
            >
                High-fidelity leadership synthesis. Upload your DiSC, Hogan, or CliftonStrengths reports to receive a precision-engineered prescription for your leadership trajectory.
            </motion.p>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-6 space-y-12">
        
        {/* TOP: Diagnosis Terminal (Only show if not a shared link) */}
        {!urlSessionId && (
            <section className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-navy/8 border-2 border-navy/10 overflow-hidden flex flex-col h-[600px] md:h-[680px]">
                {/* Terminal Header */}
                <div className="px-6 md:px-8 py-4 md:py-5 border-b-2 border-navy/8 bg-navy/[0.03] flex items-center justify-between">
                    <h2 className="font-black text-navy text-[10px] md:text-[11px] uppercase tracking-[0.3em] flex items-center gap-3">
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

                {/* Chat Messages Area */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 md:space-y-8 bg-gray-50/10 hide-scrollbar">
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
                                {msg.role === 'user' ? <Users size={16} /> : <img src="/eein-avatar.png" className="w-6 h-6 invert" alt="" />}
                            </div>
                            <div className={`max-w-[85%] p-6 rounded-[2rem] text-[15px] leading-relaxed ${
                                msg.role === 'user' 
                                    ? 'bg-teal text-white rounded-tr-none shadow-xl' 
                                    : 'bg-white text-navy rounded-tl-none border border-gray-100 shadow-sm font-medium'
                            }`}>
                                {renderMarkdown(msg.content)}
                            </div>
                        </motion.div>
                    ))}

                    {isTyping && (
                        <div className="flex gap-5">
                            <div className="w-10 h-10 rounded-2xl bg-navy border border-navy flex items-center justify-center flex-shrink-0 animate-status-beat">
                                <img src="/eein-avatar.png" className="w-6 h-6 invert" alt="" />
                            </div>
                            <div className="bg-white p-6 rounded-[2rem] rounded-tl-none border border-gray-100 shadow-sm flex flex-col gap-3">
                                <div className="flex gap-2 items-center">
                                    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-2 h-2 bg-teal rounded-full"></motion.div>
                                    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-2 h-2 bg-teal rounded-full"></motion.div>
                                    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-2 h-2 bg-teal rounded-full"></motion.div>
                                </div>
                                {isAnalyzing && (
                                    <p className="text-[10px] font-black uppercase tracking-widest text-teal mt-1">
                                        Ee-in is analyzing and synthesizing the document...
                                    </p>
                                )}
                            </div>
                        </div>
                    )}
                    <div ref={chatEndRef} />
                </div>

                {/* Input Zone — clearly bordered */}
                <div className="border-t-2 border-navy/8 bg-white p-4 md:p-0">
                    <div className="md:p-0 md:border-none rounded-2xl border border-gray-100 shadow-sm md:shadow-none">
                    {/* Upload row */}
                        <div className="px-4 md:px-8 pt-5 pb-3 flex flex-col md:flex-row md:items-center gap-4 border-b border-gray-100">
                            <div className="flex items-center gap-3">
                                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">Upload Report</span>
                                <div className="flex flex-wrap gap-2">
                                    {reportTypes.map((type) => (
                                        <button
                                            key={type.id}
                                            onClick={() => setReportType(type.id)}
                                            className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-[0.15em] transition-all border ${
                                                reportType === type.id 
                                                    ? 'bg-navy text-white border-navy shadow-lg' 
                                                    : 'bg-white text-gray-400 border-gray-200 hover:border-teal/40 hover:text-teal'
                                            }`}
                                        >
                                            {type.icon} {type.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <input type="file" ref={fileInputRef} onChange={onFileChange} className="hidden" accept=".pdf,image/*" />
                            <button 
                                onClick={() => fileInputRef.current?.click()} 
                                className="md:ml-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border-2 border-dashed border-teal/40 text-teal hover:border-teal hover:bg-teal/5 transition-all text-[9px] font-black uppercase tracking-widest w-full md:w-auto"
                            >
                                <Paperclip size={14} /> Attach File
                            </button>
                        </div>
                    {/* Text input row */}
                        <div className="px-4 md:px-8 py-5">
                            <div className="flex items-center gap-3 px-4 md:px-5 py-3 bg-gray-50 rounded-2xl border-2 border-gray-200 focus-within:border-teal transition-all focus-within:shadow-[0_0_0_3px_rgba(14,124,123,0.1)]">
                                <input 
                                    placeholder="Ask Ee-in about your leadership DNA..."
                                    className="flex-1 bg-transparent border-none focus:outline-none text-[13px] md:text-[14px] font-semibold text-navy placeholder:text-gray-400"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                />
                                <button 
                                    onClick={handleSend}
                                    disabled={!inputText.trim()}
                                    className={`p-2.5 md:px-5 md:py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 flex items-center gap-2 ${
                                        inputText.trim() ? 'bg-teal text-white shadow-lg shadow-teal/20 hover:bg-navy' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    }`}
                                >
                                    <Send size={14} className="md:block" />
                                    <span className="hidden md:inline">Send</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )}

        {/* Mobile Result Jump Bridge */}
        <AnimatePresence>
            {analysis && !urlSessionId && (
                <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 left-6 right-6 z-50 md:hidden"
                >
                    <button 
                        onClick={() => document.getElementById('strategic-results')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full bg-teal text-white p-6 rounded-[2rem] shadow-2xl flex items-center justify-between group overflow-hidden relative"
                    >
                        <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                                <Sparkles size={18} className="animate-pulse" />
                            </div>
                            <div className="text-left">
                                <p className="text-[9px] font-black uppercase tracking-[0.2em] opacity-60">Synthesis_Ready</p>
                                <p className="text-sm font-bold tracking-tight">View Your Prescription</p>
                            </div>
                        </div>
                        <ChevronRight size={20} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>

        {/* BOTTOM: Strategic Results */}
        <section id="strategic-results">
            <AnimatePresence mode="wait">
                {isLoadingShared ? (
                    <motion.div key="loading" className="py-20 flex flex-col items-center">
                        <Loader2 className="animate-spin text-teal mb-4" size={40} />
                        <p className="text-navy font-bold">Unlocking Recorded Logic...</p>
                    </motion.div>
                ) : !analysis ? (
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
                        <div className="bg-white rounded-[3rem] md:rounded-[4rem] p-8 md:p-16 text-navy relative overflow-hidden shadow-2xl shadow-navy/5 border border-gray-100">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-teal/5 rounded-full blur-[100px] -mr-40 -mt-40"></div>
                            <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
                                <div className="space-y-4">
                                    <span className="bg-teal text-[10px] font-black uppercase tracking-[0.4em] px-6 py-2.5 rounded-full text-white shadow-lg shadow-teal/20">
                                        Ian's Prescription
                                    </span>
                                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest pl-2">
                                        ID: {activeSessionId.split('_')[1]?.toUpperCase() || 'SESSION'}
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <button 
                                        onClick={handleShare}
                                        className="w-14 h-14 rounded-2xl bg-gray-50 hover:bg-navy hover:text-white transition-all flex items-center justify-center border border-gray-100 text-gray-400"
                                        title="Share results"
                                    >
                                        <Share2 size={24} />
                                    </button>
                                    <button 
                                        onClick={handleDownload}
                                        className="w-14 h-14 rounded-2xl bg-gray-50 hover:bg-teal hover:text-white transition-all flex items-center justify-center border border-gray-100 text-gray-400"
                                        title="Download report"
                                    >
                                        <Download size={24} />
                                    </button>
                                </div>
                            </div>
                            <h3 className="text-3xl md:text-6xl font-black tracking-tighter mb-4 italic leading-[1.1] md:leading-[0.9] text-navy transition-all">
                                "{analysis.personality_archetype}"
                            </h3>
                            <p className="text-[10px] font-mono font-bold text-teal uppercase tracking-[0.4em] mb-10 pl-1">
                                Archetype // LEADERSHIP_DNA
                            </p>
                        </div>

                        {/* Impact Zones */}
                        <div className="grid md:grid-cols-2 gap-10">
                            <div className="bg-[#EFFFFA] rounded-[3.5rem] p-12 border border-teal/10 shadow-lg shadow-teal/5">
                                <h4 className="flex items-center gap-2 text-[11px] font-black text-teal uppercase tracking-[0.4em] mb-10">
                                    <Target size={14} /> Strategic_Lever
                                </h4>
                                <p className="text-2xl font-black text-navy leading-tight">{analysis.primary_strength}</p>
                            </div>
                            <div className="bg-[#FFF9F2] rounded-[3.5rem] p-12 border border-amber-100 shadow-lg shadow-amber-500/5">
                                <h4 className="flex items-center gap-2 text-[11px] font-black text-amber-600 uppercase tracking-[0.4em] mb-10">
                                    <Shield size={14} /> The_Growth_Trap
                                </h4>
                                <p className="text-2xl font-black text-navy leading-tight">{analysis.growth_trap}</p>
                            </div>
                        </div>

                        {/* Executive Reflection & Lead Capture */}
                        <div className="bg-navy rounded-[3rem] md:rounded-[4rem] p-8 md:p-16 shadow-2xl text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>
                            <div className="max-w-4xl relative z-10 mx-auto">
                                {!showLeadForm ? (
                                    <div className="text-center">
                                        <h4 className="text-[11px] font-black text-teal uppercase tracking-[0.5em] mb-12">Executive_Reflection</h4>
                                        <p className="text-2xl md:text-5xl font-black text-white leading-[1.2] md:leading-[1.1] italic tracking-tight mb-16 px-4 md:px-0">
                                            "{analysis.coaching_question}"
                                        </p>
                                        <button 
                                            onClick={() => setShowLeadForm(true)}
                                            className="inline-flex bg-white text-navy px-12 py-6 rounded-3xl font-black uppercase tracking-[0.3em] text-[11px] items-center justify-center gap-4 shadow-2xl hover:bg-teal hover:text-white transition-all transform hover:-translate-y-1"
                                        >
                                            Initiate Partner Logic <ChevronRight size={18} />
                                        </button>
                                    </div>
                                ) : (
                                    <div className="max-w-xl mx-auto">
                                        <LeadCapture 
                                            sessionId={activeSessionId} 
                                            analysis={analysis}
                                            messages={messages}
                                            extractedText={extractedText}
                                            fileName={fileName}
                                            title={unlockAction ? `Unlock_${unlockAction.toUpperCase()}_Access` : undefined}
                                            subtitle={unlockAction ? "Provide your details to capture high-yield results." : undefined}
                                            onSuccess={() => {
                                                setShowLeadForm(false);
                                                if (unlockAction === 'download') {
                                                    setUnlockAction(null);
                                                    setTimeout(handleDownload, 500);
                                                } else if (unlockAction === 'share') {
                                                    setUnlockAction(null);
                                                    setTimeout(() => setShowShareModal(true), 500);
                                                }
                                            }}
                                            onCancel={() => {
                                              setShowLeadForm(false);
                                              setUnlockAction(null);
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
      </main>

      {/* Share Modal */}
      <AnimatePresence>
        {showShareModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowShareModal(false)}
              className="absolute inset-0 bg-navy/80 backdrop-blur-md"
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-lg bg-white rounded-[3rem] p-10 relative z-10 shadow-2xl border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-teal rounded-2xl flex items-center justify-center text-white">
                  <Share2 size={24} />
                </div>
                <div>
                  <h4 className="font-black text-navy uppercase tracking-widest text-xs">Share_Logic_Access</h4>
                  <p className="text-xl font-bold text-navy/70 tracking-tight">Generate a unique link for this report.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-center justify-between gap-4 mb-8">
                <p className="text-sm font-bold text-navy/40 truncate">
                  {`${window.location.origin}/ee-in/results/${activeSessionId}`}
                </p>
                <button 
                  onClick={copyToClipboard}
                  className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                    copied ? 'bg-green-500 text-white' : 'bg-white text-navy shadow-sm hover:shadow-md'
                  }`}
                >
                  {copied ? <Check size={20} /> : <Copy size={20} />}
                </button>
              </div>

              <button 
                onClick={() => setShowShareModal(false)}
                className="w-full py-5 bg-navy text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-teal transition-all"
              >
                Close Gateway
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

const Loader2 = ({ className, size }: { className?: string, size?: number }) => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    className={className}
  >
    <Brain size={size} />
  </motion.div>
);
