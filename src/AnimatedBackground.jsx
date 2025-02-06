import React from 'react';
import { motion } from 'framer-motion';

const circles = [
    { size: 300, top: '10%', left: '20%', bg: 'bg-yellow-200', duration: 8 },
    { size: 400, top: '40%', left: '60%', bg: 'bg-yellow-300', duration: 10 },
    { size: 250, top: '70%', left: '10%', bg: 'bg-yellow-400', duration: 12 },
    { size: 350, top: '30%', left: '80%', bg: 'bg-yellow-200', duration: 9 },
];

const AnimatedBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden z-0">
            {circles.map((circle, index) => (
                <motion.div
                    key={index}
                    className={`${circle.bg} rounded-full opacity-50`}
                    style={{
                        width: circle.size,
                        height: circle.size,
                        top: circle.top,
                        left: circle.left,
                        position: 'absolute',
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.3, 0.5],
                    }}
                    transition={{
                        duration: circle.duration,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatType: 'mirror',
                    }}
                />
            ))}
        </div>
    );
};

export default AnimatedBackground;
