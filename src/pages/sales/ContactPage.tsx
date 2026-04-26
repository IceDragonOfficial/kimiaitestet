import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-[#050505] min-h-screen text-white selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight drop-shadow-2xl">
            Bize <span className="text-gradient">Ulaşın</span>
          </h1>
          <p className="text-lg text-gray-400 font-medium">
            Velixo hakkında sorularınız mı var? Kurumsal satışlar, özel tema talepleri veya destek için bize çekinmeden ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* İletişim Bilgileri */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-6">İletişim Bilgileri</h2>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">E-Posta</h3>
                <a href="mailto:info@velixo.com.tr" className="text-lg font-bold hover:text-blue-400 transition-colors">
                  info@velixo.com.tr
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Müşteri Hizmetleri</h3>
                <p className="text-lg font-bold">0850 123 45 67</p>
                <p className="text-xs text-gray-500 mt-1">Hafta İçi 09:00 - 18:00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Ofis</h3>
                <p className="text-base font-bold text-gray-300 leading-relaxed">
                  Bilişim Vadisi Teknoloji Geliştirme Bölgesi<br />
                  Muallimköy Mah. Deniz Cad. No: 143/5<br />
                  Gebze / KOCAELİ
                </p>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
              <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-400" /> Müşteri Desteği
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Halihazırda müşterimiz misiniz? Teknik destek için müşteri panelinden destek talebi oluşturmanız daha hızlı sonuç verecektir.
              </p>
              <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white py-2 rounded-xl text-sm font-bold transition-colors">
                Müşteri Paneli
              </button>
            </div>
          </div>

          {/* İletişim Formu */}
          <div className="lg:col-span-2">
            <form className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold mb-8">Bize Mesaj Gönderin</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2">Adınız Soyadınız</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2">E-Posta Adresiniz</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 transition-colors" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-400 mb-2">Konu</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 transition-colors appearance-none">
                  <option className="bg-[#0a0a0a]">Satış Öncesi Soru</option>
                  <option className="bg-[#0a0a0a]">Kurumsal Teklif</option>
                  <option className="bg-[#0a0a0a]">Ortaklık / İşbirliği</option>
                  <option className="bg-[#0a0a0a]">Diğer</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-bold text-gray-400 mb-2">Mesajınız</label>
                <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
              </div>

              <button type="button" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 w-full sm:w-auto transition-all shadow-lg shadow-blue-500/20">
                <Send className="w-5 h-5" />
                Mesajı Gönder
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
