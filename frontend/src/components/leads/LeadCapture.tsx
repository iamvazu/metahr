import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Send, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import axios from 'axios';

interface LeadCaptureProps {
  sessionId: string;
  analysis: any;
  onSuccess?: () => void;
}

const WP_API_BASE = 'https://metahr.co.in/wp-json/ee-in/v1';

export const LeadCapture: React.FC<LeadCaptureProps> = ({ sessionId, analysis, onSuccess }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setStatus('submitting');
    try {
      await axios.post(`${WP_API_BASE}/save-lead`, {
        ...formData,
        sessionId,
        analysis
      });
      setStatus('success');
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
    <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white shadow-2xl overflow-hidden relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
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
            <p className="text-gray-400 font-medium">Ian will be in touch to discuss your roadmap.</p>
          </motion.div>
        ) : (
          <motion.div 
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-navy rounded-2xl flex items-center justify-center text-white shadow-lg shadow-navy/20">
                <Send size={20} />
              </div>
              <div>
                <h4 className="font-black text-navy uppercase tracking-[0.2em] text-[11px]">Partner_Logic_Initiation</h4>
                <p className="text-lg font-bold text-navy/70 tracking-tight">Lock in your leadership roadmap.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-teal transition-colors" size={18} />
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
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-teal transition-colors" size={18} />
                <input 
                  required
                  type="email" 
                  placeholder="Professional Email"
                  className="w-full bg-gray-50/50 border-2 border-transparent focus:border-teal/20 focus:bg-white rounded-2xl py-4 pl-14 pr-6 text-navy font-bold placeholder:text-gray-300 transition-all outline-none"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                />
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
                  <>Initiate Partnership <ArrowRight size={18} /></>
                )}
              </button>

              {status === 'error' && (
                <p className="text-center text-[10px] font-bold text-red-500 uppercase tracking-widest mt-2">
                  {errorMessage}
                </p>
              )}
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
