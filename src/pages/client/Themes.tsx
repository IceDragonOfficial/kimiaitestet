import { Palette, Download, ExternalLink } from 'lucide-react'
import { Link } from 'react-router'

export default function ClientThemes() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Satın Alınan Temalar</h2>
        <Link to="/themes" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold py-2 px-4 rounded-xl transition-colors text-sm flex items-center gap-2">
          <Palette className="w-4 h-4" /> Yeni Tema Keşfet
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden flex flex-col">
          <div className="h-40 bg-gray-800 relative">
            <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop" alt="Lester" className="w-full h-full object-cover opacity-80" />
            <div className="absolute top-4 left-4 bg-blue-600 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg">
              Aktif Lisans
            </div>
          </div>
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-bold mb-1">Lester Teması</h3>
            <p className="text-sm text-gray-400 mb-6">Satın Alma: 15 Ekim 2026</p>
            <div className="mt-auto grid grid-cols-2 gap-3">
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 rounded-xl transition-colors text-sm flex items-center justify-center gap-2">
                <Download className="w-4 h-4" /> İndir
              </button>
              <button className="bg-white/5 hover:bg-white/10 text-white font-bold py-2.5 rounded-xl transition-colors text-sm flex items-center justify-center gap-2">
                <ExternalLink className="w-4 h-4" /> Döküman
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
