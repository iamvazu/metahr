import { motion } from 'framer-motion';
import { Mail, Phone, ArrowLeft, ShieldCheck, Database, Lock, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const TypewriterText = ({ text }: { text: string }) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayText(text.substring(0, i + 1));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 50);
        return () => clearInterval(timer);
    }, [text]);

    return <span className="font-mono">{displayText}</span>;
};

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-navy min-h-screen pt-32 pb-24 text-white/80">
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Protocol Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <Link
                        to="/"
                        className="flex items-center space-x-2 text-teal/60 hover:text-skyBlue transition-colors font-mono text-[10px] font-bold uppercase tracking-widest group"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        <span>[ EXECUTE: RETURN_TO_BASE ]</span>
                    </Link>
                </motion.div>

                {/* Header Section */}
                <header className="mb-24 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute -top-12 -left-12 w-24 h-24 bg-teal/5 rounded-full blur-2xl"
                    />
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter"
                    >
                        Privacy <span className="text-skyBlue font-serif italic">Policy.</span>
                    </motion.h1>
                    <div className="h-px w-full bg-gradient-to-r from-teal/40 via-skyBlue/20 to-transparent mb-6" />
                    <p className="text-teal font-mono text-sm tracking-widest uppercase flex items-center">
                        <span className="w-2 h-2 bg-teal rounded-full animate-ping mr-3" />
                        <TypewriterText text="Committed to the Confidentiality and Integrity of Your Data." />
                    </p>
                </header>

                <div className="space-y-20 relative z-10">
                    {/* 01 / Introduction */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-start space-x-6">
                            <span className="font-mono text-skyBlue text-xs font-bold tracking-widest pt-2">01 / INTRODUCTION</span>
                            <div className="flex-1">
                                <h2 className="text-skyBlue text-3xl font-black mb-6 tracking-tight uppercase">Protocol Overview</h2>
                                <p className="text-lg leading-relaxed font-light text-white/60">
                                    MetaHR ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website (www.metahr.co.in), engage in our consulting services, or participate in our behavioral assessments.
                                </p>
                            </div>
                        </div>
                    </motion.section>

                    {/* 02 / Data Collection */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-start space-x-6">
                            <span className="font-mono text-skyBlue text-xs font-bold tracking-widest pt-2">02 / DATA COLLECTION</span>
                            <div className="flex-1">
                                <h2 className="text-skyBlue text-3xl font-black mb-8 tracking-tight uppercase">Intelligence Gathering</h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    {[
                                        { icon: <ShieldCheck size={20} />, title: "Identity Data", items: ["Name", "Job Title", "Organizational Affiliation"] },
                                        { icon: <Database size={20} />, title: "Contact Data", items: ["Email Address", "Telephone Number"] },
                                        { icon: <Lock size={20} />, title: "Assessment Data", items: ["Gallup CliftonStrengths", "Hogan Assessments", "Everything DiSC®"] },
                                        { icon: <Eye size={20} />, title: "Engagement Data", items: ["Coaching Sessions", "Team Workshops", "Consulting Interventions"] }
                                    ].map((cat, i) => (
                                        <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-teal/30 transition-colors group">
                                            <div className="text-teal mb-4 group-hover:scale-110 transition-transform">{cat.icon}</div>
                                            <h4 className="font-black text-white text-sm uppercase tracking-widest mb-3">{cat.title}</h4>
                                            <ul className="space-y-2">
                                                {cat.items.map((item, j) => (
                                                    <li key={j} className="text-sm text-white/40 flex items-center">
                                                        <div className="w-1 h-1 bg-teal/40 rounded-full mr-2" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* 03 / Usage */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-start space-x-6">
                            <span className="font-mono text-skyBlue text-xs font-bold tracking-widest pt-2">03 / USAGE</span>
                            <div className="flex-1">
                                <h2 className="text-skyBlue text-3xl font-black mb-6 tracking-tight uppercase">Operational Purpose</h2>
                                <p className="text-white/40 mb-8 italic">Your data is used strictly to deliver our "Diagnostic Before Prescriptive" approach:</p>
                                <ul className="space-y-6">
                                    {[
                                        "To provide personalized leadership and team coaching.",
                                        "To generate strategic self-awareness through behavioral profiles.",
                                        "To measure the effectiveness and ROI of our training interventions.",
                                        "To communicate regarding scheduled consultations or requested resources."
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start space-x-4">
                                            <span className="text-teal font-mono text-[10px] pt-1">[{i + 1}]</span>
                                            <span className="text-lg text-white/70 font-light">{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    {/* 04 / Data Sharing - Teal Border Box */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="flex items-start space-x-6">
                            <span className="font-mono text-skyBlue text-xs font-bold tracking-widest pt-2">04 / EXTERNAL</span>
                            <div className="flex-1">
                                <div className="p-10 md:p-16 rounded-[4rem] border border-teal/30 bg-white/5 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-teal/5 rounded-full -mr-16 -mt-16 group-hover:bg-teal/10 transition-all" />
                                    <h2 className="text-skyBlue text-3xl font-black mb-8 tracking-tight uppercase">Data Sharing & Protocols</h2>
                                    <p className="text-lg leading-relaxed font-light text-white/60 mb-10">
                                        We do not sell your data. However, as an accredited practitioner, we utilize globally benchmarked third-party platforms to administer assessments. Your data may be processed through:
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        {[
                                            { name: "Gallup", purpose: "CliftonStrengths assessments" },
                                            { name: "Hogan Assessment Systems", purpose: "Personality and derailer insights" },
                                            { name: "Wiley", purpose: "Everything DiSC® and The Five Behaviors®" }
                                        ].map((tool, i) => (
                                            <div key={i} className="bg-navy p-6 rounded-3xl border border-white/5 group-hover:border-white/10 transition-all">
                                                <h4 className="font-black text-teal text-xs uppercase tracking-[0.2em] mb-3">{tool.name}</h4>
                                                <p className="text-sm text-white/40 leading-relaxed italic">{tool.purpose}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* 05 / Security */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-start space-x-6">
                            <span className="font-mono text-skyBlue text-xs font-bold tracking-widest pt-2">05 / SECURITY</span>
                            <div className="flex-1">
                                <h2 className="text-skyBlue text-3xl font-black mb-6 tracking-tight uppercase">Confidentiality Core</h2>
                                <p className="text-lg leading-relaxed font-light text-white/60">
                                    Confidentiality is a core pillar of our commitment to results. We implement appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way.
                                </p>
                            </div>
                        </div>
                    </motion.section>

                    {/* 06 / Legal Rights */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-start space-x-6">
                            <span className="font-mono text-skyBlue text-xs font-bold tracking-widest pt-2">06 / RIGHTS</span>
                            <div className="flex-1">
                                <h2 className="text-skyBlue text-3xl font-black mb-6 tracking-tight uppercase">Subject Rights</h2>
                                <p className="text-lg leading-relaxed font-light text-white/60">
                                    You have the right to request access to your personal data, request correction of any inaccuracies, or request the erasure of your data, subject to certain legal or contractual obligations related to our consulting engagements.
                                </p>
                            </div>
                        </div>
                    </motion.section>

                    {/* 07 / Contact Us */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-start space-x-6">
                            <span className="font-mono text-skyBlue text-xs font-bold tracking-widest pt-2">07 / CONTACT</span>
                            <div className="flex-1">
                                <h2 className="text-skyBlue text-3xl font-black mb-10 tracking-tight uppercase">Data Controller</h2>
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-teal">
                                            <ShieldCheck size={18} />
                                        </div>
                                        <span className="font-bold text-sm tracking-widest uppercase text-white">Ian Kishander</span>
                                    </div>
                                    <a
                                        href="mailto:ian@metahr.co.in"
                                        className="flex items-center space-x-4 group hover:translate-x-2 transition-transform"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-white transition-all">
                                            <Mail size={18} />
                                        </div>
                                        <span className="font-bold text-sm tracking-widest uppercase text-white/60 group-hover:text-white transition-colors">ian@metahr.co.in</span>
                                    </a>
                                    <a
                                        href="tel:+918296049787"
                                        className="flex items-center space-x-4 group hover:translate-x-2 transition-transform"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-white transition-all">
                                            <Phone size={18} />
                                        </div>
                                        <span className="font-bold text-sm tracking-widest uppercase text-white/60 group-hover:text-white transition-colors">+91 82960 49787</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                </div>

                {/* Decorative Elements */}
                <div className="fixed top-0 right-0 w-1/2 h-screen bg-teal/5 pointer-events-none -z-10 blur-[120px]" />
            </div>
        </div>
    );
};

export default Privacy;
