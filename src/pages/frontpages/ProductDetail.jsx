import { Link, useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div>
      <Link to="/" className="text-sm text-green-700 hover:underline">
        ← Kembali ke Produk
      </Link>

      <div className="mt-5 bg-white border rounded-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="min-h-80 md:min-h-96 bg-green-100 flex items-center justify-center">
            <span className="text-8xl">🌿</span>
          </div>

          {/* Product Information */}
          <div className="p-6 sm:p-8">
            <span className="text-sm text-green-600 font-medium">Tanaman</span>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-2">Detail Tanaman {id}</h1>

            <p className="text-2xl font-bold text-green-700 mt-4">Rp150.000</p>

            <p className="text-gray-600 mt-5 leading-relaxed">Tanaman pilihan yang cocok untuk memperindah ruangan dan memberikan suasana alami. Informasi lengkap mengenai tanaman dapat ditampilkan pada bagian ini.</p>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Jumlah</label>

              <input type="number" min="1" defaultValue="1" className="w-24 border rounded-lg px-3 py-2" />
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                className="flex-1 bg-green-600 text-white py-3
                rounded-lg hover:bg-green-700 transition"
              >
                Tambah ke Keranjang
              </button>

              <Link
                to="/checkout"
                className="flex-1 text-center border border-green-600
                text-green-700 py-3 rounded-lg hover:bg-green-50"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
