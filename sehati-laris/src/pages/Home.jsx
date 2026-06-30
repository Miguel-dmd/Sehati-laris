import { Link } from 'react-router-dom'
import atkImg from '../assets/atk.jpg'
import elektronikImg from '../assets/elektronik.jpg'
import packagingImg from '../assets/packaging.jpg'

const kategoriList = [
  { nama: 'ATK', gambar: atkImg, link: '/kategori/ATK' },
  { nama: 'Elektronik', gambar: elektronikImg, link: '/kategori/Elektronik' },
  { nama: 'Packaging', gambar: packagingImg, link: '/kategori/Packaging' },
]

export default function Home() {
  return (
    <section className="text-center py-8">
      <div className="bg-accent py-2 text-text-dark text-sm md:text-base">
        <p>Produk Siap Pakai | Pengiriman Cepat | Transaksi Aman</p>
      </div>

      <h1 className="text-2xl md:text-3xl font-semibold text-primary-dark py-4">
        Kategori Pilihan
      </h1>
      <h5 className="text-text-dark pb-4">
        Temukan produk terbaik berdasarkan kategori
      </h5>

      <div className="flex flex-wrap justify-center gap-6 px-4 mt-4">
        {kategoriList.map((k) => (
          <Link
            key={k.nama}
            to={k.link}
            className="text-gray-800 text-center w-[120px] hover:scale-95 transition-transform"
          >
            <div className="w-[100px] h-[100px] bg-accent rounded-full mx-auto overflow-hidden flex items-center justify-center mb-2">
              <img src={k.gambar} alt={k.nama} className="w-full h-full object-cover" />
            </div>
            <p className="font-semibold">{k.nama}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}