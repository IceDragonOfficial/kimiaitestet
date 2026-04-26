import { CreditCard, FileText, Download, CheckCircle, Clock } from 'lucide-react'

const INVOICES = [
  { id: 'INV-2026-001', date: '10 Ekim 2026', amount: '1,499₺', status: 'paid', item: 'Standart Lisans (Ömür Boyu)' },
  { id: 'INV-2026-002', date: '12 Ekim 2026', amount: '749₺', status: 'paid', item: 'Gale Teması' },
  { id: 'INV-2026-003', date: '25 Ekim 2026', amount: '250₺', status: 'pending', item: 'Ekstra Domain Değişim Hakkı' },
]

export default function ClientBilling() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Faturalarım</h2>
          <p className="text-gray-400">Tüm satın alımlarınızı ve fatura geçmişinizi görüntüleyin.</p>
        </div>
        <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center gap-2">
          <CreditCard className="w-4 h-4" />
          Kayıtlı Kartlarım
        </button>
      </div>

      <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/[0.02] border-b border-white/5 text-gray-400">
              <tr>
                <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">Fatura No</th>
                <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">Tarih</th>
                <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">Ürün / Hizmet</th>
                <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">Tutar</th>
                <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">Durum</th>
                <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs text-right">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {INVOICES.map((inv) => (
                <tr key={inv.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-mono text-gray-300">{inv.id}</td>
                  <td className="px-6 py-4 text-gray-400">{inv.date}</td>
                  <td className="px-6 py-4 text-white font-medium">{inv.item}</td>
                  <td className="px-6 py-4 text-white font-bold">{inv.amount}</td>
                  <td className="px-6 py-4">
                    {inv.status === 'paid' ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-green-500/10 text-green-400 text-xs font-semibold">
                        <CheckCircle className="w-3.5 h-3.5" /> Ödendi
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-yellow-500/10 text-yellow-400 text-xs font-semibold">
                        <Clock className="w-3.5 h-3.5" /> Bekliyor
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    {inv.status === 'paid' ? (
                      <button className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors">
                        <Download className="w-4 h-4" /> PDF İndir
                      </button>
                    ) : (
                      <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-blue-500/20">
                        Ödeme Yap
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
