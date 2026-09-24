export interface CatalogItem {
  id: string;
  title: string;
  category: 'survival' | 'action' | 'collector' | 'streaming' | 'editing' | 'productivity';
  categoryLabel: string;
  rating: number; // e.g. 98%
  plays: string; // e.g. "84.6K" or "1.2M"
  heatLevel: number; // 1 to 3 flames
  iconBg: string;
  iconType: 'sonic' | 'zombie' | 'monster' | 'stumble' | 'pubg' | 'pool' | 'capcut' | 'netflix' | 'spotify' | 'youtube' | 'disney' | 'canva';
  description: string;
  perks: string[];
  costCoins?: number;
  developer?: string;
  badge?: string;
}

export const ORIGINAL_GAMES: CatalogItem[] = [
  {
    id: 'game-sonic',
    title: 'Sonic Speed Si...',
    category: 'action',
    categoryLabel: 'Action',
    rating: 98,
    plays: '84.6K',
    heatLevel: 3,
    iconBg: 'from-blue-500 to-indigo-700',
    iconType: 'sonic',
    description: 'Race at lightning speeds, level up, unlock rare Chao companions, and compete in supersonic multiplayer leaderboards.',
    perks: ['Fast travel unlock', 'Exclusive Gold Chao', 'Triple XP Boost'],
    costCoins: 300,
    developer: 'Gamefam Studios'
  },
  {
    id: 'game-fieldtrip',
    title: 'Field Trip Z',
    category: 'survival',
    categoryLabel: 'Survival',
    rating: 92,
    plays: '289.2K',
    heatLevel: 3,
    iconBg: 'from-emerald-600 to-teal-800',
    iconType: 'zombie',
    description: 'Survive an unexpected zombie apocalypse on a high school excursion. Craft weapons and fight with friends.',
    perks: ['Reinforced Armor', 'Night Vision Goggles', 'Bonus Medkits'],
    costCoins: 250,
    developer: 'NerfFPS Corp'
  },
  {
    id: 'game-rainbow',
    title: 'Rainbow Friends',
    category: 'survival',
    categoryLabel: 'Survival',
    rating: 96,
    plays: '690.6K',
    heatLevel: 3,
    iconBg: 'from-blue-600 to-sky-700',
    iconType: 'monster',
    description: 'Evade Blue, Green, Orange and Purple in this mystery suspense horror adventure across Odd World.',
    perks: ['Box Camouflage Pro', 'Speed Radar', 'Extra Lives'],
    costCoins: 400,
    developer: 'Fragment Games'
  },
  {
    id: 'game-stumble',
    title: 'Stumble Guys',
    category: 'action',
    categoryLabel: 'Action',
    rating: 87,
    plays: '27.6K',
    heatLevel: 3,
    iconBg: 'from-amber-500 to-orange-600',
    iconType: 'stumble',
    description: 'Massive multiplayer party knockout game with up to 32 players online. Stumble your way to victory!',
    perks: ['VIP Stumble Pass', 'Legendary Skin Pack', 'Custom Emotes'],
    costCoins: 350,
    developer: 'Scopely Games'
  },
  {
    id: 'game-pubg',
    title: 'Battlegrounds',
    category: 'survival',
    categoryLabel: 'Survival',
    rating: 87,
    plays: '315.6K',
    heatLevel: 3,
    iconBg: 'from-stone-700 to-zinc-900',
    iconType: 'pubg',
    description: 'Drop into intense 100-player battle royale arenas. Loot tactical gear, drive vehicles, and be the last squad standing.',
    perks: ['Elite Royale Pass', 'Weapon Skin Blueprint', 'Airdrop Flare Gun'],
    costCoins: 500,
    developer: 'Krafton Global'
  },
  {
    id: 'game-pool',
    title: 'Pool Friends',
    category: 'collector',
    categoryLabel: 'Collector',
    rating: 87,
    plays: '315.6K',
    heatLevel: 3,
    iconBg: 'from-cyan-600 to-blue-800',
    iconType: 'pool',
    description: 'The classic 8-ball billiards showdown. Customize cues, compete in 1-on-1 matches, and enter world tournaments.',
    perks: ['Legendary Dragon Cue', 'Guideline Extender', 'High Roller Tables'],
    costCoins: 200,
    developer: 'Miniclip Series'
  }
];

