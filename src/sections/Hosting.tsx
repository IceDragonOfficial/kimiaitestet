import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Terminal } from 'lucide-react';

export default function Hosting() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <span className="inline-block text-sm font-semibold text-[#3b82f6] uppercase tracking-wider mb-3">
              Kendi Barındırma
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              Kendi sunucunuzda barındırın
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Yazılımı kendi sunucunuzda barındırın veya yönetilen barındırmamızı kullanın, seçim sizin. cPanel, Plesk, Ubuntu, Nginx, Docker, Ptero Panel, CloudPanel ve daha fazlası için kurulum hakkında ayrıntılı belgeler sağlıyoruz.
            </p>
            <Button
              variant="outline"
              className="border-zinc-700 text-white hover:bg-zinc-800 px-6 py-5"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Dokümantasyonu Görüntüle
            </Button>
          </div>

          {/* Visual - Terminal */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-950">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-zinc-600 font-mono">terminal</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="flex items-center gap-2 text-zinc-500 mb-1">
                  <Terminal className="w-4 h-4" />
                  <span>~</span>
                </div>
                <div className="text-green-400 mb-1">$ docker pull leaderos/leaderos</div>
                <div className="text-zinc-500 mb-1">Pulling latest image...</div>
                <div className="text-zinc-500 mb-1">Download complete</div>
                <div className="text-green-400 mb-1">$ docker-compose up -d</div>
                <div className="text-zinc-500 mb-1">Creating leaderos_app ... done</div>
                <div className="text-zinc-500 mb-1">Creating leaderos_db ... done</div>
                <div className="text-zinc-500 mb-3">Creating leaderos_redis ... done</div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                  <div className="text-green-400 font-semibold flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Kurulum Tamamlandı!
                  </div>
                  <div className="text-green-400/70 text-xs mt-1">
                    LeaderOS başarıyla kuruldu. http://localhost:8080 adresinden erişebilirsiniz.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
