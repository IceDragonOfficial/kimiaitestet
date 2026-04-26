import { ShoppingCart, Users, Server, Clock, Gamepad2, Copy, MessageCircle, ArrowRight, User, Lock } from 'lucide-react'
import { Link } from 'react-router'

export default function GaleTheme({ page = 'home' }: { page?: 'home' | 'login' | 'register' }) {
  return (
    <div className="min-h-full bg-[#fdfaf6] text-slate-800 font-sans selection:bg-orange-500/30">
      
      {/* GALE NAVBAR */}
      <nav className="sticky top-4 left-4 right-4 z-50 bg-white/80 backdrop-blur-xl border border-orange-500/10 shadow-lg shadow-orange-500/5 rounded-3xl mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <a href="#" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/30">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900">Velixo<span className="text-orange-500">Gale</span></span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-bold text-orange-600 bg-orange-50 px-4 py-2 rounded-xl">Anasayfa</a>
              <a href="#" className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors px-2">Mağaza</a>
              <a href="#" className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors px-2">Forum</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/demo/gale/register" className="bg-white border-2 border-orange-100 hover:border-orange-500 text-orange-600 px-6 py-2.5 rounded-2xl text-sm font-bold transition-colors">
              Kayıt Ol
            </Link>
            <Link to="/demo/gale/login" className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 text-white px-6 py-2.5 rounded-2xl text-sm font-bold transition-colors shadow-lg shadow-orange-500/30">
              Giriş Yap
            </Link>
          </div>
        </div>
      </nav>

      {/* CONDITIONAL CONTENT */}
      {page === 'home' && (
        <>
          {/* GALE HERO SECTION */}
          <div className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 px-4 lg:px-8">
            <div className="max-w-7xl mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-600 rounded-[3rem] blur-2xl opacity-20" />
              
              <div className="relative bg-white border border-orange-500/10 rounded-[3rem] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
                
                <div className="relative z-10 px-8 py-20 lg:p-24 text-center flex flex-col items-center">
                  <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight text-slate-900">
                    Eğlencenin <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">Zirvesi</span>
                  </h1>
                  
                  <p className="text-lg text-slate-600 mb-10 max-w-2xl font-medium leading-relaxed">
                    Yumuşak hatlar, modern arayüz ve kusursuz bir oyuncu deneyimi. Sınırları aşın.
                  </p>

                  <button className="group relative flex items-center justify-between w-full max-w-sm bg-orange-50 border border-orange-200 p-2 rounded-3xl hover:border-orange-500 transition-colors">
                    <div className="flex flex-col items-start px-5">
                      <span className="text-xs text-orange-600/60 font-bold uppercase tracking-wider">Sunucu IP</span>
                      <span className="text-lg font-bold text-orange-600">play.gale.com</span>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/30 group-hover:scale-105 transition-transform">
                      <Copy className="w-6 h-6" />
                    </div>
                  </button>
                </div>
              </div>

              {/* GALE STATS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-4xl mx-auto relative z-20 -translate-y-1/2">
                {[
                  { icon: Users, val: '1,240', label: 'Aktif Oyuncu' },
                  { icon: Server, val: '50,000+', label: 'Kayıtlı Oyuncu' },
                  { icon: Clock, val: '24/7', label: 'Destek' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white border border-orange-500/10 rounded-3xl p-8 flex flex-col items-center justify-center shadow-xl shadow-orange-500/5 hover:-translate-y-2 transition-transform">
                    <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-4">
                      <stat.icon className="w-8 h-8 text-orange-500" />
                    </div>
                    <span className="text-4xl font-black text-slate-900 tracking-tight mb-1">{stat.val}</span>
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* GALE MAIN CONTENT */}
          <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-24 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-black text-slate-900">Son Haberler</h2>
              </div>

              <div className="group bg-white border border-orange-500/10 hover:border-orange-500/30 rounded-[2.5rem] overflow-hidden transition-all shadow-xl shadow-orange-500/5 flex flex-col sm:flex-row p-4 gap-6">
                <div className="sm:w-64 h-48 sm:h-auto rounded-3xl relative overflow-hidden shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1627856013091-fed6e4e048f6?q=80&w=1000&auto=format&fit=crop"
                    alt="News" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-orange-600 text-xs font-black px-4 py-2 rounded-xl shadow-lg">
                    GÜNCELLEME
                  </div>
                </div>
                <div className="flex flex-col justify-center py-4 pr-4">
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-400 mb-3">
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-orange-500" /> 12 Eki 2026</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                    Gale Teması Yayında
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6 font-medium">
                    Modern, temiz ve glassmorphism odaklı yeni Gale temasıyla oyuncularınıza en iyi web deneyimini sunun.
                  </p>
                  <button className="text-sm font-bold text-white bg-slate-900 hover:bg-orange-500 px-6 py-3 rounded-2xl w-max transition-colors">
                    İncele
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-8">Fırsat</h2>
                
                <div className="bg-white border border-orange-500/10 rounded-[2.5rem] p-8 relative shadow-xl shadow-orange-500/5 text-center">
                  <div className="absolute top-6 left-6 bg-red-500 text-white font-black text-sm px-4 py-2 rounded-xl shadow-lg shadow-red-500/30">
                    -25%
                  </div>
                  
                  <div className="aspect-square bg-gradient-to-br from-orange-50 to-amber-50 rounded-[2rem] mb-8 p-8 flex items-center justify-center">
                    <ShoppingCart className="w-24 h-24 text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Gale VIP</h3>
                  <div className="flex items-center justify-center gap-3 mb-8">
                    <span className="text-xl text-slate-400 font-bold line-through">100₺</span>
                    <span className="text-4xl font-black text-orange-500">75₺</span>
                  </div>
                  <button className="w-full bg-slate-900 hover:bg-orange-500 text-white font-bold py-4 rounded-2xl transition-colors shadow-lg shadow-slate-900/20">
                    Sepete Ekle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* LOGIN/REGISTER PAGE CONTENT */}
      {(page === 'login' || page === 'register') && (
        <div className="relative pt-32 pb-24 lg:pt-40 lg:pb-40 overflow-hidden flex justify-center items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-600 opacity-5" />
          
          <div className="bg-white border border-orange-500/10 rounded-[3rem] p-10 w-full max-w-md relative z-10 shadow-2xl">
            <h2 className="text-3xl font-black text-slate-900 text-center mb-2">
              {page === 'login' ? 'Giriş Yap' : 'Kayıt Ol'}
            </h2>
            <p className="text-slate-500 text-center text-sm font-medium mb-8">
              Oyundaki hesabınıza erişmek için bilgilerinizi girin.
            </p>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Kullanıcı Adı</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 pl-12 pr-4 text-slate-900 focus:bg-white focus:border-orange-500 outline-none transition-colors" placeholder="Oyundaki isminiz" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Şifre</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input type="password" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 pl-12 pr-4 text-slate-900 focus:bg-white focus:border-orange-500 outline-none transition-colors" placeholder="••••••••" />
                </div>
              </div>

              <button type="button" className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-orange-500/30 mt-6">
                {page === 'login' ? 'Giriş Yap' : 'Kayıt Ol'}
              </button>
            </form>

            <div className="mt-8 text-center">
              <Link to={page === 'login' ? '/demo/gale/register' : '/demo/gale/login'} className="text-orange-600 hover:text-orange-500 text-sm font-bold">
                {page === 'login' ? 'Hesabın yok mu? Kayıt ol.' : 'Zaten hesabın var mı? Giriş yap.'}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
