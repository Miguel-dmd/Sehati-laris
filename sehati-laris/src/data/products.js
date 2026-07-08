import pensil from '../assets/Produk2/pensil.jpg'
import bolaLampu from '../assets/Produk2/bolalampu.jpg'
import cutter from '../assets/Produk2/cutter.jpg'
import bubbleWrap from '../assets/Produk2/bubblewarp.jpg'
import kardus from '../assets/Produk2/kardus.jpg'

export const products = [
  { id: 1, nama: 'Pensil Biru', harga: 5000, gambar: pensil, kategori: 'ATK' },
  { id: 2, nama: 'Bola Lampu', harga: 10000, gambar: bolaLampu, kategori: 'Elektronik' },
  { id: 3, nama: 'Cutter', harga: 7000, gambar: cutter, kategori: 'ATK' },
  { id: 4, nama: 'Bubble Wrap', harga: 100, gambar: bubbleWrap, kategori: 'Packaging' },
  { id: 5, nama: 'Kardus', harga: 500, gambar: kardus, kategori: 'Packaging' },
]

export const formatRupiah = (angka) =>
  new Intl.NumberFormat('id-ID').format(angka)