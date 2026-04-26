import { Wallet as WalletIcon, CreditCard, Banknote, History } from 'lucide-react'

export default function ClientWallet() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Cüzdanım</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-green-600/20 to-green-600/5 border border-green-500/20 rounded-2xl p-6 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
              <WalletIcon className="w-5 h-5" />
            </div>
            <span className="font-semibold text-gray-300">Güncel Bakiye</span>
          </div>
          <div className="text-4xl font-black text-white">0.00₺</div>
        </div>

        <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 md:col-span-2">
          <h3 className="text-lg font-bold mb-6">Bakiye Yükle</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <button className="bg-white/5 border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all">
              <CreditCard className="w-8 h-8 text-gray-400" />
              <span className="font-semibold text-gray-300">Kredi Kartı / Havale</span>
            </button>
            <button className="bg-white/5 border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all">
              <Banknote className="w-8 h-8 text-gray-400" />
              <span className="font-semibold text-gray-300">Mobil Ödeme</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden mt-8">
        <div className="p-6 border-b border-white/5 flex items-center gap-2">
          <History className="w-5 h-5 text-gray-400" />
          <h3 className="text-lg font-bold">Bakiye Geçmişi</h3>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.02]">
              <th className="p-4 font-semibold text-gray-400 text-sm">İşlem Kodu</th>
              <th className="p-4 font-semibold text-gray-400 text-sm">Tarih</th>
              <th className="p-4 font-semibold text-gray-400 text-sm">Tutar</th>
              <th className="p-4 font-semibold text-gray-400 text-sm">Yöntem</th>
              <th className="p-4 font-semibold text-gray-400 text-sm">Durum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5} className="p-8 text-center text-gray-500 font-medium">
                Kayıt bulunamadı.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
