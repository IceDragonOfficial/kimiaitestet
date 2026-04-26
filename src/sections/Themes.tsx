import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye } from 'lucide-react';

const themes = [
  { name: 'Neon Dark', image: '/images/theme-1.jpg', desc: 'Modern Minecraft teması' },
  { name: 'Gaming Hub', image: '/images/theme-2.jpg', desc: 'Topluluk odaklı tema' },
  { name: 'Cyber Store', image: '/images/theme-3.jpg', desc: 'E-ticaret mağaza teması' },
  { name: 'Admin Pro', image: '/images/theme-4.jpg', desc: 'Yönetici paneli teması' },
];

export default function Themes() {
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
    <section id="themes" ref={ref} className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Farklı görün, <span className="text-gradient">eşsiz hisset</span>, unutulmaz ol.
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Web sitenizi öne çıkarmak için tamamen özelleştirilebilir temalarımızı keşfedin.
          </p>
          <Button
            variant="outline"
            className="border-zinc-700 text-white hover:bg-zinc-800 px-6 py-5"
          >
            Temaları Keşfet
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {themes.map((theme, i) => (
            <div
              key={i}
              className={`group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-glow ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={theme.image}
                  alt={theme.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-lg mb-1">{theme.name}</h3>
                <p className="text-zinc-400 text-sm mb-3">{theme.desc}</p>
                <div className="flex items-center gap-2 text-[#3b82f6] text-sm font-medium">
                  <Eye className="w-4 h-4" />
                  Temayı İncele
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
