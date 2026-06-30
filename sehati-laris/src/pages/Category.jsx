import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import atkImg from '../assets/atk.jpg'
import elektronikImg from '../assets/elektronik.jpg'
import packagingImg from '../assets/packaging.jpg'

const kategoriInfo = {
  ATK: { img: atkImg },
  Elektronik: { img: elektronikImg },
  Packaging: { img: packagingImg },
}

export default function Category() {
  const { nama } = useParams()
  const filtered = products.filter((p) => p.kategori === nama)

  return (
    <>
      <section className="text-center py-6 bg-bg-light">
        <h1 className="text-2xl md:text-3xl font-semibold text-primary-dark py-2">
          Kategori Pilihan
        </h1>
        <h5 className="text-text-dark pb-4">Temukan produk terbaik berdasarkan kategori</h5>

        <div className="flex flex-wrap justify-center gap-6 px-4">
          {Object.entries(kategoriInfo).map(([key, val]) => (
            <Link
              key={key}
              to={`/kategori/${key}`}
              className={`text-center w-[120px] hover:scale-95 transition-transform ${
                key === nama ? 'scale-105' : ''
              }`}
            >
              <div className={`w-[100px] h-[100px] bg-accent rounded-full mx-auto overflow-hidden mb-2 ${
                key === nama ? 'ring-4 ring-primary-dark' : ''
              }`}>
                <img src={val.img} alt={key} className="w-full h-full object-cover" />
              </div>
              <p className={`font-semibold ${key === nama ? 'text-primary-dark' : 'text-gray-800'}`}>
                {key}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="border-b-2 border-gray-800 mb-6">
          <h3 className="text-2xl font-semibold text-primary-dark pb-2">{nama}</h3>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-text-dark py-10">Belum ada produk di kategori ini.</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-5">
            {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </main>
    </>
  )
}