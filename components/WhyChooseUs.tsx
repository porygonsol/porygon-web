export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Proven Results',
      description: 'Our websites don\'t just look good—they convert. We focus on driving real business growth and measurable ROI.'
    },
    {
      title: 'Fast Delivery',
      description: 'Most projects completed in 2-4 weeks. We work efficiently without compromising on quality or attention to detail.'
    },
    {
      title: 'SEO & GEO Optimized',
      description: 'Every website is built with SEO best practices from day one, ensuring you rank well and attract organic traffic.'
    }
  ]

  return (
    <section className="py-24 px-5 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl text-[#d7df23] text-center mb-16">
          Why Choose Porygon?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-[#111] border border-gray-800 rounded-lg p-8 hover:border-[#d7df23] transition-all"
            >
              {/* Icon based on reason type */}
              <div className="mb-6">
                {index === 0 && (
                  <svg className="w-12 h-12 text-[#d7df23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )}
                {index === 1 && (
                  <svg className="w-12 h-12 text-[#d7df23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )}
                {index === 2 && (
                  <svg className="w-12 h-12 text-[#d7df23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )}
              </div>
              
              <h3 className="text-xl text-white mb-3">{reason.title}</h3>
              <p className="text-[#aaa] text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
