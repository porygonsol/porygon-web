'use client'

export default function Appointments() {
  return (
    <section id="appointments" className="py-24 px-5 bg-[#111]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl text-[#d7df23] mb-4">
          Book Your Consultation
        </h2>
        <p className="text-[#ccc] mb-12">
          Schedule a call with our team to discuss your project
        </p>
        
        <div className="bg-black border-2 border-[#d7df23] rounded-xl p-4 md:p-8 overflow-hidden">
          {/* Cal.com iFrame Embed - Shows calendar inline */}
          <iframe
            src="https://cal.com/shane-israel-mdk9rm"
            width="100%"
            height="700"
            frameBorder="0"
            style={{
              border: 'none',
              borderRadius: '8px',
              minHeight: '700px'
            }}
            title="Book a consultation"
            allow="camera; microphone; autoplay; display-capture"
          />
        </div>
      </div>
    </section>
  )
}
