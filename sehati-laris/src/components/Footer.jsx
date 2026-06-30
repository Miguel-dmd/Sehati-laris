import { Link, useLocation } from 'react-router-dom'

export default function Footer() {
  const { pathname } = useLocation()

  return (
    <footer className="bg-cream text-text-dark mt-10">
      <div className="px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <ul className="space-y-2">
          <h1 className="text-xl font-semibold text-primary-dark mb-2">Sehati Laris</h1>
          <li>Email: Sehatilaris.com</li>
          <li>Phone: +62 823-1178-1118</li>
          <li>
            Address: Jl. Selamat Ketaren No.20, Bandar Selamat, Kec. Medan Tembung,
            Kota Medan, Sumatera Utara 20223
          </li>
        </ul>

        <ul className="space-y-2">
          <h2 className="text-lg font-semibold text-primary-dark mb-2">Informasi Kami</h2>
          <li><Link to="/" className="hover:text-primary-dark transition">Beranda</Link></li>
          <li><Link to="/produk" className="hover:text-primary-dark transition">Semua Produk</Link></li>
          <li><Link to="/tentang" className="hover:text-primary-dark transition">Tentang Kami</Link></li>
        </ul>

        <ul className="space-y-2">
          <h2 className="text-lg font-semibold text-primary-dark mb-2">Koleksi Terbaik</h2>
          <li><Link to="/kategori/ATK" className="hover:text-primary-dark transition">ATK</Link></li>
          <li><Link to="/kategori/Elektronik" className="hover:text-primary-dark transition">Elektronik</Link></li>
          <li><Link to="/kategori/Packaging" className="hover:text-primary-dark transition">Packaging</Link></li>
        </ul>
      </div>

      <div className="px-6 py-3 border-t border-primary/20">
        <p className="text-text-dark text-left">
          &copy; 2025 Sehati Laris. All Right Reserved.
        </p>
      </div>
    </footer>
  )
}