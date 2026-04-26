import { Ticket, Plus } from 'lucide-react'

export default function ClientCoupons() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Kuponlar</h2>
      </div>

      <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">Yeni Kupon Kullan</h3>
        <div className="flex gap-4">
          <input 
            type="text" 
            placeholder="Kupon Kodunu Girin" 
            className="flex-1 bg-[#111] border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center gap-2">
            <Plus className="w-5 h-5" /> Kullan
          </button>
        </div>
      </div>

      <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.02]">
              <th className="p-4 font-semibold text-gray-400">Kupon Kodu</th>
              <th className="p-4 font-semibold text-gray-400">İndirim Oranı</th>
              <th className="p-4 font-semibold text-gray-400">Durum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={3} className="p-8 text-center text-gray-500 font-medium">
                Aktif kupon bulunmamaktadır.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
