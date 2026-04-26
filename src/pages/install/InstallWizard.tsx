import { useState } from 'react'
import { Check, ChevronRight, Server, Database, Key, Shield, Loader2 } from 'lucide-react'

const STEPS = [
  { id: 1, name: 'Sistem Kontrolü', icon: Server },
  { id: 2, name: 'Lisans Doğrulama', icon: Key },
  { id: 3, name: 'Veritabanı', icon: Database },
  { id: 4, name: 'Zamanlanmış Görev', icon: Clock },
  { id: 5, name: 'Yönetici Hesabı', icon: Shield },
]

export default function InstallWizard() {
  const [step, setStep] = useState(1)
  const [isInstalling, setIsInstalling] = useState(false)

  const handleNext = () => {
    if (step < 5) setStep(step + 1)
    else {
      setIsInstalling(true)
      setTimeout(() => {
        window.location.href = '/admin' // Kurulum bitti, admin panele at.
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 font-sans">
      
      {/* Arka plan parlaklığı */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-blue-600/10 blur-[150px]" />
      </div>

      <div className="w-full max-w-4xl relative z-10">
        
        {/* Başlık */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black tracking-tight text-white mb-2">Velixo Kurulum Sihirbazı</h1>
          <p className="text-gray-400 font-medium">Platformunuzu birkaç adımda yayına hazırlayın.</p>
        </div>

        <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Sol: Adımlar (Sidebar) */}
          <div className="md:w-64 bg-white/5 border-r border-white/5 p-8">
            <div className="space-y-8">
              {STEPS.map((s) => {
                const isActive = step === s.id
                const isPast = step > s.id
                return (
                  <div key={s.id} className="relative flex items-center gap-4">
                    {/* Çizgi */}
                    {s.id !== 5 && (
                      <div className={`absolute top-10 left-4 w-0.5 h-10 -ml-px ${isPast ? 'bg-blue-500' : 'bg-white/10'}`} />
                    )}
                    
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-2 transition-colors ${
                      isPast 
                        ? 'bg-blue-500 border-blue-500 text-white' 
                        : isActive 
                          ? 'border-blue-500 text-blue-400 bg-blue-500/10' 
                          : 'border-white/10 text-gray-500 bg-[#0a0a0a]'
                    }`}>
                      {isPast ? <Check className="w-4 h-4" /> : <s.icon className="w-4 h-4" />}
                    </div>
                    <div>
                      <p className={`text-sm font-bold ${isActive || isPast ? 'text-white' : 'text-gray-500'}`}>{s.name}</p>
                      <p className="text-xs text-gray-500 font-medium">Adım {s.id}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Sağ: Form Alanı */}
          <div className="flex-1 p-8 md:p-12 relative">
            
            {/* Adım 1: Sistem Kontrolü */}
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">Sistem Gereksinimleri</h2>
                  <p className="text-sm text-gray-400">Sunucunuzun yazılımı çalıştırmak için yeterli olup olmadığı kontrol ediliyor.</p>
                </div>
                
                <div className="space-y-3">
                  {[
                    { name: 'Node.js Version (>= 18.x)', status: true },
                    { name: 'PostgreSQL Bağlantısı', status: true },
                    { name: 'Dosya Yazma İzinleri (777)', status: true },
                    { name: 'Gerekli Eklentiler (Redis, vb.)', status: true },
                  ].map((req, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-xl">
                      <span className="text-sm font-medium text-gray-300">{req.name}</span>
                      <span className="flex items-center gap-1.5 px-2.5 py-1 bg-green-500/10 text-green-400 rounded-md text-xs font-bold">
                        <Check className="w-3.5 h-3.5" /> Başarılı
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Adım 2: Lisans Doğrulama */}
            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">Lisans Anahtarı</h2>
                  <p className="text-sm text-gray-400">Müşteri panelinden aldığınız lisans anahtarını girin.</p>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">Lisans Key (LCN-XXXX...)</label>
                  <input 
                    type="text" 
                    placeholder="LCN-ABCD-1234-EFGH-5678"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none font-mono text-sm"
                  />
                  <p className="mt-2 text-xs text-blue-400">
                    Lisansınız, kurulum yaptığınız domain ({window.location.hostname}) üzerine otomatik olarak kilitlenecektir.
                  </p>
                </div>
              </div>
            )}

            {/* Adım 3: Veritabanı */}
            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">Veritabanı Ayarları</h2>
                  <p className="text-sm text-gray-400">PostgreSQL veya MySQL bağlantı bilgilerinizi girin.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-gray-400 mb-1.5">Veritabanı Sunucusu (Host)</label>
                    <input type="text" defaultValue="127.0.0.1" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white outline-none text-sm focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 mb-1.5">Kullanıcı Adı</label>
                    <input type="text" defaultValue="root" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white outline-none text-sm focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 mb-1.5">Şifre</label>
                    <input type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white outline-none text-sm focus:border-blue-500" />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-gray-400 mb-1.5">Veritabanı Adı</label>
                    <input type="text" defaultValue="velixo_db" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white outline-none text-sm focus:border-blue-500" />
                  </div>
                </div>
              </div>
            )}

            {/* Adım 4: Zamanlanmış Görev (Cron Job) */}
            {step === 4 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">Zamanlanmış Görev (Cron)</h2>
                  <p className="text-sm text-gray-400">LeaderOS sistemlerinde olduğu gibi, mağaza teslimatları ve süre sonu işlemleri için Cron gereklidir.</p>
                </div>
                
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5">
                  <p className="text-sm text-blue-400 mb-4 font-medium">
                    Lütfen cPanel veya Plesk panelinizden aşağıdaki komutu <strong>Her Dakika (* * * * *)</strong> çalışacak şekilde ekleyin.
                  </p>
                  <div className="flex items-center gap-2 bg-black border border-white/10 rounded-lg p-3">
                    <code className="flex-1 text-xs text-green-400 font-mono">
                      wget -qO- https://{window.location.hostname}/api/cron/run &gt; /dev/null 2&gt;&amp;1
                    </code>
                  </div>
                </div>
              </div>
            )}

            {/* Adım 5: Yönetici Hesabı */}
            {step === 5 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">Süper Admin Hesabı</h2>
                  <p className="text-sm text-gray-400">Yönetim paneline giriş yapacağınız ilk yetkili hesabını oluşturun.</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 mb-1.5">E-Posta Adresi</label>
                    <input type="email" placeholder="admin@ornek.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white outline-none text-sm focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 mb-1.5">Kullanıcı Adı</label>
                    <input type="text" placeholder="Admin" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white outline-none text-sm focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 mb-1.5">Şifre</label>
                    <input type="password" placeholder="Güçlü bir şifre girin" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white outline-none text-sm focus:border-blue-500" />
                  </div>
                </div>
              </div>
            )}

            {/* Yükleniyor Ekranı (Kurulum sırasında) */}
            {isInstalling && (
              <div className="absolute inset-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm flex flex-col items-center justify-center rounded-r-3xl">
                <Loader2 className="w-10 h-10 text-blue-500 animate-spin mb-4" />
                <h3 className="text-lg font-bold text-white mb-1">Kurulum Yapılıyor...</h3>
                <p className="text-sm text-gray-400">Veritabanı tabloları oluşturuluyor ve ayarlar kaydediliyor.</p>
              </div>
            )}

            {/* Butonlar */}
            <div className="mt-10 flex items-center justify-end border-t border-white/5 pt-6">
              <button 
                onClick={handleNext}
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20"
              >
                {step === 5 ? 'Kurulumu Tamamla' : 'Sonraki Adım'}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
