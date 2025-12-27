import React from 'react';

const HowItWorksAndServices = () => {
  return (
    <div className="w-full bg-gray-100">
      {/* How it Works Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 md:mb-12">How it Works</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Booking Pick & Drop */}
          <div className="bg-white rounded-lg p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4">
              <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                <rect x="8" y="12" width="32" height="24" rx="2" stroke="#333" strokeWidth="2"/>
                <circle cx="18" cy="36" r="3" stroke="#333" strokeWidth="2"/>
                <circle cx="30" cy="36" r="3" stroke="#333" strokeWidth="2"/>
                <path d="M28 12L32 8L36 12" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Booking Pick & Drop</h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">From personal packages to business shipments — we deliver on time, every time.</p>
          </div>

          {/* Cash On Delivery */}
          <div className="bg-white rounded-lg p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4">
              <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                <rect x="8" y="12" width="32" height="24" rx="2" stroke="#333" strokeWidth="2"/>
                <circle cx="24" cy="24" r="6" stroke="#333" strokeWidth="2"/>
                <path d="M24 21v6m-3-3h6" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Cash On Delivery</h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">From personal packages to business shipments — we deliver on time, every time.</p>
          </div>

          {/* Delivery Hub */}
          <div className="bg-white rounded-lg p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4">
              <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                <path d="M24 8L12 16v16l12 8 12-8V16L24 8z" stroke="#333" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M24 24v16M12 16l12 8 12-8" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Delivery Hub</h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">From personal packages to business shipments — we deliver on time, every time.</p>
          </div>

          {/* Booking SME & Corporate */}
          <div className="bg-white rounded-lg p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4">
              <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                <rect x="10" y="10" width="28" height="28" rx="2" stroke="#333" strokeWidth="2"/>
                <path d="M18 20h12M18 24h12M18 28h8" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Booking SME & Corporate</h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">From personal packages to business shipments — we deliver on time, every time.</p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-teal-900 to-teal-800 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 border-2 md:border-4 border-blue-400 shadow-xl">
            <div className="text-center mb-8 md:mb-12 border-2 border-dashed border-teal-600 rounded-lg py-3 md:py-4 px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">Our Services</h2>
              <p className="text-teal-100 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
                Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {/* Express & Standard Delivery */}
              <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-3 md:mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6 md:w-8 md:h-8">
                      <path d="M8 12h16M8 16h12M8 20h8" stroke="#ec4899" strokeWidth="2" strokeLinecap="round"/>
                      <rect x="6" y="8" width="20" height="18" rx="2" stroke="#ec4899" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-center mb-2 md:mb-3 text-sm md:text-base">Express & Standard Delivery</h3>
                <p className="text-xs md:text-sm text-gray-600 text-center leading-relaxed">
                  We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.
                </p>
              </div>

              {/* Nationwide Delivery */}
              <div className="bg-gradient-to-br from-lime-400 to-lime-300 rounded-xl md:rounded-2xl p-6 md:p-8 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-3 md:mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6 md:w-8 md:h-8">
                      <circle cx="16" cy="16" r="10" stroke="#84cc16" strokeWidth="2"/>
                      <path d="M16 8v8l4 4" stroke="#84cc16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-center mb-2 md:mb-3 text-sm md:text-base">Nationwide Delivery</h3>
                <p className="text-xs md:text-sm text-gray-800 text-center leading-relaxed">
                  We deliver nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.
                </p>
              </div>

              {/* Fulfillment Solution */}
              <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-3 md:mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6 md:w-8 md:h-8">
                      <rect x="8" y="10" width="16" height="14" rx="2" stroke="#ec4899" strokeWidth="2"/>
                      <path d="M12 14h8M12 18h6" stroke="#ec4899" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-center mb-2 md:mb-3 text-sm md:text-base">Fulfillment Solution</h3>
                <p className="text-xs md:text-sm text-gray-600 text-center leading-relaxed">
                  We also offer customized service with inventory management support, online order processing, packaging, and other sales support.
                </p>
              </div>

              {/* Cash on Home Delivery */}
              <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-3 md:mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6 md:w-8 md:h-8">
                      <rect x="8" y="10" width="16" height="12" rx="1" stroke="#ec4899" strokeWidth="2"/>
                      <circle cx="16" cy="16" r="3" stroke="#ec4899" strokeWidth="2"/>
                      <path d="M16 13v6" stroke="#ec4899" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-center mb-2 md:mb-3 text-sm md:text-base">Cash on Home Delivery</h3>
                <p className="text-xs md:text-sm text-gray-600 text-center leading-relaxed">
                  100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.
                </p>
              </div>

              {/* Corporate Service */}
              <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-3 md:mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6 md:w-8 md:h-8">
                      <rect x="10" y="8" width="12" height="16" rx="1" stroke="#ec4899" strokeWidth="2"/>
                      <path d="M14 12h4M14 16h4" stroke="#ec4899" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-center mb-2 md:mb-3 text-sm md:text-base">Corporate Service / Contract In Logistics</h3>
                <p className="text-xs md:text-sm text-gray-600 text-center leading-relaxed">
                  Customized corporate services which includes warehouse and inventory management support.
                </p>
              </div>

              {/* Parcel Return */}
              <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-3 md:mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6 md:w-8 md:h-8">
                      <path d="M20 12l-8 8 8 8" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 20h12" stroke="#ec4899" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-center mb-2 md:mb-3 text-sm md:text-base">Parcel Return</h3>
                <p className="text-xs md:text-sm text-gray-600 text-center leading-relaxed">
                  Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksAndServices;