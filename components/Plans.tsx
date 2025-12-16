'use client'

import { useState } from 'react'

export default function Plans() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const plans = [
    {
      name: 'Starter',
      price: '₹7000',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO setup',
        'Contact form',
        '1 month support',
        'Mobile optimized'
      ],
      highlighted: false
    },
    {
      name: 'Professional',
      price: '₹15,000',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 15 pages',
        'Advanced animations',
        'Full SEO & GEO optimization',
        'E-commerce integration',
        '3 months support',
        'Analytics setup',
        'Custom features'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale projects',
      features: [
        'Unlimited pages',
        'Custom development',
        'Advanced integrations',
        'Full automation',
        '12 months support',
        'Priority support',
        'Dedicated team',
        'Everything included'
      ],
      highlighted: false
    }
  ]

  return (
    <section className="py-24 px-5 bg-[#111]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl text-[#d7df23] text-center mb-4">
          Choose Your Plan
        </h2>
        <p className="text-[#ccc] text-center mb-16">
          Flexible pricing to match your needs and budget
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`rounded-xl p-8 transition-all duration-300 ${
                hoveredIndex === index
                  ? 'bg-[#d7df23] text-black scale-105 shadow-[0_0_40px_rgba(215,223,35,0.5)]' 
                  : hoveredIndex !== null
                  ? 'bg-black border-2 border-gray-900 opacity-40'
                  : plan.highlighted
                  ? 'bg-[#d7df23] text-black scale-105'
                  : 'bg-black border-2 border-gray-800'
              }`}
            >
              {(plan.highlighted && hoveredIndex === null) && (
                <div className="text-center mb-4">
                  <span className="bg-black text-[#d7df23] px-4 py-1 rounded-full text-xs font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <h3 className={`text-2xl mb-2 text-center transition-colors ${
                hoveredIndex === index || plan.highlighted ? 'text-black' : 'text-[#d7df23]'
              }`}>
                {plan.name}
              </h3>
              
              <div className="text-center mb-4">
                <span className={`text-4xl font-bold transition-colors ${
                  hoveredIndex === index || plan.highlighted ? 'text-black' : 'text-white'
                }`}>
                  {plan.price}
                </span>
              </div>
              
              <p className={`text-center mb-6 text-sm transition-colors ${
                hoveredIndex === index || plan.highlighted ? 'text-black' : 'text-[#aaa]'
              }`}>
                {plan.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className={`flex items-start text-sm transition-colors ${
                    hoveredIndex === index || plan.highlighted ? 'text-black' : 'text-[#ccc]'
                  }`}>
                    <span className="mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#appointments"
                className={`block text-center py-3 rounded-lg font-bold transition ${
                  hoveredIndex === index || plan.highlighted
                    ? 'bg-black text-[#d7df23] hover:bg-gray-900'
                    : 'bg-black text-[#d7df23] hover:bg-gray-900'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
