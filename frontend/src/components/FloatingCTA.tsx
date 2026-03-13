import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, MessageSquare, Calendar, Bot } from 'lucide-react';
import { useState, useEffect } from 'react';

const FloatingCTA = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const toggleEeAn = () => {
        setIsExpanded(false);
        window.dispatchEvent(new CustomEvent('toggle-eean-chat'));
    };

    const actions = [
        {
            icon: <Calendar size={20} />,
            label: "Book Strategy Session",
            href: "/contact",
            color: "bg-teal"
        },
        {
            icon: <MessageSquare size={20} />,
            label: "WhatsApp Chat",
            href: "https://wa.me/919187651277",
            color: "bg-green-500",
            external: true
        },
        {
            icon: <Bot size={20} />,
            label: "Ee-an AI Chat",
            onClick: toggleEeAn,
            color: "bg-navy"
        }
    ];

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            <AnimatePresence>
                {isVisible && (
                    <div className="flex flex-col items-end space-y-4">
                        {/* Action List */}
                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 20, scale: 0.8 }}
                                    className="flex flex-col items-end space-y-3 mb-2"
                                >
                                    {actions.map((action, i) => (
                                        action.href ? (
                                            <a
                                                key={i}
                                                href={action.href}
                                                target={action.external ? "_blank" : "_self"}
                                                rel={action.external ? "noopener noreferrer" : ""}
                                                className={`flex items-center space-x-3 px-6 py-3 rounded-full text-white shadow-2xl transition-all hover:scale-110 active:scale-95 ${action.color}`}
                                            >
                                                <span className="text-xs font-black uppercase tracking-widest">{action.label}</span>
                                                {action.icon}
                                            </a>
                                        ) : (
                                            <button
                                                key={i}
                                                onClick={action.onClick}
                                                className={`flex items-center space-x-3 px-6 py-3 rounded-full text-white shadow-2xl transition-all hover:scale-110 active:scale-95 ${action.color}`}
                                            >
                                                <span className="text-xs font-black uppercase tracking-widest">{action.label}</span>
                                                {action.icon}
                                            </button>
                                        )
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Main Toggle Button */}
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsExpanded(!isExpanded)}
                            className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-[0_20px_50px_rgba(86,124,141,0.3)] transition-all duration-500 ${isExpanded ? 'bg-navy rotate-90' : 'bg-teal'}`}
                            aria-label="Contact MetaHR"
                        >
                            {isExpanded ? <X size={28} /> : <Phone size={28} />}
                            {!isExpanded && (
                                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white"></span>
                                </span>
                            )}
                        </motion.button>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FloatingCTA;
