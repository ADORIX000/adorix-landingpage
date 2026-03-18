import React from 'react';

const LoadingPage = ({ fullScreen = true, text = "INITIALIZING" }) => {
    return (
        <div className={`relative flex flex-col items-center justify-center overflow-hidden ${fullScreen ? 'min-h-screen bg-adorix-light' : 'h-full w-full py-12'} transition-opacity duration-300`}>

            <style>{`
                .hud-container {
                    position: relative; width: 180px; height: 180px;
                    display: flex; justify-content: center; align-items: center;
                    margin-bottom: 3rem; transform: scale(1.1);
                }
                .hud-container::before {
                    content: ""; position: absolute; width: 100%; height: 100%;
                    background: radial-gradient(circle, rgba(18, 178, 193, 0.15) 0%, transparent 60%);
                    animation: hud-pulse 2s infinite alternate;
                }
                @keyframes hud-pulse { 0% { opacity: 0.5; transform: scale(0.9); } 100% { opacity: 1; transform: scale(1.2); } }

                .hud-outer-ring {
                    position: absolute; width: 160px; height: 160px;
                    border-radius: 50%; border: 2px dashed rgba(10, 115, 131, 0.4);
                    border-top: 2px solid #0A7383; border-bottom: 2px solid #0A7383;
                    animation: hud-spin-slow 12s linear infinite;
                    box-shadow: 0 0 15px rgba(10, 115, 131, 0.1) inset;
                }
                .hud-middle-ring {
                    position: absolute; width: 120px; height: 120px;
                    border-radius: 50%; border: 4px solid transparent;
                    border-left: 4px solid #12B2C1; border-right: 4px solid #12B2C1;
                    animation: hud-spin-fast 3s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
                    filter: drop-shadow(0 0 8px #12B2C1);
                }
                .hud-inner-crosshair {
                    position: absolute; width: 80px; height: 80px;
                    border-radius: 50%; border: 1px solid rgba(18, 178, 193, 0.5);
                    animation: hud-spin-reverse 8s linear infinite reverse;
                }
                .hud-inner-crosshair::before, .hud-inner-crosshair::after { content: ""; position: absolute; background: #0A7383; }
                .hud-inner-crosshair::before { top: 0; bottom: 0; left: 50%; width: 2px; transform: translateX(-50%); }
                .hud-inner-crosshair::after { left: 0; right: 0; top: 50%; height: 2px; transform: translateY(-50%); }

                .hud-core {
                    position: absolute; width: 20px; height: 20px;
                    background: radial-gradient(circle, #E5F9F8 0%, #12B2C1 40%, #0A7383 100%);
                    border-radius: 50%; z-index: 10;
                    box-shadow: 0 0 20px 5px rgba(18, 178, 193, 0.6);
                    animation: lock-on 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite alternate;
                }

                .hud-sensor {
                    position: absolute; width: 140px; height: 140px;
                    animation: hud-spin-fast 4s linear infinite;
                }
                .hud-sensor::after {
                    content: ""; position: absolute; width: 12px; height: 12px;
                    background: #E5F9F8; border: 2px solid #0A7383; border-radius: 50%;
                    top: -6px; left: 50%; transform: translateX(-50%);
                    box-shadow: 0 0 10px #0A7383;
                }

                @keyframes hud-spin-slow { 100% { transform: rotate(360deg); } }
                @keyframes hud-spin-fast { 100% { transform: rotate(360deg); } }
                @keyframes hud-spin-reverse { 100% { transform: rotate(-360deg); } }
                @keyframes lock-on {
                    0% { transform: scale(0.8); background: #12B2C1; box-shadow: 0 0 10px rgba(18, 178, 193, 0.4); }
                    100% { transform: scale(1.4); background: #0A7383; box-shadow: 0 0 30px rgba(10, 115, 131, 0.9); }
                }

                .hud-title { position: relative; }
                .hud-title::before, .hud-title::after {
                    content: "${text}"; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                    background: #E5F9F8; opacity: 0.8;
                }
                .hud-title::before { left: 2px; text-shadow: -2px 0 #12B2C1; animation: glitch-anim-1 2s infinite linear alternate-reverse; }
                .hud-title::after { left: -2px; text-shadow: -2px 0 #0A7383; animation: glitch-anim-2 3s infinite linear alternate-reverse; }
                @keyframes glitch-anim-1 { 0% { clip-path: inset(20% 0 80% 0); } 20% { clip-path: inset(60% 0 10% 0); } 40% { clip-path: inset(40% 0 50% 0); } 60% { clip-path: inset(80% 0 5% 0); } 80% { clip-path: inset(10% 0 70% 0); } 100% { clip-path: inset(30% 0 20% 0); } }
                @keyframes glitch-anim-2 { 0% { clip-path: inset(10% 0 60% 0); } 20% { clip-path: inset(30% 0 20% 0); } 40% { clip-path: inset(70% 0 10% 0); } 60% { clip-path: inset(5% 0 80% 0); } 80% { clip-path: inset(50% 0 30% 0); } 100% { clip-path: inset(80% 0 5% 0); } }

                .hud-decode-segment {
                    flex: 1; height: 100%; background: #0A7383; opacity: 0.2;
                    animation: decode-flash 0.5s infinite alternate;
                }
                .hud-decode-segment:nth-child(2n) { animation-delay: 0.3s; animation-duration: 0.8s; }
                .hud-decode-segment:nth-child(3n) { animation-delay: 0.1s; animation-duration: 0.4s; }
                .hud-decode-segment:nth-child(5n) { animation-delay: 0.5s; animation-duration: 0.6s; }
                @keyframes decode-flash { 0% { opacity: 0.1; box-shadow: none; } 100% { opacity: 1; background: #12B2C1; box-shadow: 0 0 8px #12B2C1; } }
            `}</style>

            <div className="z-10 flex flex-col items-center">

                {/* HUD Cybercore */}
                <div className="hud-container">
                    <div className="hud-outer-ring"></div>
                    <div className="hud-middle-ring"></div>
                    <div className="hud-inner-crosshair"></div>
                    <div className="hud-sensor"></div>
                    <div className="hud-core"></div>
                </div>

                {/* Advanced Tech Typograpy */}
                <div className="flex flex-col items-center gap-2 relative">
                    <div className="hud-title text-adorix-dark font-[900] text-[1.4rem] tracking-[0.5em] uppercase -mr-[0.5em] drop-shadow-[0px_0px_8px_rgba(18,178,193,0.5)]">
                        {text}
                    </div>

                    {/* Decoding Data Streams Bar */}
                    <div className="w-[220px] h-[4px] flex gap-[2px] mt-2 bg-transparent">
                        {[...Array(16)].map((_, i) => (
                            <div key={i} className="hud-decode-segment"></div>
                        ))}
                    </div>

                    <div className="text-adorix-primary mt-2 text-[0.75rem] font-[700] tracking-[0.3em] uppercase -mr-[0.3em] animate-[pulse_1s_ease-in-out_infinite_alternate]">
                        Acquiring Target Data Streams...
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingPage;
