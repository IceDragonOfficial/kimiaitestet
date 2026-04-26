import { LifeBuoy, Plus, MessageSquare } from 'lucide-react'

const TICKETS = [
  { id: '#1024', subject: 'Pterodactyl kurulum hatası alıyorum', status: 'open', date: '2 saat önce', category: 'Teknik Destek' },
  { id: '#1015', subject: 'Faturam henüz onaylanmadı', status: 'answered', date: '1 gün önce', category: 'Ödeme & Satış' },
  { id: '#0982', subject: 'Tema editörü hakkında bir soru', status: 'closed', date: '1 hafta önce', category: 'Genel Soru' },
]

const STATUS_COLORS: Record<string, string> = {
  open: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  answered: 'bg-green-500/10 text-green-400 border-green-500/20',
  closed: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
}

const STATUS_LABELS: Record<string, string> = {
  open: 'Açık',
  answered: 'Yanıtlandı',
  closed: 'Kapalı',
}

export default function ClientTickets() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Destek Taleplerim</h2>
          <p className="text-gray-400">Yaşadığınız sorunlar için Velixo ekibinden destek alın.</p>
        </div>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-blue-500/20 flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Yeni Talep Oluştur
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {/* Sol Menü / İstatistikler */}
        <div className="space-y-4">
          <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-5">
            <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Durum Özeti</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Açık Talepler</span>
                <span className="px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-400 text-xs font-bold">1</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Yanıt Bekleyen</span>
                <span className="px-2 py-0.5 rounded-md bg-white/10 text-white text-xs font-bold">0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Kapatılan</span>
                <span className="px-2 py-0.5 rounded-md bg-white/5 text-gray-500 text-xs font-bold">12</span>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-600/10 border border-blue-500/20 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <LifeBuoy className="w-5 h-5 text-blue-400" />
              <h3 className="text-sm font-bold text-blue-400">Çalışma Saatleri</h3>
            </div>
            <p className="text-xs text-blue-400/80 leading-relaxed">
              Destek ekibimiz Hafta İçi 09:00 - 18:00 saatleri arasında hizmet vermektedir. Acil durumlar dışında bu saatler dışında yanıt süresi uzayabilir.
            </p>
          </div>
        </div>

        {/* Talepler Listesi */}
        <div className="md:col-span-3 space-y-4">
          {TICKETS.map((ticket) => (
            <div key={ticket.id} className="group bg-[#0a0a0a] border border-white/5 hover:border-white/10 rounded-2xl p-5 transition-all cursor-pointer">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {ticket.subject}
                    </h4>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 font-medium">
                      <span className="text-gray-400">{ticket.id}</span>
                      <span>•</span>
                      <span>{ticket.category}</span>
                      <span>•</span>
                      <span>Son işlem: {ticket.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex sm:justify-end">
                  <span className={`px-3 py-1.5 rounded-lg border text-xs font-bold ${STATUS_COLORS[ticket.status]}`}>
                    {STATUS_LABELS[ticket.status]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
