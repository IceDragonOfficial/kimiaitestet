import { ShoppingCart, Users, Server, Clock, Gamepad2, Copy, MessageCircle, ArrowRight, User, Lock } from 'lucide-react'
import { Link } from 'react-router'

export default function FlatTheme({ page = 'home' }: { page?: 'home' | 'login' | 'register' }) {
  return (
    <div className="min-h-full bg-[#f8f9fa] text-gray-800 font-sans selection:bg-blue-500/30">
      
      {/* FLAT NAVBAR */}
      <nav className="sticky top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">VelixoCraft</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-bold text-blue-600 relative py-8">
                Anasayfa
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
              </a>
              <a href="#" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors py-8">Mağaza</a>
              <a href="#" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors py-8">Forum</a>
              <a href="#" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors py-8">Sıralama</a>
              <a href="#" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors py-8">Destek</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-3 bg-gray-50 border border-gray-200 px-4 py-2 rounded-xl">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <div className="text-xs font-semibold text-gray-500">
                <span className="text-gray-900">1,240</span> Çevrimiçi
              </div>
            </div>
            <Link to="/demo/flat/register" className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors">
              Kayıt Ol
            </Link>
            <Link to="/demo/flat/login" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors shadow-md shadow-blue-500/20">
              Giriş Yap
            </Link>
          </div>
        </div>
      </nav>

      {/* CONDITIONAL CONTENT */}
      {page === 'home' && (
        <>
          {/* FLAT HERO SECTION */}
          <div className="relative pt-24 pb-24 lg:pt-32 lg:pb-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03]" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 text-center flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-bold uppercase tracking-wider mb-8 text-blue-700">
                <Gamepad2 className="w-4 h-4" /> Velixo Flat
              </div>

              <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight text-gray-900">
                Yepyeni Bir <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Başlangıç</span>
              </h1>

              <p className="text-lg text-gray-600 mb-10 max-w-2xl font-medium leading-relaxed">
                Temiz ve aydınlık tasarım, üst düzey performans. Sunucunuza kurumsal bir kimlik kazandırın.
              </p>

              <button className="group relative flex items-center justify-between w-full max-w-sm bg-white border border-gray-200 p-2 rounded-2xl hover:border-blue-500 transition-colors shadow-sm">
                <div className="flex flex-col items-start px-4">
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Sunucu IP Adresi</span>
                  <span className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">play.flatcraft.com</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                  <Copy className="w-5 h-5" />
                </div>
              </button>

              {/* FLAT STATS ROW */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-4xl">
                {[
                  { icon: Users, val: '1,240', label: 'Aktif Oyuncu' },
                  { icon: Server, val: '50,000+', label: 'Kayıtlı Oyuncu' },
                  { icon: Clock, val: '24/7', label: 'Çevrimiçi Destek' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm">
                    <stat.icon className="w-8 h-8 text-blue-600 mb-4 opacity-80" />
                    <span className="text-3xl font-black text-gray-900 tracking-tight mb-1">{stat.val}</span>
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* FLAT MAIN CONTENT */}
          <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-24 grid lg:grid-cols-3 gap-8">
            {/* News Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                  Son Duyurular
                </h2>
              </div>

              <div className="group bg-white border border-gray-200 hover:border-blue-200 hover:shadow-md rounded-3xl overflow-hidden transition-all flex flex-col sm:flex-row p-3 gap-6">
                <div className="sm:w-64 h-48 sm:h-auto rounded-2xl relative overflow-hidden shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1627856013091-fed6e4e048f6?q=80&w=1000&auto=format&fit=crop"
                    alt="News" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-black px-3 py-1.5 rounded-full shadow-sm">
                    GÜNCELLEME
                  </div>
                </div>
                <div className="py-4 pr-4 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-xs font-bold text-gray-400 mb-3">
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-blue-500" /> 12 Eki 2026</span>
                    <span className="flex items-center gap-1.5"><MessageCircle className="w-3.5 h-3.5 text-blue-500" /> 24 Yorum</span>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Flat Teması Yayında!
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 font-medium">
                    Tamamen kurumsal, aydınlık ve ferah bir deneyim arayanlar için Flat teması kullanıma sunuldu.
                  </p>
                  <button className="text-sm font-bold text-blue-600 flex items-center gap-1.5 w-max">
                    Devamını Oku <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar Widgets */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-6">
                  Öne Çıkan Ürün
                </h2>
                
                <div className="bg-white border border-gray-200 rounded-3xl p-6 relative shadow-sm">
                  <div className="absolute top-4 left-4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-black text-sm shadow-md z-10">
                    -25%
                  </div>
                  <div className="aspect-square bg-blue-50 rounded-2xl mb-6 p-8 flex items-center justify-center">
                    <ShoppingCart className="w-24 h-24 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 text-center mb-1">VIP Üyelik</h3>
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <span className="text-lg text-gray-400 font-bold line-through">100₺</span>
                    <span className="text-3xl font-black text-blue-600">75₺</span>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-blue-500/20">
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
        <div className="relative pt-32 pb-24 lg:pt-40 lg:pb-40 overflow-hidden flex justify-center items-center bg-gray-50">
          
          <div className="bg-white border border-gray-200 rounded-3xl p-8 w-full max-w-md relative z-10 shadow-xl">
            <h2 className="text-3xl font-black text-gray-900 text-center mb-2">
              {page === 'login' ? 'Giriş Yap' : 'Kayıt Ol'}
            </h2>
            <p className="text-gray-500 text-center text-sm font-medium mb-8">
              Oyundaki hesabınıza erişmek için bilgilerinizi girin.
            </p>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Kullanıcı Adı</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-gray-900 focus:bg-white focus:border-blue-500 outline-none transition-colors" placeholder="Oyundaki isminiz" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Şifre</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input type="password" className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-gray-900 focus:bg-white focus:border-blue-500 outline-none transition-colors" placeholder="••••••••" />
                </div>
              </div>

              <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-blue-500/20 mt-4">
                {page === 'login' ? 'Giriş Yap' : 'Kayıt Ol'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link to={page === 'login' ? '/demo/flat/register' : '/demo/flat/login'} className="text-blue-600 hover:text-blue-700 text-sm font-bold">
                {page === 'login' ? 'Hesabın yok mu? Kayıt ol.' : 'Zaten hesabın var mı? Giriş yap.'}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
