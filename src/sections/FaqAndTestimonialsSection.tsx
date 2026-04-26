import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'Velixo nedir?',
    a: 'Velixo, oyun sunucuları için geliştirilmiş profesyonel bir website yazılımıdır. Mağaza, forum, destek, blog ve daha birçok modülü tek bir platformda sunar.',
  },
  {
    q: 'Hangi oyunlar destekleniyor?',
    a: 'Minecraft, FiveM, Rust, ARK, CS:GO/CS2, Unturned, Garry\'s Mod, Roblox ve Hytale gibi popüler oyunlar desteklenmektedir.',
  },
  {
    q: 'Kurulum nasıl yapılır?',
    a: 'cPanel, Plesk, Docker, Ubuntu (VPS) ve Pterodactyl üzerinde kurulum yapabilirsiniz. Detaylı kurulum rehberimiz mevcuttur.',
  },
  {
    q: 'Domain değişikliği yapabilir miyim?',
    a: 'Evet, yılda bir kez ücretsiz domain değişikliği hakkınız vardır. Ekstra değişiklikler ücretlidir.',
  },
  {
    q: 'Lifetime lisans nedir?',
    a: 'Tek seferlik ödeme ile yazılımı süresiz kullanabilirsiniz. Tüm güncellemeler ve destek lifetime süresince dahildir.',
  },
  {
    q: 'Kendi temamı yapabilir miyim?',
    a: 'Evet, Tema Editörü sayesinde kendi temanızı oluşturabilir veya mevcut temaları özelleştirebilirsiniz. Kaynak koduna tam erişiminiz vardır.',
  },
  {
    q: 'Ödeme yöntemleri nelerdir?',
    a: 'Kredi kartı, Papara, PayTR, Stripe, PayPal ve EFT/Havale ile ödeme yapabilirsiniz.',
  },
]

const TESTIMONIALS = [
  {
    name: 'SaloonNetwork',
    role: 'Minecraft Sunucu',
    text: 'Velixo ile mağaza satışlarımız %40 arttı. Kurulumu çok kolay ve destek ekibi mükemmel.',
  },
  {
    name: 'RebornCraft',
    role: 'Minecraft Sunucu',
    text: 'Daha önce kendi yazılımımızı kullanıyorduk ama Velixo\'ya geçtikten sonra zamandan çok tasarruf ettik.',
  },
  {
    name: 'KnightNetwork',
    role: 'FiveM Sunucu',
    text: 'FiveM entegrasyonu mükemmel çalışıyor. Oyuncularımız siteyi çok beğendi.',
  },
]

export default function FaqAndTestimonialsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <>
      {/* FAQ */}
      <section id="faq" className="py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-blue-400 mb-3 tracking-wider uppercase">SSS</p>
            <h2 className="text-3xl md:text-4xl font-bold">Sıkça Sorulan Sorular</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/[0.06] rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="text-sm font-semibold text-white">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-40 pb-5' : 'max-h-0'}`}>
                  <p className="px-5 text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-blue-400 mb-3 tracking-wider uppercase">Referanslar</p>
            <h2 className="text-3xl md:text-4xl font-bold">Sunucular ne diyor?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-7">
                <p className="text-sm text-gray-300 leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-sm font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
