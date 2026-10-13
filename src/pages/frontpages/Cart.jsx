import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div>
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-gray-800">Keranjang</h1>

        <p className="text-gray-500 mt-1">Tanaman yang akan Anda beli.</p>
      </div>

      <div className="bg-white border rounded-xl p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
          {/* Product */}
          <div className="w-full sm:w-24 h-24 bg-green-100 rounded-lg flex items-center justify-center">
            <span className="text-4xl">🌿</span>
          </div>

          <div className="flex-1">
            <h2 className="font-semibold text-gray-800">Monstera Deliciosa</h2>

            <p className="text-sm text-gray-500 mt-1">Tanaman Indoor</p>

            <p className="text-green-700 font-semibold mt-2">Rp150.000</p>
          </div>

          <div>
            <label className="text-sm text-gray-500">Jumlah</label>

            <input type="number" min="1" defaultValue="1" className="block w-20 border rounded-lg px-3 py-2 mt-1" />
          </div>
        </div>

        {/* Total */}
        <div
          className="border-t mt-6 pt-5 flex flex-col sm:flex-row
        sm:items-center sm:justify-between gap-4"
        >
          <div>
            <p className="text-sm text-gray-500">Total</p>

            <p className="text-xl font-bold text-green-700">Rp150.000</p>
          </div>

          <Link
            to="/checkout"
            className="text-center bg-green-600 text-white
            px-5 py-2.5 rounded-lg hover:bg-green-700"
          >
            Lanjut Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
