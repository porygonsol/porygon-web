'use client'

export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-black border-t-4 border-[#d7df23]">
      <div className="w-full max-w-none">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Left Side - ASCII Art Porygon Text */}
          <div className="w-full lg:w-3/5 flex items-center justify-center lg:justify-start overflow-x-auto">
            <pre className="text-[#d7df23] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-mono leading-tight whitespace-pre">
{` ____   __  ____  _  _  ___   __   __ _  _  
(  _ \\ /  \\(  _ \\( \\/ )/ __) /  \\ (  ( \\/ \\ 
 ) __/(  O ))   / )  /( (_ \\(  O )/    /\\_/ 
(__)   \\__/(__\\_)(__/  \\___/ \\__/ \\_)__)(_)`}
            </pre>
          </div>
          
          {/* Right Side - Button, Credit, and Social Links */}
          <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-center gap-4 sm:gap-6">
            <a
              href="#appointments"
              className="bg-[#d7df23] hover:bg-[#c5cd1f] text-black font-bold px-8 sm:px-12 py-4 sm:py-5 rounded-full transition glow-btn text-lg sm:text-xl"
            >
              Book a Call
            </a>
            
            <p className="text-[#aaa] text-base sm:text-lg text-center">
              Designed by <span className="text-[#d7df23]">Sham</span>
            </p>
            
            {/* Social Links with Circles */}
            <div className="flex gap-3 sm:gap-4 mt-2 sm:mt-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/porygonsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#d7df23] flex items-center justify-center text-[#d7df23] hover:bg-[#d7df23] hover:text-black transition-all"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a
                href="https://www.instagram.com/porygonsol?igsh=dHlkY3F2MTlkbWxv&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#d7df23] flex items-center justify-center text-[#d7df23] hover:bg-[#d7df23] hover:text-black transition-all"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Section with Tamil Quote - No Border */}
        <div className="pt-6 sm:pt-8 text-center">
          <p className="text-[#d7df23] text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 font-semibold px-4">
            வாரி பெருக்கி வளம்படுத்து உற்றவை ஆராய்வான் செய்க வினை
          </p>
          <p className="text-[#888] text-xs sm:text-sm">
            © {new Date().getFullYear()} Porygon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
