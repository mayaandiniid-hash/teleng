import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#9C96B8] flex flex-col items-center justify-center p-4 text-white text-center">
      <h1 className="text-4xl font-extrabold mb-2">404</h1>
      <p className="text-sm text-slate-200 mb-6">Halaman tidak ditemukan.</p>
      <Link
        href="/"
        className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
