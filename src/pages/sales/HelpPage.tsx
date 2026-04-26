import FaqAndTestimonialsSection from '../../sections/FaqAndTestimonialsSection'

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h1 className="text-4xl font-black text-white mb-4">Yardım Merkezi</h1>
        <p className="text-gray-400">Merak ettiğiniz her şey burada. Cevabını bulamadığınız sorular için bize ulaşın.</p>
      </div>
      <FaqAndTestimonialsSection />
    </div>
  )
}
