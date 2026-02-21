import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Globe, Send, Users, Monitor, MapPin } from 'lucide-react';

const Contact = () => {
    const contactInfo = [
        { label: "Email", value: "ian@metahr.co.in", icon: <Mail size={24} />, href: "mailto:ian@metahr.co.in" },
        { label: "Phone", value: "+91 82960 49787", icon: <Phone size={24} />, href: "tel:+918296049787" },
        { label: "LinkedIn", value: "Ian Kishander", icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/ian-kishander-04007ba6/" },
        { label: "Website", value: "www.metahr.co.in", icon: <Globe size={24} />, href: "http://www.metahr.co.in" }
    ];

    const engagementFormats = [
        { title: "In-Person Workshops", icon: <Users size={24} />, desc: "Instructor-led sessions at your preferred location.", code: "ENG_ONSITE" },
        { title: "Virtual Interventions", icon: <Monitor size={24} />, desc: "High-engagement digital learning experiences.", code: "ENG_VIRTUAL" },
        { title: "Executive Offsites", icon: <MapPin size={24} />, desc: "Strategic retreats and team bonding events.", code: "ENG_OFFSITE" }
    ];

    return (
        <div className="bg-white">
            {/* Contact Hero */}
            <section className="bg-navy pt-32 pb-16 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-8"
                    >
                        <span className="px-6 py-2 rounded-full border border-teal/30 text-teal text-[10px] font-mono font-bold tracking-[0.4em] uppercase bg-black/40 backdrop-blur-xl">
                            ENGAGEMENT.PORTAL // THE_ALIGNMENT_CALL
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-black !text-white mb-8 tracking-tighter leading-[0.85]"
                    >
                        Ready to Partner <br />
                        <span className="text-teal font-serif italic text-gradient uppercase">with MetaHR?</span>
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
                            <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-8 block">Engaging_Models // PROTOCOLS</span>
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
                            <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-8 block">Data.Connections // TERMINALS</span>
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
                        <div className="bg-navy rounded-[4rem] p-12 md:p-20 text-white relative z-10 shadow-[0_50px_100px_-20px_rgba(2,12,27,0.5)] ring-1 ring-white/10">
                            <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-8 block">Booking.System // PARAMETERS</span>
                            <h3 className="text-4xl font-black mb-6 tracking-tight leading-none">Consultation <span className="text-teal font-serif italic text-gradient uppercase">Booking.</span></h3>
                            <p className="text-white/40 mb-12 leading-relaxed font-light text-lg">Schedule a discovery call to discuss your organizational challenges and desired outcomes.</p>

                            <form className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-teal/60 ml-2">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-teal focus:bg-white/10 transition-all text-white placeholder:text-white/10 font-medium"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-teal/60 ml-2">Work Email</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-teal focus:bg-white/10 transition-all text-white placeholder:text-white/10 font-medium"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-teal/60 ml-2">Company</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-teal focus:bg-white/10 transition-all text-white placeholder:text-white/10 font-medium"
                                            placeholder="MetaHR"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-teal/60 ml-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-teal focus:bg-white/10 transition-all text-white placeholder:text-white/10 font-medium"
                                            placeholder="+91 XXXX XXXX"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-teal/60 ml-2">Desired_Outcomes</label>
                                    <textarea
                                        rows={4}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-teal focus:bg-white/10 transition-all text-white placeholder:text-white/10 resize-none font-medium"
                                        placeholder="How can we help maximize your potential?"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-teal hover:bg-white hover:text-navy text-white font-black py-6 rounded-2xl transition-all duration-500 flex items-center justify-center group text-sm uppercase tracking-[0.2em] shadow-xl shadow-teal/10"
                                >
                                    Schedule Discovery Call
                                    <Send className="ml-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                                </button>
                            </form>
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
