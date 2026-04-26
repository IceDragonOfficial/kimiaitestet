import { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'KnightNW',
    text: '3 yıldır LeaderOS kullanıyoruz. Kaliteli yazılım ve hızlı destek sağlıyorlar. Sunucumuz için vazgeçilmez bir araç.',
    rating: 5,
  },
  {
    name: 'CraftLime',
    text: 'Minecraft sunucumuzu kurduğumuz günden bu yana sorunsuz bir deneyim sunuyor. Mağaza sistemi harika!',
    rating: 5,
  },
  {
    name: 'Provanas',
    text: 'LeaderOS ile çalışmak harika bir deneyimdi. Profesyonel bir web sitesine sahip olmak isteyenler için tavsiye ediyorum.',
    rating: 5,
  },
  {
    name: 'CrageNetwork',
    text: 'Sezgisel arayüzü ve etkileyici performansıyla öne çıkıyor. Forum ve destek sistemleri mükemmel.',
    rating: 5,
  },
  {
    name: 'SaloonNetwork',
    text: '2 yıldan uzun süredir kullanıyoruz. Fiyatı makul, kullanımı kolay. Her oyun sunucusu sahibine tavsiye ederim.',
    rating: 5,
  },
  {
    name: 'RebornCraft',
    text: 'Kullanıcı dostu tasarımı ve hızlı erişim özellikleri ile çok memnunuz. AI destek özelliği gerçekten zaman kazandırıyor.',
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Müşterilerimiz <span className="text-gradient">bizim hakkımızda ne diyor?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-zinc-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <Quote className="w-6 h-6 text-[#3b82f6]/40 mb-2" />
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] flex items-center justify-center text-white font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{t.name}</div>
                  <div className="text-zinc-500 text-xs">LeaderOS Kullanıcısı</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
