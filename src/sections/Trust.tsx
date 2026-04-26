import { useRef, useEffect } from 'react';

const partners = [
  'CraftLime',
  'Provanas',
  'KnightNW',
  'CrageNetwork',
  'SaloonNetwork',
  'RebornCraft',
  'Pixelmon',
  'GameHub',
  'MineCore',
  'BlockVerse',
];

export default function Trust() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    let x = 0;
    let raf: number;
    const step = () => {
      x -= 0.5;
      if (Math.abs(x) >= el.scrollWidth / 2) x = 0;
      el.style.transform = `translateX(${x}px)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="py-16 border-y border-zinc-800/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="text-zinc-500 text-sm sm:text-base font-medium">
          Dünya çapında <span className="text-white font-semibold">3.000'den fazla</span> oyun sunucusu tarafından güvenilmektedir!
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />

        <div className="overflow-hidden">
          <div ref={marqueeRef} className="flex items-center gap-16 whitespace-nowrap">
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-zinc-600 hover:text-zinc-300 transition-colors duration-300 cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <span className="text-xs font-bold">{partner[0]}</span>
                </div>
                <span className="text-lg font-semibold">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
