import useFetch from '../hooks/useFetch'
import ProductCard from './ProductCard'

export default function ProductList() {
  const { data, loading, error } = useFetch(`${import.meta.env.VITE_API_URL}/products`)

  return (
    <div className="product-container">
      <h1 className="section-title">کاتالوگ محصولات</h1>

      {error && <div className="error-box">خطا: {error.message}</div>}

      {loading && (
        <div className="products-grid">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="skeleton-card">
              <div className="skeleton-image"></div>
              <div className="skeleton-line title"></div>
              <div className="skeleton-line desc"></div>
              <div className="skeleton-line price"></div>
            </div>
          ))}
        </div>
      )}

      {!loading && !error && (
        <div className="products-grid">
          {data?.products?.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              thumbnail={product.thumbnail}
            />
          ))}
        </div>
      )}
    </div>
  )
}