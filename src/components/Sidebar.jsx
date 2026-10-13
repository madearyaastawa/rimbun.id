import { NavLink } from "react-router-dom";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const linkClass = ({ isActive }) => `block px-3 py-2.5 rounded-lg text-sm font-medium transition ${isActive ? "bg-green-100 text-green-700" : "text-gray-700 hover:bg-green-50"}`;

  return (
    <>
      {/* Overlay untuk mobile */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/30 z-30 md:hidden" onClick={() => setSidebarOpen(false)} />}

      <aside
        className={`
          fixed md:static z-40
          top-0 left-0 h-full
          w-64 bg-white border-r
          transform transition-transform duration-200
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Sidebar Header */}
        <div className="h-16 flex items-center justify-between px-5 border-b">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🌿</span>
              <h1 className="font-bold text-lg text-green-700">Rimbun.id</h1>
            </div>

            <p className="text-xs text-gray-500">Admin Panel</p>
          </div>

          <button onClick={() => setSidebarOpen(false)} className="md:hidden text-gray-500 hover:text-gray-800">
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          <p className="text-xs font-semibold text-gray-400 uppercase px-3 mb-2">Menu</p>

          <NavLink to="/admin/dashboard" className={linkClass} onClick={() => setSidebarOpen(false)}>
            Dashboard
          </NavLink>

          <NavLink to="/admin/about" className={linkClass} onClick={() => setSidebarOpen(false)}>
            About
          </NavLink>
        </nav>
      </aside>
    </>
  );
}
