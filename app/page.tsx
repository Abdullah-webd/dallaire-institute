import Navigation from "@/components/navigation"
import HeroSection from "@/components/sections/hero-section"
import OurStorySection from "@/components/sections/our-story-section"
import OurApproachSection from "@/components/sections/our-approach-section"
import WhatsNewSection from "@/components/sections/whats-new-section"
import LatestSection from "@/components/sections/latest-section"
import VancouverPrinciplesSection from "@/components/sections/vancouver-principles-section"
import TheoryMeetsActionSection from "@/components/sections/theory-meets-action-section"
import DonateSection from "@/components/sections/donate-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full bg-white">
      <Navigation />
      <HeroSection />
      <OurStorySection />
      <OurApproachSection />
      <WhatsNewSection />
      <LatestSection />
      <VancouverPrinciplesSection />
      <TheoryMeetsActionSection />
      <DonateSection />
      <Footer />
    </main>
  )
}
