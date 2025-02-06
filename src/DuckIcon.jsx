import React from 'react';
import { motion } from 'framer-motion';

const DuckIcon = () => {
    return (
        <motion.svg
            // A subtle vertical float animation
            initial={{ y: -5 }}
            animate={{ y: 5 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }}
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
            viewBox="0 0 64 64"
        >
            {/* Duck Body */}
            <path
                d="M20,30 C20,20 40,20 40,30 C40,40 20,40 20,30 Z"
                fill="#FDE047"
                stroke="#F59E0B"
                strokeWidth="2"
            />
            {/* Duck Head */}
            <circle
                cx="45"
                cy="25"
                r="7"
                fill="#FDE047"
                stroke="#F59E0B"
                strokeWidth="2"
            />
            {/* Duck Beak */}
            <path d="M52,25 L60,27 L52,29 Z" fill="#F59E0B" />
            {/* Duck Eye */}
            <circle cx="47" cy="23" r="1.5" fill="#000" />
        </motion.svg>
    );
};

export default DuckIcon;
