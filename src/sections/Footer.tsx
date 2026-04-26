import { Instagram, Youtube, MessageCircle, CheckCircle } from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'Blog', href: '#' },
    { label: 'Hakkımızda', href: '#' },
    { label: 'İletişim', href: '#' },
    { label: 'Sistem Durumu', href: '#' },
    { label: 'Bilgi Bankası', href: '#' },
  ],
  product: [
    { label: 'Desteklenen Oyunlar', href: '#games' },
    { label: 'Özellikler', href: '#features' },
    { label: 'Fiyatlandırma', href: '#pricing' },
    { label: 'Değişiklik Günlüğü', href: '#' },
    { label: 'Demo', href: '#demo' },
  ],
  legal: [
    { label: 'Kullanım Koşulları', href: '#' },
    { label: 'Gizlilik Politikası', href: '#' },
    { label: 'Çerez Politikası', href: '#' },
    { label: 'GDPR SCC', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">leaderos</span>
            </a>
            <p className="text-zinc-500 text-sm leading-relaxed mb-4">
              Oyun sunucuları için kapsamlı web çözümü. 30+ modül, AI desteği ve tam özelleştirilebilir temalar.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Şirket</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Ürün</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Yasal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">
            © 2026 LeaderOS. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Tüm Sistemler Operasyonel
          </div>
        </div>
      </div>
    </footer>
  );
}
