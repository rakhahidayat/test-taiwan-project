import { useCart } from '../context/CartContext';

export default function CartItem({ item }) {
  const { updateQuantity, showDialog } = useCart();
  const { product, quantity } = item;

  const handleDecrement = () => {
    if (quantity === 1) {
      showDialog('remove', { product });
    } else {
      updateQuantity(product.id, quantity - 1);
    }
  };

  const handleIncrement = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleInputChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (isNaN(val) || val < 0) return;
    if (val === 0) {
      showDialog('remove', { product });
    } else {
      updateQuantity(product.id, val);
    }
  };

  const handleRemove = () => {
    showDialog('remove', { product });
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">{product.icon}</div>
      <div className="cart-item-details">
        <div className="cart-item-title">{product.name}</div>
        <div className="cart-item-price">NT$ {product.price.toLocaleString()}</div>
        <div className="quantity-controls">
          <button className="quantity-btn" onClick={handleDecrement}>−</button>
          <input
            type="number"
            className="quantity-input"
            value={quantity}
            min="0"
            onChange={handleInputChange}
          />
          <button className="quantity-btn" onClick={handleIncrement}>+</button>
        </div>
      </div>
      <button className="remove-btn" onClick={handleRemove} aria-label="移除商品">
        🗑️
      </button>
    </div>
  );
}
