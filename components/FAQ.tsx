'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What services does Porygon offer?',
      answer: 'We specialize in building high-converting websites with strategic copywriting, SEO optimization, and seamless development. From landing pages to full-scale web applications, we turn your vision into reality.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Most projects are completed within 2-4 weeks, depending on complexity. We work efficiently without compromising quality, keeping you updated throughout the entire process.'
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Absolutely! We offer maintenance packages and ongoing support to ensure your website stays updated, secure, and performing at its best. Your success is our priority.'
    },
    {
      question: 'What makes Porygon different from other agencies?',
      answer: 'We combine technical expertise with strategic thinking. Every website we build is designed to convert visitors into customers, not just look pretty. Plus, we\'re trusted by 30+ agencies worldwide.'
    },
    {
      question: 'What\'s your pricing structure?',
      answer: 'We offer flexible pricing based on project scope and requirements. Book a consultation call to discuss your needs, and we\'ll provide a transparent quote tailored to your budget and goals.'
    },
    {
      question: 'Can you help with SEO and digital marketing?',
      answer: 'Yes! SEO is built into every website we create. We optimize for search engines from day one, ensuring your site ranks well and attracts organic traffic that converts.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 px-5 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Title */}
          <div className="flex flex-col justify-center">
            <p className="text-[#aaa] text-sm mb-3">FAQ</p>
            <h2 className="text-3xl md:text-5xl text-[#d7df23] leading-tight">
              Questions? Porygon has answers.
            </h2>
          </div>
          
          {/* Right Side - Questions */}
          <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-[#111] border-2 border-gray-800 rounded-lg overflow-hidden transition-all hover:border-[#d7df23]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-bold text-white pr-4">{faq.question}</span>
                <span className="text-[#d7df23] text-2xl font-bold flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-[#ccc]">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
