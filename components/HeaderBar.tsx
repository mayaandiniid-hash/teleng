'use client';

import React from 'react';
import Link from 'next/link';
import { Smartphone, LayoutGrid, Sparkles, Gamepad2 } from 'lucide-react';

interface HeaderBarProps {
  viewMode: 'three-screens' | 'single-phone';
  onViewModeChange: (mode: 'three-screens' | 'single-phone') => void;
  activeScreen: 1 | 2 | 3;
  onScreenSelect: (screen: 1 | 2 | 3) => void;
  catalogMode: 'gaming' | 'premium';
  onCatalogModeChange: (mode: 'gaming' | 'premium') => void;
  coins: number;
}

export function HeaderBar({
  viewMode,
  onViewModeChange,
  activeScreen,
  onScreenSelect,
  catalogMode,
  onCatalogModeChange,
  coins,
}: HeaderBarProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/"
            className="text-lg font-black tracking-tight text-slate-900 flex items-center gap-2 hover:opacity-90"
          >
            <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-base shadow-sm">
              🎮
            </span>
            <span className="truncate">GameZone Showcase</span>
          </Link>
        </div>

        {/* Zone 2: Navigation Links & View Controls */}
        <nav className="hidden md:flex items-center gap-2 text-xs font-semibold">
          {/* Mode Switcher: 3 Screens Side-by-Side vs Single Device */}
          <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200/80">
            <button
              onClick={() => onViewModeChange('three-screens')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                viewMode === 'three-screens'
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5 text-blue-600" />
              <span>3 Screens Mockup</span>
            </button>
            <button
              onClick={() => onViewModeChange('single-phone')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                viewMode === 'single-phone'
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5 text-blue-600" />
              <span>Interactive Phone</span>
            </button>
          </div>

          {/* Quick jump to screen tabs when in single phone mode */}
          {viewMode === 'single-phone' && (
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl">
              <button
                onClick={() => onScreenSelect(1)}
                className={`px-2.5 py-1 text-xs rounded-lg transition-all cursor-pointer ${
                  activeScreen === 1 ? 'bg-blue-600 text-white font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Screen 1 (Home)
              </button>
              <button
                onClick={() => onScreenSelect(2)}
                className={`px-2.5 py-1 text-xs rounded-lg transition-all cursor-pointer ${
                  activeScreen === 2 ? 'bg-blue-600 text-white font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Screen 2 (Store)
              </button>
              <button
                onClick={() => onScreenSelect(3)}
                className={`px-2.5 py-1 text-xs rounded-lg transition-all cursor-pointer ${
                  activeScreen === 3 ? 'bg-blue-600 text-white font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Screen 3 (Profile)
              </button>
            </div>
          )}
        </nav>

        {/* Zone 3: 1-2 Primary Actions (Catalog switcher + Balance) */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Catalog Switcher: Gamer Replica vs Premium Apps (CapCut/Netflix) */}
          <div className="flex items-center p-0.5 bg-slate-100 rounded-xl border border-slate-200">
            <button
              onClick={() => onCatalogModeChange('gaming')}
              title="Exact match as in photo (Sonic, Rainbow Friends, Battlegrounds)"
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                catalogMode === 'gaming'
                  ? 'bg-[#2563EB] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Photo Games</span>
            </button>
            <button
              onClick={() => onCatalogModeChange('premium')}
              title="Premium Apps Edition (CapCut, Netflix, Spotify, YouTube)"
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                catalogMode === 'premium'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden sm:inline">Premium Apps</span>
            </button>
          </div>

          {/* User Currency Pill */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-black shadow-xs">
            <span className="text-amber-500 text-sm">🪙</span>
            <span>{coins.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
