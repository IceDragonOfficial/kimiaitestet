import { useEffect, useRef, useState } from 'react';

const games = [
  { name: 'Minecraft', image: '/images/game-minecraft.jpg' },
  { name: 'Hytale', image: '/images/game-hytale.jpg' },
  { name: 'FiveM', image: '/images/game-fivem.jpg' },
  { name: 'Rust', image: '/images/game-rust.jpg' },
  { name: 'ARK: Survival Evolved', image: '/images/game-ark.jpg' },
  { name: 'Counter-Strike', image: '/images/game-cs.jpg' },
  { name: 'Unturned', image: '/images/game-unturned.jpg' },
  { name: "Garry's Mod", image: '/images/game-gmod.jpg' },
  { name: 'Roblox', image: '/images/game-roblox.jpg' },
];

export default function Games() {
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
    <section id="games" ref={ref} className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Desteklenen <span className="text-gradient">Oyunlar</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Aşağıdaki desteklenen oyunlardan birine tıklayarak belirli entegrasyonlar ve özellikler hakkında daha fazla bilgi edinin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {games.map((game, i) => (
            <div
              key={i}
              className={`group relative aspect-video rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold text-lg">{game.name}</h3>
              </div>
              <div className="absolute inset-0 bg-[#3b82f6]/0 group-hover:bg-[#3b82f6]/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
