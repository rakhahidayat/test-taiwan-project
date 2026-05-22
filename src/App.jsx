import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import ProductGrid from './components/ProductGrid';
import CartSidebar from './components/CartSidebar';
import Dialog from './components/Dialog';
import Notification from './components/Notification';

const PRODUCTS = [
  { id: 1, name: '無線藍牙耳機', price: 2999, icon: '🎧' },
  { id: 2, name: '智慧手錶',     price: 8999, icon: '⌚' },
  { id: 3, name: '便攜式充電器', price: 1299, icon: '🔋' },
  { id: 4, name: '無線滑鼠',     price:  899, icon: '🖱️' },
  { id: 5, name: '機械鍵盤',     price: 3999, icon: '⌨️' },
  { id: 6, name: '網路攝影機',   price: 2199, icon: '📷' },
  { id: 7, name: 'USB隨身碟',    price:  599, icon: '💾' },
  { id: 8, name: '桌面擴音器',   price: 1599, icon: '🔊' },
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <CartProvider>
      <div className="app">
        <Header />
        <main className="main-content">
          <SearchBox value={searchQuery} onChange={setSearchQuery} />
          <ProductGrid products={filteredProducts} />
        </main>
        <CartSidebar />
        <Dialog />
        <Notification />
      </div>
    </CartProvider>
  );
}
