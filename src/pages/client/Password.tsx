import { Shield } from 'lucide-react'

export default function ClientPassword() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-2xl font-bold mb-6">Şifre Değiştir</h2>

      <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6">
        <form className="space-y-6">
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Mevcut Şifreniz</label>
            <input
              type="password"
              required
              className="w-full bg-[#111] border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
              placeholder="••••••••"
            />
          </div>

          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-white/10"></div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Yeni Şifre</label>
            <input
              type="password"
              required
              className="w-full bg-[#111] border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Yeni Şifre (Tekrar)</label>
            <input
              type="password"
              required
              className="w-full bg-[#111] border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
              placeholder="••••••••"
            />
          </div>

          <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
            <Shield className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
            <div className="text-xs text-gray-400 space-y-1">
              <p>Şifreniz en az 8 karakter uzunluğunda olmalıdır.</p>
              <p>Büyük/küçük harf, rakam ve özel karakter (örn: !@#$%) içermelidir.</p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-500/20 text-sm mt-4"
          >
            Şifreyi Güncelle
          </button>
        </form>
      </div>
    </div>
  )
}
