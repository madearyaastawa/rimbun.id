export default function Checkout() {
  return (
    <div>
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-gray-800">Checkout</h1>

        <p className="text-gray-500 mt-1">Lengkapi informasi untuk menyelesaikan pesanan.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Form */}
        <div className="lg:col-span-2 bg-white border rounded-xl p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-gray-800">Informasi Pengiriman</h2>

          <div className="mt-5 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nama Lengkap</label>

              <input
                type="text"
                placeholder="Masukkan nama lengkap"
                className="w-full border rounded-lg px-4 py-2.5
                focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Nomor Telepon</label>

              <input
                type="tel"
                placeholder="08xxxxxxxxxx"
                className="w-full border rounded-lg px-4 py-2.5
                focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Alamat</label>

              <textarea
                rows="4"
                placeholder="Masukkan alamat lengkap"
                className="w-full border rounded-lg px-4 py-2.5
                focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white border rounded-xl p-5 sm:p-6 h-fit">
          <h2 className="font-semibold text-lg">Ringkasan Pesanan</h2>

          <div className="flex justify-between gap-4 mt-5 text-sm">
            <span>Monstera Deliciosa</span>
            <span>Rp150.000</span>
          </div>

          <div className="border-t mt-5 pt-5 flex justify-between">
            <span className="font-semibold">Total</span>

            <span className="font-bold text-green-700">Rp150.000</span>
          </div>

          <button
            className="w-full mt-5 bg-green-600 text-white py-3
            rounded-lg hover:bg-green-700 transition"
          >
            Buat Pesanan
          </button>
        </div>
      </div>
    </div>
  );
}
