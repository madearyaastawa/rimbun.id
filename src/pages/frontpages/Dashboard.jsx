import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    category: "Tanaman Indoor",
    price: "Rp150.000",
    description: "Tanaman tropis dengan daun lebar yang cocok untuk dekorasi ruangan.",
    emoji: "🌿",
  },
  {
    id: 2,
    name: "Snake Plant",
    category: "Tanaman Indoor",
    price: "Rp85.000",
    description: "Tanaman yang mudah dirawat dan cocok untuk berbagai kondisi ruangan.",
    emoji: "🪴",
  },
  {
    id: 3,
    name: "Echeveria",
    category: "Sukulen",
    price: "Rp45.000",
    description: "Sukulen berukuran kecil dengan bentuk daun yang menarik.",
    emoji: "🌱",
  },
  {
    id: 4,
    name: "Peace Lily",
    category: "Tanaman Indoor",
    price: "Rp95.000",
    description: "Tanaman dengan daun hijau dan bunga putih yang elegan.",
    emoji: "🌿",
  },
  {
    id: 5,
    name: "Kaktus Mini",
    category: "Sukulen",
    price: "Rp35.000",
    description: "Kaktus mini yang praktis untuk meja kerja atau rak kecil.",
    emoji: "🌵",
  },
  {
    id: 6,
    name: "Calathea",
    category: "Tanaman Indoor",
    price: "Rp120.000",
    description: "Tanaman dengan pola daun yang cantik dan unik.",
    emoji: "🍃",
  },
];

export default function Dashboard() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-green-100 rounded-2xl p-6 sm:p-8 mb-8">
        <div className="max-w-2xl">
          <p className="text-green-700 font-medium text-sm">Toko Tanaman Rimbun.id</p>

          <h1 className="text-2xl sm:text-4xl font-bold text-green-900 mt-2">Hadirkan suasana hijau di rumah</h1>

          <p className="text-green-800/80 mt-3 max-w-xl">Pilihan tanaman sederhana untuk mempercantik ruangan dan menghadirkan nuansa alami.</p>

          <a
            href="#products"
            className="inline-block mt-5 bg-green-700 text-white
            px-5 py-2.5 rounded-lg hover:bg-green-800 transition"
          >
            Lihat Tanaman
          </a>
        </div>
      </section>

      {/* Product Heading */}
      <div id="products" className="mb-5">
        <h2 className="text-2xl font-bold text-gray-800">Pilihan Tanaman</h2>

        <p className="text-gray-500 mt-1">Tanaman pilihan untuk rumah dan ruang kerja.</p>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-xl
            overflow-hidden hover:shadow-md transition"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-green-100 flex items-center justify-center">
                <span className="text-6xl">{product.emoji}</span>
              </div>

              <div className="p-5">
                <span className="text-xs font-medium text-green-600">{product.category}</span>

                <h3 className="text-lg font-semibold text-gray-800 mt-1">{product.name}</h3>

                <p className="text-sm text-gray-500 mt-2 line-clamp-2">{product.description}</p>

                <div className="flex items-center justify-between gap-3 mt-4">
                  <span className="font-bold text-green-700">{product.price}</span>

                  <Link
                    to={`/product/${product.id}`}
                    className="text-sm bg-green-600 text-white
                  px-3 py-2 rounded-lg hover:bg-green-700 transition"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-5">
            <span className="text-xs font-medium text-red-600">Tidak ada produk untuk ditampilkan!</span>
          </div>
        )}
      </div>
    </div>
  );
}
