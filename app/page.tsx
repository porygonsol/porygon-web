'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ScrollRevealSection from '@/components/ScrollRevealSection'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
//import Plans from '@/components/Plans'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import Appointments from '@/components/Appointments'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ScrollRevealSection />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <About />
      <Appointments />
      <FAQ />
      <Footer />
    </main>
  )
}
