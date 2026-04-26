import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background 3D shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-40 blur-[60px]">
          <img
            src="/images/shape-sphere.png"
            alt=""
            className="w-full h-full object-contain animate-spin-slow"
          />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] h-[350px] opacity-40 blur-[60px]">
          <img
            src="/images/shape-pyramid.png"
            alt=""
            className="w-full h-full object-contain animate-float-delayed"
          />
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
          Hemen <span className="text-gradient">web sitenizi oluşturun!</span>
        </h2>
        <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Oyun sunucunuz için güzel bir web sitesini birkaç tıklama ile başlatın ve her şeyi tek bir yerden yönetin.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
      </div>
    </section>
  );
}
