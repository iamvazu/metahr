import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Solutions', path: '/solutions' },
        { name: 'Resources', path: '/resources' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed w-full z-50 transition-all duration-500 pt-6">
            <div className="container mx-auto px-6 flex justify-center">
                <motion.div
                    initial={false}
                    animate={{
                        width: scrolled ? 'auto' : '100%',
                        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0)',
                        backdropFilter: scrolled ? 'blur(24px)' : 'blur(0px)',
                        padding: scrolled ? '0.75rem 2.5rem' : '0.5rem 2rem',
                        borderRadius: scrolled ? '9999px' : '0px',
                        border: scrolled ? '1px solid rgba(86, 124, 141, 0.2)' : '1px solid rgba(255, 255, 255, 0)',
                    }}
                    className="flex items-center transition-all duration-500 overflow-hidden"
                >
                    {/* Logo Area */}
                    <div className="flex-1 flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            <span className={`text-xl font-bold tracking-tighter transition-colors ${scrolled ? 'text-navy' : 'text-white'}`}>
                                MetaHR
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Nav - Centered */}
                    <div className="hidden md:flex space-x-12 items-center px-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:text-teal hover:-translate-y-[1px] whitespace-nowrap ${scrolled
                                    ? (location.pathname === link.path ? 'text-teal' : 'text-navy')
                                    : (location.pathname === link.path ? 'text-teal' : 'text-white/80')
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Area */}
                    <div className="flex-1 flex items-center justify-end">
                        <Link
                            to="/contact"
                            className={`hidden md:inline-block px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:scale-[1.03] active:scale-95 whitespace-nowrap ${scrolled ? 'bg-navy text-white hover:bg-teal' : 'bg-white text-navy hover:bg-teal hover:text-white'
                                }`}
                        >
                            Get Started
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button className={`md:hidden ml-4 ${scrolled ? 'text-navy' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-6 right-6 mt-4 bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl md:hidden overflow-hidden border border-navy/5"
                    >
                        <div className="flex flex-col p-8 space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`text-lg font-bold tracking-tight ${location.pathname === link.path ? 'text-teal' : 'text-navy'
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className="bg-navy text-white px-6 py-4 rounded-2xl text-center font-black uppercase tracking-widest text-sm"
                                onClick={() => setIsOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
