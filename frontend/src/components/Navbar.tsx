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
        {
            name: 'Solutions',
            path: '/solutions',
            dropdown: [
                { name: 'Leadership Development', path: '/services/leadership-development' },
                { name: 'Team Development', path: '/services/team-development' },
                { name: 'Executive Coaching', path: '/services/executive-coaching' },
                { name: 'Individual Development', path: '/services/individual-development' },
                { name: 'Organizational Effectiveness', path: '/services/organizational-effectiveness' },
            ]
        },
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
                    className="flex items-center transition-all duration-500 rounded-full"
                >
                    {/* Logo Area */}
                    <div className="flex-1 flex items-center pr-8">
                        <Link to="/" className="flex items-center space-x-2">
                            <img
                                src="/logo.png"
                                alt="MetaHR"
                                className={`h-10 w-auto object-contain transition-all duration-500 ${!scrolled ? 'brightness-0 invert' : ''}`}
                            />
                        </Link>
                    </div>

                    {/* Desktop Nav - Centered */}
                    <div className="flex max-md:hidden space-x-12 items-center px-8">
                        {navLinks.map((link) => (
                            <div key={link.path} className="relative group">
                                <Link
                                    to={link.path}
                                    className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:text-teal hover:-translate-y-[1px] whitespace-nowrap py-4 block ${scrolled
                                        ? (location.pathname.startsWith(link.path) && link.path !== '/' || location.pathname === '/' && link.path === '/' ? 'text-teal' : 'text-navy')
                                        : (location.pathname.startsWith(link.path) && link.path !== '/' || location.pathname === '/' && link.path === '/' ? 'text-teal' : 'text-white/80')
                                        }`}
                                >
                                    {link.name}
                                </Link>

                                {/* Dropdown Menu */}
                                {link.dropdown && (
                                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-72">
                                        <div className="bg-white rounded-3xl shadow-2xl border border-navy/5 p-4 flex flex-col space-y-2 relative before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-white">
                                            {link.dropdown.map(subItem => (
                                                <Link
                                                    key={subItem.path}
                                                    to={subItem.path}
                                                    className={`text-sm font-bold tracking-tight px-4 py-3 rounded-2xl transition-all whitespace-normal leading-snug ${location.pathname === subItem.path
                                                        ? 'bg-beige/50 text-teal'
                                                        : 'text-navy hover:bg-beige/30 hover:text-teal'
                                                        }`}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Area */}
                    <div className="flex-1 flex items-center justify-end pl-8">
                        <Link
                            to="/contact"
                            className={`inline-block max-md:hidden px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:scale-[1.03] active:scale-95 whitespace-nowrap ${scrolled ? 'bg-navy text-white hover:bg-teal' : 'bg-white text-navy hover:bg-teal hover:text-white'
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
                        className="absolute top-full left-6 right-6 mt-4 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl md:hidden border border-navy/5 max-h-[80vh] overflow-y-auto"
                    >
                        <div className="flex flex-col p-8 space-y-6">
                            {navLinks.map((link) => (
                                <div key={link.path} className="flex flex-col border-b border-navy/5 pb-4 last:border-0">
                                    <Link
                                        to={link.path}
                                        className={`text-lg font-bold tracking-tight ${location.pathname === link.path ? 'text-teal' : 'text-navy'}`}
                                        onClick={() => !link.dropdown && setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>

                                    {link.dropdown && (
                                        <div className="flex flex-col space-y-3 mt-4 ml-4">
                                            {link.dropdown.map(subItem => (
                                                <Link
                                                    key={subItem.path}
                                                    to={subItem.path}
                                                    className={`text-sm font-medium tracking-tight ${location.pathname === subItem.path
                                                        ? 'text-teal'
                                                        : 'text-navy/60 hover:text-teal'
                                                        }`}
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Link
                                to="/contact"
                                className="bg-navy text-white px-6 py-4 rounded-2xl text-center font-black uppercase tracking-widest text-sm mt-4"
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
