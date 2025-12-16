'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])

  return (
    <section className={`mt-[100vh] py-32 px-5 bg-[#111] text-center max-w-4xl mx-auto transition-all duration-700 ${
      show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <h1 className="text-3xl md:text-5xl leading-relaxed text-[#d7df23] mb-6">
        We build websites that turn visitors into paying customers.
      </h1>
      
      <p className="text-base md:text-lg text-[#ccc] leading-relaxed max-w-2xl mx-auto mb-8">
        High-converting websites designed with strategic copy and seamless development 
        to attract ready-to-buy customers—helping brands worldwide turn visitors into loyal clients 
        and drive growth.
      </p>
      
      <a 
        href="#appointments" 
        className="inline-block bg-[#d7df23] hover:bg-[#c5cd1f] text-black font-bold px-8 py-4 rounded-full transition glow-btn"
      >
        Book a Call With Sham/Shane
      </a>
    </section>
  )
}
