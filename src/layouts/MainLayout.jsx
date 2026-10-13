import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-green-50/40">
      <Navbar />

      {/* Search & Filter */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Cari tanaman..."
                className="w-full px-4 py-2.5 border border-gray-300
                rounded-lg focus:outline-none focus:ring-2
                focus:ring-green-500"
              />
            </div>

            <select
              className="w-full md:w-56 px-4 py-2.5 border
              border-gray-300 rounded-lg bg-white
              focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option>Semua Kategori</option>
              <option>Tanaman Indoor</option>
              <option>Sukulen</option>
              <option>Tanaman Outdoor</option>
              <option>Pot Tanaman</option>
            </select>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-green-100">
        <div className="max-w-7xl mx-auto px-4 py-5 text-center text-sm">© 2026 Rimbun.id — Toko Tanaman Online</div>
      </footer>
    </div>
  );
}
