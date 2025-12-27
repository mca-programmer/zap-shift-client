import React from 'react';

const ZapShiftHome = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* How it Works Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">How it Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Booking Pick & Drop */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 mb-4">
              <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                <rect x="8" y="12" width="32" height="24" rx="2" stroke="#333" strokeWidth="2"/>
                <circle cx="18" cy="36" r="3" stroke="#333" strokeWidth="2"/>
                <circle cx="30" cy="36" r="3" stroke="#333" strokeWidth="2"/>
                <path d="M28 12L32 8L36 12" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Booking Pick & Drop</h3>
            <p className="text-sm text-gray-600">From personal packages to business shipments — we deliver on time, every time.</p>
          </div>

          {/* Cash On Delivery */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 mb-4">
              <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                <rect x="8" y="12" width="32" height="24" rx="2" stroke="#333" strokeWidth="2"/>
                <circle cx="24" cy="24" r="6" stroke="#333" strokeWidth="2"/>
                <path d="M24 21v6m-3-3h6" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Cash On Delivery</h3>
            <p className="text-sm text-gray-600">From personal packages to business shipments — we deliver on time, every time.</p>
          </div>

          {/* Delivery Hub */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 mb-4">
              <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                <path d="M24 8L12 16v16l12 8 12-8V16L24 8z" stroke="#333" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M24 24v16M12 16l12 8 12-8" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Delivery Hub</h3>
            <p className="text-sm text-gray-600">From personal packages to business shipments — we deliver on time, every time.</p>
          </div>

          {/* Booking SME & Corporate */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 mb-4">
              <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                <rect x="10" y="10" width="28" height="28" rx="2" stroke="#333" strokeWidth="2"/>
                <path d="M18 20h12M18 24h12M18 28h8" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Booking SME & Corporate</h3>
            <p className="text-sm text-gray-600">From personal packages to business shipments — we deliver on time, every time.</p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-teal-900 to-teal-800 rounded-3xl p-12 border-4 border-blue-400">
            <div className="text-center mb-12 border-2 border-dashed border-teal-600 rounded-lg py-4">
              <h2 className="text-3xl font-bold text-white mb-3">Our Services</h2>
              <p className="text-teal-100 text-sm max-w-2xl mx-auto">
                Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Express & Standard Delivery */}
              <div className="bg-white rounded-2xl p-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
                      <path d="M8 12h16M8 16h12M8 20h8" stroke="#ec4899" strokeWidth="2" strokeLinecap="round"/>
                      <rect x="6" y="8" width="20" height="18" rx="2" stroke="#ec4899" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-center mb-3">Express & Standard Delivery</h3>
                <p className="text-sm text-gray-600 text-center">
                  We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.
                </p>
              </div>

              {/* Nationwide Delivery */}
              <div className="bg-gradient-to-br from-lime-400 to-lime-300 rounded-2xl p-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
                      <circle cx="16" cy="16" r="10" stroke="#84cc16" strokeWidth="2"/>
                      <path d="M16 8v8l4 4" stroke="#84cc16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-center mb-3">Nationwide Delivery</h3>
                <p className="text-sm text-gray-800 text-center">
                  We deliver nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.
                </p>
              </div>

              {/* Fulfillment Solution */}
              <div className="bg-white rounded-2xl p-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
                      <rect x="8" y="10" width="16" height="14" rx="2" stroke="#ec4899" strokeWidth="2"/>
                      <path d="M12 14h8M12 18h6" stroke="#ec4899" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-center mb-3">Fulfillment Solution</h3>
                <p className="text-sm text-gray-600 text-center">
                  We also offer customized service with inventory management support, online order processing, packaging, and other sales support.
                </p>
              </div>

              {/* Cash on Home Delivery */}
              <div className="bg-white rounded-2xl p-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
                      <path d="M12 12l8 8M20 12l-8 8" stroke="#ec4899" strokeWidth="2" strokeLinecap="round"/>
                      <rect x="8" y="8" width="16" height="16" rx="2" stroke="#ec4899" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-center mb-3">Cash on Home Delivery</h3>
                <p className="text-sm text-gray-600 text-center">
                  100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.
                </p>
              </div>

              {/* Corporate Service */}
              <div className="bg-white rounded-2xl p-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
                      <rect x="10" y="8" width="12" height="16" rx="1" stroke="#ec4899" strokeWidth="2"/>
                      <path d="M14 12h4M14 16h4" stroke="#ec4899" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-center mb-3">Corporate Service / Contract In Logistics</h3>
                <p className="text-sm text-gray-600 text-center">
                  Customized corporate services which includes warehouse and inventory management support.
                </p>
              </div>

              {/* Parcel Return */}
              <div className="bg-white rounded-2xl p-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
                      <path d="M20 12l-8 8 8 8" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 20h12" stroke="#ec4899" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-center mb-3">Parcel Return</h3>
                <p className="text-sm text-gray-600 text-center">
                  Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="border-4 border-blue-400 rounded-2xl p-12">
          <div className="border-t-2 border-dashed border-gray-300 pt-8 pb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Live Parcel Tracking */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg viewBox="0 0 64 64" fill="none" className="w-24 h-24">
                    <rect x="8" y="12" width="20" height="28" stroke="#333" strokeWidth="2"/>
                    <circle cx="18" cy="22" r="3" stroke="#333" strokeWidth="2"/>
                    <path d="M40 16l4 4-4 4M44 20h-8" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="48" cy="32" r="4" stroke="#333" strokeWidth="2"/>
                    <path d="M14 32h16" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Live Parcel Tracking</h3>
                  <p className="text-sm text-gray-600">
                    Stay updated in real-time without the parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.
                  </p>
                </div>
              </div>

              {/* 100% Safe Delivery */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg viewBox="0 0 64 64" fill="none" className="w-24 h-24">
                    <rect x="16" y="20" width="24" height="20" rx="2" stroke="#333" strokeWidth="2"/>
                    <path d="M20 24h16M20 28h12M20 32h14" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="52" cy="28" r="3" fill="#333"/>
                    <path d="M48 34l4 4 6-8" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">100% Safe Delivery</h3>
                  <p className="text-sm text-gray-600">
                    We ensure your parcel are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees zero loss and damage-free delivery every time.
                  </p>
                </div>
              </div>

              {/* 24/7 Call Center Support */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg viewBox="0 0 64 64" fill="none" className="w-24 h-24">
                    <path d="M28 24c0-4 3-8 8-8s8 4 8 8" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
                    <rect x="20" y="32" width="24" height="16" rx="2" stroke="#333" strokeWidth="2"/>
                    <circle cx="32" cy="40" r="2" fill="#333"/>
                    <path d="M32 42v4" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">24/7 Call Center Support</h3>
                  <p className="text-sm text-gray-600">
                    Our dedicated support team is available around-the-clock to assist you with any questions, updates, or delivery concerns—anytime, any need us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merchant Satisfaction Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-teal-900 to-teal-800 rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-4">
              Merchant and Customer Satisfaction<br />is Our First Priority
            </h2>
            <p className="text-teal-100 mb-6">
              We offer the speediest delivery charges with the highest level along with 100% safety of your product. Refined courier delivery in every corner of Bangladesh right on time.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-lime-400 text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-lime-300 transition-colors">
                Become a Merchant
              </button>
              <button className="border-2 border-lime-400 text-lime-400 font-semibold px-6 py-3 rounded-full hover:bg-lime-400 hover:text-gray-900 transition-colors">
                Earn with ZapShift Courier
              </button>
            </div>
          </div>
          <div className="flex-shrink-0">
            <svg viewBox="0 0 200 200" fill="none" className="w-64 h-64">
              <path d="M60 80l40 40 40-40" stroke="#84cc16" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.3"/>
              <rect x="40" y="100" width="120" height="60" rx="4" stroke="#84cc16" strokeWidth="2" opacity="0.4"/>
              <circle cx="100" cy="60" r="20" stroke="#84cc16" strokeWidth="2" opacity="0.5"/>
              <path d="M80 140c0-20 40-20 40 0" stroke="#84cc16" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
              <path d="M150 80l20 20M170 100l-10 40" stroke="#84cc16" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
            </svg>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Question (FAQ)</h2>
          <p className="text-gray-600 text-sm">
            Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
          </p>
        </div>

        <div className="space-y-4">
          {/* FAQ Item 1 - Expanded */}
          <div className="border border-gray-300 rounded-lg">
            <button className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50">
              <span className="font-medium text-gray-900">How does the posture corrector work?</span>
              <svg className="w-5 h-5 text-gray-500 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="px-6 pb-4 bg-blue-50">
              <p className="text-sm text-gray-700">
                A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. It helps train your body to naturally adopt a posture corrector works by providing support and gentle alignment in your shoulders.
              </p>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div className="border border-gray-300 rounded-lg">
            <button className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50">
              <span className="font-medium text-gray-900">Is it suitable for all ages and body types?</span>
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* FAQ Item 3 */}
          <div className="border border-gray-300 rounded-lg">
            <button className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50">
              <span className="font-medium text-gray-900">Does it really help with back pain and posture improvement?</span>
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* FAQ Item 4 */}
          <div className="border border-gray-300 rounded-lg">
            <button className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50">
              <span className="font-medium text-gray-900">Does it have smart features like vibration alerts?</span>
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* FAQ Item 5 */}
          <div className="border border-gray-300 rounded-lg">
            <button className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50">
              <span className="font-medium text-gray-900">How will I be notified when the product is back in stock?</span>
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="inline-flex items-center gap-2 bg-lime-400 text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-lime-300 transition-colors">
            See More FAQ's
            <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ZapShiftHome;