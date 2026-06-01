import { useParams, useNavigate } from 'react-router-dom'
import { products, categoryLabels } from '../data/products'

const categoryColors: Record<string, string> = {
  foodservice: 'bg-blue-100/30 text-blue-200',
  retail: 'bg-purple-100/30 text-purple-200',
  consumenten: 'bg-white/20 text-white',
  'food-industry': 'bg-orange-100/30 text-orange-200',
}

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500">Product niet gevonden</p>
          <button onClick={() => navigate('/')} className="mt-4 text-peka-green underline text-sm">
            Terug naar overzicht
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-peka-green-50">
      <header className="bg-peka-green text-white sticky top-0 z-50 shadow-md">
        <div className="pt-safe">
          <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="p-1.5 -ml-1.5 rounded-lg hover:bg-peka-green-dark transition-colors flex-shrink-0"
              aria-label="Terug"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="font-bold text-base truncate">{product.name}</h1>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-5 space-y-4 pb-safe">
        {/* Hero */}
        <div className="bg-peka-green rounded-2xl p-5 text-white">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {product.category.map((cat) => (
              <span
                key={cat}
                className={`text-xs px-2.5 py-1 rounded-full font-medium ${categoryColors[cat] ?? 'bg-white/20 text-white'}`}
              >
                {categoryLabels[cat]}
              </span>
            ))}
          </div>
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-green-200 text-sm mt-1">{product.subcategory}</p>
        </div>

        {/* Beschrijving */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-semibold text-peka-green text-xs uppercase tracking-wide mb-2">Omschrijving</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{product.longDescription}</p>
        </div>

        {/* Houdbaarheid + Verpakking */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-peka-green mb-2">Houdbaarheid</p>
            <p className="text-gray-700 text-sm font-medium">{product.shelfLife}</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-peka-green mb-2">Verpakking</p>
            <div className="flex flex-wrap gap-1">
              {product.packaging.map((p) => (
                <span key={p} className="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">{p}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bereidingswijzen */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-peka-green mb-3">Bereidingswijzen</p>
          <div className="flex flex-wrap gap-2">
            {product.preparation.map((prep) => (
              <span key={prep} className="text-sm bg-peka-green-50 text-peka-green px-3 py-1.5 rounded-lg border border-peka-green-100">
                {prep}
              </span>
            ))}
          </div>
        </div>

        {/* Kenmerken */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-peka-green mb-3">Kenmerken</p>
          <ul className="space-y-2">
            {product.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-4 h-4 rounded-full bg-peka-green-50 border-2 border-peka-green flex-shrink-0 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-peka-green" />
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-peka-green-50 border border-peka-green-100 rounded-xl p-4 text-center">
          <p className="text-sm text-gray-600 mb-3">Meer informatie of bestellen?</p>
          <a
            href="https://www.pekakroef.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-peka-accent text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-sm active:scale-95 transition-transform"
          >
            Bezoek pekakroef.com
          </a>
        </div>
      </main>
    </div>
  )
}
