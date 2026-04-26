import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import HeroSection from '../sections/HeroSection'
import ThemesSection from '../sections/ThemesSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <ThemesSection />
      <Footer />
    </div>
  )
}
