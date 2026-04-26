import { useEffect, useRef, useState } from 'react';
import { DollarSign, MessageSquare, Headphones, BarChart3, FileText } from 'lucide-react';

const features = [
  {
    icon: DollarSign,
    title: 'Sunucunuzdan para kazanın',
    desc: 'Kendi web mağazanızı oluşturun ve dakikalar içinde satış yapmaya başlayın.',
    color: '#22c55e',
    span: 'col-span-1',
  },
  {
    icon: MessageSquare,
    title: 'Kendi topluluğunuzu oluşturun',
    desc: 'Oyuncularınızın forumda tartışmasına, ipuçları paylaşmasına ve arkadaşlıklar kurmasına izin verin.',
    color: '#3b82f6',
    span: 'col-span-1',
  },
  {
    icon: Headphones,
    title: 'Oyuncularınıza destek sağlayın',
    desc: 'Destek taleplerini verimli bir şekilde yönetin ve destek ekibinizle işbirliği yapın.',
    color: '#8b5cf6',
    span: 'col-span-1',
  },
  {
    icon: BarChart3,
    title: 'Sunucunuzu analiz edin',
    desc: 'İstatistikleri izleyin ve analiz edin.',
    color: '#f59e0b',
    span: 'col-span-1 md:col-span-1',
  },
  {
    icon: FileText,
    title: 'Neler olup bittiğini paylaşın',
    desc: 'Profesyonel bir blog ile güncellemeleri yayınlayın.',
    color: '#ec4899',
    span: 'col-span-1 md:col-span-1',
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean[]>(features.map(() => false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-index'));
            setVisible((prev) => {
              const next = [...prev];
              next[idx] = true;
              return next;
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-index]');
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Oyun Sunucuları için{' '}
            <span className="text-gradient">Tam Web Çözümü</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Modern bir web sitesine, forumlara, bloglara, destek merkezine veya bağış mağazasına mı ihtiyacınız var? LeaderOS size hepsini tek bir sistemde sunar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <div
              key={i}
              data-index={i}
              className={`${feature.span} bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 card-hover cursor-default transition-all duration-500 ${
                visible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>

              {/* Fake UI element */}
              <div className="mt-6 p-3 bg-zinc-950/60 rounded-lg border border-zinc-800/50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: feature.color }} />
                  <div className="h-2 bg-zinc-800 rounded w-20" />
                </div>
                <div className="h-2 bg-zinc-800/50 rounded w-full mb-1" />
                <div className="h-2 bg-zinc-800/50 rounded w-3/4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
