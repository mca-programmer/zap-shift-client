import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does the posture corrector work?",
      answer: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. It helps train your body to naturally adopt a posture corrector works by providing support and gentle alignment in your shoulders."
    },
    {
      question: "Is it suitable for all ages and body types?",
      answer: "Yes, our posture corrector is designed to be adjustable and suitable for all ages and body types. It features customizable straps that ensure a comfortable and secure fit for everyone."
    },
    {
      question: "Does it really help with back pain and posture improvement?",
      answer: "Yes, regular use of the posture corrector can significantly help reduce back pain and improve your posture over time. It works by training your muscles to maintain proper alignment naturally."
    },
    {
      question: "Does it have smart features like vibration alerts?",
      answer: "Our advanced model includes smart vibration alerts that gently remind you when you're slouching, helping you maintain proper posture throughout the day."
    },
    {
      question: "How will I be notified when the product is back in stock?",
      answer: "You can sign up for our email notifications and we'll send you an alert as soon as the product is back in stock. You'll be among the first to know!"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full bg-gray-100">
      {/* FAQ Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-teal-900 mb-3 md:mb-4">
            Frequently Asked Question (FAQ)
          </h2>
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto">
            Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
          </p>
        </div>

        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-300 rounded-lg bg-white overflow-hidden transition-all hover:shadow-md"
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900 pr-4 text-sm md:text-base">
                  {faq.question}
                </span>
                <svg 
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 md:px-6 pb-3 md:pb-4 bg-blue-50">
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 md:mt-8">
          <button className="inline-flex items-center gap-2 bg-lime-400 text-gray-900 font-semibold px-6 md:px-8 py-3 md:py-3.5 rounded-full hover:bg-lime-300 transition-all hover:scale-105 shadow-lg text-sm md:text-base">
            See More FAQ's
            <div className="w-7 h-7 md:w-8 md:h-8 bg-gray-900 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default FAQ;