import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Sparkles, Bot, User } from 'lucide-react';
export default function AIFeatures() {
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
    <section id="ai" ref={ref} className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 uppercase tracking-wider mb-4">
              <Sparkles className="w-3 h-3" /> Yapay Zeka
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">
              AI Destekli Özellikler
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-medium">
              Otomatik olarak destek taleplerine yanıt verir, siteniz için özelleştirilmiş içerik oluşturur ve oyuncuların sorularına anında yanıt verir — doğrudan oyun içinde ve Discord'da.
            </p>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 w-max">
              <ExternalLink className="w-4 h-4" />
              Daha Fazla Bilgi
            </button>
          </div>

          {/* Visual - AI Chat */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.15)] relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full" />
              <div className="flex items-center gap-3 px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white tracking-wide">LeaderOS AI</div>
                  <div className="text-xs font-semibold text-gray-500 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Çevrimiçi
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-6 relative z-10">
                {/* User message */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-5 py-3 max-w-[80%]">
                    <p className="text-sm font-medium text-gray-300">
                      Sunucumda lag sorunu yaşıyorum, yardımcı olabilir misin?
                    </p>
                  </div>
                </div>
                {/* AI message */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl rounded-tl-sm px-5 py-4 max-w-[80%]">
                    <p className="text-sm font-medium text-gray-200 mb-3">
                      Elbette! Lag sorununu çözmek için birkaç adım önerebilirim:
                    </p>
                    <ul className="space-y-2 text-sm font-medium text-gray-400">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> RAM kullanımını kontrol edin</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Gereksiz plugin'leri devre dışı bırakın</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> View distance ayarlarını optimize edin</li>
                    </ul>
                  </div>
                </div>
                {/* AI message */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20 opacity-0" />
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl rounded-tl-sm px-5 py-3 max-w-[80%]">
                    <p className="text-sm font-medium text-gray-200">
                      Ayrıca performans raporunu da analiz edebilirim. Detaylı bilgi için destek talebi oluşturabilirsiniz!
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10">
                  <div className="text-sm font-medium text-gray-500 flex-1">Mesaj yazın...</div>
                  <Sparkles className="w-5 h-5 text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
