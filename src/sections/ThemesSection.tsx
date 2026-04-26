import { ArrowRight, Star, Palette, Monitor, Zap } from 'lucide-react'
import { Link } from 'react-router'

const THEMES = [
  {
    name: 'Flat (Default)',
    designer: 'Velixo',
    rating: 5.0,
    tags: ['Minecraft', 'Sade', 'Hızlı'],
    colors: ['bg-blue-500', 'bg-gray-800'],
  },
  {
    name: 'Lester',
    designer: 'Gameixa',
    rating: 4.9,
    tags: ['Premium', 'Dark', 'RP'],
    colors: ['bg-purple-500', 'bg-black'],
  },
  {
    name: 'Hyterra',
    designer: 'Gameixa',
    rating: 4.8,
    tags: ['Gaming', 'RGB'],
    colors: ['bg-green-500', 'bg-green-900'],
  },
  {
    name: 'Gale',
    designer: 'Gameixa',
    rating: 4.9,
    tags: ['Modern', 'Clean'],
    colors: ['bg-amber-500', 'bg-orange-900'],
  },
]

export default function ThemesSection() {
  return (
    <section id="themes" className="py-24 border-t border-white/5 relative">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-sm font-bold text-blue-500 mb-4 tracking-wider uppercase flex items-center gap-2">
              <Palette className="w-4 h-4" /> TEMA MOTORU
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Farklı görün, <span className="text-blue-500">premium hisset.</span>
            </h2>
            <p className="text-gray-400 mt-6 max-w-xl font-medium text-lg leading-relaxed">
              Gelişmiş tema motoru sayesinde mağazanızı ve topluluğunuzu istediğiniz gibi özelleştirin. HTML/CSS desteği ile sınırları siz belirleyin.
            </p>
          </div>
          <Link to="/demo" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-gray-100 text-black font-bold text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full md:w-auto">
            Tema Marketine Git <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {THEMES.map((theme) => (
            <div key={theme.name} className="group bg-[#0a0a0a] border border-white/5 rounded-[2rem] p-3 hover:border-blue-500/30 hover:-translate-y-2 transition-all duration-500 shadow-2xl overflow-hidden">
              {/* Tema Önizleme (Mockup Skeleton) */}
              <div className="relative aspect-[4/3] rounded-3xl bg-[#050505] overflow-hidden mb-6 border border-white/5">
                {/* Şık Gradient Arka Plan */}
                <div className={`absolute inset-0 opacity-20 bg-gradient-to-br from-transparent to-${theme.colors[0].split('-')[1]}-500/30`} />
                
                {/* Fake WebUI Skeleton */}
                <div className="absolute inset-x-0 top-0 h-8 border-b border-white/5 flex items-center px-3 gap-2 bg-white/[0.02]">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  </div>
                  <div className="ml-2 w-1/3 h-2 rounded-full bg-white/10" />
                </div>
                
                <div className="absolute inset-x-0 top-8 bottom-0 p-4">
                  {/* Fake Hero */}
                  <div className="w-3/4 h-6 rounded bg-white/10 mb-2" />
                  <div className="w-1/2 h-4 rounded bg-white/5 mb-6" />
                  {/* Fake Cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className={`h-16 rounded-lg ${theme.colors[0]} opacity-20`} />
                    <div className={`h-16 rounded-lg ${theme.colors[1]} opacity-40`} />
                    <div className="h-16 rounded-lg bg-white/5" />
                    <div className="h-16 rounded-lg bg-white/5" />
                  </div>
                </div>

                <Link to={`/demo/${theme.name.toLowerCase().split(' ')[0]}/minecraft`} className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-md">
                  <span className="bg-white text-black px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 shadow-xl shadow-white/20">
                    <Monitor className="w-4 h-4" /> Demoyu İncele
                  </span>
                </Link>
              </div>

              {/* Tema Bilgileri */}
              <div className="px-4 pb-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">{theme.name}</h3>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs text-gray-500 font-medium">Yaratıcı: <span className="text-gray-400">{theme.designer}</span></p>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="text-xs font-bold">{theme.rating}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {theme.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-gray-400 px-2 py-1 rounded-md flex items-center gap-1">
                      <Zap className="w-3 h-3 text-gray-500" /> {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