export const PREMIUM_APPS: CatalogItem[] = [
  {
    id: 'app-capcut',
    title: 'CapCut Pro',
    category: 'editing',
    categoryLabel: 'Video Editing',
    rating: 99,
    plays: '850.4K',
    heatLevel: 3,
    iconBg: 'from-zinc-900 to-black',
    iconType: 'capcut',
    description: 'All-in-one professional video editor with AI auto-captions, 4K 60fps export, motion tracking, and zero watermarks.',
    perks: ['AI Body Effects & Velocity', 'Commercial Cloud Storage', 'No Ads & No Watermark', '4K 60FPS Ultra Export'],
    costCoins: 450,
    developer: 'ByteDance Ltd',
    badge: 'Pro Unlocked'
  },
  {
    id: 'app-netflix',
    title: 'Netflix Premium',
    category: 'streaming',
    categoryLabel: 'Streaming',
    rating: 98,
    plays: '1.4M',
    heatLevel: 3,
    iconBg: 'from-red-600 to-red-950',
    iconType: 'netflix',
    description: 'Watch unlimited movies, TV shows, award-winning originals in 4K HDR Dolby Atmos on up to 4 devices simultaneously.',
    perks: ['4K Ultra HD & Dolby Vision', 'Spatial Audio on All Tracks', 'Download on 6 Devices', 'Ad-Free Instant Streaming'],
    costCoins: 600,
    developer: 'Netflix Inc',
    badge: 'Ultra HD'
  },
  {
    id: 'app-spotify',
    title: 'Spotify Premium',
    category: 'streaming',
    categoryLabel: 'Music',
    rating: 97,
    plays: '980.2K',
    heatLevel: 3,
    iconBg: 'from-emerald-500 to-green-800',
    iconType: 'spotify',
    description: 'Stream 100M+ songs ad-free with unlimited skips, offline playlist listening, and lossless HiFi audio reproduction.',
    perks: ['Lossless 320kbps Audio', 'Offline Listening Mode', 'Unlimited Track Skips', 'Group Session Live Listening'],
    costCoins: 350,
    developer: 'Spotify AB',
    badge: 'HiFi Audio'
  },
  {
    id: 'app-youtube',
    title: 'YouTube Premium',
    category: 'streaming',
    categoryLabel: 'Streaming',
    rating: 96,
    plays: '1.1M',
    heatLevel: 3,
    iconBg: 'from-red-600 to-rose-700',
    iconType: 'youtube',
    description: 'Enjoy YouTube and YouTube Music ad-free, offline, and in the background even when your device screen is locked.',
    perks: ['Background Audio Playback', 'Picture-in-Picture (PiP)', 'Full YouTube Music Premium', 'Ad-Free 4K Streaming'],
    costCoins: 400,
    developer: 'Google LLC',
    badge: 'Ad-Free'
  },
  {
    id: 'app-disney',
    title: 'Disney+ Hotstar',
    category: 'streaming',
    categoryLabel: 'Movies',
    rating: 95,
    plays: '620.8K',
    heatLevel: 3,
    iconBg: 'from-blue-700 to-indigo-950',
    iconType: 'disney',
    description: 'Stream blockbusters from Disney, Pixar, Marvel, Star Wars, National Geographic, and live sports tournaments.',
    perks: ['IMAX Enhanced Aspect Ratio', 'Dolby Atmos Sound', 'Simultaneous Multi-Screen', 'Family Friendly Profiles'],
    costCoins: 420,
    developer: 'The Walt Disney Co',
    badge: 'IMAX Enhanced'
  },
  {
    id: 'app-canva',
    title: 'Canva Pro',
    category: 'editing',
    categoryLabel: 'Design',
    rating: 97,
    plays: '512.9K',
    heatLevel: 3,
    iconBg: 'from-cyan-500 to-indigo-600',
    iconType: 'canva',
    description: 'Create social posts, presentations, and brand kits with 100M+ premium stock photos, Magic Studio AI tools, and background remover.',
    perks: ['Magic Switch & Auto AI Resize', 'One-Click Background Remover', '100M+ Stock Media & Fonts', '1TB Cloud Team Assets'],
    costCoins: 380,
    developer: 'Canva Pty Ltd',
    badge: 'Magic Studio'
  }
];

export interface UserStats {
  currency: number;
  level: string;
  timeSpent: string;
  skills: string;
  gamesCount: number;
  username: string;
  handle: string;
  profileRank: string;
}

export const INITIAL_USER_STATS: UserStats = {
  currency: 1500,
  level: '1.500',
  timeSpent: '1h 23m',
  skills: '1.500',
  gamesCount: 28,
  username: 'GAMER_NZ',
  handle: '@littlebear0213',
  profileRank: 'Diamond Master'
};
