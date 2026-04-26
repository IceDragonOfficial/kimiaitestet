import { ShoppingCart, Users, Server, Clock, Gamepad2, Copy, Search, MessageCircle, ArrowRight } from 'lucide-react'

// LESTER THEME - 1:1 LeaderOS Clone (Dark, Modern Gaming)
export default function MinecraftTemplate() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30">
      
      {/* LESTER NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">VelixoCraft</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-semibold text-blue-400 relative py-8">
                Anasayfa
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-t-full shadow-[0_-2px_10px_rgba(59,130,246,0.5)]" />
              </a>
              <a href="#" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors py-8">Mağaza</a>
              <a href="#" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors py-8">Forum</a>
              <a href="#" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors py-8">Sıralama</a>
              <a href="#" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors py-8">Destek</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <div className="text-xs font-semibold text-gray-300">
                <span className="text-white">1,240</span> Çevrimiçi
              </div>
            </div>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors">
              Kayıt Ol
            </button>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors shadow-lg shadow-blue-500/20">
              Giriş Yap
            </button>
          </div>
        </div>
      </nav>

      {/* LESTER HERO SECTION */}
      <div className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Image & Gradients */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607513746994-51f730a44832?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-[#050505]/80 to-[#050505]" />
        
        {/* Blue Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider mb-8 text-gray-300">
            <Gamepad2 className="w-4 h-4 text-blue-400" /> LeaderOS Güvencesiyle
          </div>

          <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight drop-shadow-2xl">
            Sınırsız Maceraya <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Katılın</span>
          </h1>

          <p className="text-lg text-gray-400 mb-10 max-w-2xl font-medium leading-relaxed">
            Türkiye'nin en gelişmiş survival deneyimi. Klanını kur, ekonomiye hükmet ve liderlik tablosunun zirvesine yerleş.
          </p>

          <button className="group relative flex items-center justify-between w-full max-w-sm bg-[#0a0a0a] border border-white/10 p-2 rounded-2xl hover:border-blue-500/50 transition-colors">
            <div className="flex flex-col items-start px-4">
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Sunucu IP Adresi</span>
              <span className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">play.velixocraft.com</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Copy className="w-5 h-5" />
            </div>
          </button>

          {/* LESTER STATS ROW */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-4xl">
            {[
              { icon: Users, val: '1,240', label: 'Aktif Oyuncu' },
              { icon: Server, val: '50,000+', label: 'Kayıtlı Oyuncu' },
              { icon: Clock, val: '24/7', label: 'Çevrimiçi Destek' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center backdrop-blur-sm">
                <stat.icon className="w-8 h-8 text-blue-400 mb-4 opacity-80" />
                <span className="text-3xl font-black text-white tracking-tight mb-1">{stat.val}</span>
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* LESTER MAIN CONTENT (Store Preview & News) */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-24 grid lg:grid-cols-3 gap-8">
        
        {/* News Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <div className="w-2 h-6 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" /> 
              Son Duyurular
            </h2>
            <button className="text-sm font-semibold text-gray-400 hover:text-white transition-colors">Tümünü Gör &rarr;</button>
          </div>

          {[1, 2].map((news) => (
            <div key={news} className="group bg-[#0a0a0a] border border-white/5 hover:border-white/10 rounded-3xl overflow-hidden transition-colors flex flex-col sm:flex-row">
              <div className="sm:w-64 h-48 sm:h-auto relative overflow-hidden shrink-0">
                <img 
                  src={`https://images.unsplash.com/photo-1627856013091-fed6e4e048f6?q=80&w=1000&auto=format&fit=crop`}
                  alt="News" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-blue-500/20">
                  GÜNCELLEME
                </div>
              </div>
              <div className="p-6 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs font-medium text-gray-500 mb-3">
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 12 Ekim 2026</span>
                  <span className="flex items-center gap-1.5"><MessageCircle className="w-3.5 h-3.5" /> 24 Yorum</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  Skyblock V2: Yeni Sezon, Yeni Ekonomi!
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 mb-4">
                  Sunucumuzun merakla beklenen Skyblock V2 sezonu bu cuma günü açılıyor. Yeni spawner mantığı, gelişmiş ada sistemi ve devasa ekonomi değişiklikleri sizleri bekliyor.
                </p>
                <button className="text-sm font-semibold text-blue-400 flex items-center gap-1.5">
                  Devamını Oku <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-8">
          
          {/* LESTER STORE CARD (Exact replica of store items described) */}
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
              <div className="w-2 h-6 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" /> 
              Öne Çıkan Ürün
            </h2>
            
            <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-6 relative group overflow-hidden">
              {/* Discount Badge */}
              <div className="absolute top-4 left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-sm shadow-lg shadow-blue-500/20 z-10">
                -25%
              </div>
              
              <div className="aspect-square bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-2xl mb-6 p-8 flex items-center justify-center border border-white/5">
                <ShoppingCart className="w-24 h-24 text-white/50 group-hover:scale-110 transition-transform duration-500" />
              </div>
              
              <h3 className="text-xl font-bold text-white text-center mb-1">VIP Üyelik (30 Gün)</h3>
              <p className="text-sm text-gray-400 text-center mb-4">Sunucuda özel yetkilere sahip olun.</p>
              
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="text-lg text-red-400 font-bold line-through">100.00₺</span>
                <span className="text-3xl font-black text-blue-400">75.00₺</span>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-500/20">
                Sepete Ekle
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
