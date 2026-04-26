import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { ArrowRight, Play, Server, Shield, Users, Globe, Sparkles } from 'lucide-react'

const GAMES = ['Minecraft', 'FiveM', 'Rust', 'ARK', 'CS:GO', 'Roblox', 'Hytale', 'Unturned', 'GMOD']

export default function HeroSection() {
  const [gameIndex, setGameIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setGameIndex((prev) => (prev + 1) % GAMES.length)
        setFade(true)
      }, 300)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      {/* Arka plan efektleri */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute top-40 left-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/8 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Üst banner */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Dünya çapında +3000 sunucu kalitemize güveniyor
        </div>

        {/* Ana başlık */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6">
          <span className="text-white">Oyun sunucun için</span><br/>
          <span className={`inline-block text-blue-500 transition-all duration-300 ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            {GAMES[gameIndex]}
          </span>
          <br />
          <span className="text-white">websiteni hemen kur!</span>
        </h1>

        {/* Alt metin */}
        <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-10 leading-relaxed font-medium">
          Mağazanızdan satış yapabilir, oyuncularınıza destek verebilir, sunucu haberlerini paylaşabilir, forumlarda topluluğunuzu bir araya getirebilirsiniz.
        </p>

        {/* CTA butonlar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/demo" className="group flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] w-full sm:w-auto">
            Demo'yu İncele
          </Link>
          <Link to="/ozellikler" className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full font-bold text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full sm:w-auto">
            Detaylı Bilgi
          </Link>
        </div>

        {/* Dashboard mockup */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none" />
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-2 shadow-2xl shadow-blue-500/5">
            <div className="rounded-xl bg-[#0a0a0a] border border-white/5 p-6 min-h-[400px] flex flex-col">
              {/* Fake dashboard header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 h-6 rounded-md bg-white/5" />
              </div>
              {/* Fake stats */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'Toplam Satış', value: '₺45,230', color: 'text-blue-400' },
                  { label: 'Aktif Kullanıcı', value: '1,240', color: 'text-green-400' },
                  { label: 'Destek Talebi', value: '23', color: 'text-yellow-400' },
                  { label: 'Online', value: '348', color: 'text-purple-400' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/[0.03] rounded-lg p-4 border border-white/5">
                    <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                    <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                  </div>
                ))}
              </div>
              {/* Fake chart area */}
              <div className="flex-1 bg-white/[0.02] rounded-lg border border-white/5 flex items-end p-4 gap-2">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-blue-600/40 to-blue-400/20 rounded-t-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Güvenen sunucular logoları */}
        <div className="mt-20 border-t border-white/10 pt-10">
          <p className="text-center text-sm font-bold text-gray-500 uppercase tracking-wider mb-8">
            Dünya çapında +3000 sunucu kalitemize güveniyor!
          </p>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 opacity-50">
            {[
              { name: 'CraftRise', icon: Server },
              { name: 'SonOyuncu', icon: Globe },
              { name: 'Güvenli Altyapı', icon: Shield },
              { name: '10K+ Oyuncu', icon: Users },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300">
                <badge.icon className="w-8 h-8" />
                <span className="text-xl font-black tracking-tight">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
