import { useState } from 'react'
import { Search, ShieldCheck, XCircle, Loader2 } from 'lucide-react'

export default function LicenseCheckPage() {
  const [domain, setDomain] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'valid' | 'invalid'>('idle')

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault()
    if (!domain) return

    setStatus('loading')
    // Simüle edilmiş API isteği
    setTimeout(() => {
      // Örnek: velixo.com.tr geçerli, kalanı geçersiz
      if (domain.includes('velixo') || domain.includes('ornek')) {
        setStatus('valid')
      } else {
        setStatus('invalid')
      }
    }, 1500)
  }

  return (
    <div className="pt-32 pb-24 bg-[#050505] min-h-[80vh] flex items-center justify-center text-white selection:bg-blue-500/30">
      <div className="max-w-2xl w-full mx-auto px-6 relative z-10 text-center">
        
        <div className="w-20 h-20 bg-blue-600/20 border border-blue-500/30 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
          <ShieldCheck className="w-10 h-10 text-blue-400" />
        </div>

        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight drop-shadow-2xl">
          Lisans <span className="text-gradient">Sorgulama</span>
        </h1>
        <p className="text-gray-400 font-medium mb-10">
          Bir web sitesinin orijinal Velixo (LeaderOS) altyapısı kullanıp kullanmadığını sorgulayın. Güvenliğiniz için orijinal ve lisanslı yazılımları tercih edin.
        </p>

        <form onSubmit={handleCheck} className="relative max-w-lg mx-auto">
          <input 
            type="text" 
            placeholder="ornek.com" 
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="w-full bg-[#0a0a0a] border-2 border-white/10 rounded-2xl px-6 py-5 pl-14 text-white text-lg focus:border-blue-500 outline-none transition-colors"
          />
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-500" />
          <button 
            type="submit"
            disabled={status === 'loading'}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl font-bold transition-all disabled:opacity-50"
          >
            {status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Sorgula'}
          </button>
        </form>

        {/* Sonuç Alanı */}
        <div className="mt-10 h-32 flex items-center justify-center">
          {status === 'valid' && (
            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 flex flex-col items-center animate-in fade-in zoom-in duration-300 w-full max-w-lg">
              <ShieldCheck className="w-12 h-12 text-green-400 mb-3" />
              <h3 className="text-xl font-bold text-white">Lisanslı Altyapı</h3>
              <p className="text-green-400 font-medium mt-1">Bu domain orijinal Velixo yazılımı kullanmaktadır.</p>
            </div>
          )}

          {status === 'invalid' && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 flex flex-col items-center animate-in fade-in zoom-in duration-300 w-full max-w-lg">
              <XCircle className="w-12 h-12 text-red-400 mb-3" />
              <h3 className="text-xl font-bold text-white">Lisans Bulunamadı</h3>
              <p className="text-red-400 font-medium mt-1">Sistemimizde bu domaine ait aktif bir lisans kaydı yok.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
