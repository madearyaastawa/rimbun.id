export default function AboutPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">About Rimbun.id</h1>

        <p className="text-gray-500 mt-1">Informasi mengenai aplikasi toko.</p>
      </div>

      <div className="bg-white border rounded-xl p-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl">🌿</div>

          <div>
            <h2 className="font-semibold text-lg">Rimbun.id Toko Online</h2>

            <p className="text-sm text-gray-500">Toko Tanaman Online</p>
          </div>
        </div>

        <p className="text-gray-600 mt-5 leading-relaxed">Rimbun.id adalah toko tanaman sederhana yang menyediakan berbagai pilihan tanaman untuk rumah, ruang kerja, dan lingkungan sekitar.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="bg-green-50 rounded-lg p-4">
            <p className="text-sm text-gray-500">Version</p>

            <p className="font-semibold text-green-700 mt-1">1.0.0</p>
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <p className="text-sm text-gray-500">Technology</p>

            <p className="font-semibold text-green-700 mt-1">React + Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
