import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Category from './pages/Category'
import Cart from './pages/Cart'
import Info from './pages/Info'
import Contact from './pages/Contact'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produk" element={<Products />} />
          <Route path="/kategori/:nama" element={<Category />} />
          <Route path="/keranjang" element={<Cart />} />
          <Route path="/tentang" element={<Info />} />
          <Route path="/hubungi" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}