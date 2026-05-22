import { useCart } from '../context/CartContext';

const ICONS = { success: '✓', info: 'ℹ', warning: '⚠' };

export default function Notification() {
  const { notifications } = useCart();

  return (
    <div className="notifications-container" aria-live="polite">
      {notifications.map(n => (
        <div key={n.id} className={`notification notification-${n.type}`}>
          <span className="notification-icon">{ICONS[n.type] ?? '!'}</span>
          {n.message}
        </div>
      ))}
    </div>
  );
}
