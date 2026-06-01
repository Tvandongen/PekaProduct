import { useNavigate } from 'react-router-dom'
import { Product, categoryLabels } from '../data/products'

const categoryColors: Record<string, string> = {
  foodservice: 'bg-blue-100 text-blue-700',
  retail: 'bg-purple-100 text-purple-700',
  consumenten: 'bg-peka-green-100 text-peka-green',
  'food-industry': 'bg-orange-100 text-orange-700',
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(`/product/${product.id}`)}
      className="w-full bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-left hover:shadow-md hover:border-peka-green transition-all active:scale-[0.98]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap gap-1 mb-2">
            {product.category.map((cat) => (
              <span
                key={cat}
                className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[cat] ?? 'bg-gray-100 text-gray-600'}`}
              >
                {categoryLabels[cat]}
              </span>
            ))}
          </div>
          <h3 className="font-semibold text-gray-900">{product.name}</h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
          <div className="flex items-center gap-4 mt-3 text-xs text-gray-400">
            <span>⏱ {product.shelfLife}</span>
            <span>📦 {product.subcategory}</span>
          </div>
        </div>
        <svg className="w-5 h-5 text-gray-300 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  )
}
