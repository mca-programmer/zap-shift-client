import React from 'react';

const FeaturesAndMerchant = () => {
  return (
    <div className="w-full bg-gray-100">
      {/* Features Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-2 md:border-4 border-blue-400 rounded-xl md:rounded-2xl p-6 md:p-10 lg:p-12 bg-white">
          <div className="border-t-2 border-dashed border-gray-300 pt-6 md:pt-8 pb-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Live Parcel Tracking */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="flex-shrink-0">
                  <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
                    <rect x="8" y="12" width="20" height="28" rx="2" stroke="#333" strokeWidth="1.5"/>
                    <circle cx="18" cy="22" r="3" stroke="#333" strokeWidth="1.5"/>
                    <path d="M40 16l4 4-4 4M44 20h-8" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="48" cy="32" r="4" stroke="#333" strokeWidth="1.5"/>
                    <path d="M14 32h16" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="20" cy="48" r="2" fill="#333"/>
                    <circle cx="32" cy="44" r="2" fill="#333"/>
                    <circle cx="40" cy="50" r="2" fill="#333"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base lg:text-lg">Live Parcel Tracking</h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    Stay updated in real-time without the parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.
                  </p>
                </div>
              </div>

              {/* 100% Safe Delivery */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="flex-shrink-0">
                  <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
                    <path d="M20 24c0 0 4-8 12-8s12 8 12 8" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
                    <rect x="16" y="24" width="24" height="20" rx="2" stroke="#333" strokeWidth="1.5"/>
                    <path d="M20 28h16M20 32h12M20 36h14" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="52" cy="32" r="3" fill="#333"/>
                    <path d="M48 38l4 4 6-8" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base lg:text-lg">100% Safe Delivery</h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    We ensure your parcel are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees zero loss and damage-free delivery every time.
                  </p>
                </div>
              </div>

              {/* 24/7 Call Center Support */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="flex-shrink-0">
                  <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
                    <path d="M28 24c0-4 3-8 8-8s8 4 8 8" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
                    <rect x="20" y="32" width="24" height="16" rx="2" stroke="#333" strokeWidth="1.5"/>
                    <circle cx="32" cy="40" r="2" fill="#333"/>
                    <path d="M32 42v4" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M24 38h4M36 38h4" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base lg:text-lg">24/7 Call Center Support</h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    Our dedicated support team is available around-the-clock to assist you with any questions, updates, or delivery concerns—anytime, any need us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merchant Satisfaction Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12 shadow-2xl overflow-hidden relative">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-600 to-transparent rounded-full blur-3xl"></div>
          </div>

          <div className="flex-1 relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 leading-tight">
              Merchant and Customer Satisfaction<br className="hidden sm:block" />
              is Our First Priority
            </h2>
            <p className="text-teal-100 mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
              We offer the speediest delivery charges with the highest level along with 100% safety of your product. Refined courier delivery in every corner of Bangladesh right on time.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
              <button className="bg-lime-400 text-gray-900 font-semibold px-6 md:px-8 py-3 md:py-3.5 rounded-full hover:bg-lime-300 transition-all hover:scale-105 shadow-lg text-sm md:text-base">
                Become a Merchant
              </button>
              <button className="border-2 border-lime-400 text-lime-400 font-semibold px-6 md:px-8 py-3 md:py-3.5 rounded-full hover:bg-lime-400 hover:text-gray-900 transition-all hover:scale-105 text-sm md:text-base">
                Earn with ZapShift Courier
              </button>
            </div>
          </div>

          <div className="flex-shrink-0 relative z-10">
            <svg viewBox="0 0 240 240" fill="none" className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
              {/* Location Pin */}
              <path d="M120 60c-16 0-28 12-28 28 0 21 28 52 28 52s28-31 28-52c0-16-12-28-28-28z" 
                    stroke="#84cc16" strokeWidth="2" fill="none" opacity="0.6"/>
              <circle cx="120" cy="88" r="8" stroke="#84cc16" strokeWidth="2" fill="none" opacity="0.6"/>
              
              {/* Package/Box */}
              <rect x="80" y="120" width="80" height="60" rx="4" 
                    stroke="#84cc16" strokeWidth="2" fill="none" opacity="0.4"/>
              <path d="M80 140h80M120 120v60" 
                    stroke="#84cc16" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
              
              {/* Connecting Lines */}
              <path d="M120 100l0 20" 
                    stroke="#84cc16" strokeWidth="2" strokeLinecap="round" opacity="0.3" strokeDasharray="4 4"/>
              
              {/* Route Path */}
              <path d="M40 150c20-10 40-5 60 0s40 10 60 0 40-10 60 0" 
                    stroke="#84cc16" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.3"/>
              
              {/* Delivery Dots */}
              <circle cx="60" cy="150" r="4" fill="#84cc16" opacity="0.5"/>
              <circle cx="120" cy="145" r="4" fill="#84cc16" opacity="0.5"/>
              <circle cx="180" cy="150" r="4" fill="#84cc16" opacity="0.5"/>
              
              {/* Additional decorative elements */}
              <path d="M180 100l20 20M200 120l-10 40" 
                    stroke="#84cc16" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
              <circle cx="60" cy="80" r="6" stroke="#84cc16" strokeWidth="2" fill="none" opacity="0.3"/>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesAndMerchant;