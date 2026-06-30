import { useCart } from '../context/CartContext'
import { formatRupiah } from '../data/products'

export default function Cart() {
  const { cart, removeFromCart, clearCart, totalHarga } = useCart()

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Keranjang belanja Anda masih kosong!')
      return
    }
    const nominal = `Rp ${formatRupiah(totalHarga)}`
    if (confirm(`Apakah anda ingin melakukan checkout semua produk dengan total sebesar ${nominal}?`)) {
      clearCart()
      alert('Transaksi pembelian berhasil!')
    }
  }

  return (
    <section className="px-4 md:px-8 py-10 max-w-5xl mx-auto min-h-[50vh]">
      <h2 className="text-center text-2xl font-semibold text-primary-dark mb-8">
        Keranjang Belanja Anda
      </h2>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-primary text-white">
              <th className="p-3 text-center">No</th>
              <th className="p-3 text-center">Nama Produk</th>
              <th className="p-3 text-center">Qty</th>
              <th className="p-3 text-center">Harga</th>
              <th className="p-3 text-center">Total Harga</th>
              <th className="p-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {cart.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center p-10 italic text-text-dark bg-amber-50">
                  Belum ada produk di keranjang.
                </td>
              </tr>
            ) : (
              cart.map((item, i) => (
                <tr key={item.nama} className="border-b border-cream">
                  <td className="p-3 text-center">{i + 1}</td>
                  <td className="p-3 text-center">{item.nama}</td>
                  <td className="p-3 text-center">{item.qty}</td>
                  <td className="p-3 text-center">Rp {formatRupiah(item.harga)}</td>
                  <td className="p-3 text-center">Rp {formatRupiah(item.harga * item.qty)}</td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => removeFromCart(item.nama)}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-3 rounded active:scale-95 transition"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex flex-col md:flex-row justify-between items-center bg-cream p-5 rounded-lg gap-4">
        <h3 className="text-primary-dark text-xl">
          Total Pembayaran: <span className="text-gray-800 font-bold">Rp {formatRupiah(totalHarga)}</span>
        </h3>
        <button
          onClick={handleCheckout}
          className="bg-primary-dark text-white font-bold py-3 px-6 rounded hover:bg-primary active:scale-95 transition w-full md:w-auto"
        >
          Konfirmasi Pembelian
        </button>
      </div>
    </section>
  )
}