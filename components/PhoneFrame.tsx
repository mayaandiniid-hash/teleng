'use client';

import React from 'react';
import { Wifi, BatteryMedium, Signal } from 'lucide-react';

interface PhoneFrameProps {
  children: React.ReactNode;
  darkStatusBar?: boolean;
  className?: string;
  id?: string;
}

export function PhoneFrame({ children, darkStatusBar = false, className = '', id }: PhoneFrameProps) {
  return (
    <div
      id={id}
      className={`relative w-full max-w-[360px] sm:max-w-[375px] h-[780px] bg-[#F4F6FB] rounded-[44px] p-2.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18),0_0_0_1px_rgba(0,0,0,0.06),0_0_0_8px_#FFFFFF] border border-slate-200/80 overflow-hidden flex flex-col select-none transition-transform duration-300 hover:-translate-y-1 ${className}`}
    >
      {/* Phone Speaker Notch Pill */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-50 pointer-events-none flex items-center justify-center">
        <div className="w-24 h-4 bg-slate-950/20 backdrop-blur-md rounded-full flex items-center justify-center gap-1.5 px-2">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-900/60" />
          <div className="w-8 h-1 rounded-full bg-slate-900/40" />
        </div>
      </div>

      {/* Screen Inner Container */}
      <div className="relative w-full h-full bg-[#F4F6FB] rounded-[38px] overflow-hidden flex flex-col shadow-inner">
        {/* iOS Status Bar */}
        <div
          className={`h-11 px-7 flex items-center justify-between text-xs font-semibold z-40 shrink-0 select-none ${
            darkStatusBar ? 'text-white' : 'text-slate-900'
          }`}
        >
          <span className="tracking-tight text-[13px] font-bold">9:41</span>
          <div className="flex items-center gap-2">
            <Signal className="w-3.5 h-3.5 stroke-[2.5]" />
            <Wifi className="w-3.5 h-3.5 stroke-[2.5]" />
            <div className="flex items-center">
              <div
                className={`w-5 h-2.5 rounded-sm border ${
                  darkStatusBar ? 'border-white' : 'border-slate-800'
                } p-0.5 flex items-center`}
              >
                <div
                  className={`w-3.5 h-1.5 rounded-[1px] ${
                    darkStatusBar ? 'bg-white' : 'bg-slate-900'
                  }`}
                />
              </div>
              <div
                className={`w-0.5 h-1 rounded-r-xs ${
                  darkStatusBar ? 'bg-white' : 'bg-slate-800'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Scrollable / Interactive Content Area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden relative flex flex-col no-scrollbar">
          {children}
        </div>

        {/* iOS Home Indicator Bar */}
        <div className="h-6 w-full flex items-center justify-center shrink-0 z-40 bg-white/70 backdrop-blur-md">
          <div className="w-32 h-1 bg-slate-900/80 rounded-full" />
        </div>
      </div>
    </div>
  );
}
