import { useState } from 'react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import atkImg from '../assets/atk.jpg'
import elektronikImg from '../assets/elektronik.jpg'
import packagingImg from '../assets/packaging.jpg'

export default function Products() {
  const [activeCategory, setActiveCategory] = useState(null)

  // Filter produk berdasarkan kategori yang dipilih
  const filteredProducts = activeCategory
    ? products.filter(product => product.kategori === activeCategory)
    : products

  // Daftar kategori untuk filter
  const categories = [
    { name: 'Semua', icon: '📦' },
    { name: 'ATK', image: atkImg },
    { name: 'Elektronik', image: elektronikImg },
    { name: 'Packaging', image: packagingImg }
  ]

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      {/* Judul Halaman */}
      <div className="border-b-2 border-gray-800 w-full mb-6">
        <h3 className="text-2xl font-semibold text-primary-dark pb-2">
          {activeCategory ? `Kategori: ${activeCategory}` : 'Semua Produk'}
        </h3>
      </div>

      {/* Filter Kategori */}
      <section className="text-center py-4 mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map(category => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name === 'Semua' ? null : category.name)}
              className={`flex flex-col items-center p-3 rounded-lg transition-all duration-200 ${
                activeCategory === (category.name === 'Semua' ? null : category.name)
                  ? 'bg-primary-dark text-white scale-105'
                  : 'bg-cream text-text-dark hover:bg-amber-50'
              }`}
            >
              {category.image ? (
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-16 h-16 object-contain rounded-full mb-2"
                />
              ) : (
                <span className="text-2xl mb-2">{category.icon}</span>
              )}
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Daftar Produk */}
      <div className="flex flex-wrap justify-center gap-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-text-dark">
            <p className="text-xl">Tidak ada produk tersedia untuk kategori ini</p>
          </div>
        )}
      </div>
    </main>
  )
}