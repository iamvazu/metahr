import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Terms = () => {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <Link
                        to="/"
                        className="flex items-center space-x-2 text-navy/40 hover:text-teal transition-colors font-mono text-[10px] font-bold uppercase tracking-widest group"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        <span>[ Back_to_Home ]</span>
                    </Link>
                </motion.div>

                {/* Header */}
                <header className="mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-navy mb-6 tracking-tighter"
                    >
                        Terms of <span className="text-teal font-serif italic">Service.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-navy/40 font-mono font-bold text-xs tracking-[0.3em] uppercase"
                    >
                        Effective Date: February 21, 2026 // VERSION_2.1.0
                    </motion.p>
                </header>

                {/* Content */}
                <div className="space-y-16">
                    {/* Section 1 */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="prose prose-navy max-w-none"
                    >
                        <h2 className="text-teal font-black text-2xl mb-6 tracking-tight uppercase tracking-[0.1em]">1. Acceptance of Terms</h2>
                        <p className="text-navy/70 text-lg leading-relaxed font-light">
                            By accessing the website at <a href="https://www.metahr.co.in" className="text-navy font-bold hover:text-teal underline underline-offset-4 decoration-teal/20">www.metahr.co.in</a> or engaging in our consulting services, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. MetaHR provides strategic HR consulting, leadership development, and team coaching services designed to maximize organizational potential.
                        </p>
                    </motion.section>

                    {/* Section 2 */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-teal font-black text-2xl mb-6 tracking-tight uppercase tracking-[0.1em]">2. Scope of Services</h2>
                        <div className="space-y-8">
                            <div>
                                <h4 className="font-black text-navy text-sm uppercase tracking-widest mb-3">Strength-Based Leadership Development</h4>
                                <p className="text-navy/70 text-lg leading-relaxed font-light">Leveraging frameworks such as The Leadership Challenge® and Gallup CliftonStrengths.</p>
                            </div>
                            <div>
                                <h4 className="font-black text-navy text-sm uppercase tracking-widest mb-3">Cohesive Team Development</h4>
                                <p className="text-navy/70 text-lg leading-relaxed font-light">Utilizing The Five Behaviors® of a Cohesive Team and Everything DiSC®.</p>
                            </div>
                            <div>
                                <h4 className="font-black text-navy text-sm uppercase tracking-widest mb-3">HR Strategy & Organizational Effectiveness</h4>
                                <p className="text-navy/70 text-lg leading-relaxed font-light">Including talent acquisition strategy, performance management, and HR process optimization.</p>
                            </div>
                        </div>
                    </motion.section>

                    {/* Section 3 */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-teal font-black text-2xl mb-6 tracking-tight uppercase tracking-[0.1em]">3. Intellectual Property</h2>
                        <p className="text-navy/70 text-lg leading-relaxed font-light">
                            All content, including the MetaHR logo, consulting methodologies (such as the "Three-Chord Tapestry"), and proprietary frameworks, are the intellectual property of MetaHR. Users are prohibited from reproducing, distributing, or utilizing these materials for commercial purposes without prior written consent.
                        </p>
                    </motion.section>

                    {/* Section 4 */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-teal font-black text-2xl mb-6 tracking-tight uppercase tracking-[0.1em]">4. Professional Standards and Accreditations</h2>
                        <p className="text-navy/70 text-lg leading-relaxed font-light italic border-l-4 border-teal/20 pl-8 ml-2">
                            MetaHR services are delivered by accredited practitioners holding credentials such as SHRM-SCP, Gallup Global Strengths Coach, and Hogan Assessments Certified Practitioner. While we utilize globally benchmarked tools, results are dependent on organizational engagement and implementation of the agreed-upon strategy.
                        </p>
                    </motion.section>

                    {/* Section 5 */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-teal font-black text-2xl mb-6 tracking-tight uppercase tracking-[0.1em]">5. Confidentiality</h2>
                        <p className="text-navy/70 text-lg leading-relaxed font-light">
                            We are committed to the highest standards of confidentiality, integrity, and results. Any organizational data, diagnostic results (e.g., Hogan or DiSC profiles), or stakeholder insights gathered during engagements are handled with strict professional discretion.
                        </p>
                    </motion.section>

                    {/* Section 6 */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-teal font-black text-2xl mb-6 tracking-tight uppercase tracking-[0.1em]">6. Limitation of Liability</h2>
                        <p className="text-navy/70 text-lg leading-relaxed font-light">
                            MetaHR provides strategic advice and facilitation. We do not assume liability for business decisions made by the client based on our recommendations. Our "Diagnostic Before Prescriptive" approach ensures solutions are realistic and relevant, but the final execution remains the responsibility of the client organization.
                        </p>
                    </motion.section>

                    {/* Section 7 */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-teal font-black text-2xl mb-6 tracking-tight uppercase tracking-[0.1em]">7. Governing Law</h2>
                        <p className="text-navy/70 text-lg leading-relaxed font-light">
                            These terms are governed by and construed in accordance with the laws applicable to the region of our primary operations, with disputes subject to the exclusive jurisdiction of the local courts.
                        </p>
                    </motion.section>

                    {/* Section 8 */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-navy p-12 rounded-[3rem] text-white shadow-3xl shadow-navy/20"
                    >
                        <h2 className="text-teal font-black text-2xl mb-10 tracking-tight uppercase tracking-[0.1em]">8. Contact Information</h2>
                        <div className="grid md:grid-cols-2 gap-10">
                            <div className="space-y-6">
                                <a
                                    href="mailto:ian@metahr.co.in"
                                    className="flex items-center space-x-4 group hover:-translate-y-1 transition-transform"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-teal">
                                        <Mail size={18} />
                                    </div>
                                    <span className="font-bold text-sm tracking-widest uppercase text-white/80 group-hover:text-white transition-colors">ian@metahr.co.in</span>
                                </a>
                                <a
                                    href="tel:+918296049787"
                                    className="flex items-center space-x-4 group hover:-translate-y-1 transition-transform"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-teal">
                                        <Phone size={18} />
                                    </div>
                                    <span className="font-bold text-sm tracking-widest uppercase text-white/80 group-hover:text-white transition-colors">+91 82960 49787</span>
                                </a>
                            </div>
                            <div className="flex flex-col justify-end">
                                <a
                                    href="https://linkedin.com/in/ian-kishander"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-4 group hover:-translate-y-1 transition-transform"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-teal">
                                        <Linkedin size={18} />
                                    </div>
                                    <span className="font-bold text-sm tracking-widest uppercase text-white/80 group-hover:text-white transition-colors">Ian Kishander</span>
                                </a>
                            </div>
                        </div>
                    </motion.section>
                </div>

                {/* Status Indicator at bottom of content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 pt-16 border-t border-navy/5 flex flex-col items-center"
                >
                    <div className="flex items-center space-x-3 px-6 py-3 rounded-full border border-navy/5 bg-beige/30">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-navy/40 uppercase">System_Status // Operational</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Terms;
