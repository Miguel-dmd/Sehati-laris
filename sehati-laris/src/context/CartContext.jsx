import { createContext, useContext, useEffect, useReducer } from 'react'

const CartContext = createContext()

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(item => item.nama === action.payload.nama)
      if (existing) {
        return state.map(item =>
          item.nama === action.payload.nama
            ? { ...item, qty: item.qty + action.payload.qty }
            : item
        )
      }
      return [...state, action.payload]
    }
    case 'REMOVE_ITEM':
      return state.filter(item => item.nama !== action.payload)
    case 'CLEAR_CART':
      return []
    case 'LOAD_CART':
      return action.payload
    default:
      return state
  }
}

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const saved = localStorage.getItem('sehatiKeranjang')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('sehatiKeranjang', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product, qty) => {
    dispatch({ type: 'ADD_ITEM', payload: { ...product, qty } })
  }

  const removeFromCart = (nama) => {
    if (confirm('Apakah anda yakin ingin menghapus produk ini?')) {
      dispatch({ type: 'REMOVE_ITEM', payload: nama })
      alert('Produk berhasil dihapus')
    }
  }

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  const totalHarga = cart.reduce((sum, item) => sum + item.harga * item.qty, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalHarga }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)