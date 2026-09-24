'use client';

import React, { useState } from 'react';
import { CatalogItem } from '@/data/appCatalog';
import { AppIcon } from './AppIcon';
import { Star, Flame, Play, CheckCircle, ShieldCheck, X, Sparkles } from 'lucide-react';

interface AppDetailModalProps {
  item: CatalogItem | null;
  isOpen: boolean;
  onClose: () => void;
  userCoins: number;
  onDeductCoins: (amount: number) => boolean;
}

export function AppDetailModal({ item, isOpen, onClose, userCoins, onDeductCoins }: AppDetailModalProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  if (!isOpen || !item) return null;

  const cost = item.costCoins || 250;
  const canAfford = userCoins >= cost;

  const handleAction = () => {
    if (unlocked) {
      setStatusMessage(`Launching ${item.title}... Enjoy!`);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const success = onDeductCoins(cost);
      if (success) {
        setUnlocked(true);
        setStatusMessage(`Successfully unlocked ${item.title}!`);
      } else {
        setStatusMessage('Not enough coins! Earn more in the tasks tab.');
      }
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 overflow-hidden">
        {/* Top subtle bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-400" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with App Icon */}
        <div className="flex items-start gap-4 mb-4">
          <AppIcon type={item.iconType} size="lg" className="shrink-0" />
          <div className="flex-1 min-w-0 pr-6">
            <span className="inline-block text-[10px] font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded-full mb-1">
              {item.categoryLabel}
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 truncate">{item.title}</h3>
            <p className="text-xs text-slate-500 truncate">{item.developer || 'Verified Publisher'}</p>

            <div className="flex items-center gap-2 mt-2 text-xs">
              <span className="text-emerald-600 font-bold flex items-center gap-0.5">
                👍 {item.rating}%
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500 font-medium">▶ {item.plays}</span>
              <span className="text-slate-300">·</span>
              <div className="flex items-center text-orange-500">
                {Array.from({ length: item.heatLevel }).map((_, i) => (
                  <Flame key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {statusMessage && (
          <div className="mb-3 p-2.5 bg-blue-50 border border-blue-200 rounded-xl text-xs font-semibold text-blue-800 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
            <span>{statusMessage}</span>
          </div>
        )}

        {/* Description */}
        <p className="text-xs text-slate-600 leading-relaxed mb-4">
          {item.description}
        </p>

        {/* Perks */}
        <div className="mb-5 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
          <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Included Features & Perks
          </div>
          <ul className="space-y-1.5">
            {item.perks.map((perk, i) => (
              <li key={i} className="text-xs text-slate-600 flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>{perk}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="space-y-2">
          <button
            onClick={handleAction}
            disabled={loading}
            className={`w-full py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${
              unlocked
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/20'
                : 'bg-[#2563EB] hover:bg-blue-700 text-white shadow-blue-500/25 active:scale-[0.99]'
            }`}
          >
            {loading ? (
              <span>Processing...</span>
            ) : unlocked ? (
              <>
                <Play className="w-4 h-4 fill-white" />
                <span>Launch Now</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-white" />
                <span>Play / Unlock ({cost} Coins)</span>
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
            <span>Instant Cloud Access · No Download Needed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
