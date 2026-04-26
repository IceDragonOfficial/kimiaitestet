import { Percent } from 'lucide-react'

export default function TopBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-full z-[60] relative">
      <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-white">
        <Percent className="w-4 h-4" />
        <span>EFT/Havale ile yapılan bireysel ödemelerde tüm indirimlere ek <strong>%10 İNDİRİM!</strong></span>
      </div>
    </div>
  )
}
