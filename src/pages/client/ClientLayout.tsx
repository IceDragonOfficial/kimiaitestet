import { Link, useLocation, Outlet } from 'react-router'
import { LayoutDashboard, Key, CreditCard, LifeBuoy, Server, Sparkles, Palette, Ticket, Wallet, Settings, Mail, Lock, LogOut, Disc as Discord } from 'lucide-react'

const MENU = [
  { name: 'Genel Bakış', icon: LayoutDashboard, path: '/client/dashboard' },
  { name: 'Ödemeler', icon: CreditCard, path: '/client/billing' },
  { name: 'Lisanslar', icon: Key, path: '/client/licenses' },
  { name: 'Yapay Zeka', icon: Sparkles, path: '/client/ai' },
  { name: 'Temalar', icon: Palette, path: '/client/themes' },
  { name: 'Destek Talepleri', icon: LifeBuoy, path: '/client/tickets' },
  { name: 'Kuponlar', icon: Ticket, path: '/client/coupons' },
  { name: 'Cüzdan', icon: Wallet, path: '/client/wallet' },
]

const SETTINGS_MENU = [
  { name: 'Hesap Ayarları', icon: Settings, path: '/client/settings' },
  { name: 'E-Posta Değiştir', icon: Mail, path: '/client/email' },
  { name: 'Şifre Değiştir', icon: Lock, path: '/client/password' },
]

export default function ClientLayout() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-r border-white/5 bg-[#0a0a0a] flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-white/5">
          <Link to="/" className="text-2xl font-black tracking-tighter text-gradient">Velixo</Link>
        </div>
        
        <div className="flex-1 py-6 px-4 space-y-1">
          {MENU.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive 
                    ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-blue-400' : 'text-gray-500'}`} />
                {item.name}
              </Link>
            )
          })}
          
          <div className="pt-4 pb-2">
            <div className="px-4 text-xs font-bold text-gray-500 uppercase tracking-wider">AYARLAR</div>
          </div>
          
          {SETTINGS_MENU.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive 
                    ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-blue-400' : 'text-gray-500'}`} />
                {item.name}
              </Link>
            )
          })}
        </div>

        {/* Discord Sync Alert */}
        <div className="p-4 mx-4 mb-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
          <div className="flex items-center gap-2 mb-2">
            <Discord className="w-5 h-5 text-indigo-400" />
            <span className="text-sm font-semibold text-indigo-400">Discord Bağlantısı</span>
          </div>
          <p className="text-xs text-gray-400 mb-3 leading-relaxed">
            Müşteri rolünüzü almak için Discord hesabınızı bağlayın.
          </p>
          <button className="w-full text-xs font-semibold bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg transition-colors">
            Hesabı Bağla
          </button>
        </div>

        <div className="p-4 border-t border-white/5">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors">
            <LogOut className="w-5 h-5" />
            Çıkış Yap
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen relative">
        {/* Topbar */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-[#0a0a0a]/50 backdrop-blur-md sticky top-0 z-10">
          <h1 className="text-lg font-semibold">Müşteri Paneli</h1>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold">
              JD
            </div>
          </div>
        </header>

        {/* Dynamic Outlet */}
        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
