import React, { useEffect, useRef } from 'react';

const AboutPage = () => {
    const statsRef = useRef([]);
    const timelineRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            },
            { threshold: 0.1 }
        );

        [...statsRef.current, ...timelineRef.current].forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const stats = [
        { number: '50,000+', label: 'Daily Deliveries', icon: '📦' },
        { number: '10,000+', label: 'Active Merchants', icon: '🏪' },
        { number: '64', label: 'Districts Covered', icon: '🗺️' },
        { number: '99.8%', label: 'Success Rate', icon: '✅' }
    ];

    const timeline = [
        { year: '2018', title: 'The Beginning', description: 'Started with a vision to revolutionize courier services in Bangladesh' },
        { year: '2019', title: 'Rapid Growth', description: 'Expanded to 20 districts, serving 1000+ merchants' },
        { year: '2021', title: 'Nationwide', description: 'Achieved complete coverage of all 64 districts' },
        { year: '2023', title: 'Technology First', description: 'Launched AI-powered route optimization and real-time tracking' },
        { year: '2024', title: 'Market Leader', description: 'Became the #1 choice for e-commerce businesses in Bangladesh' }
    ];

    const values = [
        {
            icon: '⚡',
            title: 'Speed',
            description: 'We understand time is money. Our express delivery ensures your parcels reach on time, every time.'
        },
        {
            icon: '🛡️',
            title: 'Reliability',
            description: 'With 99.8% success rate and insurance on every parcel, your packages are in safe hands.'
        },
        {
            icon: '💡',
            title: 'Innovation',
            description: 'We leverage cutting-edge technology to provide seamless tracking and efficient logistics.'
        },
        {
            icon: '🤝',
            title: 'Partnership',
            description: 'We don\'t just deliver parcels, we partner with businesses to help them grow and succeed.'
        }
    ];

    const team = [
        { role: 'Leadership', count: '50+', description: 'Experienced professionals' },
        { role: 'Delivery Heroes', count: '2,000+', description: 'On-ground workforce' },
        { role: 'Tech Team', count: '100+', description: 'Innovation experts' },
        { role: 'Support Staff', count: '200+', description: '24/7 assistance' }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 text-white overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-lime-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
                    <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-lime-400 text-teal-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
                                <span className="w-2 h-2 bg-teal-900 rounded-full animate-pulse"></span>
                                About ZapShift
                            </div>
                            
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                                Delivering Trust,<br />
                                <span className="text-lime-400">One Parcel at a Time</span>
                            </h1>
                            
                            <p className="text-lg md:text-xl text-teal-100 mb-8 leading-relaxed">
                                Since 2018, we've been transforming logistics in Bangladesh. From a small startup to the nation's most trusted courier service, our journey is built on speed, reliability, and innovation.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-8 py-4 bg-lime-400 text-teal-900 rounded-full font-bold hover:bg-lime-300 transition-all hover:scale-105 shadow-lg">
                                    Join Our Team
                                </button>
                                <button className="px-8 py-4 border-2 border-lime-400 text-lime-400 rounded-full font-bold hover:bg-lime-400 hover:text-teal-900 transition-all">
                                    Our Services
                                </button>
                            </div>
                        </div>

                        {/* Right Image/Illustration */}
                        <div className="relative">
                            <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                                <div className="grid grid-cols-2 gap-4">
                                    {stats.map((stat, idx) => (
                                        <div key={idx} className="text-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                                            <div className="text-4xl mb-2">{stat.icon}</div>
                                            <div className="text-2xl md:text-3xl font-black text-lime-400 mb-1">{stat.number}</div>
                                            <div className="text-xs md:text-sm text-teal-100">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-lime-400 rounded-full opacity-20"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-400 rounded-full opacity-20"></div>
                        </div>
                    </div>
                </div>

                {/* Wave Bottom */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1200 120" fill="none" className="w-full h-12 md:h-20">
                        <path d="M0 120L1200 120L1200 40C1050 80 900 60 750 40C600 20 450 0 300 20C150 40 75 60 0 40Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {/* Mission */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                            <div className="relative bg-white border-4 border-teal-500 rounded-3xl p-8 md:p-10 shadow-xl">
                                <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform">
                                    🎯
                                </div>
                                <h2 className="text-3xl font-black text-gray-900 mb-4">Our Mission</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    To empower businesses across Bangladesh with fast, reliable, and affordable logistics solutions that drive growth and customer satisfaction.
                                </p>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-lime-400 to-lime-500 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
                            <div className="relative bg-white border-4 border-lime-400 rounded-3xl p-8 md:p-10 shadow-xl">
                                <div className="w-16 h-16 bg-lime-400 rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform">
                                    🚀
                                </div>
                                <h2 className="text-3xl font-black text-gray-900 mb-4">Our Vision</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    To become South Asia's leading logistics technology company, setting new standards in delivery speed, transparency, and customer experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-teal-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                            Our <span className="text-teal-600">Core Values</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {values.map((value, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-teal-500"
                            >
                                <div className="text-5xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey Timeline */}
            <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                            Our <span className="text-teal-600">Journey</span>
                        </h2>
                        <p className="text-gray-600 text-lg">
                            From humble beginnings to market leadership
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-500 via-lime-400 to-teal-500"></div>

                        {/* Timeline Items */}
                        <div className="space-y-12">
                            {timeline.map((item, idx) => (
                                <div
                                    key={idx}
                                    ref={(el) => (timelineRef.current[idx] = el)}
                                    className={`relative flex items-center gap-8 opacity-0 translate-y-8 transition-all duration-500 ${
                                        idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                                    style={{ transitionDelay: `${idx * 150}ms` }}
                                >
                                    {/* Year Badge */}
                                    <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-16 h-16 bg-gradient-to-br from-teal-500 to-lime-400 rounded-full flex items-center justify-center font-black text-white shadow-lg z-10">
                                        {item.year}
                                    </div>

                                    {/* Content */}
                                    <div className={`flex-1 ml-24 md:ml-0 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-teal-500">
                                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Stats */}
            <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-900 to-teal-800 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
                            Meet Our <span className="text-lime-400">Amazing Team</span>
                        </h2>
                        <p className="text-teal-100 text-lg max-w-2xl mx-auto">
                            Behind every successful delivery is a dedicated team working around the clock
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {team.map((member, idx) => (
                            <div
                                key={idx}
                                className="text-center p-6 md:p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
                            >
                                <div className="text-4xl md:text-5xl font-black text-lime-400 mb-2">{member.count}</div>
                                <h3 className="text-xl font-bold mb-2">{member.role}</h3>
                                <p className="text-teal-200 text-sm">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-lime-50 to-teal-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                        Ready to Join <span className="text-teal-600">Our Story?</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        Whether you're a business looking for reliable logistics or a professional seeking an exciting career, we'd love to hear from you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-teal-600 text-white rounded-full font-bold text-lg hover:bg-teal-700 hover:scale-105 transition-all shadow-lg">
                            Become a Merchant
                        </button>
                        <button className="px-8 py-4 bg-lime-400 text-teal-900 rounded-full font-bold text-lg hover:bg-lime-300 hover:scale-105 transition-all shadow-lg">
                            Join Our Team
                        </button>
                    </div>
                </div>
            </section>

            {/* Custom Animations */}
            <style jsx>{`
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </div>
    );
};

export default AboutPage;