import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { Menu, X, Sparkles } from 'lucide-react'
import TopBanner from './TopBanner'

const NAV_LINKS = [
  { label: 'Özellikler', href: '/ozellikler' },
  { label: 'Fiyatlandırma', href: '/fiyatlandirma' },
  { label: 'Desteklenen Oyunlar', href: '/oyunlar' },
  { label: 'Temalar', href: '/themes' },
  { label: 'AI', href: '/ai', icon: Sparkles, color: 'text-blue-500' },
  { label: 'Demo', href: '/demo/lester/minecraft' },
  { label: 'Yardım Merkezi', href: '/yardim' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <TopBanner />
      <nav className={`fixed w-full z-50 transition-all duration-300 px-4 sm:px-6 pt-6 pointer-events-none`}>
        <div className={`max-w-7xl mx-auto rounded-full pointer-events-auto transition-all duration-300 ${scrolled ? 'bg-[#1a1a1a]/80 backdrop-blur-md shadow-2xl border border-white/10' : 'bg-[#1a1a1a]/40 backdrop-blur-sm border border-white/5'}`}>
          <div className="px-6 h-16 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-xl font-black tracking-tighter">
              <span className="text-white">Velixo</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="px-4 py-2 rounded-full text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1.5"
                >
                  {link.icon && <link.icon className={`w-3.5 h-3.5 ${link.color}`} />}
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right Side */}
            <div className="hidden md:flex items-center">
              <Link to="/login" className="text-sm font-bold px-6 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors shadow-lg shadow-white/10">
                Oturum aç
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button className="lg:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="block text-sm font-medium text-gray-300 hover:text-white" onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link to="/login" className="text-sm text-center text-gray-300">Giriş Yap</Link>
            <Link to="/register" className="text-sm text-center font-semibold px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600">Kayıt Ol</Link>
          </div>
        </div>
      )}
      </nav>
    </>
  )
}
