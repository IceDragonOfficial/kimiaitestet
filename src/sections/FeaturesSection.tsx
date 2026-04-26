import { ShoppingCart, MessageSquare, Headphones, BarChart3, Newspaper } from 'lucide-react'

const FEATURES = [
  {
    icon: MessageSquare,
    title: 'Topluluğunuzu bir araya getirin, forumlar kurun',
    desc: 'Tam teşekküllü forum yazılımı ile oyuncularınızın kendi aralarında veya sizinle iletişim kurmasını sağlayın.',
    color: 'from-blue-500/20 to-blue-600/5',
    iconColor: 'text-blue-400',
    colSpan: 'lg:col-span-1'
  },
  {
    icon: ShoppingCart,
    title: 'Oyun içi eşyalar satarak gelir elde edin',
    desc: 'Oyuncularınızın satın aldığı eşyalar anında oyuna teslim edilir. Siz sadece gelirinize odaklanırsınız.',
    color: 'from-blue-500/20 to-blue-600/5',
    iconColor: 'text-blue-400',
    colSpan: 'lg:col-span-2'
  },
  {
    icon: Newspaper,
    title: 'Sunucu haberlerini yayınlayın, blog oluşturun',
    desc: 'Oyun sunucunuzdaki gelişmeleri, yenilikleri ve etkinlikleri blog yazıları ile duyurun.',
    color: 'from-blue-500/20 to-blue-600/5',
    iconColor: 'text-blue-400',
    colSpan: 'lg:col-span-2'
  },
  {
    icon: Headphones,
    title: 'Destek taleplerini kolayca yönetin',
    desc: 'Oyuncularınızın yaşadığı sorunları tek bir merkezden çözün ve oyuncu memnuniyetini artırın.',
    color: 'from-blue-500/20 to-blue-600/5',
    iconColor: 'text-blue-400',
    colSpan: 'lg:col-span-1'
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-400 mb-3 tracking-wider uppercase">Özellikler</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Oyun Sunucuları için<br />
            <span className="text-gradient">Website Yazılımı</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <div key={i} className={`group relative bg-[#0a0a0a] border border-white/5 rounded-3xl p-10 hover:border-blue-500/30 transition-all duration-500 overflow-hidden ${f.colSpan}`}>
              <div className={`absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-blue-600/10 to-transparent blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-500 shadow-xl shadow-black/50`}>
                    <f.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">{f.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-medium">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
