import { Sparkles, Bot, Zap } from 'lucide-react'

export default function ClientAI() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Yapay Zeka</h2>
        <div className="flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-xl border border-blue-500/20">
          <Zap className="w-5 h-5" />
          <span className="font-bold">15,000 Kredi</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full group-hover:bg-blue-600/20 transition-colors" />
          <Bot className="w-10 h-10 text-blue-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">İçerik Üretici</h3>
          <p className="text-gray-400 mb-6 text-sm">Sunucunuz için SEO uyumlu haberler, blog yazıları ve ürün açıklamaları oluşturun.</p>
          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-colors">
            Hemen Başla
          </button>
        </div>

        <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 blur-[50px] rounded-full group-hover:bg-purple-600/20 transition-colors" />
          <Sparkles className="w-10 h-10 text-purple-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">Görsel Oluşturucu</h3>
          <p className="text-gray-400 mb-6 text-sm">Mağazanızdaki ürünler veya haberleriniz için yapay zeka ile etkileyici görseller çizin.</p>
          <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-xl transition-colors">
            Hemen Başla
          </button>
        </div>
      </div>
    </div>
  )
}
