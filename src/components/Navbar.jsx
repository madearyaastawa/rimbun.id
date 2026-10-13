import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const navClass = ({ isActive }) => `px-3 py-2 rounded-lg text-sm font-medium transition ${isActive ? "bg-green-700 text-white" : "text-green-50 hover:bg-green-600"}`;

  return (
    <nav className="bg-green-600 text-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl">🌿</span>
            <div>
              <h1 className="font-bold text-lg sm:text-xl">Rimbun.id</h1>
              <p className="hidden sm:block text-xs text-green-100">Toko Tanaman Online</p>
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-1 sm:gap-2">
            <NavLink to="/" end className={navClass}>
              Produk
            </NavLink>

            <NavLink to="/cart" className={navClass}>
              Keranjang
            </NavLink>

            <NavLink to="/checkout" className={navClass}>
              Checkout
            </NavLink>

            <NavLink
              to="/admin/dashboard"
              className="hidden md:block px-3 py-2 rounded-lg text-sm
              font-medium bg-green-700 hover:bg-green-800 transition"
            >
              Admin
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
