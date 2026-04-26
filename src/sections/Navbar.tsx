import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Özellikler', href: '#features' },
    { label: 'Fiyatlandırma', href: '#pricing' },
    { label: 'Desteklenen Oyunlar', href: '#games' },
    { label: 'Temalar', href: '#themes' },
    { label: 'AI', href: '#ai' },
    { label: 'Demo', href: '#demo' },
    { label: 'Yardım Merkezi', href: '#faq' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-xl border-b border-white/5'
            : 'bg-black/60 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">leaderos</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#3b82f6] rounded-full group-hover:w-4/5 transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Right CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="text-zinc-400 hover:text-white hover:bg-white/5"
              >
                <Globe className="w-4 h-4 mr-1" />
                TR
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-zinc-400 hover:text-white hover:bg-white/5"
              >
                Giriş Yap
              </Button>
              <Button
                size="sm"
                className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold px-4"
              >
                Kayıt Ol
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-zinc-400 hover:text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-20 px-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-zinc-300 hover:text-white py-3 border-b border-zinc-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-6">
              <Button
                variant="outline"
                className="w-full border-zinc-700 text-white hover:bg-zinc-800"
              >
                Giriş Yap
              </Button>
              <Button className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold">
                Kayıt Ol
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
