import HeroSection from "@/components/HeroSection"
import SubHeroSection from "@/components/SubHeroSection"
import AboutPreview from "@/components/AboutPreview"
import TestimonialsSection from "@/components/TestimonialsSection"

import { Button } from "@/components/ui/button"
import CtaSection from "@/components/CtaSection"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      <SubHeroSection/>
      <AboutPreview/>
      <TestimonialsSection/>
      <CtaSection/>
    </>
  )
}
