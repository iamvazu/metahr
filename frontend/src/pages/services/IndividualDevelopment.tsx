import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const IndividualDevelopment = () => {
    return (
        <div className="bg-white pt-0">
            {/* Hero Section */}
            <section className="bg-navy pt-40 pb-24 relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-skyBlue/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">Service // Individual_Development</span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter leading-tight">
                        Build the Leaders Your <br /><span className="font-serif italic text-teal">Future Demands</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/50 font-light max-w-4xl mx-auto leading-relaxed">
                        Today’s emerging talent cannot be developed with yesterday’s training models.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-beige/30">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl border border-navy/5 relative overflow-hidden mb-20">
                        {/* Decorative image placeholder */}
                        <div className="w-full h-80 rounded-[3rem] overflow-hidden mb-12 shadow-xl bg-navy/5 relative">
                            <span className="absolute top-4 left-6 z-10 px-4 py-1.5 bg-black/40 backdrop-blur-md text-white text-[9px] font-mono font-bold tracking-widest uppercase rounded-full">Image Placement Area</span>
                            <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1600" alt="Talent Development" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                        </div>

                        <p className="text-xl text-navy/70 leading-relaxed font-light mb-12 border-l-4 border-teal pl-6 py-2">
                            At MetaHR, we design strengths-based development journeys inspired by Strengths-Based Leadership to prepare high-potential professionals for expanded responsibility, strategic thinking, and enterprise impact.
                        </p>

                        <h2 className="text-3xl md:text-5xl font-black text-navy mb-8 tracking-tighter">We combine science-backed assessments with <span className="text-teal font-serif italic">immersive experiential learning.</span></h2>
                        <p className="text-xl text-navy/60 leading-relaxed font-light mb-10">Our Integrated Development Approach Includes:</p>

                        <ul className="space-y-6 mb-16">
                            {[
                                "Strengths-based development grounded in insights from Gallup to amplify natural talent and build confidence",
                                "Behavioral awareness and adaptability using DiSC frameworks",
                                "Personality and potential insights from Hogan Assessments to identify motivators, values, and potential derailers",
                                "High-impact experiential learning simulations powered by MTa Learning to translate insight into behavior"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start space-x-4 bg-beige/30 p-6 rounded-3xl border border-navy/5">
                                    <div className="w-6 h-6 mt-1 rounded-full bg-teal text-white flex items-center justify-center shrink-0">
                                        <CheckCircle size={14} />
                                    </div>
                                    <span className="text-navy font-medium leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="bg-teal text-white rounded-[3rem] p-10 md:p-16 relative shadow-3xl overflow-hidden ring-1 ring-white/10">
                            {/* Decorative image placeholder inside outcomes */}
                            <div className="absolute left-0 bottom-0 w-1/3 h-full mix-blend-overlay opacity-30 hidden lg:block">
                                <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800" alt="Potential" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-2xl md:text-4xl font-black mb-10 tracking-tight">Participants Develop:</h3>
                            <div className="grid md:grid-cols-2 gap-6 relative z-10">
                                {[
                                    "Strategic thinking capability",
                                    "Executive communication presence",
                                    "Cross-functional collaboration skills",
                                    "Emotional intelligence & resilience",
                                    "Accountability and performance ownership"
                                ].map((outcome, i) => (
                                    <motion.div key={i} whileHover={{ x: 10 }} className="flex items-center space-x-4 font-bold tracking-tight text-white/90">
                                        <div className="text-white"><CheckCircle size={20} /></div>
                                        <span>{outcome}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="text-center max-w-4xl mx-auto py-12">
                        <p className="text-2xl text-navy/60 font-medium leading-relaxed mb-6">
                            This is not generic leadership training. <br />
                            <span className="text-navy font-black">It is a structured pipeline strategy to prepare high-potential talent for larger roles — faster and more sustainably.</span>
                        </p>
                        <h2 className="text-4xl md:text-5xl font-black text-navy mb-10 tracking-tighter">
                            At MetaHR, we don’t just develop individuals. <br /><span className="text-teal font-serif italic">We future-proof your leadership bench.</span>
                        </h2>
                        <p className="text-xl text-navy/60 leading-relaxed font-light mb-12">
                            Your future leaders are already in your organization.<br />
                            The question is — are they being prepared intentionally?
                        </p>

                        <Link to="/contact" className="inline-flex items-center space-x-4 bg-navy text-white px-12 py-6 rounded-full font-black text-sm uppercase tracking-[0.2em] shadow-2xl hover:bg-teal hover:-translate-y-1 transition-all duration-300">
                            <span>Design Your High-Potential Development Strategy</span>
                            <ArrowRight size={20} />
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default IndividualDevelopment;
