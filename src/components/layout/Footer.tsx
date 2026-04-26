import { Link } from 'react-router'
import { Facebook, Twitter, Instagram, Youtube, Gamepad2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Sütun 1: ŞİRKET */}
        <div>
          <h3 className="text-white font-black mb-6 tracking-wide">ŞİRKET</h3>
          <ul className="space-y-4 text-sm font-bold text-gray-500">
            <li><Link to="/iletisim" className="hover:text-white transition-colors">İletişim & Bize Ulaşın</Link></li>
            <li><Link to="/hakkimizda" className="hover:text-white transition-colors">Hakkımızda</Link></li>
            <li><Link to="/banka-hesaplari" className="hover:text-white transition-colors">Banka Hesaplarımız</Link></li>
            <li><Link to="/marka" className="hover:text-white transition-colors">Marka Varlıkları</Link></li>
          </ul>
        </div>

        {/* Sütun 2: ÜRÜN */}
        <div>
          <h3 className="text-white font-black mb-6 tracking-wide">ÜRÜN</h3>
          <ul className="space-y-4 text-sm font-bold text-gray-500">
            <li><Link to="/ozellikler" className="hover:text-white transition-colors">Özellikler & Modüller</Link></li>
            <li><Link to="/themes" className="hover:text-white transition-colors">Premium Temalar</Link></li>
            <li><Link to="/fiyatlandirma" className="hover:text-white transition-colors">Fiyatlandırma</Link></li>
            <li><Link to="/demo/lester/minecraft" className="hover:text-white transition-colors">Canlı Önizleme (Demo)</Link></li>
          </ul>
        </div>

        {/* Sütun 3: YASAL */}
        <div>
          <h3 className="text-white font-black mb-6 tracking-wide">YASAL</h3>
          <ul className="space-y-4 text-sm font-bold text-gray-500">
            <li><Link to="/legal/kullanim-kosullari" className="hover:text-white transition-colors">Kullanım Koşulları</Link></li>
            <li><Link to="/legal/gizlilik-sozlesmesi" className="hover:text-white transition-colors">Gizlilik Sözleşmesi</Link></li>
            <li><Link to="/legal/teslimat-iade" className="hover:text-white transition-colors">Teslimat & İade Politikası</Link></li>
            <li><Link to="/legal/kvkk" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</Link></li>
          </ul>
        </div>

        {/* Sütun 4: SOSYAL */}
        <div>
          <h3 className="text-white font-black mb-6 tracking-wide">SOSYAL</h3>
          <ul className="space-y-4 text-sm font-bold text-gray-500">
            <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
          </ul>
        </div>
      </div>

      {/* Top Bar for status/license */}
      <div className="max-w-7xl mx-auto px-6 pb-8">
        <div className="flex flex-wrap gap-4 text-sm font-bold text-gray-500">
          <Link to="/lisans-kontrol" className="hover:text-white transition-colors">Lisans Doğrulama</Link>
          <span>•</span>
          <a href="#" className="hover:text-white transition-colors">Sistem Durumu</a>
          <span>•</span>
          <Link to="/yardim" className="hover:text-white transition-colors">Yardım Merkezi</Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Gamepad2 className="w-8 h-8 text-blue-500" />
          <p className="text-sm font-medium">
            © 2026 Velixo Bilişim Teknolojileri. Tüm hakları saklıdır.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {/* ETBIS Fake Badge */}
          <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs font-bold text-gray-400">
            ETBİS'E KAYITLIDIR
          </div>
          <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-3 py-1.5 rounded-lg text-green-400 text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Tüm Sistemler Aktif
          </div>
        </div>
      </div>
    </footer>
  )
}
