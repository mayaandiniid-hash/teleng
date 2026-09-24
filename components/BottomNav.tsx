'use client';

import React from 'react';
import { Home, ShoppingCart, Settings } from 'lucide-react';

interface BottomNavProps {
  activeTab: 'home' | 'store' | 'settings';
  onTabChange?: (tab: 'home' | 'store' | 'settings') => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <div className="sticky bottom-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-md border-t border-slate-100 flex items-center justify-around px-4 z-30 shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
      {/* Home Tab */}
      <button
        type="button"
        onClick={() => onTabChange?.('home')}
        className="flex flex-col items-center justify-center gap-1 group py-1 px-4 cursor-pointer focus:outline-none"
      >
        <div className="relative flex flex-col items-center">
          <Home
            className={`w-6 h-6 transition-all duration-200 ${
              activeTab === 'home'
                ? 'text-[#2563EB] fill-[#2563EB] scale-105'
                : 'text-slate-400 group-hover:text-slate-600'
            }`}
          />
          {activeTab === 'home' && (
            <div className="w-4 h-1 bg-[#2563EB] rounded-full mt-1 animate-in fade-in zoom-in duration-200" />
          )}
        </div>
        <span
          className={`text-[11px] font-medium transition-colors ${
            activeTab === 'home' ? 'text-[#2563EB] font-bold' : 'text-slate-500'
          }`}
        >
          Home
        </span>
      </button>

      {/* Store Tab */}
      <button
        type="button"
        onClick={() => onTabChange?.('store')}
        className="flex flex-col items-center justify-center gap-1 group py-1 px-4 cursor-pointer focus:outline-none"
      >
        <div className="relative flex flex-col items-center">
          <ShoppingCart
            className={`w-6 h-6 transition-all duration-200 ${
              activeTab === 'store'
                ? 'text-[#2563EB] fill-[#2563EB]/20 scale-105 stroke-[2.5]'
                : 'text-slate-400 group-hover:text-slate-600'
            }`}
          />
          {activeTab === 'store' && (
            <div className="w-4 h-1 bg-[#2563EB] rounded-full mt-1 animate-in fade-in zoom-in duration-200" />
          )}
        </div>
        <span
          className={`text-[11px] font-medium transition-colors ${
            activeTab === 'store' ? 'text-[#2563EB] font-bold' : 'text-slate-500'
          }`}
        >
          Store
        </span>
      </button>

      {/* Settings Tab */}
      <button
        type="button"
        onClick={() => onTabChange?.('settings')}
        className="flex flex-col items-center justify-center gap-1 group py-1 px-4 cursor-pointer focus:outline-none"
      >
        <div className="relative flex flex-col items-center">
          <Settings
            className={`w-6 h-6 transition-all duration-200 ${
              activeTab === 'settings'
                ? 'text-[#2563EB] scale-105 stroke-[2.5]'
                : 'text-slate-400 group-hover:text-slate-600'
            }`}
          />
          {activeTab === 'settings' && (
            <div className="w-4 h-1 bg-[#2563EB] rounded-full mt-1 animate-in fade-in zoom-in duration-200" />
          )}
        </div>
        <span
          className={`text-[11px] font-medium transition-colors ${
            activeTab === 'settings' ? 'text-[#2563EB] font-bold' : 'text-slate-500'
          }`}
        >
          Settings
        </span>
      </button>
    </div>
  );
}
