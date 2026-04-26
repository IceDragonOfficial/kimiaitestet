import { Key, CreditCard, LifeBuoy, ArrowRight } from 'lucide-react'
import { Link } from 'react-router'

export default function ClientDashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Hoş Geldin, John Doe! 👋</h2>
        <p className="text-gray-400">Velixo müşteri panelinize hoş geldiniz. Sunucunuzu buradan yönetebilirsiniz.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-600/20 to-blue-600/5 border border-blue-500/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
              <Key className="w-6 h-6" />
            </div>
            <span className="text-3xl font-bold">1</span>
          </div>
          <h3 className="text-lg font-semibold mb-1">Aktif Lisans</h3>
          <p className="text-sm text-gray-400 mb-4">Yönetmekte olduğunuz aktif lisans sayısı.</p>
          <Link to="/client/licenses" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300">
            Lisanslara Git <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="bg-gradient-to-br from-purple-600/20 to-purple-600/5 border border-purple-500/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
              <LifeBuoy className="w-6 h-6" />
            </div>
            <span className="text-3xl font-bold">0</span>
          </div>
          <h3 className="text-lg font-semibold mb-1">Açık Talepler</h3>
          <p className="text-sm text-gray-400 mb-4">Destek ekibimizden bekleyen yanıtlarınız.</p>
          <Link to="/client/tickets" className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300">
            Taleplere Git <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="bg-gradient-to-br from-green-600/20 to-green-600/5 border border-green-500/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">
              <CreditCard className="w-6 h-6" />
            </div>
            <span className="text-3xl font-bold">₺0</span>
          </div>
          <h3 className="text-lg font-semibold mb-1">Ödenmemiş Fatura</h3>
          <p className="text-sm text-gray-400 mb-4">Hesabınıza ait bekleyen ödemeler.</p>
          <Link to="/client/billing" className="inline-flex items-center gap-2 text-sm font-semibold text-green-400 hover:text-green-300">
            Faturalara Git <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4">Son Duyurular</h3>
        <div className="space-y-4">
          <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-blue-400">v1.2.0 Güncellemesi Yayınlandı!</span>
              <span className="text-xs text-gray-500">12 Ekim 2026</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Yeni Minecraft 1.20 desteği ve tema motoru geliştirmeleri içeren v1.2.0 sürümü yayınlandı. Lisanslarım sayfasından hemen indirebilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
