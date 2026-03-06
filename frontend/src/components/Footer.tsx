import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-navy text-white pt-24 pb-12 rounded-t-[4rem] relative overflow-hidden group">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
                <img src="/business_reality_quote_bg.png" alt="" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/40 to-navy/70"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
                    <div className="col-span-2">
                        <Link to="/" className="mb-4 block inline-block transform hover:scale-105 transition-transform">
                            <img src="/logo_white.png" alt="MetaHR" className="h-16 md:h-20 w-auto object-contain" />
                        </Link>
                        <p className="text-white/70 text-lg max-w-sm mb-10 leading-relaxed font-light">
                            Beyond Policies. Beyond Processes. Strategically aligning people, culture, and business objectives for sustainable organizational excellence.
                        </p>
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2 px-4 py-2 rounded-full border border-white/20 bg-white/10">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-[10px] font-mono font-bold tracking-widest text-teal uppercase">System_Operational</span>
                            </div>
                            <div className="flex space-x-4">
                                <a href="https://www.linkedin.com/in/ian-kishander-04007ba6/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-teal hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-xl">
                                    <Linkedin size={20} />
                                </a>
                                <a href="mailto:info@metahr.co.in" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-teal hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-xl">
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-mono font-black tracking-[0.4em] text-teal uppercase mb-8">Navigation</h4>
                        <ul className="space-y-4 text-white/60 font-bold">
                            <li><Link to="/about" className="hover:text-white transition-all hover:translate-x-1 inline-block">About Us</Link></li>
                            <li><Link to="/solutions" className="hover:text-white transition-all hover:translate-x-1 inline-block">Solutions</Link></li>
                            <li><Link to="/resources" className="hover:text-white transition-all hover:translate-x-1 inline-block">Resources</Link></li>
                            <li><Link to="/blog" className="hover:text-white transition-all hover:translate-x-1 inline-block">Blog</Link></li>
                            <li><Link to="/faq" className="hover:text-white transition-all hover:translate-x-1 inline-block">FAQ</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-all hover:translate-x-1 inline-block">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-mono font-black tracking-[0.4em] text-teal uppercase mb-8">Services</h4>
                        <ul className="space-y-4 text-white/60 font-bold text-sm">
                            <li><Link to="/services/leadership-development" className="hover:text-white transition-all hover:translate-x-1 inline-block text-[12px]">Leadership Development</Link></li>
                            <li><Link to="/services/team-development" className="hover:text-white transition-all hover:translate-x-1 inline-block text-[12px]">Team Development</Link></li>
                            <li><Link to="/services/executive-coaching" className="hover:text-white transition-all hover:translate-x-1 inline-block text-[12px]">Executive Coaching</Link></li>
                            <li><Link to="/services/individual-development" className="hover:text-white transition-all hover:translate-x-1 inline-block text-[12px]">Individual Development</Link></li>
                            <li><Link to="/services/organizational-effectiveness" className="hover:text-white transition-all hover:translate-x-1 inline-block text-[12px]">Organizational Effectiveness</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-mono font-black tracking-[0.4em] text-teal uppercase mb-8">Locations</h4>
                        <ul className="space-y-4 text-white/60 font-bold text-sm">
                            {['Mumbai', 'Delhi NCR', 'Bangalore', 'Hyderabad', 'Pune', 'Chennai'].map(city => (
                                <li key={city}>
                                    <Link to={`/locations/${city.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-all hover:translate-x-1 inline-block text-[12px]">
                                        {city}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-mono font-black tracking-[0.4em] text-teal uppercase mb-8">Direct_Comm</h4>
                        <ul className="space-y-4 text-white/60 font-black text-sm">
                            <li className="flex items-center space-x-3 group cursor-pointer transition-colors hover:text-white">
                                <Mail size={16} className="text-teal group-hover:scale-110 transition-transform shrink-0" />
                                <a href="mailto:info@metahr.co.in" className="break-all font-mono text-[11px]">info@metahr.co.in</a>
                            </li>
                            <li className="flex items-center space-x-3 group cursor-pointer transition-colors hover:text-white">
                                <Phone size={16} className="text-teal group-hover:scale-110 transition-transform shrink-0" />
                                <a href="tel:+919187651277" className="font-mono text-[11px]">+91 91876 51277</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center text-white/40 text-[10px] font-mono font-black tracking-[0.2em] uppercase">
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                        <p>© 2026 MetaHR. All rights reserved.</p>
                        <div className="flex space-x-6 items-center">
                            <Link to="/terms" className="hover:text-white transition-colors hover:-translate-y-[1px] transform">Terms_of_Service</Link>
                            <Link to="/privacy" className="hover:text-white transition-colors hover:-translate-y-[1px] transform">Privacy_Policy</Link>
                            <span className="text-teal">26 Years of Excellence</span>
                        </div>
                    </div>
                    <div className="flex space-x-8 mt-6 md:mt-0">
                        <span className="italic font-serif normal-case tracking-normal text-lg text-white/90">Maximize Potential. Elevate Organizations.</span>
                    </div>
                </div>
            </div>
            {/* Decorative Pulse Background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
        </footer>
    );
};

export default Footer;
