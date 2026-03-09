import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, CheckCircle, Globe } from 'lucide-react';
import FAQ from '../components/FAQ';

const LocationService = () => {
    const { city, service } = useParams();

    // Capitalize and format city/service names
    const cityName = city?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'India';
    const serviceName = service?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'Leadership Development';

    useEffect(() => {
        document.title = `${serviceName} in ${cityName} | MetaHR ${cityName}`;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute("content", `Premium ${serviceName} solutions in ${cityName}. We help ${cityName} organizations transform their leadership and culture with data-driven HR interventions.`);
    }, [cityName, serviceName]);

    const faqs = [
        {
            question: `Is MetaHR available for in-person workshops in ${cityName}?`,
            answer: `Yes, MetaHR provides premium in-person leadership and team development workshops in ${cityName}, serving local enterprises and global captive centers with benchmarked wisdom.`
        },
        {
            question: `How does MetaHR support organizations in ${cityName}?`,
            answer: `We specialize in helping ${cityName}-based companies align their people strategy with business execution through data-driven diagnose tools like Hogan and DiSC.`
        },
        {
            question: `What is the pricing for ${serviceName} in ${cityName}?`,
            answer: `Our pricing is investment-based and depends on the scope of the intervention. We offer a free 30-minute strategy session to map out your specific needs in the ${cityName} market.`
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-navy pt-40 pb-24 relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="flex items-center justify-center space-x-3 mb-6">
                        <MapPin size={16} className="text-teal" />
                        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase">Regional_Hub // {cityName}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter leading-tight">
                        {serviceName} <br /><span className="font-serif italic text-teal">In {cityName}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/50 font-light max-w-4xl mx-auto leading-relaxed">
                        Transforming high-potential talent into strategic leaders for {cityName}'s top-tier enterprises. Grounded in globally benchmarked methodologies.
                    </p>
                </div>
            </section>

            {/* Local Context Section */}
            <section className="py-24 bg-beige/30">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-teal uppercase mb-4 block">Market_Context // {cityName}</span>
                            <h2 className="text-3xl md:text-5xl font-black text-navy mb-8 tracking-tighter">Empowering {cityName}'s <br /><span className="text-teal font-serif italic">Leadership Pipeline.</span></h2>
                            <p className="text-lg text-navy/60 leading-relaxed mb-8">
                                As a key business hub, {cityName} requires leaders who can navigate complex organizational structures and drive performance in an increasingly competitive market. MetaHR brings globally recognized tools to your doorstep.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    "Hyper-localized industry expertise",
                                    "On-ground facilitation for ${cityName} teams",
                                    "Global benchmarks adapted for Indian culture",
                                    "Measurable ROI on every intervention"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-3 text-navy font-bold">
                                        <CheckCircle size={18} className="text-teal" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-teal/10 rounded-[4rem] rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
                            <div className="relative w-full aspect-square bg-navy rounded-[3.5rem] overflow-hidden shadow-2xl">
                                <img
                                    src={`https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&q=80&w=800`}
                                    alt={`${serviceName} in ${cityName}`}
                                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <div className="flex items-center space-x-4 mb-2">
                                        <Globe size={14} className="text-teal" />
                                        <span className="text-[9px] font-mono font-bold uppercase tracking-widest">Global_Capability</span>
                                    </div>
                                    <p className="text-sm font-light opacity-80">Serving high-growth organizations across {cityName}.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Local FAQ Section */}
            <FAQ items={faqs} title={`Common Questions in ${cityName}`} />

            {/* Global CTA */}
            <section className="py-32 bg-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-black text-navy mb-10 tracking-tighter">Ready to Scale in <span className="text-teal font-serif italic">{cityName}?</span></h2>
                    <Link to="/contact" className="inline-flex items-center space-x-4 bg-teal text-white px-12 py-6 rounded-full font-black text-sm uppercase tracking-[0.2em] shadow-2xl hover:bg-navy hover:-translate-y-1 transition-all duration-300">
                        <span>Book Your Strategy Call</span>
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default LocationService;
