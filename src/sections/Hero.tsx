import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Puzzle, Server, Palette } from 'lucide-react';

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Game Server', 'Minecraft Server', 'Hytale Server', 'FiveM Server', 'Rust Server'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background glow */}
      <div className="absolute inset-0 bg-glow opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3b82f6]/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#8b5cf6]/10 rounded-full blur-[100px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Rotating word */}
        <div className="mb-6 h-12 overflow-hidden">
          <div
            className="transition-transform duration-700 ease-out"
            style={{ transform: `translateY(-${currentWord * 48}px)` }}
          >
            {words.map((word, i) => (
              <div key={i} className="h-12 flex items-center justify-center">
                <span className="text-sm font-medium text-[#3b82f6] tracking-wide uppercase">
                  {word}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
          Oyun sunucunun websitesini{' '}
          <span className="text-gradient">yönet</span>, sunucundan{' '}
          <span className="text-gradient">gelir elde et!</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Mağaza, Forum, Destek, Blog gibi 30'dan fazla modül ile birlikte websiten dakikalar içinde hazır!
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            size="lg"
            className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold px-8 py-6 text-base rounded-lg transition-all hover:scale-[1.02] hover:shadow-glow"
          >
            Satın Al
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-zinc-700 text-white hover:bg-zinc-800 px-8 py-6 text-base rounded-lg transition-all hover:scale-[1.02]"
          >
            <Play className="w-5 h-5 mr-2" />
            Demoyu İncele
          </Button>
        </div>

        {/* Floating badges */}
        <div className="relative flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <div className="animate-float flex items-center gap-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-full px-4 py-2">
            <div className="w-8 h-8 rounded-full bg-[#3b82f6]/20 flex items-center justify-center">
              <Puzzle className="w-4 h-4 text-[#3b82f6]" />
            </div>
            <span className="text-sm font-medium text-zinc-300">30+ Modüller</span>
          </div>
          <div className="animate-float-delayed flex items-center gap-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-full px-4 py-2">
            <div className="w-8 h-8 rounded-full bg-[#22c55e]/20 flex items-center justify-center">
              <Server className="w-4 h-4 text-[#22c55e]" />
            </div>
            <span className="text-sm font-medium text-zinc-300">Kendi Barındırma</span>
          </div>
          <div className="animate-float flex items-center gap-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-full px-4 py-2">
            <div className="w-8 h-8 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center">
              <Palette className="w-4 h-4 text-[#8b5cf6]" />
            </div>
            <span className="text-sm font-medium text-zinc-300">Premium Temalar</span>
          </div>
        </div>
      </div>
    </section>
  );
}
