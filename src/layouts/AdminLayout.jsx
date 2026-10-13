import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-green-50">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex-1 min-w-0 flex flex-col">
        {/* Mobile Header */}
        <header className="md:hidden h-16 bg-white border-b flex items-center px-4">
          <button onClick={() => setSidebarOpen(true)} className="p-2 rounded-lg hover:bg-green-50 text-green-700">
            ☰
          </button>

          <div className="ml-3 flex items-center gap-2">
            <span>🌿</span>
            <h1 className="font-semibold text-gray-800">Rimbun.id Admin</h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="bg-white border-t px-4 py-4 text-center text-sm text-gray-500">© 2026 Rimbun.id Admin — v1.0.0</footer>
      </div>
    </div>
  );
}
