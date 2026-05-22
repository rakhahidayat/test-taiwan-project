import { useCart } from '../context/CartContext';

export default function Header() {
  const { totalQuantity, toggleCart } = useCart();

  return (
    <header className="header">
      <h1>精品商店</h1>
      <button className="cart-btn" onClick={toggleCart} aria-label="購物車">
        🛒 購物車
        {totalQuantity > 0 && (
          <span className="cart-badge">{totalQuantity}</span>
        )}
      </button>
    </header>
  );
}
