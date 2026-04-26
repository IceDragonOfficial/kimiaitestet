import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { Cookie, X } from 'lucide-react'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('velixo_cookie_consent')
    if (!consent) {
      // Küçük bir gecikme ile göster (daha doğal hissettirir)
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('velixo_cookie_consent', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('velixo_cookie_consent', 'declined')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none">
      <div className="max-w-4xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col md:flex-row items-center gap-6 pointer-events-auto relative overflow-hidden">
        {/* Arka plan ışıltısı */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

        <div className="flex-1 flex gap-4 items-start md:items-center">
          <div className="hidden sm:flex w-12 h-12 rounded-xl bg-white/5 border border-white/10 items-center justify-center shrink-0">
            <Cookie className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white mb-1">Çerez Politikası (KVKK / GDPR)</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Sizlere en iyi deneyimi sunabilmek ve platformu optimize etmek amacıyla çerezler (cookies) kullanıyoruz. 
              Gezinmeye devam ederek çerez kullanımımızı kabul etmiş olursunuz. Detaylı bilgi için{' '}
              <Link to="/privacy" className="text-blue-400 hover:text-blue-300 font-medium underline underline-offset-2">
                Gizlilik Sözleşmesi
              </Link>{' '}
              sayfamızı inceleyebilirsiniz.
            </p>
          </div>
        </div>

        <div className="flex w-full md:w-auto items-center gap-3 shrink-0">
          <button 
            onClick={handleDecline}
            className="flex-1 md:flex-none px-5 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-sm font-semibold transition-colors"
          >
            Reddet
          </button>
          <button 
            onClick={handleAccept}
            className="flex-1 md:flex-none bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-blue-500/20 transition-all"
          >
            Kabul Et
          </button>
        </div>

        {/* Mobilde Kapat Butonu */}
        <button 
          onClick={handleDecline} 
          className="absolute top-3 right-3 sm:hidden text-gray-500 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
