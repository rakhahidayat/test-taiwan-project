import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="product-image">{product.icon}</div>
      <div className="product-title">{product.name}</div>
      <div className="product-price">NT$ {product.price.toLocaleString()}</div>
      <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
        加入購物車
      </button>
    </div>
  );
}
