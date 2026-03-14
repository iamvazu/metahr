import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Globe, Send, Users, Monitor, MapPin, CheckCircle2, Loader2 } from 'lucide-react';
import axios from 'axios';
import ScrollIndicator from '../components/ScrollIndicator';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        solution: '',
        preferredContact: 'Email',
        preferredTime: '',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [responseMessage, setResponseMessage] = useState('');

    const contactInfo = [
        { label: "Email", value: "info@metahr.co.in", icon: <Mail size={24} />, href: "mailto:info@metahr.co.in" },
        { label: "Phone", value: "+91 91876 51277", icon: <Phone size={24} />, href: "tel:+919187651277" },
        { label: "LinkedIn", value: "Ian Kishander", icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/ian-kishander-04007ba6/" },
        { label: "Website", value: "www.metahr.co.in", icon: <Globe size={24} />, href: "http://www.metahr.co.in" }
    ];

    const engagementFormats = [
        { title: "In-Person Workshops", icon: <Users size={24} />, desc: "Instructor-led sessions at your preferred location.", code: "ENG_ONSITE" },
        { title: "Virtual Interventions", icon: <Monitor size={24} />, desc: "High-engagement digital learning experiences.", code: "ENG_VIRTUAL" },
        { title: "Executive Offsites", icon: <MapPin size={24} />, desc: "Strategic retreats and team bonding events.", code: "ENG_OFFSITE" }
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await axios.post('https://metahr.co.in/wp-json/metahr/v1/submit-contact', formData);
            if (response.data.success) {
                setStatus('success');
                setResponseMessage(response.data.message);
                setFormData({ name: '', email: '', company: '', phone: '', solution: '', preferredContact: 'Email', preferredTime: '', message: '' });
            } else {
                setStatus('error');
                setResponseMessage('Something went wrong. Please try again.');
            }
        } catch (error: unknown) {
            console.error('Submission error:', error);
            setStatus('error');
            const axiosError = error as { response?: { data?: { message?: string } } };
            setResponseMessage(axiosError.response?.data?.message || 'Failed to send message. Please check your connection.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="relative overflow-x-hidden pt-0 bg-white">

            {/* Contact Hero */}
            <section className="bg-navy relative overflow-hidden min-h-screen flex flex-col justify-center pt-32 pb-24">
                {/* Background Video Layer */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <iframe
                        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-[177.77vh] h-[56.25vw] -translate-x-1/2 -translate-y-1/2 opacity-40 scale-110"
                        src="https://www.youtube.com/embed/hiSeDL9C3cE?autoplay=1&mute=1&loop=1&playlist=hiSeDL9C3cE&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0&playsinline=1&enablejsapi=1"
                        allow="autoplay; encrypted-media"
                        title="Contact Background Video"
                        frameBorder="0"
                    ></iframe>
                    <div className="absolute inset-0 bg-navy/70"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">

                    <motion.h1
                        initial={{ opacity: 0, y: 30, z: -200 }}
                        animate={{ opacity: 1, y: 0, z: 0 }}
                        transition={{
                            duration: 1.2,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black !text-white mb-8 tracking-tighter leading-tight"
                    >
                        Ready to <br />
                        <motion.span 
                            className="font-serif italic font-bold text-skyBlue drop-shadow-[0_0_10px_rgba(200,217,230,0.8)] leading-tight inline-block"
                            animate={{ scale: [1, 1.05, 1, 1.05, 1] }}
                            transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
                        >
                            Partner.
                        </motion.span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl !text-beige/60 font-light max-w-3xl mx-auto leading-relaxed"
                    >
                        Whether you are looking for a customized workshop or a long-term strategic HR partnership, we provide the precision you need.
                    </motion.p>
                </div>

                <ScrollIndicator className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20" color="white" />

                {/* Decorative Laser Line */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent"></div>
            </section>

            <div className="container mx-auto px-6 py-32">
                <div className="grid lg:grid-cols-2 gap-32 items-start">
                    {/* Left Column: Info & Engagement */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="mb-24">
                            <h2 className="text-4xl font-black text-navy mb-12 tracking-tight">Flexible Engagement <span className="text-teal font-serif italic">Formats.</span></h2>
                            <div className="grid gap-6">
                                {engagementFormats.map((format, i) => (
                                    <div key={i} className="group flex items-start space-x-8 p-8 rounded-[3rem] bg-beige/10 border border-navy/5 hover:border-teal/30 hover:shadow-3xl transition-all duration-500">
                                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-teal shadow-3xl shadow-navy/5 group-hover:bg-navy group-hover:text-white transition-all duration-500 shrink-0">
                                            {format.icon}
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-mono font-bold text-navy/20 block mb-2 tracking-widest">{format.code}</span>
                                            <h4 className="font-black text-navy text-xl mb-3 tracking-tight">{format.title}</h4>
                                            <p className="text-navy/50 leading-relaxed font-medium">{format.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-4xl font-black text-navy mb-12 tracking-tight">Connect <span className="text-teal font-serif italic">Directly.</span></h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {contactInfo.map((info, i) => (
                                    <a
                                        key={i}
                                        href={info.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center group bg-white p-8 rounded-[2.5rem] shadow-3xl shadow-navy/5 border border-navy/5 hover:border-teal/40 transition-all duration-500"
                                    >
                                        <div className="w-14 h-14 bg-beige/30 rounded-2xl flex items-center justify-center text-teal group-hover:bg-navy group-hover:text-white transition-all duration-500">
                                            {info.icon}
                                        </div>
                                        <div className="ml-5 overflow-hidden">
                                            <p className="text-navy/40 text-[10px] font-mono font-bold uppercase tracking-widest mb-1">{info.label}</p>
                                            <p className="text-navy text-sm font-black truncate tracking-tight">{info.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Premium Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative lg:sticky lg:top-32"
                    >
                        <div className="bg-navy rounded-[3rem] p-8 md:p-16 relative overflow-hidden ring-1 ring-white/10 shadow-3xl">
                            <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-8 block">Booking.System // PARAMETERS</span>
                            <h3 className="text-4xl font-black mb-6 tracking-tight leading-none">Consultation <span className="text-teal font-serif italic text-gradient uppercase">Booking.</span></h3>
                            <p className="text-white/40 mb-12 leading-relaxed font-light text-lg">Schedule a discovery call to discuss your organizational challenges and desired outcomes.</p>

                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="py-16 text-center space-y-6"
                                    >
                                        <div className="w-24 h-24 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-teal/20">
                                            <CheckCircle2 size={48} className="text-teal animate-pulse" />
                                        </div>
                                        <h4 className="text-2xl font-black tracking-tight">Transmission Received</h4>
                                        <p className="text-white/40 leading-relaxed font-light">{responseMessage}</p>
                                        <button
                                            onClick={() => setStatus('idle')}
                                            className="text-teal font-mono text-[10px] font-bold uppercase tracking-[0.3em] border-b border-teal/30 pb-1 hover:border-teal transition-all"
                                        >
                                            Send Another Protocol
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-8"
                                    >
                                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/70 ml-2">Full Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-teal focus:bg-white/10 transition-all text-white placeholder:text-white/20 font-medium"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/70 ml-2">Email Identity</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-teal focus:bg-white/10 transition-all text-white placeholder:text-white/20 font-medium"
                                                    placeholder="john@company.com"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/70 ml-2">Company Name</label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    required
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-teal focus:bg-white/10 transition-all text-white placeholder:text-white/20 font-medium"
                                                    placeholder="Organization Ltd."
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/70 ml-2">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-teal focus:bg-white/10 transition-all text-white placeholder:text-white/20 font-medium"
                                                    placeholder="+91 XXXX XXXX"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/70 ml-2">Preferred Communication</label>
                                                <select
                                                    name="preferredContact"
                                                    required
                                                    value={formData.preferredContact}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-teal focus:bg-navy transition-all text-white font-medium appearance-none cursor-pointer"
                                                >
                                                    <option value="Email" className="bg-navy">Email</option>
                                                    <option value="Text / WhatsApp" className="bg-navy">Text / WhatsApp</option>
                                                </select>
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/70 ml-2">Initial Call Request (Date & Time)</label>
                                                <input
                                                    type="datetime-local"
                                                    name="preferredTime"
                                                    required
                                                    value={formData.preferredTime}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-teal focus:bg-white/10 transition-all text-white placeholder:text-white/30 font-medium color-scheme-dark"
                                                    style={{ colorScheme: 'dark' }}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-white ml-2">Solution Inquiry</label>
                                            <select
                                                name="solution"
                                                required
                                                value={formData.solution}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-teal focus:bg-navy transition-all text-white font-medium appearance-none cursor-pointer"
                                            >
                                                <option value="" disabled className="bg-navy">Select a solution</option>
                                                <option value="Leadership Development" className="bg-navy">Leadership Development</option>
                                                <option value="Team Development" className="bg-navy">Team Development</option>
                                                <option value="Executive Coaching" className="bg-navy">Executive Coaching</option>
                                                <option value="Individual Development" className="bg-navy">Individual Development</option>
                                                <option value="Organizational Effectiveness" className="bg-navy">Organizational Effectiveness</option>
                                            </select>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-white ml-2">Desired_Outcomes</label>
                                            <textarea
                                                rows={4}
                                                name="message"
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-teal focus:bg-white/10 transition-all text-white placeholder:text-white/10 resize-none font-medium"
                                                placeholder="How can we help maximize your potential?"
                                            ></textarea>
                                        </div>

                                        {status === 'error' && (
                                            <p className="text-red-400 text-[10px] font-mono font-bold uppercase tracking-widest ml-2 bg-red-400/10 p-4 rounded-xl border border-red-400/20">
                                                {responseMessage}
                                            </p>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className="w-full bg-teal hover:bg-white hover:text-navy text-white font-black py-5 md:py-6 rounded-2xl transition-all duration-500 flex items-center justify-center group text-[11px] md:text-sm uppercase tracking-[0.1em] md:tracking-[0.2em] shadow-xl shadow-teal/10 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {status === 'loading' ? (
                                                <>
                                                    Transmitting_Data
                                                    <Loader2 className="ml-3 animate-spin" size={18} />
                                                </>
                                            ) : (
                                                <>
                                                    Schedule Discovery Call
                                                    <Send className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                                                </>
                                            )}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                        {/* Background element */}
                        <div className="absolute inset-0 bg-teal/5 rounded-[4rem] translate-x-4 translate-y-4 -z-10 blur-2xl"></div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
