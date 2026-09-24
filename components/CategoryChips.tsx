'use client';

import React from 'react';
import { Star, PieChart, Sparkles, Film, Video, Layers } from 'lucide-react';

interface CategoryChipsProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  mode?: 'gaming' | 'premium';
}

export function CategoryChips({ selectedCategory, onSelectCategory, mode = 'gaming' }: CategoryChipsProps) {
  if (mode === 'premium') {
    const premiumCategories = [
      { id: 'all', label: 'All Pro', icon: Sparkles, bg: 'bg-indigo-50', text: 'text-indigo-600', iconColor: 'text-indigo-500' },
      { id: 'streaming', label: 'Streaming', icon: Film, bg: 'bg-rose-50', text: 'text-rose-600', iconColor: 'text-rose-500' },
      { id: 'editing', label: 'Video Edit', icon: Video, bg: 'bg-amber-50', text: 'text-amber-600', iconColor: 'text-amber-500' },
      { id: 'productivity', label: 'Creative', icon: Layers, bg: 'bg-teal-50', text: 'text-teal-600', iconColor: 'text-teal-500' },
    ];

    return (
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 px-1">
        {premiumCategories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isSelected
                  ? 'bg-slate-900 text-white shadow-sm scale-[1.02]'
                  : `${cat.bg} ${cat.text} hover:opacity-80`
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-300' : cat.iconColor}`} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  // Gaming exact match as in photo:
  const categories = [
    { id: 'survival', label: 'Survival', icon: 'star', bg: 'bg-pink-50', text: 'text-pink-600', iconColor: 'text-pink-500' },
    { id: 'action', label: 'Action', icon: 'pie', bg: 'bg-amber-50', text: 'text-amber-600', iconColor: 'text-amber-500' },
    { id: 'collector', label: 'Collector', icon: 'star', bg: 'bg-teal-50', text: 'text-teal-600', iconColor: 'text-teal-500' },
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 px-0.5">
      {categories.map((cat) => {
        const isSelected = selectedCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(isSelected ? 'all' : cat.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              isSelected
                ? 'ring-2 ring-[#2563EB] bg-white shadow-sm text-slate-900'
                : `${cat.bg} ${cat.text} hover:opacity-90`
            }`}
          >
            {cat.icon === 'star' ? (
              <Star className={`w-3.5 h-3.5 fill-current ${cat.iconColor}`} />
            ) : (
              <PieChart className={`w-3.5 h-3.5 ${cat.iconColor}`} />
            )}
            <span>{cat.label}</span>
          </button>
        );
      })}
    </div>
  );
}
