import { ShoppingCart, Users, Server, Clock, Gamepad2, Copy, MessageCircle, ArrowRight, User, Lock } from 'lucide-react'
import { Link } from 'react-router'

export default function HyterraTheme({ page = 'home' }: { page?: 'home' | 'login' | 'register' }) {
  return (
    <div className="min-h-full bg-[#0a0f0d] text-white font-sans selection:bg-emerald-500/30">
      
      {/* HYTERRA NAVBAR */}
      <nav className="sticky top-0 left-0 right-0 z-50 bg-[#0a0f0d]/80 backdrop-blur-md border-b-2 border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <a href="#" className="flex items-center gap-3">
              <div className="w-12 h-12 skew-x-[-15deg] bg-emerald-500 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                <Gamepad2 className="w-6 h-6 text-black skew-x-[15deg]" />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
                HYTERRA
              </span>
            </a>

            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-black uppercase tracking-wider text-emerald-400 border-b-4 border-emerald-500 py-7">Anasayfa</a>
              <a href="#" className="text-sm font-black uppercase tracking-wider text-gray-400 hover:text-white transition-colors py-7">Mağaza</a>
              <a href="#" className="text-sm font-black uppercase tracking-wider text-gray-400 hover:text-white transition-colors py-7">Forum</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/demo/hyterra/login" className="skew-x-[-10deg] bg-emerald-500 hover:bg-emerald-400 text-black px-6 py-2.5 font-black uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] inline-block">
              <span className="skew-x-[10deg] block">Giriş Yap</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* HYTERRA HERO */}
      <div className="relative pt-24 pb-24 lg:pt-32 lg:pb-32 overflow-hidden border-b-4 border-emerald-900/50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0d] via-transparent to-[#0a0f0d]/80" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-6xl lg:text-8xl font-black mb-4 uppercase tracking-tighter drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            HYTERRA <span className="text-emerald-500">NETWORK</span>
          </h1>

          <p className="text-xl text-emerald-100/60 font-bold mb-10 max-w-2xl uppercase tracking-widest">
            Sınırsız Eğlence, Gerçek Rekabet
          </p>

          <button className="group relative flex items-center justify-between w-full max-w-sm bg-black/50 border-2 border-emerald-500/30 p-2 hover:border-emerald-500 transition-colors skew-x-[-5deg]">
            <div className="flex flex-col items-start px-4 skew-x-[5deg]">
      {/* CONDITIONAL CONTENT */}
      {page === 'home' && (
        <>
          {/* HYTERRA HERO SECTION */}
          <div className="relative pt-24 pb-24 lg:pt-32 lg:pb-32 overflow-hidden bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 text-center flex flex-col items-center">
              
              <div className="skew-x-[-10deg] bg-emerald-500/10 border border-emerald-500/30 px-6 py-2 mb-8 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <span className="skew-x-[10deg] block text-emerald-400 font-black tracking-widest uppercase text-sm">
                  Hardcore Gaming
                </span>
              </div>

              <h1 className="text-6xl lg:text-8xl font-black mb-6 tracking-tighter uppercase text-white drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                Korkusuzca <span className="text-emerald-500">Savaş</span>
              </h1>

              <p className="text-xl text-gray-400 mb-10 max-w-2xl font-bold tracking-wide">
                Zayıflara yer yok. Hayatta kal, geliş ve sunucunun efendisi ol.
              </p>

              <button className="group relative flex items-center justify-between w-full max-w-sm bg-black/50 border border-emerald-500/30 p-2 hover:border-emerald-500 transition-colors skew-x-[-10deg]">
                <div className="flex flex-col items-start px-4 skew-x-[10deg]">
                  <span className="text-[10px] text-emerald-500/70 font-black uppercase tracking-widest">Sunucu IP</span>
                  <span className="text-xl font-black text-white group-hover:text-emerald-400 transition-colors">play.hyterra.com</span>
                </div>
                <div className="w-14 h-14 bg-emerald-500 flex items-center justify-center text-black group-hover:scale-105 transition-transform skew-x-[10deg]">
                  <Copy className="w-6 h-6" />
                </div>
              </button>

              {/* HYTERRA STATS ROW */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 w-full max-w-4xl">
                {[
                  { icon: Users, val: '1,240', label: 'Aktif Oyuncu' },
                  { icon: Server, val: '50,000+', label: 'Kayıtlı Oyuncu' },
                  { icon: Clock, val: '24/7', label: 'Çevrimiçi Destek' },
                ].map((stat, i) => (
                  <div key={i} className="bg-black/40 border border-white/5 p-6 flex flex-col items-center justify-center skew-x-[-10deg] hover:border-emerald-500/30 transition-colors">
                    <div className="skew-x-[10deg] flex flex-col items-center">
                      <stat.icon className="w-8 h-8 text-emerald-500 mb-4" />
                      <span className="text-4xl font-black text-white tracking-tighter mb-1">{stat.val}</span>
                      <span className="text-xs font-black text-gray-500 uppercase tracking-widest">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* HYTERRA MAIN CONTENT */}
          <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-24 grid lg:grid-cols-3 gap-8 relative z-20 -mt-10">
            {/* News Section */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-black uppercase tracking-tighter text-white flex items-center gap-4">
                  <span className="w-4 h-4 bg-emerald-500 rotate-45 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                  Son Duyurular
                </h2>
              </div>

              <div className="group bg-[#111] border border-white/5 hover:border-emerald-500/30 overflow-hidden transition-colors flex flex-col sm:flex-row relative">
                {/* Dekoratif Köşe */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 skew-x-[-45deg] translate-x-8 -translate-y-8" />

                <div className="sm:w-64 h-48 sm:h-auto relative overflow-hidden shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1627856013091-fed6e4e048f6?q=80&w=1000&auto=format&fit=crop"
                    alt="News" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-500 text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 skew-x-[-10deg]">
                    <span className="skew-x-[10deg] block">GÜNCELLEME</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-500" /> 12 Eki</span>
                    <span className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-emerald-500" /> 24 Yorum</span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 group-hover:text-emerald-400 transition-colors uppercase tracking-tight">
                    Yeni Sezon Başladı!
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6 font-medium">
                    Ekonomiye hükmet, klanını geliştir ve liderlik tablosunda yerini al. Zayıflara merhamet yok.
                  </p>
                  <button className="text-xs font-black uppercase tracking-widest text-emerald-500 flex items-center gap-2 hover:text-emerald-400 transition-colors w-max">
                    Devamını Oku <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar Widgets */}
            <div className="space-y-8 mt-16 lg:mt-0">
              <div>
                <h2 className="text-3xl font-black uppercase tracking-tighter text-white flex items-center gap-4 mb-8">
                  <span className="w-4 h-4 bg-red-500 rotate-45 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                  Öne Çıkan
                </h2>
                
                <div className="bg-[#111] border border-white/5 p-6 relative group overflow-hidden text-center">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-500/20 rounded-full blur-xl" />
                  <div className="absolute top-4 left-4 bg-red-500 text-white font-black text-[10px] uppercase tracking-widest px-3 py-1 skew-x-[-10deg]">
                    <span className="skew-x-[10deg] block">-25%</span>
                  </div>
                  
                  <div className="w-32 h-32 mx-auto bg-black border border-white/10 rotate-45 mb-10 mt-6 flex items-center justify-center group-hover:border-emerald-500/30 transition-colors">
                    <ShoppingCart className="w-12 h-12 text-white/50 -rotate-45 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">VIP Üyelik</h3>
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <span className="text-lg text-gray-600 font-bold line-through">100₺</span>
                    <span className="text-4xl font-black text-emerald-500">75₺</span>
                  </div>
                  
                  <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-black uppercase tracking-widest py-4 skew-x-[-10deg] transition-all">
                    <span className="skew-x-[10deg] block">Sepete Ekle</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* LOGIN/REGISTER PAGE CONTENT */}
      {(page === 'login' || page === 'register') && (
        <div className="relative pt-32 pb-24 lg:pt-40 lg:pb-40 overflow-hidden flex justify-center items-center bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/90" />
          
          <div className="bg-[#111] border-2 border-emerald-500/30 p-8 w-full max-w-md relative z-10 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
            <h2 className="text-3xl font-black text-white text-center uppercase tracking-tighter mb-2">
              {page === 'login' ? 'KİMLİK DOĞRULAMA' : 'YENİ ASKER'}
            </h2>
            <p className="text-emerald-500/70 text-center text-xs font-bold uppercase tracking-widest mb-8">
              Sunucuya erişim için yetkilendirme gerekli.
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Oyuncu Adı</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                  <input type="text" className="w-full bg-black border border-white/10 py-4 pl-12 pr-4 text-white focus:border-emerald-500 outline-none transition-colors skew-x-[-5deg]" placeholder="IGN" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Parola</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                  <input type="password" className="w-full bg-black border border-white/10 py-4 pl-12 pr-4 text-white focus:border-emerald-500 outline-none transition-colors skew-x-[-5deg]" placeholder="••••••••" />
                </div>
              </div>

              <button type="button" className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-black uppercase tracking-widest py-4 skew-x-[-10deg] transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] mt-6">
                <span className="skew-x-[10deg] block">{page === 'login' ? 'BAĞLANTI KUR' : 'KAYIT OL'}</span>
              </button>
            </form>

            <div className="mt-8 text-center">
              <Link to={page === 'login' ? '/demo/hyterra/register' : '/demo/hyterra/login'} className="text-emerald-500 hover:text-emerald-400 text-xs font-black uppercase tracking-widest">
                {page === 'login' ? 'Yetkin yok mu? İzin iste.' : 'Zaten yetkili misin? Bağlan.'}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
