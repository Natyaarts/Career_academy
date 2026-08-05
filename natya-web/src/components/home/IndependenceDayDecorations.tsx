'use client';

export default function IndependenceDayDecorations() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-[1]">
            <style>{`
                @keyframes slowRotate {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes floatKite {
                    0% { transform: translateY(0px) rotate(5deg); }
                    50% { transform: translateY(-10px) rotate(-5deg); }
                    100% { transform: translateY(0px) rotate(5deg); }
                }
                .animate-slow-rotate {
                    animation: slowRotate 80s linear infinite;
                }
                .animate-float-kite {
                    animation: floatKite 6s ease-in-out infinite;
                }
            `}</style>

            {/* 1. Large, Extremely Subtle Ashoka Chakra Watermark in Background */}
            <div className="absolute top-[160vh] left-[-150px] md:left-[-200px] w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-[0.015] text-[#000080] animate-slow-rotate">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                    <circle cx="50" cy="50" r="46" strokeWidth="0.8" />
                    <circle cx="50" cy="50" r="44" strokeWidth="0.3" />
                    <circle cx="50" cy="50" r="8" strokeWidth="0.8" />
                    {/* 24 Spokes */}
                    {Array.from({ length: 24 }).map((_, i) => {
                        const angle = (i * 360) / 24;
                        const rad = (angle * Math.PI) / 180;
                        const x2 = 50 + 44 * Math.cos(rad);
                        const y2 = 50 + 44 * Math.sin(rad);
                        return (
                            <line
                                key={i}
                                x1="50"
                                y1="50"
                                x2={x2}
                                y2={y2}
                                strokeWidth="0.4"
                            />
                        );
                    })}
                </svg>
            </div>

            {/* 2. Small Kite Decoration in Top-Left (Visible as user scrolls past Hero) */}
            <div className="absolute top-[110vh] left-[5%] md:left-[8%] animate-float-kite opacity-40 md:opacity-50">
                <svg className="w-10 h-10 md:w-14 md:h-14 drop-shadow-lg" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Diamond Body */}
                    <path d="M50 10 L80 50 L50 90 L20 50 Z" fill="url(#kiteGrad1)" />
                    {/* Structure cross bars */}
                    <line x1="50" y1="10" x2="50" y2="90" stroke="white" strokeWidth="1.5" opacity="0.6" />
                    <path d="M20 50 Q50 35 80 50" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6" />
                    {/* Tail */}
                    <path d="M50 90 L42 100 L58 100 Z" fill="#128807" />
                    {/* Thread */}
                    <path d="M50 100 Q45 110 52 120" stroke="#FF9933" strokeWidth="1" fill="none" opacity="0.5" />
                    <defs>
                        <linearGradient id="kiteGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FF9933" />
                            <stop offset="50%" stopColor="#FFFFFF" />
                            <stop offset="100%" stopColor="#128807" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* 3. Small Kite Decoration in Bottom-Right */}
            <div className="absolute bottom-[10vh] right-[4%] md:right-[6%] [animation-delay:2s] animate-float-kite opacity-40 md:opacity-50">
                <svg className="w-8 h-8 md:w-12 md:h-12 drop-shadow-lg" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Diamond Body */}
                    <path d="M50 10 L80 50 L50 90 L20 50 Z" fill="url(#kiteGrad2)" />
                    {/* Structure cross bars */}
                    <line x1="50" y1="10" x2="50" y2="90" stroke="white" strokeWidth="1.5" opacity="0.6" />
                    <path d="M20 50 Q50 35 80 50" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6" />
                    {/* Tail */}
                    <path d="M50 90 L42 100 L58 100 Z" fill="#FF9933" />
                    {/* Thread */}
                    <path d="M50 100 Q55 110 48 120" stroke="#128807" strokeWidth="1" fill="none" opacity="0.5" />
                    <defs>
                        <linearGradient id="kiteGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#FF9933" />
                            <stop offset="50%" stopColor="#FFFFFF" />
                            <stop offset="100%" stopColor="#128807" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
}
