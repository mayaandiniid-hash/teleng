'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CatalogItem, UserStats } from '@/data/appCatalog';
import { AppIcon } from './AppIcon';
import { CategoryChips } from './CategoryChips';
import { BottomNav } from './BottomNav';
import { RotateCw, Coins, Flame } from 'lucide-react';

interface MobileScreen1Props {
  stats: UserStats;
  catalog: CatalogItem[];
  mode: 'gaming' | 'premium';
  onOpenEarnModal: () => void;
  onOpenDetailModal: (item: CatalogItem) => void;
  onNavigateTab: (tab: 'home' | 'store' | 'settings') => void;
}

export function MobileScreen1({
  stats,
  catalog,
  mode,
  onOpenEarnModal,
  onOpenDetailModal,
  onNavigateTab
}: MobileScreen1Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [timeFilter, setTimeFilter] = useState<'Today' | 'Weekly' | 'All Time'>('Today');

  // Filter catalog if selected
  const filteredCatalog = selectedCategory === 'all'
    ? catalog
    : catalog.filter(c => c.category === selectedCategory);

  const featuredItem = filteredCatalog[1] || filteredCatalog[0] || catalog[0];

  const cycleTimeFilter = () => {
    if (timeFilter === 'Today') setTimeFilter('Weekly');
    else if (timeFilter === 'Weekly') setTimeFilter('All Time');
    else setTimeFilter('Today');
  };

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#F4F6FB] min-h-full">
      {/* Content wrapper */}
      <div className="px-4 pt-1 pb-4 space-y-4">
        {/* Top Header Card - User Profile & Currency */}
        <div className="relative bg-white/90 backdrop-blur-md rounded-[28px] p-3 shadow-[0_8px_24px_rgba(37,99,235,0.08)] border border-blue-50/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Avatar with Cyan/Blue Ring */}
            <div className="relative w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-500 shadow-md">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 relative">
                <Image
                  src="/images/gamer_avatar_character_1790248369964.jpg"
                  alt="User Avatar"
                  fill
                  sizes="48px"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Currency & Handle */}
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <div className="flex items-center gap-1">
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-400 flex items-center justify-center text-[9px] font-black text-amber-900 shadow-xs">
                    $
                  </div>
                  <span className="text-sm font-extrabold text-slate-900 tracking-tight">
                    {stats.currency.toLocaleString('de-DE')}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 font-medium">Currency</span>
              </div>

              {/* Blue Handle Pill */}
              <div className="mt-0.5">
                <span className="inline-block bg-[#2563EB] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-xs">
                  {stats.handle}
                </span>
              </div>
            </div>
          </div>

          {/* How to earn? Button */}
          <button
            onClick={onOpenEarnModal}
            className="px-3 py-1.5 rounded-full border border-blue-200/90 bg-blue-50/50 hover:bg-blue-100/60 text-[#2563EB] text-[11px] font-bold tracking-tight transition-all active:scale-95 cursor-pointer shadow-xs whitespace-nowrap"
          >
            How to earn?
          </button>
        </div>

        {/* Statistics Section Title */}
        <div>
          <h2 className="text-lg font-extrabold text-slate-900 tracking-tight text-center sm:text-left pl-1">
            Statistics
          </h2>

          {/* Two Big Stat Cards */}
          <div className="grid grid-cols-2 gap-3 mt-2.5">
            {/* Left Card: Level (Purple) */}
            <div className="bg-white rounded-[26px] overflow-hidden shadow-[0_6px_20px_rgba(147,51,234,0.09)] border border-purple-50 flex flex-col transition-transform hover:scale-[1.02]">
              {/* Purple Top Half with 3D Crown */}
              <div className="relative h-24 bg-gradient-to-b from-[#8B2BE2] via-[#7928CA] to-[#6919BD] flex flex-col items-center justify-center p-2 overflow-hidden">
                {/* Subtle radial glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25)_0%,transparent_70%)]" />
                
                {/* 3D Crown Icon */}
                <div className="relative w-12 h-12 drop-shadow-[0_6px_8px_rgba(0,0,0,0.3)]">
                  <Image
                    src="/images/gold_crown_3d_1790248382143.jpg"
                    alt="Level Crown"
                    fill
                    sizes="48px"
                    className="object-cover rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[11px] font-bold text-white/90 mt-1 tracking-wide">
                  Level
                </span>
              </div>

              {/* White Bottom Half with Value */}
              <div className="py-3 text-center bg-white">
                <span className="text-xl font-black text-[#7928CA] tracking-tight">
                  {stats.level}
                </span>
              </div>
            </div>

            {/* Right Card: Time (Lime/Chartreuse) */}
            <div className="bg-white rounded-[26px] overflow-hidden shadow-[0_6px_20px_rgba(132,204,22,0.12)] border border-lime-50 flex flex-col transition-transform hover:scale-[1.02]">
              {/* Lime Top Half with 3D Stopwatch/Compass */}
              <div className="relative h-24 bg-gradient-to-b from-[#B4DE45] via-[#A0CF30] to-[#88B81E] flex flex-col items-center justify-center p-2 overflow-hidden">
                {/* Subtle radial glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3)_0%,transparent_70%)]" />

                {/* 3D Compass/Timer Icon */}
                <div className="relative w-12 h-12 drop-shadow-[0_6px_8px_rgba(0,0,0,0.25)]">
                  <Image
                    src="/images/compass_timer_3d_1790248393484.jpg"
                    alt="Time Timer"
                    fill
                    sizes="48px"
                    className="object-cover rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[11px] font-bold text-[#3B5406] mt-1 tracking-wide">
                  Time
                </span>
              </div>

              {/* White Bottom Half with Value */}
              <div className="py-3 text-center bg-white">
                <span className="text-xl font-black text-[#6B9611] tracking-tight">
                  {stats.timeSpent}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-divider / Filter Bar with '||' and '↻ Today' */}
        <div className="flex items-center justify-between px-2 pt-1">
          <div className="flex items-center gap-1 text-slate-300">
            <span className="font-mono text-sm tracking-tighter text-slate-400 font-bold">||</span>
          </div>

          <button
            onClick={cycleTimeFilter}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <RotateCw className="w-3 h-3 text-[#2563EB]" />
            <span>{timeFilter}</span>
          </button>
        </div>

        {/* Recommended Games / Apps Section */}
        <div>
          <div className="text-center sm:text-left pl-1 mb-2">
            <h2 className="text-lg font-extrabold text-slate-900 tracking-tight leading-tight">
              {mode === 'premium' ? 'Recommended apps' : 'Recommended games'}
            </h2>
          </div>

          {/* Category Chips */}
          <div className="mb-3">
            <CategoryChips
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              mode={mode}
            />
          </div>

          {/* Featured Horizontal Card */}
          <div className="bg-white rounded-[26px] p-3 shadow-[0_6px_20px_rgba(0,0,0,0.04)] border border-slate-100 flex items-center justify-between gap-3 transition-transform hover:shadow-md">
            <div className="flex items-center gap-3 min-w-0">
              {/* App Icon */}
              <AppIcon type={featuredItem.iconType} size="md" className="shrink-0" />

              {/* Details */}
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-slate-900 truncate">
                  {featuredItem.title}
                </h4>

                <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-500">
                  <span className="flex items-center gap-0.5 text-slate-600 font-medium">
                    👍 {featuredItem.rating}%
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="font-medium text-slate-500">
                    ▶ {featuredItem.plays}
                  </span>
                </div>
              </div>
            </div>

            {/* Right side: Flame icons & Play pill button */}
            <div className="flex flex-col items-end gap-1.5 shrink-0">
              <div className="flex items-center text-orange-500 gap-0.5 pr-1">
                <Flame className="w-3.5 h-3.5 fill-current" />
                <Flame className="w-3.5 h-3.5 fill-current" />
                <Flame className="w-3.5 h-3.5 fill-current" />
              </div>

              <button
                onClick={() => onOpenDetailModal(featuredItem)}
                className="px-5 py-1.5 rounded-full bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-xs shadow-[0_4px_12px_rgba(37,99,235,0.25)] transition-all active:scale-95 cursor-pointer"
              >
                {mode === 'premium' ? 'Get' : 'Play'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab="home" onTabChange={onNavigateTab} />
    </div>
  );
}
