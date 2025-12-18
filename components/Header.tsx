'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [text, setText] = useState('')
  const [showNavbar, setShowNavbar] = useState(false)
  const [typingComplete, setTypingComplete] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const fullText = 'Porygon'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1))
        index++
      } else {
        setTypingComplete(true)
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroSectionHeight = window.innerHeight * 0.9 // 90% of viewport height
      
      if (isMobile) {
        // Mobile behavior: Show navbar after typing completes AND user scrolls past hero
        if (typingComplete && scrollY > heroSectionHeight) {
          setShowNavbar(true)
        } else if (scrollY < heroSectionHeight * 0.3) {
          // Hide navbar when user scrolls back near typing animation (top 30% of hero)
          setShowNavbar(false)
        }
      } else {
        // Desktop behavior: Show navbar after scrolling 200px (unchanged)
        setShowNavbar(scrollY > 200)
      }
    }
    
    // Initial check
    checkMobile()
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [typingComplete, isMobile])

  return (
    <>
      {/* Hero Header - Full Screen */}
      <header className="h-screen flex justify-center items-center bg-transparent">
        <div className="flex items-center gap-2 sm:gap-4 px-4">
          <Image 
            src="/icon.png" 
            alt="Porygon Logo" 
            width={80}
            height={80}
            className="w-16 h-16 sm:w-20 sm:h-20"
          />
          <h1 className="text-[#d7df23] font-bold text-4xl sm:text-6xl md:text-8xl lg:text-[9rem]">
            {text}<span className="animate-pulse">_</span>
          </h1>
        </div>
      </header>

      {/* Fixed Navigation Bar */}
      {showNavbar && (
        <nav 
          className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
            isMobile 
              ? 'transform translate-y-0 opacity-100' 
              : ''
          }`}
          style={{
            background: isMobile 
              ? 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(17,17,17,0.75) 50%, rgba(0,0,0,0.85) 100%)'
              : 'rgba(0,0,0,0.95)',
            backdropFilter: 'blur(25px) saturate(180%)',
            WebkitBackdropFilter: 'blur(25px) saturate(180%)',
            borderBottom: isMobile 
              ? '1px solid rgba(215,223,35,0.4)' 
              : '1px solid rgba(215,223,35,0.3)',
            boxShadow: isMobile 
              ? '0 8px 32px 0 rgba(0,0,0,0.37), inset 0 1px 0 0 rgba(255,255,255,0.05)'
              : 'none'
          }}
        >
          <div className="h-[60px] sm:h-[70px] flex items-center justify-center w-full">
            <div className="flex items-center gap-2 justify-center">
              <Image 
                src="/icon.png" 
                alt="Porygon Logo" 
                width={28}
                height={28}
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-[#d7df23] font-bold text-base sm:text-lg">
                Porygon
              </span>
            </div>
          </div>
        </nav>
      )}
    </>
  )
}
