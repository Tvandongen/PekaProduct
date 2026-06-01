import { useState } from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import ProductCard from '../components/ProductCard'
import InstallBanner from '../components/InstallBanner'
import { useProducts } from '../hooks/useProducts'

export default function Home() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const { products, total } = useProducts({ query, category })

  return (
    <div className="min-h-screen bg-peka-green-50">
      <Header />

      {/* Hero banner */}
      {!query && category === 'all' && (
        <div className="bg-peka-green text-white">
          <div className="max-w-2xl mx-auto px-4 pt-5 pb-6">
            <p className="text-green-200 text-xs font-semibold uppercase tracking-widest mb-1">Since 1970</p>
            <h2 className="text-xl font-bold leading-snug">Verse gekoelde<br />aardappelproducten</h2>
            <p className="text-green-200 text-sm mt-2 leading-relaxed">
              Pioneer in verse aardappelspecialiteiten voor retail, foodservice en consumenten.
            </p>
            <div className="flex gap-3 mt-4">
              <div className="bg-white/10 rounded-xl px-3 py-2 text-center flex-1">
                <p className="text-white font-bold text-lg leading-none">{total}</p>
                <p className="text-green-200 text-xs mt-0.5">producten</p>
              </div>
              <div className="bg-white/10 rounded-xl px-3 py-2 text-center flex-1">
                <p className="text-white font-bold text-lg leading-none">50+</p>
                <p className="text-green-200 text-xs mt-0.5">jaar ervaring</p>
              </div>
              <div className="bg-white/10 rounded-xl px-3 py-2 text-center flex-1">
                <p className="text-white font-bold text-lg leading-none">100%</p>
                <p className="text-green-200 text-xs mt-0.5">vers gekoeld</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-2xl mx-auto px-4 pb-safe">
        <div className="py-4 space-y-3">
          <SearchBar value={query} onChange={setQuery} />
          <CategoryFilter active={category} onChange={setCategory} />
        </div>

        {query && (
          <p className="text-sm text-gray-500 mb-3">
            {products.length === 0
              ? 'Geen resultaten'
              : `${products.length} resultaat${products.length !== 1 ? 'en' : ''} voor "${query}"`}
          </p>
        )}

        {!query && category !== 'all' && (
          <p className="text-sm text-gray-500 mb-3">{products.length} producten</p>
        )}

        {products.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <div className="text-5xl mb-3">🥔</div>
            <p className="font-medium text-gray-600">Geen producten gevonden</p>
            <p className="text-sm mt-1">Probeer een andere zoekterm of categorie</p>
            <button
              onClick={() => {
                setQuery('')
                setCategory('all')
              }}
              className="mt-4 text-sm text-peka-green underline"
            >
              Alle producten tonen
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <InstallBanner />
    </div>
  )
}
