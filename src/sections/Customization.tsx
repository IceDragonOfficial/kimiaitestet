import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileCode, FolderOpen } from 'lucide-react';

export default function Customization() {
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
          {/* Visual - Code Editor */}
          <div
            className={`order-2 lg:order-1 transition-all duration-700 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-950">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-zinc-600">theme.css - LeaderOS Theme Editor</span>
              </div>
              <div className="flex">
                {/* Sidebar */}
                <div className="w-48 border-r border-zinc-800 bg-zinc-950/50 p-3 hidden sm:block">
                  <div className="flex items-center gap-2 text-zinc-500 text-xs mb-3">
                    <FolderOpen className="w-3 h-3" />
                    <span>themes</span>
                  </div>
                  {['default', 'dark-neon', 'ocean', 'cyber'].map((folder) => (
                    <div key={folder} className="flex items-center gap-2 text-zinc-600 text-xs py-1 pl-4">
                      <FileCode className="w-3 h-3" />
                      <span>{folder}/theme.php</span>
                    </div>
                  ))}
                </div>
                {/* Code */}
                <div className="flex-1 p-4 font-mono text-xs sm:text-sm overflow-x-auto">
                  <div className="text-zinc-500 mb-2">{`/* LeaderOS Theme Configuration */`}</div>
                  <div>
                    <span className="text-purple-400">$primaryColor</span>
                    <span className="text-zinc-400"> = </span>
                    <span className="text-green-400">"#3b82f6"</span>
                    <span className="text-zinc-400">;</span>
                  </div>
                  <div>
                    <span className="text-purple-400">$darkMode</span>
                    <span className="text-zinc-400"> = </span>
                    <span className="text-orange-400">true</span>
                    <span className="text-zinc-400">;</span>
                  </div>
                  <div>
                    <span className="text-purple-400">$fontFamily</span>
                    <span className="text-zinc-400"> = </span>
                    <span className="text-green-400">"Inter, sans-serif"</span>
                    <span className="text-zinc-400">;</span>
                  </div>
                  <div className="mt-3">
                    <span className="text-blue-400">function</span>
                    <span className="text-yellow-400"> customizeTheme</span>
                    <span className="text-zinc-400">() {'{'}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-500">// Tamamen özelleştirilebilir</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">return</span>
                    <span className="text-zinc-400"> [</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-green-400">'header_style'</span>
                    <span className="text-zinc-400"> ={`>`} </span>
                    <span className="text-green-400">'modern'</span>
                    <span className="text-zinc-400">,</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-green-400">'animations'</span>
                    <span className="text-zinc-400"> ={`>`} </span>
                    <span className="text-orange-400">true</span>
                    <span className="text-zinc-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">];</span>
                  </div>
                  <div>
                    <span className="text-zinc-400">{'}'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div
            className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <span className="inline-block text-sm font-semibold text-[#8b5cf6] uppercase tracking-wider mb-3">
              Kaynak Koduna Erişim
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              Tamamen <span className="text-gradient">Özelleştirilebilir</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Kaynak koduna erişim ile web sitenizin her yönünü özelleştirin. Temaları değiştirin, yeni özellikler ekleyin veya diğer hizmetlerle entegre edin. Olanaklar sonsuzdur.
            </p>
            <Button
              variant="outline"
              className="border-zinc-700 text-white hover:bg-zinc-800 px-6 py-5"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Temaları Keşfet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
