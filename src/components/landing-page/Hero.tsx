'use client';

import { useEffect, useState } from 'react';

const HeroSection = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 9, hours: 10, minutes: 26, seconds: 19 });

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimeLeft((prevTime) => {
                let { days, hours, minutes, seconds } = prevTime;
                if (seconds > 0) seconds--;
                else {
                    seconds = 59;
                    if (minutes > 0) minutes--;
                    else {
                        minutes = 59;
                        if (hours > 0) hours--;
                        else {
                            hours = 23;
                            if (days > 0) days--;
                        }
                    }
                }
                return { days, hours, minutes, seconds };
            });
        }, 1000);
        return () => clearInterval(countdown);
    }, []);

    return (
        <section id="hero" className="relative pt-10 lg:pt-8 overflow-hidden">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hit.jpg"
                    alt="Professional business setting"
                    onError={(e) => (e.currentTarget.src = 'https://placehold.co/1600x900/0056b3/ffffff?text=ISCIRF+2025')}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800/90 to-blue-600/80 opacity-80"></div>
            </div>

            {/* Hero content */}
            <div className="max-container mx-auto px-4 md:px-6 relative z-10 py-16 md:py-20 lg:py-28 text-center">
                <div className="max-w-5xl mx-auto flex flex-col items-center">
                    <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-4">
                        <p className="text-white text-sm  font-medium">
                            April 9-10, 2025 • S.N. Bose Convention Centre, HIT, India
                        </p>
                    </div>

                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
                        International Symposium on <br />
                        <span className="text-blue-200">Computational Intelligence and Research Frontiers</span>
                    </h1>

                    <p className="text-base text-white/90 max-w-3xl mb-8 t">
                    <span className="text-yellow-300 font-bold">

                        Organized by {" "}
                    </span>
                        Department of COMPUTER SCIENCE AND
                        ENGINEERING(DATA SCIENCE), Haldia
                        Institute of Technology, Haldia, W.B., India
                        <span className="text-yellow-300 font-bold">
                            {" "}
                        in association with {" "}

                        </span>
                        Internal Quality Assurance Cell,
                        Haldia Institute of Technology, Haldia,
                        W.B., India
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdrkjJwQY7j3HLy4MvT1wT9JklcQKbHUmiH9zTK8uX8Bxo26A/viewform"
                            className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg transition-colors duration-300 text-lg"
                        >
                            Register Now
                        </a>
                        
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 max-w-2xl w-full">
                        <h3 className="text-white text-lg font-medium mb-4">Event Begins In</h3>
                        <div className="flex justify-center gap-4">
                            {Object.entries(timeLeft).map(([unit, value]) => (
                                <div key={unit} className="flex flex-col items-center">
                                    <div className="bg-white/20 backdrop-blur-sm w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center text-white text-2xl md:text-3xl font-bold">
                                        {String(value).padStart(2, '0')}
                                    </div>
                                    <span className="text-white/80 text-sm mt-2 capitalize">{unit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave SVG */}
            <div className="absolute -bottom-2 left-0 w-full overflow-hidden leading-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-16">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,109,74.44,321.39,56.44Z"
                        className="fill-white"
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;
