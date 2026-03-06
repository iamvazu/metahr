import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
    className?: string;
    color?: string;
}

const ScrollIndicator = ({ className = "", color = "white" }: ScrollIndicatorProps) => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className={`flex flex-col items-center ${className}`}
        >
            <div className={`w-6 h-10 border-2 rounded-full flex justify-center p-1 ${color === 'white' ? 'border-white/20' : 'border-navy/20'}`}>
                <motion.div 
                    animate={{ y: [0, 12, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-1 h-2 bg-teal rounded-full"
                />
            </div>
            <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="mt-2"
            >
                <ChevronDown size={20} className={color === 'white' ? 'text-white/20' : 'text-navy/20'} />
            </motion.div>
        </motion.div>
    );
};

export default ScrollIndicator;
