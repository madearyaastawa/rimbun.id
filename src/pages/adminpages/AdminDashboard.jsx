export default function AdminDashboard() {
  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Dashboard</h1>

        <p className="text-gray-500 mt-1">Kelola toko tanaman Rimbun.id.</p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white border rounded-xl p-5">
          <p className="text-sm text-gray-500">Total Tanaman</p>

          <h2 className="text-2xl font-bold text-green-700 mt-2">6</h2>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <p className="text-sm text-gray-500">Pesanan</p>

          <h2 className="text-2xl font-bold text-green-700 mt-2">12</h2>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <p className="text-sm text-gray-500">Pendapatan</p>

          <h2 className="text-2xl font-bold text-green-700 mt-2">Rp2.500.000</h2>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white border rounded-xl mt-6 p-5">
        <h2 className="font-semibold text-lg">Pesanan Terbaru</h2>

        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm min-w-[500px]">
            <thead>
              <tr className="border-b text-left">
                <th className="py-3">Tanaman</th>
                <th className="py-3">Jumlah</th>
                <th className="py-3">Total</th>
                <th className="py-3">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="py-3">Monstera Deliciosa</td>

                <td className="py-3">1</td>

                <td className="py-3">Rp150.000</td>

                <td className="py-3">
                  <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs">Selesai</span>
                </td>
              </tr>

              <tr>
                <td className="py-3">Snake Plant</td>

                <td className="py-3">2</td>

                <td className="py-3">Rp170.000</td>

                <td className="py-3">
                  <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs">Diproses</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
