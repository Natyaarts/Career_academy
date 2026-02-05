'use client';

import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Programs from '@/components/home/Programs';
import WhyChoose from '@/components/home/WhyChoose';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Programs />
      <WhyChoose />
    </div>
  );
}
