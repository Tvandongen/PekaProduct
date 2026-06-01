import { categories } from '../data/products'

interface CategoryFilterProps {
  active: string
  onChange: (category: string) => void
}

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            active === cat.id
              ? 'bg-peka-green text-white shadow-sm'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-peka-green hover:text-peka-green'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
