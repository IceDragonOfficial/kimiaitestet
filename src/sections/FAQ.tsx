import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'LeaderOS nedir?',
    answer: 'LeaderOS, oyun sunucuları için geliştirilmiş kapsamlı bir web sitesi ve yönetim yazılımıdır. Mağaza, forum, destek, blog gibi 30\'dan fazla modül ile birlikte sunucunuzun web sitesini dakikalar içinde hazır hale getirir.',
  },
  {
    question: 'İstediğim zaman iptal edebilir miyim?',
    answer: 'Evet, aboneliğinizi istediğiniz zaman iptal edebilirsiniz. İptal işlemi anında gerçekleşir ve bir sonraki faturalandırma döneminde ücretlendirilmezsiniz.',
  },
  {
    question: 'Nasıl destek alabilirim?',
    answer: 'Destek ekibimize 7/24 ulaşabilirsiniz. Discord sunucumuz, ticket sistemi veya e-posta yoluyla destek alabilirsiniz. Premium kullanıcılar öncelikli destek hizmetinden yararlanır.',
  },
  {
    question: 'Ömür Boyu Lisans\'a yükseltebilir miyim?',
    answer: 'Evet, mevcut aboneliğinizi istediğiniz zaman Ömür Boyu Lisans\'a yükseltebilirsiniz. Yükseltme işlemi için fark ödemesi yapmanız yeterlidir.',
  },
  {
    question: 'Alan adını değiştirebilir miyim?',
    answer: 'Evet, lisansınızı istediğiniz zaman farklı bir alan adına taşıyabilirsiniz. Bu işlem ücretsizdir ve destek ekibimiz size yardımcı olacaktır.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Sıkça <span className="text-gradient">Sorulan Sorular</span>
          </h2>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-zinc-800 last:border-b-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="text-base sm:text-lg font-medium text-white group-hover:text-zinc-300 transition-colors pr-4">
                  {faq.question}
                </span>
                <div className="shrink-0 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
                  {openIndex === i ? (
                    <Minus className="w-4 h-4 text-zinc-400" />
                  ) : (
                    <Plus className="w-4 h-4 text-zinc-400" />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
