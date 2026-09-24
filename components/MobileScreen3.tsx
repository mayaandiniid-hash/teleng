'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { UserStats } from '@/data/appCatalog';
import { CategoryChips } from './CategoryChips';
import { BottomNav } from './BottomNav';
import { Trophy, Hourglass, Swords, Gamepad2, ArrowUpDown, Coins } from 'lucide-react';

interface MobileScreen3Props {
  stats: UserStats;
  mode: 'gaming' | 'premium';
  onOpenEarnModal: () => void;
  onNavigateTab: (tab: 'home' | 'store' | 'settings') => void;
}

export function MobileScreen3({
  stats,
  mode,
  onOpenEarnModal,
  onNavigateTab
}: MobileScreen3Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [popularSorted, setPopularSorted] = useState<boolean>(true);

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#F4F6FB] min-h-full">
      {/* Scrollable Content Container */}
      <div className="pb-4 space-y-4">
        {/* Top Banner with Cosmic Sunset Planet */}
        <div className="relative -mt-11">
          {/* Cosmic Banner Image */}
          <div className="relative w-full h-44 overflow-hidden">
            <Image
              src="/images/cosmic_planet_banner_1790248357309.jpg"
              alt="Cosmic Sunset Planet Banner"
              fill
              priority
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Subtle Gradient Scrim at bottom to blend smoothly into white */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#F4F6FB]" />
          </div>

          {/* Overlapping Avatar Profile Lockup */}
          <div className="relative -mt-16 flex flex-col items-center">
            {/* Avatar Circle with Neon Rainbow/Cyan Ring */}
            <div className="relative w-24 h-24 rounded-full p-[3px] bg-gradient-to-tr from-cyan-400 via-pink-500 to-amber-300 shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-white relative">
                <Image
                  src="/images/gamer_avatar_character_1790248369964.jpg"
                  alt="GAMER_NZ Avatar"
                  fill
                  sizes="96px"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Username & Handle */}
            <h2 className="text-xl font-black text-slate-900 tracking-tight mt-2 uppercase">
              {stats.username}
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              {stats.handle.replace('@', '')}
            </p>
          </div>
        </div>

        <div className="px-4 space-y-4">
          {/* Currency Pill Bar */}
          <div className="bg-white rounded-full p-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] border border-slate-100 flex items-center justify-between">
            {/* Blue pill with currency */}
            <div className="flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-[#2563EB] text-white px-4 py-1.5 rounded-full shadow-sm">
              <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold">
                $
              </div>
              <span className="text-xs font-black tracking-tight">
                {stats.currency.toLocaleString('de-DE')}
              </span>
            </div>

            {/* How to earn coins? text button */}
            <button
              onClick={onOpenEarnModal}
              className="text-xs font-bold text-blue-600 hover:text-blue-800 pr-3 transition-colors cursor-pointer"
            >
              How to earn coins?
            </button>
          </div>

          {/* 2x2 Stats Grid */}
          <div className="grid grid-cols-2 gap-3">
            {/* Stat 1: Level */}
            <div className="bg-white rounded-[22px] p-3 shadow-[0_4px_14px_rgba(0,0,0,0.03)] border border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <Trophy className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-medium">Level</div>
                <div className="text-lg font-black text-slate-900 leading-tight">14</div>
              </div>
            </div>

            {/* Stat 2: Time */}
            <div className="bg-white rounded-[22px] p-3 shadow-[0_4px_14px_rgba(0,0,0,0.03)] border border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                <Hourglass className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-medium">Time</div>
                <div className="text-base font-black text-slate-900 leading-tight">
                  {stats.timeSpent}
                </div>
              </div>
            </div>

            {/* Stat 3: Skills */}
            <div className="bg-white rounded-[22px] p-3 shadow-[0_4px_14px_rgba(0,0,0,0.03)] border border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-500 shrink-0">
                <Swords className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-medium">Skills</div>
                <div className="text-lg font-black text-slate-900 leading-tight">
                  {stats.skills}
                </div>
              </div>
            </div>

            {/* Stat 4: Games */}
            <div className="bg-white rounded-[22px] p-3 shadow-[0_4px_14px_rgba(0,0,0,0.03)] border border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 shrink-0">
                <Gamepad2 className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-medium">
                  {mode === 'premium' ? 'Apps' : 'Games'}
                </div>
                <div className="text-lg font-black text-slate-900 leading-tight">
                  {stats.gamesCount}
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Section in Profile */}
          <div className="pt-1">
            <h3 className="text-base font-extrabold text-slate-900 tracking-tight text-center pl-1 mb-2">
              {mode === 'premium' ? 'Recommended apps' : 'Recommended games'}
            </h3>

            {/* Categories */}
            <div className="flex justify-center mb-2">
              <CategoryChips
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                mode={mode}
              />
            </div>

            {/* Sort pill */}
            <div className="flex justify-center">
              <button
                onClick={() => setPopularSorted(!popularSorted)}
                className="flex items-center gap-1.5 px-4 py-1 rounded-full bg-white/90 border border-slate-200/90 shadow-xs text-[11px] font-semibold text-slate-700 hover:bg-slate-50 transition-all cursor-pointer"
              >
                <ArrowUpDown className="w-3 h-3 text-slate-600" />
                <span>{popularSorted ? 'More popular above' : 'All ranked'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation (Settings active) */}
      <BottomNav activeTab="settings" onTabChange={onNavigateTab} />
    </div>
  );
}
