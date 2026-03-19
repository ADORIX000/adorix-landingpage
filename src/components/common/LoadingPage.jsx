import React, { useEffect, useState } from 'react';

const LoadingPage = ({ fullScreen = true, text = "System ready!" }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(p => {
                if (p >= 100) return 0; // loops or stays depending on use
                return p + Math.random() * 5 + 1;
            });
        }, 150); // fast nostalgic terminal feel
        return () => clearInterval(interval);
    }, []);

    const displayProgress = Math.min(100, Math.floor(progress));
    const totalSegments = 20;
    const filledSegments = Math.round((displayProgress / 100) * totalSegments);

    return (
        <div className={`relative flex flex-col items-center justify-center overflow-hidden font-mono ${fullScreen ? 'min-h-screen bg-[#050B0C]' : 'h-full w-full py-16'}`}>
            <div className="flex flex-col items-start gap-3">
                {/* Terminal Text */}
                <div className="text-[#12B2C1] text-base sm:text-lg font-bold tracking-widest drop-shadow-[0_0_8px_rgba(18,178,193,0.8)]">
                    {'>'} {text} {displayProgress}%
                </div>

                {/* Segmented Progress Bar */}
                <div className="flex gap-1 sm:gap-1.5">
                    {[...Array(totalSegments)].map((_, i) => (
                        <div
                            key={i}
                            className={`w-2 h-6 sm:w-2.5 sm:h-8 transition-all duration-75 ${i < filledSegments
                                ? 'bg-[#12B2C1] shadow-[0_0_12px_rgba(18,178,193,0.9)]'
                                : 'border-[1px] border-[#12B2C1]/30 bg-transparent'
                                }`}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Blinking Cursor */}
            <div className="absolute bottom-8 left-8 hidden sm:block">
                <div className="w-2 h-4 bg-[#12B2C1] animate-[pulse_1s_ease-in-out_infinite]"></div>
            </div>
        </div>
    );
};

export default LoadingPage;
