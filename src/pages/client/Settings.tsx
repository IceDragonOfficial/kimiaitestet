import { Save, Image as ImageIcon } from 'lucide-react'

export default function ClientSettings() {
  return (
    <div className="space-y-6 max-w-3xl">
      <h2 className="text-2xl font-bold mb-6">Hesap Ayarları</h2>

      <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6">
        <form className="space-y-6">
          
          <div className="flex items-center gap-6 pb-6 border-b border-white/5">
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center relative group overflow-hidden border border-white/10 cursor-pointer">
              <span className="text-2xl font-bold">JD</span>
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ImageIcon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Profil Fotoğrafı</h3>
              <p className="text-sm text-gray-500">Avatarınızı değiştirmek için tıklayın. Sadece PNG, JPG.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Adınız</label>
              <input 
                type="text" 
                defaultValue="John"
                className="w-full bg-[#111] border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Soyadınız</label>
              <input 
                type="text" 
                defaultValue="Doe"
                className="w-full bg-[#111] border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Firma / Sunucu Adı</label>
            <input 
              type="text" 
              placeholder="İsteğe bağlı"
              className="w-full bg-[#111] border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Telefon Numarası</label>
            <input 
              type="tel" 
              placeholder="+90 (5XX) XXX XX XX"
              className="w-full bg-[#111] border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="pt-4 flex justify-end">
            <button type="button" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center gap-2">
              <Save className="w-5 h-5" /> Değişiklikleri Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
