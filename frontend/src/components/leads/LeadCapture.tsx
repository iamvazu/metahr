import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, Building2, MessageSquare, Send, CheckCircle2, ArrowRight, Loader2, X } from 'lucide-react';
import axios from 'axios';

interface LeadCaptureProps {
  sessionId: string;
  analysis: any;
  messages?: any[];
  extractedText?: string;
  fileName?: string;
  title?: string;
  subtitle?: string;
  onSuccess?: () => void;
  onCancel?: () => void;
}

const WP_API_BASE = 'https://metahr.co.in/wp-json/ee-in/v1';

export const LeadCapture: React.FC<LeadCaptureProps> = ({ 
  sessionId, 
  analysis, 
  messages,
  extractedText,
  fileName,
  title = "Partner_Logic_Initiation",
  subtitle = "Lock in your leadership roadmap.",
  onSuccess,
  onCancel
}) => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    company: '', 
    message: '' 
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const isProfessionalEmail = (email: string) => {
    const consumerDomains = [
      'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com', 
      'aol.com', 'live.com', 'msn.com', 'yandex.com', 'protonmail.com', 'zoho.com'
    ];
    const domain = email.split('@')[1]?.toLowerCase();
    return domain && !consumerDomains.includes(domain);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    if (!isProfessionalEmail(formData.email)) {
        setStatus('error');
        setErrorMessage('Corporate identity required. Please use a professional/business email.');
        return;
    }

    setStatus('submitting');
    try {
      await axios.post(`${WP_API_BASE}/save-lead`, {
        ...formData,
        sessionId,
        analysis,
        messages,
        extractedText,
        fileName
      });
      setStatus('success');
      localStorage.setItem(`lead_captured_${sessionId}`, 'true');
      setTimeout(() => {
        if (onSuccess) onSuccess();
      }, 2000);
    } catch (error: any) {
      console.error('Lead Save Error:', error);
      setStatus('error');
      setErrorMessage(error.response?.data?.message || 'Could not save lead.');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white shadow-2xl overflow-hidden relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {onCancel && (
        <button 
          onClick={onCancel}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-navy hover:bg-gray-100 rounded-xl transition-all z-20"
        >
          <X size={20} />
        </button>
      )}

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-10 text-center"
          >
            <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 size={40} className="text-teal" />
            </div>
            <h4 className="text-2xl font-black text-navy mb-2">Logic Captured.</h4>
            <p className="text-gray-400 font-medium tracking-tight px-6">Access Unlocked. Ian will be in touch to discuss your roadmap.</p>
          </motion.div>
        ) : (
          <motion.div 
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-navy rounded-2xl flex items-center justify-center text-white shadow-lg shadow-navy/20 flex-shrink-0">
                <Send size={20} />
              </div>
              <div>
                <h4 className="font-black text-navy uppercase tracking-[0.2em] text-[11px] whitespace-nowrap">{title}</h4>
                <p className="text-lg font-bold text-navy/70 tracking-tight leading-tight">{subtitle}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" size={18} />
                  <input 
                    required
                    type="text" 
                    placeholder="Full Name"
                    className="w-full bg-gray-50/50 border-2 border-transparent focus:border-teal/20 focus:bg-white rounded-2xl py-4 pl-14 pr-6 text-navy font-bold placeholder:text-gray-300 transition-all outline-none"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" size={18} />
                  <input 
                    required
                    type="email" 
                    placeholder="Professional Email"
                    className="w-full bg-gray-50/50 border-2 border-transparent focus:border-teal/20 focus:bg-white rounded-2xl py-4 pl-14 pr-6 text-navy font-bold placeholder:text-gray-300 transition-all outline-none"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" size={18} />
                  <input 
                    type="tel" 
                    placeholder="Phone Number"
                    className="w-full bg-gray-50/50 border-2 border-transparent focus:border-teal/20 focus:bg-white rounded-2xl py-4 pl-14 pr-6 text-navy font-bold placeholder:text-gray-300 transition-all outline-none"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="relative">
                  <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" size={18} />
                  <input 
                    type="text" 
                    placeholder="Company Name"
                    className="w-full bg-gray-50/50 border-2 border-transparent focus:border-teal/20 focus:bg-white rounded-2xl py-4 pl-14 pr-6 text-navy font-bold placeholder:text-gray-300 transition-all outline-none"
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-5 top-6 text-gray-300 pointer-events-none" size={18} />
                <textarea 
                  placeholder="Tell Ian about your leadership goals..."
                  rows={3}
                  className="w-full bg-gray-50/50 border-2 border-transparent focus:border-teal/20 focus:bg-white rounded-2xl py-4 pl-14 pr-6 text-navy font-bold placeholder:text-gray-300 transition-all outline-none resize-none"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={status === 'submitting' || !formData.name || !formData.email}
                className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-[11px] flex items-center justify-center gap-4 transition-all shadow-xl shadow-teal/20 hover:-translate-y-1 ${
                  status === 'submitting' 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-teal text-white hover:bg-navy'
                }`}
              >
                {status === 'submitting' ? (
                  <>Processing Logic <Loader2 size={18} className="animate-spin" /></>
                ) : (
                  <>Unlock High-Yield Results <ArrowRight size={18} /></>
                )}
              </button>

              {status === 'error' && (
                <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-red-50 border border-red-100 p-4 rounded-xl"
                >
                    <p className="text-[10px] font-black text-red-500 uppercase tracking-widest text-center">
                        Logic_Error // Verification_Failed
                    </p>
                    <p className="text-xs font-bold text-red-400 text-center mt-1">
                        {errorMessage}
                    </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
