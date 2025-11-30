// src/app/page.tsx
import HeroSection from '../components/home/HeroSection'
import ServicesSection from '../components/home/ServicesSection'
import MastersSection from '../components/home/MastersSection'
import WorkSection from '../components/home/WorkSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <MastersSection />
      <WorkSection /> 
    </>
  )
}


