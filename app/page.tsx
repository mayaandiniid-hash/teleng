'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PhoneFrame } from '@/components/PhoneFrame';
import { MobileScreen1 } from '@/components/MobileScreen1';
import { MobileScreen2 } from '@/components/MobileScreen2';
import { MobileScreen3 } from '@/components/MobileScreen3';
import { HeaderBar } from '@/components/HeaderBar';
import { EarnCoinsModal } from '@/components/EarnCoinsModal';
import { AppDetailModal } from '@/components/AppDetailModal';
import {
  ORIGINAL_GAMES,
  PREMIUM_APPS,
  INITIAL_USER_STATS,
  CatalogItem,
  UserStats
} from '@/data/appCatalog';
import {
  Sparkles,
  Gamepad2,
  CheckCircle2,
  Smartphone,
  Eye,
  Sliders,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function HomePage() {
  const [viewMode, setViewMode] = useState<'three-screens' | 'single-phone'>('three-screens');
  const [activeScreen, setActiveScreen] = useState<1 | 2 | 3>(1);
  const [catalogMode, setCatalogMode] = useState<'gaming' | 'premium'>('gaming');
  const [userStats, setUserStats] = useState<UserStats>(INITIAL_USER_STATS);

  // Modals state
  const [isEarnModalOpen, setIsEarnModalOpen] = useState(false);
  const [selectedAppDetail, setSelectedAppDetail] = useState<CatalogItem | null>(null);

  const currentCatalog = catalogMode === 'gaming' ? ORIGINAL_GAMES : PREMIUM_APPS;

  const handleAddCurrency = (amount: number) => {
    setUserStats(prev => ({
      ...prev,
      currency: prev.currency + amount
    }));
  };

  const handleDeductCoins = (amount: number): boolean => {
    if (userStats.currency >= amount) {
      setUserStats(prev => ({
        ...prev,
        currency: prev.currency - amount
      }));
      return true;
    }
    return false;
  };

  const handleNavigateTab = (tab: 'home' | 'store' | 'settings') => {
    if (tab === 'home') setActiveScreen(1);
    if (tab === 'store') setActiveScreen(2);
    if (tab === 'settings') setActiveScreen(3);
  };

  return (
    <div className="min-h-screen bg-[#9C96B8] flex flex-col font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Top Bar Header */}
      <HeaderBar
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        activeScreen={activeScreen}
        onScreenSelect={setActiveScreen}
        catalogMode={catalogMode}
        onCatalogModeChange={setCatalogMode}
        coins={userStats.currency}
      />

      {/* Main Showcase Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-start py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Editorial Headline & Context Banner */}
        <div className="w-full text-center max-w-3xl mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/40 backdrop-blur-md border border-white/60 text-xs font-bold text-slate-800 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Replika Desain 100% Persis Referensi Foto</span>
            <span className="text-slate-500">·</span>
            <span className="text-blue-900 font-semibold">Tiga Halaman Interaktif</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-sm leading-tight text-balance">
            {catalogMode === 'gaming'
              ? 'Tampilan Antarmuka 3 Halaman GameZone'
              : 'Katalog Aplikasi Premium (CapCut & Netflix)'}
          </h1>

          <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed drop-shadow-xs max-w-2xl mx-auto">
            Halaman 1 (Dashboard Statistik), Halaman 2 (Grid Rekomendasi 2-Kolom), dan Halaman 3 (Profil Kosmik).
            Semua elemen interaktif: klik <strong className="text-white underline decoration-amber-300">&ldquo;How to earn?&rdquo;</strong>, <strong className="text-white underline decoration-blue-400">&ldquo;Play/Get&rdquo;</strong>, filter kategori, dan tab navigasi!
          </p>

          {/* Quick interactive controls pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setCatalogMode(catalogMode === 'gaming' ? 'premium' : 'gaming')}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-white text-slate-900 text-xs font-bold shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              {catalogMode === 'gaming' ? (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                  <span>Ubah ke Mode Aplikasi Premium (CapCut, Netflix, dll)</span>
                </>
              ) : (
                <>
                  <Gamepad2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Kembali ke Mode Games Sesuai Foto</span>
                </>
              )}
            </button>

            <button
              onClick={() => setViewMode(viewMode === 'three-screens' ? 'single-phone' : 'three-screens')}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
              <span>
                {viewMode === 'three-screens'
                  ? 'Ganti ke Tampilan 1 Smartphone Interaktif'
                  : 'Ganti ke Tampilan 3 Mockup Berdampingan'}
              </span>
            </button>
          </div>
        </div>

        {/* Mockup Display Container */}
        {viewMode === 'three-screens' ? (
          /* View Mode 1: 3 Screens Side-by-Side as in the Photo */
          <div className="w-full flex flex-col items-center">
            {/* The 3 Phone Mockups */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 justify-items-center items-start w-full max-w-[1240px] py-4">
              {/* Screen 1: Dashboard / Home */}
              <div className="flex flex-col items-center gap-3 w-full max-w-[360px]">
                <div className="flex items-center gap-2 text-xs font-extrabold text-white/90 bg-black/25 px-3 py-1 rounded-full backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <span>HALAMAN 1: DASHBOARD STATISTIK</span>
                </div>
                <PhoneFrame id="screen-1">
                  <MobileScreen1
                    stats={userStats}
                    catalog={currentCatalog}
                    mode={catalogMode}
                    onOpenEarnModal={() => setIsEarnModalOpen(true)}
                    onOpenDetailModal={(item) => setSelectedAppDetail(item)}
                    onNavigateTab={handleNavigateTab}
                  />
                </PhoneFrame>
              </div>

              {/* Screen 2: Recommended Games 2-Column Grid */}
              <div className="flex flex-col items-center gap-3 w-full max-w-[360px]">
                <div className="flex items-center gap-2 text-xs font-extrabold text-white/90 bg-black/25 px-3 py-1 rounded-full backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>HALAMAN 2: GRID KATALOG & FILTER</span>
                </div>
                <PhoneFrame id="screen-2">
                  <MobileScreen2
                    catalog={currentCatalog}
                    mode={catalogMode}
                    onOpenDetailModal={(item) => setSelectedAppDetail(item)}
                    onNavigateTab={handleNavigateTab}
                  />
                </PhoneFrame>
              </div>

              {/* Screen 3: Cosmic Header & Profile Stats */}
              <div className="flex flex-col items-center gap-3 w-full max-w-[360px]">
                <div className="flex items-center gap-2 text-xs font-extrabold text-white/90 bg-black/25 px-3 py-1 rounded-full backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-pink-400" />
                  <span>HALAMAN 3: PROFIL GAMER_NZ</span>
                </div>
                <PhoneFrame darkStatusBar={true} id="screen-3">
                  <MobileScreen3
                    stats={userStats}
                    mode={catalogMode}
                    onOpenEarnModal={() => setIsEarnModalOpen(true)}
                    onNavigateTab={handleNavigateTab}
                  />
                </PhoneFrame>
              </div>
            </div>
          </div>
        ) : (
          /* View Mode 2: Single Interactive Phone with Tab Switching */
          <div className="flex flex-col items-center gap-4 py-2 w-full max-w-md">
            {/* Screen Tab Selector Buttons */}
            <div className="flex items-center gap-2 bg-white/90 p-1.5 rounded-2xl shadow-lg border border-white">
              <button
                onClick={() => setActiveScreen(1)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeScreen === 1
                    ? 'bg-[#2563EB] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Halaman 1 (Home)
              </button>
              <button
                onClick={() => setActiveScreen(2)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeScreen === 2
                    ? 'bg-[#2563EB] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Halaman 2 (Store Grid)
              </button>
              <button
                onClick={() => setActiveScreen(3)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeScreen === 3
                    ? 'bg-[#2563EB] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Halaman 3 (Profile)
              </button>
            </div>

            {/* Active Phone Frame */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScreen}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="w-full flex justify-center"
              >
                <PhoneFrame darkStatusBar={activeScreen === 3}>
                  {activeScreen === 1 && (
                    <MobileScreen1
                      stats={userStats}
                      catalog={currentCatalog}
                      mode={catalogMode}
                      onOpenEarnModal={() => setIsEarnModalOpen(true)}
                      onOpenDetailModal={(item) => setSelectedAppDetail(item)}
                      onNavigateTab={handleNavigateTab}
                    />
                  )}
                  {activeScreen === 2 && (
                    <MobileScreen2
                      catalog={currentCatalog}
                      mode={catalogMode}
                      onOpenDetailModal={(item) => setSelectedAppDetail(item)}
                      onNavigateTab={handleNavigateTab}
                    />
                  )}
                  {activeScreen === 3 && (
                    <MobileScreen3
                      stats={userStats}
                      mode={catalogMode}
                      onOpenEarnModal={() => setIsEarnModalOpen(true)}
                      onNavigateTab={handleNavigateTab}
                    />
                  )}
                </PhoneFrame>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* Feature Highlights Section */}
        <div className="w-full max-w-5xl mt-16 bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl border border-white/60">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Detail Arsitektur Desain Sesuai Foto
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Setiap sudut, gradien warna, font, dan elemen antarmuka dirancang persis dengan tata letak visual referensi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-lg mb-3">
                  01
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  Halaman 1: Dashboard Statistik
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Menampilkan kartu avatar dengan ring neon cyan, saldo koin 1.500 dengan tombol &ldquo;How to earn?&rdquo;, dua kartu metrik 3D Crown (Level 1.500) &amp; 3D Stopwatch (Time 1h 23m), filter tanggal &ldquo;↻ Today&rdquo;, serta kartu rekomendasi horizontal.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-purple-700 text-[11px] font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Kartu 3D &amp; Filter Realtime</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg mb-3">
                  02
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  Halaman 2: Grid Rekomendasi 2-Kolom
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tata letak 6 kartu game/aplikasi presisi tinggi: Sonic Speed Sim, Field Trip Z, Rainbow Friends, Stumble Guys, Battlegrounds, Pool Friends (atau CapCut Pro &amp; Netflix Premium). Dilengkapi rating jempol, jumlah pemain, 3 api 🔥, dan tombol Play.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-blue-700 text-[11px] font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Grid 2-Kolom &amp; Sortir Popularitas</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-lg mb-3">
                  03
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  Halaman 3: Banner Kosmik &amp; Profil
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pemandangan planet matahari terbenam fiksi ilmiah dengan avatar GAMER_NZ yang bertumpuk (overlap), baris koin biru, serta kisi 2x2: Level 14 (Trophy), Time 1h 23m (Hourglass), Skills 1.500 (Swords), dan Games 28 (Gamepad).
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-pink-700 text-[11px] font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Banner Lanskap &amp; Kisi 4 Pencapaian</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/20 bg-slate-950/20 backdrop-blur-md py-6 text-center text-xs text-white/80">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-medium">
            <span>🎮 GameZone &amp; Premium Apps Showcase</span>
            <span>·</span>
            <span>Built with Next.js 15 &amp; Tailwind CSS</span>
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <span>Status: Aktif &amp; Interaktif</span>
            <span>·</span>
            <span>Presisi Desain 1:1</span>
          </div>
        </div>
      </footer>

      {/* Interactive Modals */}
      <EarnCoinsModal
        isOpen={isEarnModalOpen}
        onClose={() => setIsEarnModalOpen(false)}
        currency={userStats.currency}
        onAddCurrency={handleAddCurrency}
      />

      <AppDetailModal
        item={selectedAppDetail}
        isOpen={!!selectedAppDetail}
        onClose={() => setSelectedAppDetail(null)}
        userCoins={userStats.currency}
        onDeductCoins={handleDeductCoins}
      />
    </div>
  );
}
