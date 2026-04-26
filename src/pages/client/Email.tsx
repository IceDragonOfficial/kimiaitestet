import { Mail, CheckCircle2 } from 'lucide-react'

export default function ClientEmail() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-2xl font-bold mb-6">E-Posta Değiştir</h2>

      <div className="bg-blue-600/10 border border-blue-500/20 rounded-2xl p-4 flex items-start gap-3 mb-6">
        <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
        <div>
          <h4 className="font-semibold text-blue-400 mb-1">E-Posta Adresiniz Doğrulanmış</h4>
          <p className="text-sm text-blue-400/80">Mevcut e-posta adresiniz: <strong>john@example.com</strong></p>
        </div>
      </div>

      <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6">
        <form className="space-y-6">
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Yeni E-Posta Adresi</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="email"
                required
                className="w-full bg-[#111] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                placeholder="yeni@ornek.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Mevcut Şifreniz</label>
            <input
              type="password"
              required
              className="w-full bg-[#111] border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
              placeholder="••••••••"
            />
            <p className="text-xs text-gray-500 mt-2">Güvenliğiniz için işlemi onaylamak adına mevcut şifrenizi girmelisiniz.</p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-500/20 text-sm mt-4"
          >
            E-Posta Değiştir
          </button>
        </form>
      </div>
    </div>
  )
}
