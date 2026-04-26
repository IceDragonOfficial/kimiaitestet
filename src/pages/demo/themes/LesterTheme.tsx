import { ShoppingCart, Users, Server, Clock, Gamepad2, Copy, MessageCircle, ArrowRight, Play, User, Lock, Ticket, History, Settings, LogOut, Mail, Calendar, Shield, AtSign, Zap } from 'lucide-react'
import { Link, useNavigate } from 'react-router'
import { useState } from 'react'

export default function LesterTheme({ page = 'home' }: { page?: 'home' | 'login' | 'register' | 'profile' }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'history' | 'tickets' | 'settings'>('profile');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/demo/lester/profile');
  };
  return (
    <div className="min-h-full bg-[#050505] text-white font-sans selection:bg-blue-500/30">
      
      {/* LESTER NAVBAR - Fixed sticky top-0 issue */}
      <nav className="sticky top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5">
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
            {page === 'profile' ? (
              <div className="flex items-center gap-4">
                <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2">
                  <span className="text-yellow-500"><Zap className="w-4 h-4" /></span>
                  <span className="text-sm font-bold text-white">50.00₺</span>
                </div>
                <div className="relative group cursor-pointer">
                  <div className="flex items-center gap-3 bg-blue-600 px-4 py-2 rounded-xl shadow-lg shadow-blue-500/20">
                    <User className="w-4 h-4 text-white" />
                    <span className="text-sm font-bold text-white">demo</span>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <Link to="/demo/lester/register" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors">
                  Kayıt Ol
                </Link>
                <Link to="/demo/lester/login" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors shadow-lg shadow-blue-500/20">
                  Giriş Yap
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* CONDITIONAL CONTENT */}
      {page === 'home' && (
        <>
          {/* LESTER HERO SECTION */}
          <div className="relative pt-24 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607513746994-51f730a44832?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-[#050505]/80 to-[#050505]" />
            
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

          {/* LESTER MAIN CONTENT */}
          <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-24 grid lg:grid-cols-3 gap-8">
            {/* News Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <div className="w-2 h-6 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" /> 
                  Son Duyurular
                </h2>
              </div>

              <div className="group bg-[#0a0a0a] border border-white/5 hover:border-white/10 rounded-3xl overflow-hidden transition-colors flex flex-col sm:flex-row">
                <div className="sm:w-64 h-48 sm:h-auto relative overflow-hidden shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1627856013091-fed6e4e048f6?q=80&w=1000&auto=format&fit=crop"
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
                    Skyblock V2: Yeni Sezon Başladı!
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    Yeni sezon aktif! Ekonomiye hükmet, klanını geliştir.
                  </p>
                  <button className="text-sm font-semibold text-blue-400 flex items-center gap-1.5">
                    Devamını Oku <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar Widgets */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                  <div className="w-2 h-6 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" /> 
                  Öne Çıkan Ürün
                </h2>
                
                <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-6 relative group overflow-hidden">
                  <div className="absolute top-4 left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-sm shadow-lg shadow-blue-500/20 z-10">
                    -25%
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-2xl mb-6 p-8 flex items-center justify-center border border-white/5">
                    <ShoppingCart className="w-24 h-24 text-white/50 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-1">VIP Üyelik (30 Gün)</h3>
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
        </>
      )}

      {/* LOGIN/REGISTER PAGE CONTENT */}
      {(page === 'login' || page === 'register') && (
        <div className="relative pt-32 pb-24 lg:pt-40 lg:pb-40 overflow-hidden flex justify-center items-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full" />
          
          <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 w-full max-w-md relative z-10 shadow-2xl">
            <h2 className="text-3xl font-black text-white text-center mb-2">
              {page === 'login' ? 'Giriş Yap' : 'Kayıt Ol'}
            </h2>
            <p className="text-gray-400 text-center text-sm mb-8">
              Sunucuya özel içeriklere erişmek için hesabınıza giriş yapın.
            </p>

            <form className="space-y-5" onSubmit={handleLogin}>
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">Kullanıcı Adı</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:border-blue-500 outline-none transition-colors" placeholder="demo" defaultValue={page === 'login' ? 'demo' : ''} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">Şifre</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input type="password" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:border-blue-500 outline-none transition-colors" placeholder="demo" defaultValue={page === 'login' ? 'demo' : ''} />
                </div>
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-500/20 mt-4">
                {page === 'login' ? 'Giriş Yap' : 'Kayıt Ol'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link to={page === 'login' ? '/demo/lester/register' : '/demo/lester/login'} className="text-blue-400 hover:text-blue-300 text-sm font-bold">
                {page === 'login' ? 'Hesabın yok mu? Kayıt ol.' : 'Zaten hesabın var mı? Giriş yap.'}
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* PROFILE DASHBOARD CONTENT */}
      {page === 'profile' && (
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 grid lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                <User className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white">demo</h3>
              <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold rounded-full mt-2">
                Oyuncu
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden">
              <div className="p-4 border-b border-white/5 font-bold text-sm text-gray-400 uppercase tracking-wider">HESABIM</div>
              <div className="p-2 space-y-1">
                <button onClick={() => setActiveTab('profile')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${activeTab === 'profile' ? 'bg-white/5 text-white' : 'hover:bg-white/5 text-gray-400 hover:text-white'}`}>
                  <User className="w-4 h-4" /> Profil
                </button>
                <button onClick={() => setActiveTab('orders')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${activeTab === 'orders' ? 'bg-white/5 text-white' : 'hover:bg-white/5 text-gray-400 hover:text-white'}`}>
                  <ShoppingCart className="w-4 h-4" /> Siparişler
                </button>
                <button onClick={() => setActiveTab('history')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${activeTab === 'history' ? 'bg-white/5 text-white' : 'hover:bg-white/5 text-gray-400 hover:text-white'}`}>
                  <History className="w-4 h-4" /> Kredi Geçmişi
                </button>
                <button onClick={() => setActiveTab('tickets')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${activeTab === 'tickets' ? 'bg-white/5 text-white' : 'hover:bg-white/5 text-gray-400 hover:text-white'}`}>
                  <Ticket className="w-4 h-4" /> Destek Talepleri
                </button>
              </div>
              
              <div className="p-4 border-b border-t border-white/5 font-bold text-sm text-gray-400 uppercase tracking-wider">AYARLAR</div>
              <div className="p-2 space-y-1">
                <button onClick={() => setActiveTab('settings')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${activeTab === 'settings' ? 'bg-white/5 text-white' : 'hover:bg-white/5 text-gray-400 hover:text-white'}`}>
                  <Settings className="w-4 h-4" /> Ayarlar
                </button>
                <Link to="/demo/lester/minecraft" className="flex items-center gap-3 px-4 py-3 hover:bg-red-500/10 text-red-400 hover:text-red-300 rounded-xl font-semibold text-sm transition-colors mt-2">
                  <LogOut className="w-4 h-4" /> Çıkış Yap
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            
            {activeTab === 'profile' && (
              <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <User className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white leading-none mb-1">demo</h2>
                      <p className="text-gray-400 text-sm">demo@leaderos.net</p>
                    </div>
                  </div>
                  <button onClick={() => setActiveTab('settings')} className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors">
                    Profili Düzenle
                  </button>
                </div>
                <div className="p-6 grid sm:grid-cols-2 gap-y-6">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase">E-Posta</div>
                      <div className="text-sm font-semibold text-gray-300">demo@leaderos.net</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 text-gray-500 flex items-center justify-center font-bold">₺</span>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase">Bakiye</div>
                      <div className="text-sm font-semibold text-gray-300">50.00₺</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase">Kayıt Tarihi</div>
                      <div className="text-sm font-semibold text-gray-300">12 Ekim 2026</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase">Yetki</div>
                      <div className="text-sm font-semibold text-gray-300">Oyuncu</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tickets' && (
              <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">Destek Talepleri</h3>
                  <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors">Yeni Talep</button>
                </div>
                <div className="p-6">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center text-gray-400 text-sm font-medium">
                    Kayıt bulunamadı!
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">Siparişler</h3>
                </div>
                <div className="p-6">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center text-gray-400 text-sm font-medium">
                    Henüz bir siparişiniz bulunmuyor.
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'history' && (
              <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">Kredi Geçmişi</h3>
                </div>
                <div className="p-6">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center text-gray-400 text-sm font-medium">
                    Bakiye hareketiniz bulunmuyor.
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-white/5">
                  <h3 className="text-lg font-bold text-white">Ayarlar</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2">E-Posta Adresi</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-blue-500 outline-none transition-colors" defaultValue="demo@leaderos.net" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2">Mevcut Şifre (Sadece şifre değiştirecekseniz)</label>
                    <input type="password" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-blue-500 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2">Yeni Şifre</label>
                    <input type="password" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-blue-500 outline-none transition-colors" />
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-blue-500/20">
                    Kaydet
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  )
}
