import { useCart } from '../context/CartContext';
import CartItem from './CartItem';

export default function CartSidebar() {
  const { cart, totalPrice, isCartOpen, closeCart, showDialog } = useCart();

  const handleCheckout = () => {
    showDialog('checkout', { totalPrice });
  };

  return (
    <>
      {isCartOpen && <div className="overlay" onClick={closeCart} />}
      <aside className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>購物車</h2>
          <button className="close-btn" onClick={closeCart} aria-label="關閉購物車">×</button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty-cart">🛒 購物車是空的</p>
          ) : (
            cart.map(item => <CartItem key={item.product.id} item={item} />)
          )}
        </div>

        <div className="cart-footer">
          <div className="total-price">
            總計：<strong>NT$ {totalPrice.toLocaleString()}</strong>
          </div>
          <button
            className="checkout-btn"
            onClick={handleCheckout}
            disabled={cart.length === 0}
          >
            結帳
          </button>
        </div>
      </aside>
    </>
  );
}
