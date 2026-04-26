import { Key, Globe, Download, RefreshCw, AlertTriangle, X } from 'lucide-react'
import { useState } from 'react'

export default function ClientLicenses() {
  const [isChangingDomain, setIsChangingDomain] = useState(false)
  const [newDomain, setNewDomain] = useState('')
  const [domain, setDomain] = useState('play.ornek-sunucu.com')
  const [isPinging, setIsPinging] = useState(false)
  const [pingResult, setPingResult] = useState<string | null>(null)

  const handleDomainChange = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newDomain) return
    // TODO: Backend API çağrısı
    setDomain(newDomain)
    setIsChangingDomain(false)
    setNewDomain('')
    alert('Domain başarıyla güncellendi!')
  }

  const handlePing = () => {
    setIsPinging(true)
    setPingResult(null)
    
    // Gerçekçi bir gecikme ve ping simülasyonu
    setTimeout(() => {
      setIsPinging(false)
      // LeaderOS mantığı: Lisans API'sine istek atan sunucu IP'si ile domain uyuşuyor mu?
      setPingResult('success')
    }, 1500)
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Lisanslarım</h2>
          <p className="text-gray-400">Satın aldığınız yazılım lisanslarını buradan yönetebilirsiniz.</p>
        </div>
        <button 
          onClick={() => window.location.href = '/#pricing'} 
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-blue-500/20"
        >
          Yeni Lisans Al
        </button>
      </div>

      <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden relative">
        <div className="p-6 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
              <Key className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-3">
                Velixo Platform - Ömür Boyu
                <span className="px-2.5 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold uppercase tracking-wider">Aktif</span>
              </h3>
              <p className="text-sm text-gray-500 font-mono mt-1">LCN-ABCD-1234-EFGH-5678</p>
            </div>
          </div>
        </div>

        <div className="p-6 grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1.5">Kayıtlı Domain</p>
              <div className="flex items-center justify-between bg-white/[0.03] border border-white/5 rounded-xl p-3">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span className="font-medium text-white">{domain}</span>
                </div>
                <button 
                  onClick={() => setIsChangingDomain(true)}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 px-3 py-1.5 rounded-lg hover:bg-blue-500/10 transition-colors"
                >
                  Değiştir
                </button>
              </div>
              <p className="text-xs text-yellow-500 mt-2 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" />
                Yılda 1 adet ücretsiz değiştirme hakkınız bulunmaktadır.
              </p>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02]">
              <div>
                <p className="text-sm font-semibold">En Son Sürüm (v1.2.0)</p>
                <p className="text-xs text-gray-500 mt-1">Web sitenize kuracağınız ana yazılım dosyası.</p>
              </div>
              <button 
                onClick={() => alert('İndirme başlatılıyor... (Backend entegrasyonunda MinIO üzerinden ZIP indirilecek)')}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm font-medium transition-colors text-white shadow-lg shadow-blue-500/20"
              >
                <Download className="w-4 h-4" />
                İndir (ZIP)
              </button>
            </div>
          </div>

          <div className="space-y-4">
             <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-3">Lisans Bilgileri</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Kayıt Tarihi:</span>
                  <span className="text-sm font-medium text-white">10 Ekim 2026</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Bitiş Tarihi:</span>
                  <span className="text-sm font-medium text-white">Ömür Boyu (Lifetime)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Destek Süresi:</span>
                  <span className="text-sm font-medium text-green-400">Aktif</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <button 
                onClick={handlePing}
                disabled={isPinging}
                className="w-full flex items-center justify-center gap-2 bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 px-4 py-3 rounded-xl text-sm font-medium transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${isPinging ? 'animate-spin' : ''}`} />
                {isPinging ? 'Doğrulanıyor...' : 'Domain Lisans Bağlantısını Doğrula (Ping)'}
              </button>
              
              {pingResult === 'success' && (
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-xs text-green-400 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Bağlantı başarılı! Siteniz lisans sunucumuzla iletişim kurabiliyor.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Domain Değiştirme Modalı */}
      {isChangingDomain && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between p-5 border-b border-white/5">
              <h3 className="text-lg font-bold">Domain Değiştir</h3>
              <button onClick={() => setIsChangingDomain(false)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleDomainChange} className="p-5 space-y-4">
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg text-sm text-blue-400 leading-relaxed mb-4">
                Dikkat: Domain değişikliği anında uygulanır. Eski domaininizdeki yazılım **kilitlenecektir**. Bu yıl için 1 ücretsiz hakkınız kullanılacaktır.
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Mevcut Domain</label>
                <input 
                  type="text" 
                  value={domain} 
                  disabled 
                  className="w-full bg-white/[0.02] border border-white/5 rounded-xl py-2.5 px-4 text-gray-500 text-sm cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Yeni Domain</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Globe className="h-4 w-4 text-gray-500" />
                  </div>
                  <input 
                    type="text" 
                    required
                    value={newDomain}
                    onChange={(e) => setNewDomain(e.target.value)}
                    placeholder="play.yenisunucu.com"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none text-sm"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1.5">http:// veya https:// koymadan yazınız.</p>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button 
                  type="button" 
                  onClick={() => setIsChangingDomain(false)}
                  className="px-4 py-2 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  İptal
                </button>
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-xl text-sm font-medium shadow-lg shadow-blue-500/20 transition-all"
                >
                  Değişikliği Onayla
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
