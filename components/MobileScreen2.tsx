'use client';

import React, { useState } from 'react';
import { CatalogItem } from '@/data/appCatalog';
import { AppIcon } from './AppIcon';
import { CategoryChips } from './CategoryChips';
import { BottomNav } from './BottomNav';
import { ArrowUpDown, Flame } from 'lucide-react';

interface MobileScreen2Props {
  catalog: CatalogItem[];
  mode: 'gaming' | 'premium';
  onOpenDetailModal: (item: CatalogItem) => void;
  onNavigateTab: (tab: 'home' | 'store' | 'settings') => void;
}

export function MobileScreen2({
  catalog,
  mode,
  onOpenDetailModal,
  onNavigateTab
}: MobileScreen2Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortDescending, setSortDescending] = useState<boolean>(true);

  // Filter & sort
  let items = selectedCategory === 'all'
    ? [...catalog]
    : catalog.filter(c => c.category === selectedCategory);

  if (sortDescending) {
    items.sort((a, b) => b.rating - a.rating);
  } else {
    items.sort((a, b) => a.rating - b.rating);
  }

  const toggleSort = () => {
    setSortDescending(!sortDescending);
  };

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#F4F6FB] min-h-full">
      {/* Scrollable Content Area */}
      <div className="px-4 pt-1 pb-4 space-y-3">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
            {mode === 'premium' ? 'Recommended apps' : 'Recommended games'}
          </h2>
        </div>

        {/* Category Chips */}
        <div className="flex justify-center">
          <CategoryChips
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            mode={mode}
          />
        </div>

        {/* '↓↑ More popular above' Sort Pill Button */}
        <div className="flex justify-center pt-0.5">
          <button
            onClick={toggleSort}
            className="flex items-center gap-1.5 px-4 py-1 rounded-full bg-white/90 border border-slate-200/90 shadow-xs text-[11px] font-semibold text-slate-700 hover:bg-slate-50 transition-all active:scale-95 cursor-pointer"
          >
            <ArrowUpDown className="w-3 h-3 text-slate-600" />
            <span>{sortDescending ? 'More popular above' : 'All ranked'}</span>
          </button>
        </div>

        {/* 2-Column Grid of 6 Game / App Cards */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[26px] p-3 shadow-[0_4px_16px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col items-center justify-between text-center transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
              {/* App / Game Icon */}
              <div className="my-1">
                <AppIcon type={item.iconType} size="md" />
              </div>

              {/* Title */}
              <h4 className="text-xs font-bold text-slate-900 truncate w-full px-1 mt-1">
                {item.title}
              </h4>

              {/* Stats: Rating + Plays */}
              <div className="flex items-center justify-center gap-1.5 mt-1 text-[10px] text-slate-500 font-medium">
                <span className="flex items-center gap-0.5 text-slate-600">
                  👍 {item.rating}%
                </span>
                <span className="text-slate-300">·</span>
                <span className="flex items-center gap-0.5">
                  ▶ {item.plays}
                </span>
              </div>

              {/* Heat Flames */}
              <div className="flex items-center justify-center text-orange-500 gap-0.5 my-2">
                <Flame className="w-3.5 h-3.5 fill-current" />
                <Flame className="w-3.5 h-3.5 fill-current" />
                <Flame className="w-3.5 h-3.5 fill-current" />
              </div>

              {/* Play / Get Pill Button */}
              <button
                onClick={() => onOpenDetailModal(item)}
                className="w-full py-1.5 rounded-full bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-xs shadow-[0_3px_10px_rgba(37,99,235,0.25)] transition-all active:scale-95 cursor-pointer mt-0.5"
              >
                {mode === 'premium' ? 'Get' : 'Play'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation (Store active) */}
      <BottomNav activeTab="store" onTabChange={onNavigateTab} />
    </div>
  );
}
