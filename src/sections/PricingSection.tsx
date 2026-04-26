import { Check, X } from 'lucide-react'

const PLANS = [
  {
    name: 'Temel',
    price: '1,199₺',
    period: 'Ömür Boyu',
    description: 'Sadece Minecraft sunucuları için temel özellikler.',
    features: [
      { name: 'Sadece Minecraft Desteği', included: true },
      { name: 'Eski Arayüz', included: true },
      { name: 'Standart Destek', included: true },
      { name: 'Ücretsiz Otomatik Kurulum', included: true },
      { name: '1 Ay Ücretsiz Web Hosting', included: true },
      { name: 'Sınırsız Domain Değiştirme', included: true },
      { name: 'Güncellemeler', included: false },
      { name: 'Tema Desteği', included: false },
      { name: 'Yapay Zeka (AI) Özellikleri', included: false },
    ],
    buttonText: 'Hemen Al',
    popular: false,
    color: 'from-gray-600 to-gray-800',
    btnColor: 'bg-white/10 hover:bg-white/20 text-white',
  },
  {
    name: 'Standart',
    price: '1,499₺',
    period: 'Ömür Boyu',
    description: 'Güncel arayüz ile profesyonel Minecraft deneyimi.',
    features: [
      { name: 'Sadece Minecraft Desteği', included: true },
      { name: 'Yeni Arayüz', included: true },
      { name: 'Standart Destek', included: true },
      { name: 'Ücretsiz Otomatik Kurulum', included: true },
      { name: '1 Ay Ücretsiz Web Hosting', included: true },
      { name: 'Sınırsız Domain Değiştirme', included: true },
      { name: 'Güncellemeler (Dahil)', included: true },
      { name: 'Tema Desteği', included: false },
      { name: 'Yapay Zeka (AI) Özellikleri', included: false },
    ],
    buttonText: 'Hemen Al',
    popular: true,
    color: 'from-blue-600 to-purple-600',
    btnColor: 'bg-white text-black hover:bg-gray-200',
  },
  {
    name: 'Premium',
    price: '2,499₺',
    period: 'Yıllık Yenilemeli',
    description: 'Tüm oyunlar, yapay zeka ve premium özellikler.',
    features: [
      { name: 'Tüm Oyunların Desteği', included: true },
      { name: 'En Yeni Arayüz', included: true },
      { name: 'Öncelikli Destek', included: true },
      { name: 'Ücretsiz Otomatik Kurulum', included: true },
      { name: '1 Ay Ücretsiz Web Hosting', included: true },
      { name: '6 Ayda 1 Domain Değiştirme', included: true },
      { name: 'Ücretsiz Güncellemeler', included: true },
      { name: 'Tema Desteği (Premium)', included: true },
      { name: 'Yapay Zeka (AI) Özellikleri', included: true },
    ],
    buttonText: 'Hemen Al',
    popular: false,
    color: 'from-amber-500 to-orange-600',
    btnColor: 'bg-white/10 hover:bg-white/20 text-white',
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 border-t border-white/5 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-blue-600/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-400 mb-3 tracking-wider uppercase">Fiyatlandırma</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Size uygun planı seçin
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Gizli ücret yok, sürpriz yok. Sunucunuzun boyutuna ve ihtiyaçlarına en uygun lisansı seçerek hemen başlayın.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PLANS.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative bg-[#0a0a0a] border ${plan.popular ? 'border-blue-500' : 'border-white/10'} rounded-3xl p-8 shadow-2xl flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  En Çok Tercih Edilen
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-400 h-10">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                </div>
                <span className="text-sm font-medium text-gray-500">{plan.period}</span>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    {feature.included ? (
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-blue-400" />
                      </div>
                    ) : (
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                        <X className="w-3 h-3 text-gray-600" />
                      </div>
                    )}
                    <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all ${plan.btnColor}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
