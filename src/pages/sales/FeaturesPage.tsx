import { Shield, ShoppingCart, Users, MessageSquare, Zap, Gift, Trophy, Activity, CreditCard, Layout, Database, Wrench } from 'lucide-react'

const FEATURES = [
  {
    category: 'Mağaza ve Satış',
    items: [
      { icon: ShoppingCart, name: 'Gelişmiş Mağaza', desc: 'Sınırsız kategori ve ürün ekleme, anında sunucu içi teslimat.' },
      { icon: CreditCard, name: 'Ödeme Entegrasyonları', desc: 'PayTR, iyzico, Shopier, Shipy gibi Türkiye\'nin en popüler ödeme yöntemleri hazır.' },
      { icon: Gift, name: 'Çarkıfelek & Sandık', desc: 'Oyuncularınız kredi harcayarak kasa açabilir, şans çarkı çevirebilir.' },
      { icon: Zap, name: 'Gaming Gecesi', desc: 'Belirlediğiniz gün ve saatlerde otomatik flaş indirimler düzenleyin.' },
    ]
  },
  {
    category: 'Topluluk ve İletişim',
    items: [
      { icon: MessageSquare, name: 'Modern Forum', desc: 'Kategoriler, etiketler, yapışkan konular ve zengin metin editörü ile topluluğunuzu canlı tutun.' },
      { icon: Users, name: 'Destek (Ticket) Sistemi', desc: 'Oyuncuların sorunlarını kategorize edin, AI ile otomatik yanıtlayın.' },
      { icon: Shield, name: 'Ban & Ceza Sistemi', desc: 'Sunucudaki cezaları otomatik senkronize edip web sitenizde şeffafça sergileyin.' },
      { icon: Trophy, name: 'Sıralama (Leaderboards)', desc: 'En çok öldürenler, en zenginler gibi verileri sunucudan anlık çekin.' },
    ]
  },
  {
    category: 'Sistem ve Yönetim',
    items: [
      { icon: Layout, name: 'Sürükle-Bırak Tema Motoru', desc: 'İstediğiniz temayı seçin, modüllerin yerlerini kod bilmeden sürükleyerek ayarlayın.' },
      { icon: Activity, name: 'Detaylı İstatistikler', desc: 'Kayıt olanlar, satışlar, site ziyaretleri tek bir ekranda.' },
      { icon: Database, name: 'API ve Webhook', desc: 'Discord, oyun sunucusu veya harici yazılımlarla tam entegrasyon için açık API.' },
      { icon: Wrench, name: 'SEO & Güvenlik', desc: '%100 SEO uyumlu altyapı, Recaptcha V3 ve Cloudflare desteği ile tam koruma.' },
    ]
  }
]

export default function FeaturesPage() {
  return (
    <div className="pt-32 pb-24 bg-[#050505] min-h-screen text-white selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Zap className="w-4 h-4" /> 30+ Gelişmiş Modül
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight drop-shadow-2xl">
            Tüm İhtiyaçlarınız <span className="text-gradient">Tek Platformda</span>
          </h1>
          <p className="text-lg text-gray-400 font-medium">
            Velixo, bir oyun sunucusunun ihtiyacı olan tüm modülleri tek bir panelde birleştirir. Eklenti aramakla, entegrasyon yapmakla uğraşmayın.
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-24">
          {FEATURES.map((group) => (
            <div key={group.category}>
              <h2 className="text-2xl font-bold mb-10 flex items-center gap-4">
                <div className="w-8 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                {group.category}
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {group.items.map((item, idx) => (
                  <div key={idx} className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:bg-white/[0.04] hover:border-white/10 transition-all card-hover">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center mb-6">
                      <item.icon className="w-7 h-7 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.name}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-32 bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Hemen Bugün Başlayın</h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
              Velixo ile sunucunuzun gelirlerini artırın, topluluğunuzu büyütün ve profesyonel bir görünüme kavuşun.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl shadow-white/10">
              Paketleri İncele
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
