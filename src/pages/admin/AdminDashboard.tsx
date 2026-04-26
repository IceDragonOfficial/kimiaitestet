import { Users, ShoppingCart, Activity, Ticket, ArrowUpRight, ArrowDownRight, CreditCard, DollarSign } from 'lucide-react'

export default function AdminDashboard() {
  const stats = [
    { label: 'Toplam Gelir', value: '₺12,450', trend: '+15%', trendUp: true, icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { label: 'Aktif Oyuncular', value: '1,240', trend: '+5%', trendUp: true, icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Bekleyen Biletler', value: '14', trend: '-2', trendUp: false, icon: Ticket, color: 'text-orange-600', bg: 'bg-orange-100' },
    { label: 'Bugün Satılan Ürün', value: '45', trend: '+12%', trendUp: true, icon: ShoppingCart, color: 'text-purple-600', bg: 'bg-purple-100' },
  ]

  const recentTransactions = [
    { id: '#TRX-102', user: 'Ahmet_K', item: 'VIP Üyelik (30 Gün)', amount: '75.00₺', status: 'Tamamlandı', date: '2 saat önce' },
    { id: '#TRX-101', user: 'NinjaPro', item: '1000 Kredi', amount: '50.00₺', status: 'Tamamlandı', date: '5 saat önce' },
    { id: '#TRX-100', user: 'CrazyGamer', item: 'MVP+ Üyelik', amount: '150.00₺', status: 'Bekliyor', date: '1 gün önce' },
    { id: '#TRX-099', user: 'LostSoul', item: 'Eşya Kasası Anahtarı', amount: '15.00₺', status: 'Tamamlandı', date: '1 gün önce' },
  ]

  return (
    <div className="space-y-6">
      
      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className={`flex items-center gap-1 text-sm font-bold ${stat.trendUp ? 'text-emerald-600' : 'text-red-500'}`}>
                {stat.trend} {stat.trendUp ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
              </div>
            </div>
            <h3 className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">{stat.label}</h3>
            <p className="text-3xl font-black text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* RECENT TRANSACTIONS */}
        <div className="lg:col-span-2 bg-white border border-gray-100 rounded-2xl shadow-sm">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900">Son Satışlar</h3>
            <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">Tümünü Gör</button>
          </div>
          <div className="p-0 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">İşlem ID</th>
                  <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Kullanıcı</th>
                  <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Ürün</th>
                  <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Tutar</th>
                  <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Durum</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((tx, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-4 border-b border-gray-50 text-sm font-medium text-gray-500">{tx.id}</td>
                    <td className="p-4 border-b border-gray-50 text-sm font-bold text-gray-900">{tx.user}</td>
                    <td className="p-4 border-b border-gray-50 text-sm text-gray-600">{tx.item}</td>
                    <td className="p-4 border-b border-gray-50 text-sm font-bold text-emerald-600">{tx.amount}</td>
                    <td className="p-4 border-b border-gray-50">
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                        tx.status === 'Tamamlandı' ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-bold text-gray-900">Hızlı İşlemler</h3>
          </div>
          <div className="p-6 space-y-3">
            <button className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-blue-500 hover:bg-blue-50 transition-colors group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <span className="font-bold text-gray-700 group-hover:text-blue-700">Yeni Ürün Ekle</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
            </button>
            
            <button className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-purple-500 hover:bg-purple-50 transition-colors group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                  <CreditCard className="w-5 h-5" />
                </div>
                <span className="font-bold text-gray-700 group-hover:text-purple-700">Manuel Bakiye Yükle</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChevronRight(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6"/></svg>
}
