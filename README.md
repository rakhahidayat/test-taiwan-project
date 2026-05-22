# 精品商店 — Boutique Shop

A responsive React shopping cart app built with Vite and Context API for state management.

## Features

- **Product listing** — 8 products displayed in a responsive grid
- **Search box** — filter products in real-time by name
- **Add to cart** — toast notification appears on every add
- **Cart sidebar** — slide-in panel showing all cart items
- **Quantity controls** — increment/decrement buttons or type a number directly
- **Total quantity badge** — live count displayed on the cart icon
- **Confirmation dialogs** — prompts before removing an item or checking out
- **Checkout success modal** — animated popup after a successful checkout
- **Responsive layout** — adapts from 4 columns (desktop) down to 1 column (mobile)

## Tech Stack

| Tool | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI library |
| [Vite 5](https://vitejs.dev/) | Build tool & dev server |
| React Context + useReducer | Global state management |
| CSS (vanilla) | Styling & animations |

## Project Structure

```
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── context/
    │   └── CartContext.jsx       # Global cart, dialog & notification state
    └── components/
        ├── Header.jsx            # Sticky header with cart badge
        ├── SearchBox.jsx         # Real-time product search
        ├── ProductGrid.jsx       # Responsive product grid
        ├── ProductCard.jsx       # Individual product card
        ├── CartSidebar.jsx       # Slide-in cart panel
        ├── CartItem.jsx          # Cart item row with quantity controls
        ├── Dialog.jsx            # Confirmation & success modals
        └── Notification.jsx      # Auto-dismissing toast notifications
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## State Management

All shared state lives in `CartContext` and is consumed by any component via the `useCart()` hook. No prop drilling required.

```
CartContext
├── cart[]              — items in the cart
├── totalQuantity       — sum of all item quantities (shown in badge)
├── totalPrice          — computed total price
├── notifications[]     — active toast messages
├── dialog              — current dialog (remove / checkout / checkout-success)
└── isCartOpen          — controls cart sidebar visibility
```

## Screenshots

| Product List | Cart Sidebar | Checkout Dialog | Success Modal |
|---|---|---|---|
| 4-column grid with search | Slide-in with quantity controls | Confirm before checkout | Animated 🎉 popup |

## License

MIT
