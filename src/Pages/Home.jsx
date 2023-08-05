import HeroSection from '../Components/HeroSection'
import AboutSection from '../Components/AboutSection'
import Gallery from '../Components/GallerySection'
import Specials from '../Components/SpecializationSection'

export default function Home() {
  return (
    <div className="mx-auto max-w-[1200px] px-clamp py-5">
      <HeroSection />
      <AboutSection />
      <Gallery />
      <Specials />
    </div>
  )
}
