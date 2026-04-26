import { Gamepad2, Server, Cpu, Box, Shield, Zap } from 'lucide-react'

const GAMES = [
  { name: 'Minecraft', icon: Box, color: 'text-green-400' },
  { name: 'FiveM', icon: Gamepad2, color: 'text-orange-400' },
  { name: 'Rust', icon: Shield, color: 'text-red-400' },
  { name: 'ARK', icon: Cpu, color: 'text-cyan-400' },
  { name: 'CS:GO / CS2', icon: Zap, color: 'text-yellow-400' },
  { name: 'Unturned', icon: Server, color: 'text-lime-400' },
  { name: 'Garry\'s Mod', icon: Gamepad2, color: 'text-blue-400' },
  { name: 'Roblox', icon: Box, color: 'text-pink-400' },
  { name: 'Hytale', icon: Cpu, color: 'text-purple-400' },
]

const INFRA = [
  { name: 'cPanel', emoji: '🖥️' },
  { name: 'Plesk', emoji: '🔧' },
  { name: 'Docker', emoji: '🐳' },
  { name: 'Ubuntu', emoji: '🐧' },
  { name: 'Nginx', emoji: '⚡' },
  { name: 'Apache', emoji: '🪶' },
]

const ALL_FEATURES = [
  'Mağaza', 'Forum', 'Blog', 'Destek Talebi', 'Yardım Merkezi', 'Kredi Sistemi',
  'Liderlik Tablosu', 'Şans Çarkı', 'Pazar Yeri', 'Oylama', 'Öneriler',
  'Topluluk Hedefleri', 'Oyun Gecesi', 'İndirme Merkezi', 'Oyun Modları',
  'Hediye Kodları', 'CMS Sayfaları', 'Slider', 'Duyurular', 'Ekip Sayfası',
  'Discord Sync', 'Kupon Sistemi', 'API & SDK', 'Otomatik Teslimat',
]

export default function GamesAndMoreSection() {
  return (
    <>
      {/* Altyapı uyumluluğu & Modüller */}
      <section className="py-24 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-bold text-blue-500 mb-4 tracking-wider uppercase flex items-center gap-2">
                <Server className="w-4 h-4" /> UYUMLULUK
              </p>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Kendi sunucunda <span className="text-blue-500">barındır</span></h2>
              <p className="text-gray-400 mb-8 leading-relaxed text-lg font-medium">
                Sitenizi kendi Ubuntu sunucunuzda veya paylaşımlı hosting (cPanel, Plesk) üzerinde barındırabilirsiniz. İstediğiniz gibi kurun, özgürce yönetin.
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-full font-bold text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  Altyapıları İncele
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {INFRA.map((item) => (
                <div key={item.name} className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 text-center hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300">
                  <span className="text-4xl mb-3 block">{item.emoji}</span>
                  <p className="text-sm font-bold text-gray-300">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tüm özellikler grid */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Tek yazılımda <span className="text-blue-500">her şey</span></h2>
            <p className="text-gray-400 text-lg font-medium">İhtiyacınız olan tüm modüller hazır, hepsi tek bir pakette.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {ALL_FEATURES.map((f) => (
              <div key={f} className="bg-[#0a0a0a] border border-white/5 rounded-2xl px-4 py-4 text-center text-sm font-bold text-gray-400 hover:border-blue-500/50 hover:text-white hover:bg-blue-500/10 hover:-translate-y-1 transition-all cursor-default">
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Son CTA (Pre-Footer) */}
      <section className="py-24 border-t border-white/5 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Siteni hemen şimdi <span className="text-blue-500">oluştur!</span>
          </h2>
          <p className="text-gray-400 mb-10 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Binlerce sunucunun tercih ettiği yazılımla sen de topluluğunu bir üst seviyeye taşı, satışlarını artır.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#pricing" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-bold text-sm transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] w-full sm:w-auto">
              Hemen Satın Al
            </a>
            <a href="#demo" className="bg-white hover:bg-gray-100 text-black px-10 py-4 rounded-full font-bold text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full sm:w-auto">
              Demo'yu İncele
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
