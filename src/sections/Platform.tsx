import { useEffect, useRef, useState } from 'react';
import {
  MessageSquare,
  ShoppingCart,
  FileText,
  Ticket,
  HelpCircle,
  CreditCard,
  Link2,
  History,
  Gamepad2,
} from 'lucide-react';

const features = [
  { icon: MessageSquare, title: 'Forum', desc: 'Topluluk tartışmaları', color: '#3b82f6' },
  { icon: ShoppingCart, title: 'Mağaza', desc: 'Ürün satış sistemi', color: '#22c55e' },
  { icon: FileText, title: 'Blog', desc: 'Haber ve duyurular', color: '#8b5cf6' },
  { icon: Ticket, title: 'Destek Talepleri', desc: 'Ticket yönetimi', color: '#f59e0b' },
  { icon: HelpCircle, title: 'Yardım Merkezi', desc: 'Sık sorulan sorular', color: '#ec4899' },
  { icon: CreditCard, title: 'Tebex Mağazası', desc: 'Ödeme entegrasyonu', color: '#14b8a6' },
  { icon: Link2, title: 'Hesap Bağlama', desc: 'Oyun hesabı sync', color: '#6366f1' },
  { icon: History, title: 'Değişiklik Günlüğü', desc: 'Sürüm takibi', color: '#f97316' },
  { icon: Gamepad2, title: 'Discord Entegrasyonu', desc: 'Discord bağlantısı', color: '#5865F2' },
];

export default function Platform() {
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
            Tek Platformda <span className="text-gradient">İhtiyacınız Olan Her Şey</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Sunucunuzun web sitesini oluşturmak için ihtiyacınız olan tüm özellikler — tek bir platformda!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-zinc-700 cursor-default ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
              <p className="text-zinc-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
