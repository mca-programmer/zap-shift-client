import React, { useEffect, useRef } from 'react';

const ServicesPage = () => {
    const servicesRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            },
            { threshold: 0.1 }
        );

        servicesRef.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const services = [
        {
            id: 1,
            icon: '⚡',
            title: 'Express Delivery',
            subtitle: '4-6 Hours',
            description: 'Lightning-fast delivery within Dhaka. Your parcel reaches from point A to B in record time with real-time tracking.',
            features: ['Same-day pickup', 'GPS tracking', 'Dedicated rider', 'Insurance included'],
            color: 'from-orange-500 to-red-500',
            accentColor: 'orange'
        },
        {
            id: 2,
            icon: '🌍',
            title: 'Nationwide Coverage',
            subtitle: '48-72 Hours',
            description: 'From Teknaf to Tetulia, we cover all 64 districts. Your products reach every corner of Bangladesh.',
            features: ['All districts covered', 'Hub network', 'Cash on delivery', 'Return support'],
            color: 'from-teal-500 to-cyan-500',
            accentColor: 'teal'
        },
        {
            id: 3,
            icon: '📦',
            title: 'Fulfillment Solution',
            subtitle: 'End-to-End',
            description: 'Complete warehouse and inventory management. We handle storage, packaging, and shipping so you can focus on sales.',
            features: ['Warehouse storage', 'Order processing', 'Custom packaging', 'Inventory tracking'],
            color: 'from-purple-500 to-pink-500',
            accentColor: 'purple'
        },
        {
            id: 4,
            icon: '💰',
            title: 'Cash Collection',
            subtitle: '100% Secure',
            description: 'We collect payment on delivery and transfer to your account within 48 hours. Zero risk, maximum convenience.',
            features: ['COD facility', 'Quick settlement', 'Digital receipts', 'Fraud protection'],
            color: 'from-lime-500 to-green-500',
            accentColor: 'lime'
        },
        {
            id: 5,
            icon: '🏢',
            title: 'Corporate Logistics',
            subtitle: 'B2B Solutions',
            description: 'Tailored logistics for businesses. Dedicated account manager, custom SLAs, and priority support.',
            features: ['Dedicated support', 'Custom contracts', 'Bulk discounts', 'API integration'],
            color: 'from-blue-500 to-indigo-500',
            accentColor: 'blue'
        },
        {
            id: 6,
            icon: '🔄',
            title: 'Reverse Logistics',
            subtitle: 'Easy Returns',
            description: 'Hassle-free product returns and exchanges. We pick up from customers and deliver back to you seamlessly.',
            features: ['Return pickup', 'Quality check', 'Restock support', 'Customer support'],
            color: 'from-rose-500 to-red-500',
            accentColor: 'rose'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-teal-50 to-gray-50">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-lime-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
                    <div className="text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-lime-400 text-teal-900 px-4 py-2 rounded-full text-sm font-bold mb-6 animate-bounce-slow">
                            <span className="w-2 h-2 bg-teal-900 rounded-full animate-pulse"></span>
                            Trusted by 10,000+ Businesses
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight">
                            Delivery Solutions<br />
                            <span className="text-lime-400">Built for Speed</span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-lg md:text-xl lg:text-2xl text-teal-100 max-w-3xl mx-auto mb-8 leading-relaxed">
                            From express delivery to complete fulfillment, we provide logistics services that help your business grow faster.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="group relative px-8 py-4 bg-lime-400 text-teal-900 rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl">
                                <span className="relative z-10">Get Started Today</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-lime-300 to-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                            </button>
                            <button className="px-8 py-4 border-2 border-lime-400 text-lime-400 rounded-full font-bold text-lg hover:bg-lime-400 hover:text-teal-900 transition-all">
                                Calculate Shipping Cost
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mt-16">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-lime-400 mb-2">64</div>
                                <div className="text-xs md:text-sm text-teal-200">Districts Covered</div>
                            </div>
                            <div className="text-center border-x border-teal-600">
                                <div className="text-3xl md:text-4xl font-black text-lime-400 mb-2">24/7</div>
                                <div className="text-xs md:text-sm text-teal-200">Support Available</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-lime-400 mb-2">99.8%</div>
                                <div className="text-xs md:text-sm text-teal-200">Delivery Success</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Diagonal Bottom */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1200 120" fill="none" className="w-full h-12 md:h-20">
                        <path d="M0 120L1200 120L1200 0L0 60Z" fill="rgb(249 250 251)" />
                    </svg>
                </div>
            </section>

            {/* Services Grid */}
            <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 md:mb-20">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                            Our <span className="text-teal-600">Service</span> Portfolio
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Choose the perfect logistics solution for your business needs
                        </p>
                    </div>

                    {/* Services Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                ref={(el) => (servicesRef.current[index] = el)}
                                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden opacity-0 translate-y-8"
                                style={{
                                    transitionDelay: `${index * 100}ms`
                                }}
                            >
                                {/* Gradient Top Bar */}
                                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>

                                {/* Card Content */}
                                <div className="p-6 md:p-8">
                                    {/* Icon & Title */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="text-5xl md:text-6xl transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                                            {service.icon}
                                        </div>
                                        <span className={`text-xs font-bold px-3 py-1 rounded-full bg-${service.accentColor}-100 text-${service.accentColor}-700`}>
                                            {service.subtitle}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features List */}
                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                                <svg className="w-5 h-5 text-teal-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <button className={`w-full py-3 rounded-xl font-bold bg-secondary text-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}>
                                        Learn More →
                                    </button>
                                </div>

                                {/* Decorative Corner */}
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-5 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="relative py-16 md:py-24 bg-gradient-to-br from-teal-900 to-teal-800 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-lime-400 rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-400 rounded-full filter blur-3xl"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
                            Why Businesses Trust <span className="text-lime-400">ZapShift</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {[
                            { icon: '🎯', title: 'On-Time Delivery', desc: '99.8% success rate' },
                            { icon: '💎', title: 'Premium Care', desc: 'Insurance on every parcel' },
                            { icon: '📱', title: 'Live Tracking', desc: 'Real-time GPS updates' },
                            { icon: '🤝', title: 'Dedicated Support', desc: '24/7 customer service' }
                        ].map((item, idx) => (
                            <div key={idx} className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all">
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-teal-200">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-lime-50 to-teal-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                        Ready to <span className="text-primary">Scale</span> Your Business?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Join thousands of businesses already growing with ZapShift
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-primary text-black rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl">
                            Start Shipping Now
                        </button>
                        <button className="px-8 py-4 border-2 border-secondary text-secondary rounded-full font-bold text-lg hover:bg-secondary hover:text-white transition-all">
                            Schedule a Demo
                        </button>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default ServicesPage;