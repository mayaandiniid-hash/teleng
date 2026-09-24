'use client';

import React from 'react';

interface AppIconProps {
  type: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function AppIcon({ type, size = 'md', className = '' }: AppIconProps) {
  const sizeClasses = {
    sm: 'w-10 h-10 rounded-xl',
    md: 'w-14 h-14 rounded-2xl',
    lg: 'w-20 h-20 rounded-3xl'
  }[size];

  switch (type) {
    case 'sonic':
      return (
        <div className={`${sizeClasses} bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center p-1.5 shadow-md shadow-blue-500/20 relative overflow-hidden ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow">
            {/* Sonic Spikes and face */}
            <circle cx="50" cy="50" r="44" fill="#0066FF" />
            <path d="M 50 15 Q 85 20 80 50 Q 85 70 50 85 Q 20 70 20 50 Q 15 20 50 15 Z" fill="#0052CC" />
            {/* Ears */}
            <polygon points="25,30 15,10 38,20" fill="#0052CC" />
            <polygon points="23,28 17,14 34,21" fill="#FFCBA4" />
            <polygon points="75,30 85,10 62,20" fill="#0052CC" />
            <polygon points="77,28 83,14 66,21" fill="#FFCBA4" />
            {/* Peach Muzzle */}
            <ellipse cx="50" cy="62" rx="28" ry="20" fill="#FED8B1" />
            {/* Big Expressive Eyes */}
            <ellipse cx="40" cy="40" rx="10" ry="16" fill="#FFFFFF" />
            <ellipse cx="60" cy="40" rx="10" ry="16" fill="#FFFFFF" />
            <ellipse cx="43" cy="42" rx="5" ry="9" fill="#00AA00" />
            <ellipse cx="57" cy="42" rx="5" ry="9" fill="#00AA00" />
            <ellipse cx="44" cy="42" rx="2.5" ry="5" fill="#000000" />
            <ellipse cx="56" cy="42" rx="2.5" ry="5" fill="#000000" />
            <circle cx="43" cy="39" r="1.5" fill="#FFFFFF" />
            <circle cx="55" cy="39" r="1.5" fill="#FFFFFF" />
            {/* Black Nose */}
            <ellipse cx="50" cy="53" rx="5" ry="3.5" fill="#111111" />
            {/* Smug Smile */}
            <path d="M 45 68 Q 54 74 62 67" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      );

    case 'zombie':
      return (
        <div className={`${sizeClasses} bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center p-1.5 shadow-md shadow-emerald-500/20 relative overflow-hidden ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow">
            {/* Field Trip Z Green Zombie Head with Hair & Glasses */}
            <rect x="15" y="15" width="70" height="70" rx="22" fill="#7CBD38" />
            {/* Brown Hair */}
            <path d="M 15 36 Q 30 12 50 15 Q 70 12 85 36 L 85 24 Q 70 10 50 10 Q 30 10 15 24 Z" fill="#5A3A1B" />
            <path d="M 20 22 L 32 34 L 40 20 L 52 32 L 64 18 L 76 34 L 80 20" fill="#5A3A1B" />
            {/* Thick Nerd Glasses */}
            <rect x="22" y="38" width="24" height="20" rx="4" fill="#FFFFFF" stroke="#111111" strokeWidth="4" />
            <rect x="54" y="38" width="24" height="20" rx="4" fill="#FFFFFF" stroke="#111111" strokeWidth="4" />
            <line x1="46" y1="48" x2="54" y2="48" stroke="#111111" strokeWidth="4" />
            {/* Eyes behind lenses */}
            <circle cx="34" cy="48" r="4.5" fill="#111111" />
            <circle cx="66" cy="48" r="4.5" fill="#111111" />
            <circle cx="36" cy="46" r="1.5" fill="#FFFFFF" />
            <circle cx="68" cy="46" r="1.5" fill="#FFFFFF" />
            {/* Zombie Drool / Mouth */}
            <path d="M 36 68 Q 50 78 64 68" stroke="#1E3A0F" strokeWidth="3" fill="none" strokeLinecap="round" />
            <rect x="42" y="68" width="5" height="5" fill="#FFFFFF" />
            <rect x="53" y="68" width="5" height="5" fill="#FFFFFF" />
            <path d="M 58 72 Q 62 82 59 86 Q 56 86 56 72 Z" fill="#6EE7B7" />
          </svg>
        </div>
      );

    case 'monster':
      return (
        <div className={`${sizeClasses} bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center p-1.5 shadow-md shadow-blue-500/20 relative overflow-hidden ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow">
            {/* Rainbow Friends - Blue Monster with Crown */}
            <circle cx="50" cy="54" r="38" fill="#1D4ED8" />
            {/* Golden Crown */}
            <polygon points="32,25 38,12 50,22 62,12 68,25" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" />
            <circle cx="38" cy="12" r="2" fill="#EF4444" />
            <circle cx="50" cy="22" r="2" fill="#3B82F6" />
            <circle cx="62" cy="12" r="2" fill="#EF4444" />
            {/* Big Googly Left Eye */}
            <circle cx="38" cy="46" r="12" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
            <circle cx="39" cy="46" r="4" fill="#0F172A" />
            {/* Right Button/X Eye */}
            <circle cx="62" cy="46" r="8" fill="#0F172A" />
            <line x1="58" y1="42" x2="66" y2="50" stroke="#FFFFFF" strokeWidth="2" />
            <line x1="66" y1="42" x2="58" y2="50" stroke="#FFFFFF" strokeWidth="2" />
            {/* Wide Drooling Mouth */}
            <path d="M 32 64 Q 50 82 68 64" fill="#0F172A" />
            {/* Neon Green Drool */}
            <path d="M 60 68 C 64 78 68 84 62 88 C 58 88 56 78 58 68 Z" fill="#A3E635" />
          </svg>
        </div>
      );

    case 'stumble':
      return (
        <div className={`${sizeClasses} bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center p-1.5 shadow-md shadow-orange-500/20 relative overflow-hidden ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow">
            {/* Stumble Guys character with green baseball cap */}
            <circle cx="50" cy="56" r="36" fill="#FBD5AB" />
            {/* Green Cap */}
            <path d="M 18 42 Q 50 16 82 42 L 80 46 Q 50 24 20 46 Z" fill="#22C55E" />
            <path d="M 16 42 Q 50 20 84 42 Q 86 48 50 48 Q 14 48 16 42 Z" fill="#16A34A" />
            <ellipse cx="50" cy="46" rx="36" ry="6" fill="#15803D" />
            <circle cx="50" cy="24" r="3" fill="#FACC15" />
            {/* Happy Eyes */}
            <ellipse cx="38" cy="56" rx="5" ry="7" fill="#111111" />
            <ellipse cx="62" cy="56" rx="5" ry="7" fill="#111111" />
            <circle cx="39" cy="54" r="2" fill="#FFFFFF" />
            <circle cx="63" cy="54" r="2" fill="#FFFFFF" />
            {/* Cheerful Smile */}
            <path d="M 38 70 Q 50 84 62 70" fill="#991B1B" stroke="#111111" strokeWidth="2" />
            <path d="M 44 76 Q 50 82 56 76" fill="#EF4444" />
          </svg>
        </div>
      );

    case 'pubg':
      return (
        <div className={`${sizeClasses} bg-gradient-to-br from-stone-800 to-black flex items-center justify-center p-1.5 shadow-md shadow-stone-800/20 relative overflow-hidden ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow">
            {/* Level 3 Helmet with Visor */}
            <path d="M 22 55 C 22 28 78 28 78 55 L 82 72 C 78 78 68 84 50 84 C 32 84 22 78 18 72 Z" fill="#4B5563" />
            <path d="M 26 50 C 26 32 74 32 74 50 L 75 58 L 25 58 Z" fill="#374151" />
            {/* Helmet Visor Plate with grid slits */}
            <rect x="25" y="52" width="50" height="18" rx="4" fill="#1F2937" stroke="#111827" strokeWidth="2" />
            <line x1="30" y1="57" x2="70" y2="57" stroke="#60A5FA" strokeWidth="1.5" />
            <line x1="30" y1="62" x2="70" y2="62" stroke="#60A5FA" strokeWidth="1.5" />
            <line x1="30" y1="67" x2="70" y2="67" stroke="#60A5FA" strokeWidth="1.5" />
            <text x="50" y="38" textAnchor="middle" fill="#F59E0B" fontSize="9" fontWeight="900" letterSpacing="0.5">BATTLE</text>
          </svg>
        </div>
      );

    case 'pool':
      return (
        <div className={`${sizeClasses} bg-gradient-to-br from-slate-900 to-black flex items-center justify-center p-1.5 shadow-md shadow-black/20 relative overflow-hidden ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow">
            {/* 8-Ball glossy billiards */}
            <circle cx="50" cy="50" r="44" fill="#111827" />
            <ellipse cx="38" cy="28" rx="20" ry="10" fill="url(#glossGrad)" opacity="0.35" />
            {/* White circle with 8 */}
            <circle cx="50" cy="50" r="20" fill="#FFFFFF" />
            <text x="50" y="58" textAnchor="middle" fill="#111827" fontSize="24" fontWeight="900" fontFamily="sans-serif">8</text>
            <defs>
              <linearGradient id="glossGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    case 'capcut':
      return (
        <div className={`${sizeClasses} bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center p-2 shadow-md shadow-zinc-900/30 relative overflow-hidden border border-zinc-700/40 ${className}`}>
          <div className="relative w-full h-full flex items-center justify-center">
            {/* CapCut Hourglass / Scissor stylized shape */}
            <svg viewBox="0 0 100 100" className="w-4/5 h-4/5 text-white">
              <path d="M 22 25 L 78 25 L 56 46 L 78 68 L 22 68 L 44 46 Z" fill="none" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" />
              <circle cx="50" cy="46" r="4" fill="currentColor" />
            </svg>
            <span className="absolute bottom-0 right-0 bg-gradient-to-r from-amber-400 to-orange-500 text-[8px] font-black text-black px-1.5 py-0.5 rounded tracking-tighter">
              PRO
            </span>
          </div>
        </div>
      );

    case 'netflix':
      return (
        <div className={`${sizeClasses} bg-black flex items-center justify-center p-1.5 shadow-md shadow-red-950/40 relative overflow-hidden border border-zinc-800 ${className}`}>
          {/* Netflix Red N Logo */}
          <svg viewBox="0 0 100 100" className="w-3/4 h-3/4">
            <rect x="24" y="15" width="13" height="70" fill="#B81D24" />
            <rect x="63" y="15" width="13" height="70" fill="#B81D24" />
            <path d="M 24 15 L 63 85 L 76 85 L 37 15 Z" fill="#E50914" />
          </svg>
        </div>
      );

    case 'spotify':
      return (
        <div className={`${sizeClasses} bg-[#1DB954] flex items-center justify-center p-2 shadow-md shadow-emerald-500/20 relative overflow-hidden ${className}`}>
          {/* Spotify Waves */}
          <svg viewBox="0 0 100 100" className="w-4/5 h-4/5 text-black">
            <path d="M 20 40 Q 50 30 80 43" stroke="#121212" strokeWidth="8" strokeLinecap="round" fill="none" />
            <path d="M 25 54 Q 50 46 75 57" stroke="#121212" strokeWidth="7" strokeLinecap="round" fill="none" />
            <path d="M 30 68 Q 50 62 70 70" stroke="#121212" strokeWidth="6" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      );

    case 'youtube':
      return (
        <div className={`${sizeClasses} bg-[#FF0000] flex items-center justify-center p-2 shadow-md shadow-red-500/20 relative overflow-hidden ${className}`}>
          <svg viewBox="0 0 100 100" className="w-4/5 h-4/5">
            <rect x="15" y="24" width="70" height="52" rx="16" fill="#CC0000" />
            <polygon points="42,38 42,62 66,50" fill="#FFFFFF" />
          </svg>
        </div>
      );

    case 'disney':
      return (
        <div className={`${sizeClasses} bg-gradient-to-br from-blue-700 via-indigo-900 to-black flex items-center justify-center p-1.5 shadow-md shadow-blue-900/40 relative overflow-hidden ${className}`}>
          <div className="flex flex-col items-center justify-center text-white font-serif font-black">
            <span className="text-sm tracking-tight italic">Disney</span>
            <span className="text-xs font-sans text-cyan-400 font-extrabold -mt-1">+</span>
          </div>
        </div>
      );

    case 'canva':
      return (
        <div className={`${sizeClasses} bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 flex items-center justify-center p-1.5 shadow-md shadow-cyan-500/20 relative overflow-hidden ${className}`}>
          <span className="text-white text-xl font-bold font-serif italic drop-shadow">
            C
          </span>
        </div>
      );

    default:
      return (
        <div className={`${sizeClasses} bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold ${className}`}>
          App
        </div>
      );
  }
}
