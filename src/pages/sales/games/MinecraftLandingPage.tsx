import { ShoppingCart, MessageSquare, Shield, Activity, Rss, Download, Server, ChevronRight } from 'lucide-react'

export default function MinecraftLandingPage() {
  return (
    <div className="pt-32 pb-24 bg-[#050505] min-h-screen text-white selection:bg-blue-500/30">
      
      {/* HERO SECTION */}
      <div className="relative max-w-7xl mx-auto px-6 mb-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607513746994-51f730a44832?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 blur-sm rounded-[3rem]" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent rounded-[3rem]" />
        
        <div className="relative z-10 py-20 lg:py-32 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Minecraft Server Yazılımı
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight max-w-4xl drop-shadow-2xl">
            Minecraft sunucun için websiteni <span className="text-gradient">hemen kur!</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl font-medium leading-relaxed">
            Otomatik ürün teslimatı, gelişmiş forum, destek sistemi ve 30'dan fazla modül ile Minecraft sunucunuzu profesyonelce yönetin. 3000'den fazla sunucunun tercihi.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-blue-500/20">
              Demo'yu İncele
            </button>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all">
              Detaylı Bilgi
            </button>
          </div>
        </div>
      </div>

      {/* CORE MODULES */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black mb-4">Her Şey Tek Platformda</h2>
          <p className="text-gray-400">Minecraft sunucunuz için ihtiyaç duyduğunuz tüm araçlar Velixo'da yerleşik olarak bulunur.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: ShoppingCart, title: 'Minecraft Mağazası', desc: 'VIP, Kredi ve Eşya satışı yapın. Oyuncular satın aldığında eşyalar anında oyuna gönderilir.' },
            { icon: MessageSquare, title: 'Minecraft Topluluğu', desc: 'Kendinize ait forum ile oyuncularınızın etkileşime girmesini, rehberler oluşturmasını sağlayın.' },
            { icon: Shield, title: 'Destek Sistemi (Ticket)', desc: 'Oyuncularınızın sorunlarını kategorize edin, hızlı ve düzenli bir şekilde çözümleyin.' },
            { icon: Activity, title: 'Sunucu İstatistikleri', desc: 'En çok satan ürünler, günlük kayıt olan oyuncular ve gelir istatistikleri tek ekranda.' },
            { icon: Rss, title: 'Sunucu Haberleri', desc: 'Sunucunuzdaki son gelişmeleri, güncellemeleri ve turnuvaları şık bir blog ile duyurun.' },
            { icon: Server, title: 'Ban & Ceza Listesi', desc: 'Litebans ve AdvancedBan ile senkronize çalışır, cezaları anında sitede gösterir.' }
          ].map((feature, i) => (
            <div key={i} className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PLUGINS SECTION */}
      <div className="bg-gradient-to-br from-[#0a0a0a] to-[#111] border-y border-white/5 py-32 mb-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black mb-6">Kusursuz Oyun İçi Entegrasyon</h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Velixo'nun özel Minecraft eklentileri sayesinde web siteniz ve oyun sunucunuz mükemmel bir uyum içinde çalışır.
            </p>
            <ul className="space-y-6">
              {[
                { title: 'Velixo Mağaza Eklentisi', desc: 'Web sitesinden alınan ürünleri anında oyuncuya verir, gecikme yaşanmaz.' },
                { title: 'Velixo Auth (Giriş)', desc: 'Oyuncular web sitesine kaydoldukları şifre ile oyuna giriş yaparlar (veya tam tersi).' },
                { title: 'Discord Senkronizasyonu', desc: 'Discord üzerinden yetki eşitlemesi ve bildirim gönderimi sağlar.' },
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-1">
                    <Download className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full" />
            <div className="bg-black border border-white/10 rounded-2xl p-6 relative z-10 font-mono text-sm text-green-400 shadow-2xl">
              <p className="text-gray-500 mb-2">// Velixo plugin command execution log</p>
              <p>[Velixo] Connecting to API... <span className="text-white">SUCCESS</span></p>
              <p>[Velixo] Checking for pending purchases...</p>
              <p>[Velixo] Found purchase: VIP for Notch</p>
              <p>[Velixo] Executing: /lp user Notch parent set vip</p>
              <p>[Velixo] <span className="text-blue-400">Successfully delivered VIP to Notch!</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-6">Minecraft Sunucunuzu Yükseltin</h2>
        <p className="text-xl text-gray-400 mb-10">
          Aylık veya ömür boyu lisans seçenekleriyle hemen başlayın.
        </p>
        <button className="bg-white text-black px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-200 transition-colors shadow-xl shadow-white/10 flex items-center gap-2 mx-auto">
          Fiyatları İncele <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  )
}
