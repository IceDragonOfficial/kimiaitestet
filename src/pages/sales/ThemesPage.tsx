import { Palette, Monitor, Star, Zap, Filter, Search, ChevronDown, Check } from 'lucide-react';
import { Link } from 'react-router';

// Fiyatları %5-10 civarında indirimli hale getiriyoruz
const THEMES = [
  {
    name: 'Flat',
    price: 'Ücretsiz',
    designer: 'Varsayılan Tema',
    isFree: true,
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop', // Placeholder for Flat
  },
  {
    name: 'Hyterra',
    price: '899₺',
    designer: 'Gameixa Teması',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop', // Placeholder for Hyterra
  },
  {
    name: 'Lester',
    price: '1349₺',
    designer: 'Gameixa Teması',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop', // Placeholder for Lester
  },
  {
    name: 'Gale',
    price: '649₺',
    designer: 'Gameixa Teması',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop', // Placeholder for Gale
  },
  {
    name: 'Leaf',
    price: '649₺',
    designer: 'Gameixa Teması',
    thumbnail: 'https://images.unsplash.com/photo-1501862700950-18382cd41497?q=80&w=800&auto=format&fit=crop', // Placeholder for Leaf
  },
  {
    name: 'Blaze',
    price: '649₺',
    designer: 'Gameixa Teması',
    thumbnail: 'https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?q=80&w=800&auto=format&fit=crop', // Placeholder for Blaze
  },
  {
    name: 'Medieval',
    price: '649₺',
    designer: 'Minefox Teması',
    thumbnail: 'https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=800&auto=format&fit=crop', // Placeholder for Medieval
  },
  {
    name: 'Arena',
    price: '649₺',
    designer: 'GurLabs Teması',
    thumbnail: 'https://images.unsplash.com/photo-1542395975-d6d39f7dc129?q=80&w=800&auto=format&fit=crop', // Placeholder for Arena
  },
  {
    name: 'OynaTR',
    price: '649₺',
    designer: 'GurLabs Teması',
    thumbnail: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=800&auto=format&fit=crop', // Placeholder for OynaTR
  }
];

export default function ThemesPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24">
      {/* Arka plan efektleri */}
      <div className="absolute top-0 left-0 w-full h-[500px] overflow-hidden pointer-events-none">
        <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 uppercase tracking-wider mb-4">
            <Palette className="w-3 h-3" /> Tema Marketİ
          </p>
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Mağazanız İçin <br />
            <span className="text-blue-500">Mükemmel Temayı Bulun</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Velixo altyapısı ile tam uyumlu çalışan, modern ve yüksek performanslı temalar. Oyuncularınıza premium bir deneyim sunun.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 bg-[#0a0a0a] p-4 rounded-2xl border border-white/5 shadow-xl">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
            <button className="whitespace-nowrap px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-500/20 flex items-center gap-2">
              <Check className="w-4 h-4" /> Tümü
            </button>
            <button className="whitespace-nowrap px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-bold text-sm transition-colors">
              Ücretsiz
            </button>
            <button className="whitespace-nowrap px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-bold text-sm transition-colors">
              Premium
            </button>
            <div className="w-px h-6 bg-white/10 mx-2" />
            <button className="whitespace-nowrap px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-bold text-sm transition-colors flex items-center gap-2">
              <Filter className="w-4 h-4" /> Filtrele
            </button>
          </div>

          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-gray-500" />
            </div>
            <input 
              type="text" 
              placeholder="Tema ara..." 
              className="w-full bg-[#111] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Themes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {THEMES.map((theme) => (
            <div key={theme.name} className="flex flex-col gap-4">
              {/* Tema Resmi */}
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/5 relative group cursor-pointer bg-[#0a0a0a]">
                <img src={theme.thumbnail} alt={theme.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
              </div>

              {/* Tema Bilgileri */}
              <div className="flex items-start justify-between px-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{theme.name}</h3>
                  <p className="text-sm font-medium text-gray-500">{theme.designer}</p>
                </div>
                {!theme.isFree && (
                  <div className="text-lg font-bold text-white">
                    {theme.price}
                  </div>
                )}
              </div>

              {/* Butonlar */}
              <div className="grid grid-cols-2 gap-3 mt-auto">
                {!theme.isFree ? (
                  <button className="bg-white hover:bg-gray-200 text-black font-bold py-3 rounded-xl transition-colors text-sm text-center">
                    Satın Al
                  </button>
                ) : (
                  <div /> // Spacing for Free theme which only has demo button
                )}
                <Link to={`/demo/${theme.name.toLowerCase()}/minecraft`} className={`bg-[#1a1a1a] hover:bg-[#252525] text-white font-bold py-3 rounded-xl transition-colors text-sm text-center ${theme.isFree ? 'col-span-2' : ''}`}>
                  Demoyu İncele
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
