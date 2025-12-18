export default function About() {
  return (
    <section className="py-24 px-5 bg-black text-center">
      <h2 className="text-2xl md:text-4xl text-[#d7df23] mb-12">About Us</h2>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-20 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-[#d7df23] rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 className="font-bold text-white mb-2 text-sm">Name</h3>
          <p className="text-[#aaa] text-sm whitespace-nowrap">Sham and Shane</p>
        </div>
        
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-[#d7df23] rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-bold text-white mb-2 text-sm">Email</h3>
          <p className="text-[#aaa] text-sm">porygonsolutions@gmail.com</p>
        </div>
        
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-[#d7df23] rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="font-bold text-white mb-2 text-sm">Location</h3>
          <p className="text-[#aaa] text-sm whitespace-nowrap">Tamil Nadu, INDIA</p>
        </div>
      </div>
    </section>
  )
}
