'use client'

import { useState } from 'react'

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const services = [
    {
      title: 'Website Designing',
      description: 'Custom-built websites that capture your brand and convert visitors into customers with stunning design and seamless functionality.'
    },
    {
      title: 'E-Commerce',
      description: 'Complete online store solutions with secure payments, inventory management, and optimized checkout flows to maximize sales.'
    },
    {
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps for iOS and Android. Beautiful, fast, and user-friendly applications tailored to your needs.'
    },
    {
      title: 'WhatsApp Automation',
      description: 'Automated customer engagement through WhatsApp. Handle inquiries, bookings, and support 24/7 with intelligent chatbots.'
    },
    {
      title: 'Workflow Automation',
      description: 'Streamline your business with n8n, Zapier, and custom automation. Connect apps, automate tasks, and boost productivity effortlessly.'
    }
  ]

  return (
    <section className="py-24 px-5 bg-[#111]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl text-[#d7df23] text-center mb-16">
          Our Services
        </h2>
        
        {/* First Row - 3 Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {services.slice(0, 3).map((service, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-black border-2 border-[#d7df23] rounded-xl p-8 hover:shadow-[0_0_30px_rgba(215,223,35,0.3)] transition-all cursor-pointer min-h-[200px] flex flex-col justify-center"
            >
              {/* Icon based on service type */}
              <div className="mb-6 text-center">
                {index === 0 && (
                  <svg className="w-16 h-16 mx-auto text-[#d7df23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
                {index === 1 && (
                  <svg className="w-16 h-16 mx-auto text-[#d7df23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )}
                {index === 2 && (
                  <svg className="w-16 h-16 mx-auto text-[#d7df23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                )}
              </div>
              
              <h3 className="text-xl text-[#d7df23] mb-4 text-center">{service.title}</h3>
              
              {/* Description appears on hover */}
              <div className={`overflow-hidden transition-all duration-300 ${hoveredIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-[#ccc] text-sm leading-relaxed text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 2 Services Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.slice(3, 5).map((service, index) => (
            <div 
              key={index + 3}
              onMouseEnter={() => setHoveredIndex(index + 3)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-black border-2 border-[#d7df23] rounded-xl p-8 hover:shadow-[0_0_30px_rgba(215,223,35,0.3)] transition-all cursor-pointer min-h-[200px] flex flex-col justify-center"
            >
              {/* Icon based on service type */}
              <div className="mb-6 text-center">
                {index === 0 && (
                  <svg className="w-16 h-16 mx-auto text-[#d7df23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                )}
                {index === 1 && (
                  <svg className="w-16 h-16 mx-auto text-[#d7df23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )}
              </div>
              
              <h3 className="text-xl text-[#d7df23] mb-4 text-center">{service.title}</h3>
              
              {/* Description appears on hover */}
              <div className={`overflow-hidden transition-all duration-300 ${hoveredIndex === (index + 3) ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-[#ccc] text-sm leading-relaxed text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
