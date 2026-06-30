import { useState, useRef, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import { formatRupiah } from '../data/products'

export default function ProductCard({ product }) {
  const [qty, setQty] = useState(0)
  const { addToCart } = useCart()
  const inputRef = useRef(null)

  // Otomatis menyesuaikan font saat qty menjadi panjang
  useEffect(() => {
    const el = inputRef.current
    if (!el) return
    const len = el.value.length
    if (len <= 2) el.style.fontSize = '1rem'
    else if (len === 3) el.style.fontSize = '0.8rem'
    else if (len === 4) el.style.fontSize = '0.65rem'
    else el.style.fontSize = '0.55rem'
  }, [qty])

  const handleMinus = () => qty > 0 && setQty(qty - 1)
  const handlePlus = () => setQty(qty + 1)
  const handleChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, '')
    setQty(parseInt(val) || 0)
  }
  const handleBlur = () => {
    if (qty < 0 || isNaN(qty)) setQty(0)
  }

  const handleBeli = () => {
    if (qty < 1) {
      alert('Nilai qty harus diisi terlebih dahulu!')
      return
    }
    addToCart(product, qty)
    alert(`${qty} ${product.nama} berhasil ditambahkan ke keranjang belanja!`)
    setQty(0)
  }

  return (
    <div className="w-[180px] bg-bg-light rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
      <img
        src={product.gambar}
        alt={product.nama}
        className="w-[120px] h-[120px] object-contain rounded-lg mx-auto bg-white p-2 border border-gray-200"
      />
      <p className="font-semibold text-center text-gray-800 mt-2">{product.nama}</p>
      <p className="text-center font-semibold text-primary-dark mt-1">
        Rp {formatRupiah(product.harga)}
      </p>

      <div className="flex items-center justify-center mt-3 bg-accent rounded-lg border border-gray-700">
        <button
          onClick={handleMinus}
          className="w-8 h-8 bg-amber-50 rounded-md font-bold hover:bg-blue-50 active:scale-90 transition"
        >-</button>
        <input
          ref={inputRef}
          type="text"
          inputMode="numeric"
          value={qty}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-12 h-9 text-center font-semibold bg-accent outline-none border-x border-gray-700"
        />
        <button
          onClick={handlePlus}
          className="w-8 h-8 bg-amber-50 rounded-md font-bold hover:bg-blue-50 active:scale-90 transition"
        >+</button>
      </div>

      <div className="text-center mt-3">
        <button
          onClick={handleBeli}
          className="bg-cream border border-gray-800 rounded-md h-9 w-20 hover:bg-blue-50 hover:text-gray-600 active:scale-95 transition font-medium"
        >
          Beli
        </button>
      </div>
    </div>
  )
}