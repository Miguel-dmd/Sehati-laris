import { Link } from 'react-router-dom'

const cards = [
  { judul: 'Mengapa Kami Hadir', isi: [
    'Kami melihat banyak pelaku usaha menghadapi tantangan saat mencari produk yang tepat dengan harga yang sesuai, serta proses pembelian grosir yang efisien.',
    'Kehadiran Sehati Laris menjadi jawaban atas kebutuhan tersebut—memberikan kemudahan akses ke berbagai kategori produk dalam satu tempat yang terpercaya.'
  ]},
  { judul: 'Apa yang Kami Tawarkan', isi: [
    'Kami menghadirkan ribuan produk dari berbagai kategori untuk memenuhi kebutuhan bisnis Anda, mulai dari perlengkapan teknis, peralatan usaha, hingga kebutuhan harian.',
    'Semua tersedia dengan harga kompetitif, pengiriman cepat, dan kualitas yang dapat diandalkan.'
  ]},
  { judul: 'Misi Kami', isi: ['Misi kami adalah mendukung pertumbuhan pelaku usaha di seluruh Indonesia dengan memberikan akses mudah ke produk kebutuhan bisnis yang lengkap, berkualitas, dan terjangkau.'] },
  { judul: 'Visi Kami', isi: ['Kami berkomitmen untuk menjadi pusat perbelanjaan B2B digital terbesar dan terpercaya di Indonesia—tempat di mana semua pelaku usaha dapat menemukan kebutuhan mereka dengan lebih efisien, cepat, dan aman.'] },
  { judul: 'Bagaimana Kami Bekerja', isi: [
    'Supplier mendaftarkan toko dan mengunggah produk mereka ke platform. Pelanggan dapat menjelajahi kategori, memilih produk, dan melakukan pemesanan melalui sistem pembayaran yang aman.',
    'Setelah pesanan dibuat, supplier menyiapkan barang dan melakukan pengiriman langsung ke alamat pelanggan. Semua proses dapat dipantau secara real-time dari akun Anda.'
  ]},
  { judul: 'Keamanan dan Kepercayaan', isi: [
    'Keamanan transaksi adalah prioritas kami. Dana pembeli disimpan sementara melalui sistem perlindungan pembayaran dan hanya diteruskan ke supplier setelah pesanan dipastikan diterima dengan baik.',
    'Kami juga melakukan verifikasi supplier untuk menjaga standar kualitas dan memberikan rasa aman dalam setiap transaksi.'
  ]},
  { judul: 'Layanan Pelanggan yang Responsif', isi: ['Tim layanan pelanggan kami siap membantu menjawab pertanyaan, memberikan panduan, dan menangani kendala yang mungkin Anda hadapi selama menggunakan platform. Kami ingin memastikan pengalaman Anda selalu nyaman dan memuaskan.'] },
  { judul: 'Dukungan untuk Pelaku Usaha', isi: ['Sehati Laris hadir untuk menjadi partner terpercaya bagi para pelaku usaha. Dengan akses ke pilihan produk yang lengkap, proses pembelian yang efisien, dan harga yang bersaing, kami mendukung kelancaran operasional bisnis Anda setiap hari.'] },
  { judul: 'Bergabung Bersama Kami', isi: ['Kami mengundang supplier, distributor, dan pelaku usaha di seluruh Indonesia untuk bergabung dalam ekosistem Sehati Laris. Bersama, kita membangun pusat perbelanjaan digital yang memperluas peluang dan mempermudah transaksi bisnis.'] },
]

export default function Info() {
  return (
    <main>
      <h2 className="ml-6 md:ml-12 mt-6 text-3xl md:text-4xl font-semibold text-primary-dark">
        Sehati Laris
      </h2>

      <section className="px-6 md:px-12 py-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((c, i) => (
          <article
            key={i}
            className="border-2 border-primary rounded-lg p-4 hover:border-primary-dark hover:-translate-y-0.5 transition"
          >
            <h3 className="font-semibold text-primary-dark py-1">{c.judul}</h3>
            {c.isi.map((p, j) => (
              <p key={j} className="text-text-dark text-sm pb-2">{p}</p>
            ))}
          </article>
        ))}
      </section>

      <div className="px-6 py-10 text-center bg-cream mt-4">
        <h2 className="text-xl md:text-2xl font-semibold text-primary-dark mb-4">
          Punya Pertanyaan Tentang Sehati Laris?
        </h2>
        <p className="text-text-dark max-w-3xl mx-auto mb-4">
          <b>Kami siap membantu. Pelajari cara kerja marketplace, pembayaran, pengiriman, hingga panduan berbelanja dan berjualan. Semua informasi lengkap tersedia di satu halaman.</b>
        </p>
        <Link
          to="/hubungi"
          className="inline-block border-2 border-text-dark rounded-md h-11 w-40 leading-[2.5rem] text-text-dark hover:border-[3.5px] transition font-semibold"
        >
          Hubungi Kami
        </Link>
      </div>
    </main>
  )
}