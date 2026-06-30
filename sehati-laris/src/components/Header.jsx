import { NavLink, Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import logo from '../assets/logo.jpeg'

export default function Header() {
  const { pathname } = useLocation()
  const { cart } = useCart()
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0)

  const linkClass = ({ isActive }) =>
    `inline-flex items-center px-3 py-2 rounded-lg text-white hover:text-amber-100 hover:scale-105 transition-all font-semibold ${
      isActive ? 'underline decoration-2' : ''
    }`

  return (
    <header className="bg-primary">
      <div className="flex items-center justify-between px-4 md:px-8 py-3">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Sehati Laris" className="h-16 pl-2" />
        </Link>

        <nav className="flex items-center gap-1 flex-wrap">
          <NavLink to="/" end className={linkClass}>Beranda</NavLink>
          <span className="text-white mx-1">|</span>
          <NavLink to="/produk" className={linkClass}>Semua Produk</NavLink>
          <span className="text-white mx-1">|</span>
          <NavLink to="/tentang" className={linkClass}>Tentang Kami</NavLink>
          <span className="text-white mx-1">|</span>
          <NavLink
            to="/keranjang"
            className={`${linkClass} relative`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2.5"
                 strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </NavLink>
        </nav>
      </div>

      {/* Tampilkan hero hanya di halaman beranda */}
      {pathname === '/' && <HeroSection />}
    </header>
  )
}

function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center text-white text-center py-24 px-6"
      style={{ backgroundImage: `url('/clean23.jpg')` }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl mb-3 text-white text-stroke-black">
          Langkah Baru Agar Bisnis Semakin Hebat
        </h2>
        <h1 className="text-3xl md:text-5xl font-bold mb-16 text-white text-stroke-black">
          Semua Kebutuhan Bisnis di Satu Tempat
        </h1>
        <Link
          to="/produk"
          className="inline-block bg-black/70 hover:bg-black text-white px-6 py-3 rounded-lg font-semibold hover:text-gray-300 active:scale-95 transition-all"
        >
          Jelajahi Pusat Produk Kami
        </Link>
      </div>
    </section>
  )
}