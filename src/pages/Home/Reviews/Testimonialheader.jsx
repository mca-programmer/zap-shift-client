import React from 'react';

const TestimonialHeader = () => {
    return (
        <div className="bg-gray-100 py-8 md:py-12 lg:py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
                {/* Delivery Truck and Boxes Illustration */}
                <div className="flex justify-center mb-2 md:mb-8">
                    <svg 
                        viewBox="0 0 200 80" 
                        fill="none" 
                        className="w-48 h-20 md:w-56 md:h-24 lg:w-64 lg:h-28"
                    >
                        {/* Hand Truck / Dolly */}
                        <g transform="translate(20, 10)">
                            {/* Handle */}
                            <path 
                                d="M15 5 L15 35" 
                                stroke="#0d9488" 
                                strokeWidth="2.5" 
                                strokeLinecap="round"
                            />
                            {/* Top horizontal bar */}
                            <path 
                                d="M10 8 L20 8" 
                                stroke="#0d9488" 
                                strokeWidth="2.5" 
                                strokeLinecap="round"
                            />
                            {/* Box on dolly */}
                            <rect 
                                x="8" 
                                y="20" 
                                width="14" 
                                height="12" 
                                rx="1" 
                                stroke="#0d9488" 
                                strokeWidth="2" 
                                fill="none"
                            />
                            <path 
                                d="M8 26 L22 26 M15 20 L15 32" 
                                stroke="#0d9488" 
                                strokeWidth="1.5"
                            />
                            {/* Base/plate */}
                            <path 
                                d="M5 40 L25 40" 
                                stroke="#0d9488" 
                                strokeWidth="2.5" 
                                strokeLinecap="round"
                            />
                            {/* Wheels */}
                            <circle 
                                cx="8" 
                                cy="43" 
                                r="4" 
                                stroke="#0d9488" 
                                strokeWidth="2" 
                                fill="none"
                            />
                            <circle 
                                cx="22" 
                                cy="43" 
                                r="4" 
                                stroke="#0d9488" 
                                strokeWidth="2" 
                                fill="none"
                            />
                        </g>

                        {/* Large Box in middle */}
                        <g transform="translate(70, 15)">
                            <rect 
                                x="0" 
                                y="0" 
                                width="28" 
                                height="24" 
                                rx="2" 
                                stroke="#0d9488" 
                                strokeWidth="2.5" 
                                fill="none"
                            />
                            {/* Box lines */}
                            <path 
                                d="M0 12 L28 12 M14 0 L14 24" 
                                stroke="#0d9488" 
                                strokeWidth="2"
                            />
                        </g>

                        {/* Stack of boxes on right */}
                        <g transform="translate(115, 12)">
                            {/* Bottom box */}
                            <rect 
                                x="0" 
                                y="15" 
                                width="26" 
                                height="18" 
                                rx="2" 
                                stroke="#0d9488" 
                                strokeWidth="2.5" 
                                fill="none"
                            />
                            <path 
                                d="M0 24 L26 24 M13 15 L13 33" 
                                stroke="#0d9488" 
                                strokeWidth="2"
                            />
                            
                            {/* Top box */}
                            <rect 
                                x="5" 
                                y="0" 
                                width="22" 
                                height="16" 
                                rx="2" 
                                stroke="#0d9488" 
                                strokeWidth="2.5" 
                                fill="none"
                            />
                            <path 
                                d="M5 8 L27 8 M16 0 L16 16" 
                                stroke="#0d9488" 
                                strokeWidth="2"
                            />
                        </g>

                        {/* Delivery path/line */}
                        <g>
                            <path 
                                d="M145 40 Q165 35 175 40" 
                                stroke="#0d9488" 
                                strokeWidth="2" 
                                fill="none"
                                strokeDasharray="3 3"
                            />
                            {/* Arrow at end */}
                            <path 
                                d="M175 40 L172 37 M175 40 L172 43" 
                                stroke="#0d9488" 
                                strokeWidth="2" 
                                strokeLinecap="round"
                            />
                        </g>
                    </svg>
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-teal-900 mb-3 md:mb-4">
                    What our customers are sayings
                </h2>

                {/* Description */}
                <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
                </p>
            </div>
        </div>
    );
};

export default TestimonialHeader;