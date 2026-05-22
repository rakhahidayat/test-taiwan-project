import { useCart } from '../context/CartContext';

const DIALOG_CONFIG = {
  remove: {
    title: '移除商品',
    confirmText: '移除',
    confirmClass: 'btn-danger',
    showCancel: true,
    getMessage: (data) => `確定要從購物車中移除「${data?.product?.name}」嗎？`,
  },
  checkout: {
    title: '確認結帳',
    confirmText: '確認結帳',
    confirmClass: 'btn-success',
    showCancel: true,
    getMessage: (data) =>
      `確定要結帳嗎？\n\n總金額：NT$ ${data?.totalPrice?.toLocaleString()}`,
  },
  'checkout-success': {
    title: '結帳成功！',
    confirmText: '繼續購物',
    confirmClass: 'btn-success',
    showCancel: false,
    getMessage: () => '感謝您的購買！\n您的訂單已成功送出，\n期待再次為您服務。',
  },
};

export default function Dialog() {
  const { dialog, hideDialog, removeFromCart, clearCart, addNotification, closeCart, showDialog } = useCart();
  const { isOpen, type, data } = dialog;

  if (!isOpen || !type) return null;

  const config = DIALOG_CONFIG[type];

  const handleConfirm = () => {
    if (type === 'remove') {
      removeFromCart(data.product.id);
      addNotification(`已移除「${data.product.name}」`, 'info');
      hideDialog();
    } else if (type === 'checkout') {
      clearCart();
      closeCart();
      showDialog('checkout-success', {});
    } else {
      hideDialog();
    }
  };

  const isSuccess = type === 'checkout-success';

  return (
    <div className="dialog-overlay" onClick={hideDialog}>
      <div className={`dialog ${isSuccess ? 'dialog-success' : ''}`} onClick={e => e.stopPropagation()}>
        {isSuccess && <div className="success-icon">🎉</div>}
        <h3 className={`dialog-title ${isSuccess ? 'dialog-title-success' : ''}`}>
          {config.title}
        </h3>
        <p className="dialog-message">{config.getMessage(data)}</p>
        <div className={`dialog-actions ${isSuccess ? 'dialog-actions-center' : ''}`}>
          {config.showCancel && (
            <button className="btn btn-secondary" onClick={hideDialog}>取消</button>
          )}
          <button className={`btn ${config.confirmClass}`} onClick={handleConfirm}>
            {config.confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
