'use client';

import React, { useState } from 'react';
import { Coins, CheckCircle, Gift, Sparkles, X, Flame, ArrowRight } from 'lucide-react';

interface EarnCoinsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: number;
  onAddCurrency: (amount: number) => void;
}

export function EarnCoinsModal({ isOpen, onClose, currency, onAddCurrency }: EarnCoinsModalProps) {
  const [claimedDaily, setClaimedDaily] = useState(false);
  const [claimedAd, setClaimedAd] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleClaim = (amount: number, type: 'daily' | 'ad') => {
    onAddCurrency(amount);
    if (type === 'daily') setClaimedDaily(true);
    if (type === 'ad') setClaimedAd(true);
    setNotification(`+${amount} Coins added to your balance!`);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 overflow-hidden">
        {/* Decorative Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-amber-400" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-500 shadow-sm">
            <Coins className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">How to earn coins?</h3>
            <p className="text-xs text-slate-500">Current balance: <span className="font-bold text-blue-600">{currency.toLocaleString()} Coins</span></p>
          </div>
        </div>

        {notification && (
          <div className="mb-3 p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs font-semibold text-emerald-700 flex items-center gap-2 animate-in zoom-in-95 duration-150">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>{notification}</span>
          </div>
        )}

        {/* Tasks List */}
        <div className="space-y-2.5 my-4">
          {/* Daily Streak */}
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center shadow-xs">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800">Daily Login Streak</div>
                <div className="text-[11px] text-slate-500">+150 coins everyday</div>
              </div>
            </div>
            <button
              onClick={() => handleClaim(150, 'daily')}
              disabled={claimedDaily}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                claimedDaily
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-[#2563EB] hover:bg-blue-700 text-white shadow-sm'
              }`}
            >
              {claimedDaily ? 'Claimed' : 'Claim'}
            </button>
          </div>

          {/* Watch Spotlight Video */}
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-xs">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800">Watch Spotlight Video</div>
                <div className="text-[11px] text-slate-500">+100 coins per video</div>
              </div>
            </div>
            <button
              onClick={() => handleClaim(100, 'ad')}
              disabled={claimedAd}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                claimedAd
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-[#2563EB] hover:bg-blue-700 text-white shadow-sm'
              }`}
            >
              {claimedAd ? 'Claimed' : 'Watch'}
            </button>
          </div>

          {/* Complete 3 Missions */}
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center shadow-xs">
                <Gift className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800">Invite a Fellow Gamer</div>
                <div className="text-[11px] text-slate-500">+500 coins instantly</div>
              </div>
            </div>
            <button
              onClick={() => {
                navigator.clipboard?.writeText?.(window.location.href);
                setNotification('Invite link copied! Share with friends.');
                setTimeout(() => setNotification(null), 3000);
              }}
              className="px-3 py-1.5 rounded-full text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition-all cursor-pointer flex items-center gap-1"
            >
              Share
            </button>
          </div>
        </div>

        {/* Footer */}
        <button
          onClick={onClose}
          className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
        >
          <span>Done</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
