import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-navy text-white pt-24 pb-12 rounded-t-[4rem] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-4 gap-16 mb-20">
                    <div className="col-span-2">
                        <Link to="/" className="text-4xl font-black tracking-tighter mb-8 block">
                            MetaHR
                        </Link>
                        <p className="text-white/40 text-lg max-w-sm mb-10 leading-relaxed font-light">
                            Beyond Policies. Beyond Processes. Strategically aligning people, culture, and business objectives for sustainable organizational excellence.
                        </p>
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-[10px] font-mono font-bold tracking-widest text-white/40 uppercase">System_Operational</span>
                            </div>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-teal hover:text-white transition-all transform hover:scale-110">
                                    <Linkedin size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-teal hover:text-white transition-all transform hover:scale-110">
                                    <Mail size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-mono font-bold tracking-[0.3em] text-teal uppercase mb-8">Navigation</h4>
                        <ul className="space-y-4 text-white/40 font-medium">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
                            <li><Link to="/resources" className="hover:text-white transition-colors">Resources</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-mono font-bold tracking-[0.3em] text-teal uppercase mb-8">Direct_Comm</h4>
                        <ul className="space-y-4 text-white/40">
                            <li className="flex items-center space-x-3 group cursor-pointer">
                                <Mail size={16} className="text-teal group-hover:scale-110 transition-transform" />
                                <span className="group-hover:text-white transition-colors">ian@metahr.co.in</span>
                            </li>
                            <li className="flex items-center space-x-3 group cursor-pointer">
                                <Phone size={16} className="text-teal group-hover:scale-110 transition-transform" />
                                <span className="group-hover:text-white transition-colors">+91 82960 49787</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-white/20 text-[10px] font-mono tracking-widest uppercase">
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                        <p>© 2024 MetaHR. All rights reserved.</p>
                        <div className="flex space-x-6">
                            <Link to="/terms" className="hover:text-teal transition-colors hover:-translate-y-[1px] transform">Terms_of_Service</Link>
                            <Link to="/privacy" className="hover:text-teal transition-colors hover:-translate-y-[1px] transform">Privacy_Policy</Link>
                        </div>
                    </div>
                    <div className="flex space-x-8 mt-6 md:mt-0">
                        <span>26 Years of Excellence</span>
                        <span className="italic font-serif normal-case tracking-normal text-sm">Maximize Potential. Elevate Organizations.</span>
                    </div>
                </div>
            </div>
            {/* Decorative Pulse Background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
        </footer>
    );
};

export default Footer;
