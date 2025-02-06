import React, { useRef, useState } from 'react';

const VideoPlayer = ({ src }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const current = videoRef.current.currentTime;
            const duration = videoRef.current.duration;
            setProgress((current / duration) * 100);
        }
    };

    return (
        <div className="relative bg-black rounded overflow-hidden">
            <video
                ref={videoRef}
                src={src}
                onTimeUpdate={handleTimeUpdate}
                className="w-full h-auto object-cover"
                controls={false}
            />
            {/* Custom Play/Pause Button */}
            <button
                onClick={togglePlay}
                className="absolute bottom-16 left-6 bg-yellow-500 rounded-full p-3 shadow-md hover:bg-yellow-600 transition"
            >
                {isPlaying ? (
                    // Pause Icon
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                    </svg>
                ) : (
                    // Play Icon
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-5.197-3.028A1 1 0 008 9.028v5.944a1 1 0 001.555.832l5.197-3.028a1 1 0 000-1.664z" />
                    </svg>
                )}
            </button>
            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-700">
                <div
                    className="h-full bg-yellow-500"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default VideoPlayer;
