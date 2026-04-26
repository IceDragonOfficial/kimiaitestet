import { Outlet, Link, useLocation } from 'react-router'
import { LayoutDashboard, Users, ShoppingCart, MessageSquare, Paintbrush, Settings, LogOut, ChevronRight, Gamepad2, Package } from 'lucide-react'

const MENU = [
  { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { name: 'Kullanıcılar', path: '/admin/users', icon: Users },
  { name: 'Mağaza Yönetimi', path: '/admin/store', icon: ShoppingCart },
  { name: 'Destek Talepleri', path: '/admin/tickets', icon: MessageSquare },
  { name: 'Eklentiler & Modüller', path: '/admin/modules', icon: Package },
  { name: 'Tema & Tasarım', path: '/admin/themes', icon: Paintbrush },
  { name: 'Sistem Ayarları', path: '/admin/settings', icon: Settings },
]

export default function AdminLayout() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-[#f3f4f6] text-gray-800 font-sans flex">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed inset-y-0 left-0 z-50">
        <div className="h-20 flex items-center px-6 border-b border-gray-200">
          <Link to="/admin" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <Gamepad2 className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-black text-lg text-gray-900 tracking-tight leading-none">Velixo CMS</h1>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Yönetim Paneli</span>
            </div>
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 mt-4">Ana Menü</p>
          {MENU.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  isActive 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                  {item.name}
                </div>
                {isActive && <ChevronRight className="w-4 h-4 text-blue-600" />}
              </Link>
            )
          })}
        </div>

        <div className="p-4 border-t border-gray-200">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors">
            <LogOut className="w-5 h-5" />
            Çıkış Yap
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 ml-64 flex flex-col min-h-screen">
        
        {/* TOPBAR */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-40">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Yönetim Paneli</h2>
          </div>
          <div className="flex items-center gap-4">
            <a href="/" target="_blank" className="text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-xl transition-colors">
              Siteyi Görüntüle
            </a>
            <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white shadow-sm overflow-hidden">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="Admin" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="p-8 flex-1">
          <Outlet />
        </div>

      </main>
    </div>
  )
}
