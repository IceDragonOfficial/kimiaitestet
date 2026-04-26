import { useParams, Link } from 'react-router'

const PAGES: Record<string, { title: string, content: string }> = {
  'kullanim-kosullari': {
    title: 'Kullanım Koşulları',
    content: 'Bu kullanım koşulları, Velixo yazılımının kullanımını düzenler. Yazılımı satın alan her müşteri bu koşulları kabul etmiş sayılır...'
  },
  'gizlilik-sozlesmesi': {
    title: 'Gizlilik Sözleşmesi',
    content: 'Velixo, müşteri verilerinin güvenliğine büyük önem verir. Toplanan veriler yalnızca hizmet kalitesini artırmak amacıyla kullanılır...'
  },
  'teslimat-iade-sartlari': {
    title: 'Teslimat ve İade Şartları',
    content: 'Dijital ürün satışı yapıldığı için, yazılım indirildikten sonra iade işlemi yapılamaz. Ancak kurulumda yaşanan sorunlarda teknik destek sağlanır...'
  },
  'kvkk': {
    title: 'KVKK Aydınlatma Metni',
    content: 'Kişisel Verilerin Korunması Kanunu kapsamında, Velixo olarak verilerinizi nasıl işlediğimize dair detaylı bilgilendirme...'
  }
}

export default function LegalPage() {
  const { slug } = useParams()
  const page = slug && PAGES[slug] ? PAGES[slug] : PAGES['kullanim-kosullari']
  const activeSlug = slug || 'kullanim-kosullari'

  return (
    <div className="pt-32 pb-24 bg-[#050505] min-h-[80vh] text-white selection:bg-blue-500/30">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        
        {/* Sidebar */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-4">Yasal Bildirimler</h3>
          {Object.entries(PAGES).map(([key, data]) => (
            <Link 
              key={key} 
              to={`/legal/${key}`}
              className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                activeSlug === key 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              {data.title}
            </Link>
          ))}
        </div>

        {/* Content */}
        <div className="md:col-span-3">
          <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 md:p-12">
            <h1 className="text-3xl font-black mb-8 pb-6 border-b border-white/5">{page.title}</h1>
            <div className="prose prose-invert max-w-none prose-p:text-gray-400 prose-p:leading-relaxed font-medium">
              <p>Son Güncelleme: 1 Ocak 2026</p>
              <br />
              <p>{page.content}</p>
              <p>LeaderOS standartlarında hazırlanan satış platformunun yasal metin taslağıdır. Gerçek kullanımda şirketinizin avukatı tarafından hazırlanan metinler buraya yerleştirilmelidir.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
