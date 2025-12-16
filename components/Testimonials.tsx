export default function Testimonials() {
  const testimonials = [
    {
      name: 'Aadhavan',
      role: 'Founder, Gym',
      text: 'The Framer site Porygon built for us is a game-changer. Stunning visuals and effortless performance—exactly what we needed.'
    },
    {
      name: 'Nithila',
      role: 'Founder, Boutique',
      text: 'Working with Porygon transformed our online presence. Our conversion rate doubled within the first month of launch.'
    },
    {
      name: 'Saravanan',
      role: 'CEO, StartupHub',
      text: 'Professional, fast, and results-driven. Porygon delivered beyond our expectations and on time.'
    },
    {
      name: 'Yash',
      role: 'Product Lead, InnovateCo',
      text: 'The attention to detail and strategic approach made all the difference. Highly recommend Porygon for any web project.'
    },
    {
      name: 'Karthik',
      role: 'Founder, YumSamiyal',
      text: 'Our website now reflects our brand perfectly. Porygon understood our vision and brought it to life beautifully.'
    },
    {
      name: 'Lisa Thompson',
      role: 'CMO, BrandWorks',
      text: 'Exceptional service from start to finish. The Porygon team is responsive, creative, and truly cares about results.'
    }
  ]

  return (
    <section className="py-20 px-5 bg-black text-center">
      <p className="text-[#aaa] text-sm mb-3">Testimonials</p>
      <h2 className="text-2xl md:text-4xl text-[#d7df23] mb-12">
        Hear from our clients
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto overflow-hidden h-[600px]">
        {/* Column 1 - Scroll Down */}
        <div className="flex flex-col gap-5 animate-scroll-down-continuous">
          {[...testimonials.filter((_, i) => i % 3 === 0), ...testimonials.filter((_, i) => i % 3 === 0)].map((t, i) => (
            <div key={i} className="bg-[#111] border-2 border-white rounded-xl p-5 min-h-[150px] flex-shrink-0">
              <h3 className="font-bold text-white mb-2">
                {t.name}
                <span className="block text-sm text-[#aaa] font-normal">{t.role}</span>
              </h3>
              <p className="text-sm text-[#ddd]">
                {t.text.split('Porygon').map((part, i, arr) => (
                  i < arr.length - 1 ? (
                    <span key={i}>{part}<span className="text-[#d7df23]">Porygon</span></span>
                  ) : part
                ))}
              </p>
            </div>
          ))}
        </div>
        
        {/* Column 2 - Scroll Up */}
        <div className="flex flex-col gap-5 animate-scroll-up-continuous">
          {[...testimonials.filter((_, i) => i % 3 === 1), ...testimonials.filter((_, i) => i % 3 === 1)].map((t, i) => (
            <div key={i} className="bg-[#111] border-2 border-white rounded-xl p-5 min-h-[150px] flex-shrink-0">
              <h3 className="font-bold text-white mb-2">
                {t.name}
                <span className="block text-sm text-[#aaa] font-normal">{t.role}</span>
              </h3>
              <p className="text-sm text-[#ddd]">
                {t.text.split('Porygon').map((part, i, arr) => (
                  i < arr.length - 1 ? (
                    <span key={i}>{part}<span className="text-[#d7df23]">Porygon</span></span>
                  ) : part
                ))}
              </p>
            </div>
          ))}
        </div>
        
        {/* Column 3 - Scroll Down */}
        <div className="flex flex-col gap-5 animate-scroll-down-continuous">
          {[...testimonials.filter((_, i) => i % 3 === 2), ...testimonials.filter((_, i) => i % 3 === 2)].map((t, i) => (
            <div key={i} className="bg-[#111] border-2 border-white rounded-xl p-5 min-h-[150px] flex-shrink-0">
              <h3 className="font-bold text-white mb-2">
                {t.name}
                <span className="block text-sm text-[#aaa] font-normal">{t.role}</span>
              </h3>
              <p className="text-sm text-[#ddd]">
                {t.text.split('Porygon').map((part, i, arr) => (
                  i < arr.length - 1 ? (
                    <span key={i}>{part}<span className="text-[#d7df23]">Porygon</span></span>
                  ) : part
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
