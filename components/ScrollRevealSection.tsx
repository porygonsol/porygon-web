'use client'

import ScrollReveal from './ScrollReveal'

export default function ScrollRevealSection() {
  return (
    <section className="py-32 px-5 bg-black">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={9}
          blurStrength={10}
          containerClassName="text-center"
          textClassName="text-[#d7df23]"
        >
          We don't just build websites. We craft digital experiences that convert visitors into customers, turning your vision into a high-performing online presence that drives real business growth.
        </ScrollReveal>
      </div>
    </section>
  )
}
