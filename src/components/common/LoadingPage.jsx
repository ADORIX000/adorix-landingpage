import React from 'react';

const LoadingPage = ({ fullScreen = true, text = "Loading" }) => {
    return (
        <div className={`relative flex flex-col items-center justify-center overflow-hidden ${fullScreen ? 'min-h-screen bg-adorix-light' : 'h-full w-full py-12'} transition-opacity duration-300`}>

            <style>{`
                .ambient-glow {
                    position: absolute; width: 400px; height: 400px;
                    background: radial-gradient(circle, rgba(18,178,193,0.1) 0%, rgba(229,249,248,0) 70%);
                    animation: pulse-ambient 4s ease-in-out infinite alternate;
                    pointer-events: none;
                }
                @keyframes pulse-ambient {
                    0% { transform: scale(0.8); opacity: 0.5; }
                    100% { transform: scale(1.5); opacity: 1; }
                }

                .ripple-container {
                    position: relative; width: 100px; height: 100px;
                    display: flex; justify-content: center; align-items: center;
                    margin-bottom: 2.5rem;
                }

                .ripple-core {
                    position: relative; z-index: 10;
                    width: 18px; height: 18px;
                    background: #0A7383;
                    border-radius: 50%;
                    animation: core-pulse 2s ease-in-out infinite alternate;
                    box-shadow: 0 0 10px rgba(10, 115, 131, 0.4);
                }

                .ripple-ring {
                    position: absolute; border-radius: 50%;
                    border: 2px solid rgba(18, 178, 193, 0.8);
                    opacity: 0;
                    animation: ripple-expand 3s cubic-bezier(0.1, 0.8, 0.3, 1) infinite;
                }
                .ripple-ring:nth-child(2) { animation-delay: 1s; }
                .ripple-ring:nth-child(3) { animation-delay: 2s; }

                @keyframes ripple-expand {
                    0% { width: 18px; height: 18px; opacity: 1; border-width: 3px; }
                    100% { width: 120px; height: 120px; opacity: 0; border-width: 0px; }
                }

                @keyframes core-pulse {
                    0% { transform: scale(1); box-shadow: 0 0 10px rgba(10, 115, 131, 0.4); }
                    100% { transform: scale(1.3); box-shadow: 0 0 20px rgba(18, 178, 193, 0.8); }
                }

                .premium-bar-fill {
                    animation: smooth-scan 2.5s ease-in-out infinite alternate;
                }
                @keyframes smooth-scan {
                    0% { transform: translateX(0); width: 10%; opacity: 0.5; }
                    100% { transform: translateX(120px); width: 40%; opacity: 1; }
                }
            `}</style>

            {/* Ambient Background Glow */}
            <div className="ambient-glow" />

            <div className="z-10 flex flex-col items-center">

                {/* Harmonic Ripple Spinner */}
                <div className="ripple-container">
                    <div className="ripple-ring"></div>
                    <div className="ripple-ring"></div>
                    <div className="ripple-ring"></div>
                    <div className="ripple-core"></div>
                </div>

                {/* Elegant SaaS Text Section */}
                <div className="flex flex-col items-center gap-3 relative">
                    <div className="text-adorix-dark font-[500] text-lg tracking-[0.3em] uppercase -mr-[0.3em] animate-[pulse_2s_ease-in-out_infinite_alternate]">
                        {text}
                    </div>

                    {/* Smooth Premium Progress Bar */}
                    <div className="w-40 h-[2px] bg-adorix-primary/10 rounded-full overflow-hidden relative">
                        <div className="premium-bar-fill h-full bg-gradient-to-r from-adorix-primary to-adorix-accent rounded-full"></div>
                    </div>

                    <div className="text-adorix-primary/70 text-[0.7rem] font-[600] tracking-[0.15em] uppercase -mr-[0.15em] animate-[pulse_2s_ease-in-out_infinite_alternate]">
                        Preparing workspace
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingPage;
