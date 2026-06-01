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

      <main className="max-w-2xl mx-auto px-4 pb-safe">
        <div className="py-5">
          <h2 className="text-2xl font-bold text-gray-900 mb-0.5">Producten</h2>
          <p className="text-gray-500 text-sm">{total} verse aardappelproducten</p>
        </div>

        <div className="space-y-3 mb-5">
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
