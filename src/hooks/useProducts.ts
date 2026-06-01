import { useMemo } from 'react'
import { products as staticProducts } from '../data/products'

interface UseProductsOptions {
  query: string
  category: string
}

export function useProducts({ query, category }: UseProductsOptions) {
  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    return staticProducts.filter((p) => {
      const matchesCategory = category === 'all' || p.category.includes(category)
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.subcategory.toLowerCase().includes(q) ||
        p.features.some((f) => f.toLowerCase().includes(q)) ||
        p.preparation.some((prep) => prep.toLowerCase().includes(q))
      return matchesCategory && matchesQuery
    })
  }, [query, category])

  return { products: filtered, total: staticProducts.length }
}
