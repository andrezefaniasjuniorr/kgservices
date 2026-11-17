import React, { useState } from 'react';

interface CeoPortraitProps {
  variant?: 'hero' | 'about';
  className?: string;
}

export function CeoPortrait({ variant = 'hero', className = '' }: CeoPortraitProps) {
  const [imgError, setImgError] = useState(false);
  const bgBlend = '#FFFFFF';

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[#0A1E3C] shadow-[0_16px_40px_rgba(10,30,60,0.12)] ${
        variant === 'hero'
          ? 'aspect-[340/470] w-full max-w-[210px] sm:max-w-[290px] lg:max-w-[350px]'
          : 'aspect-[340/420] w-full max-w-[160px] sm:max-w-[215px]'
      } ${className}`}
    >
      {!imgError ? (
        <img
          src="/assets/kelven-hero.jpeg"
          alt="Kelven Garrine — Técnico Eletricista • CEO da KG Services"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="h-full w-full object-cover object-top select-none"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center bg-[#0A1E3C] p-6 text-center text-white">
          <span className="font-display text-xl font-bold tracking-tight">KELVEN GARRINE</span>
          <span className="mt-1 text-xs font-medium tracking-wider text-white/80">
            TÉCNICO ELETRICISTA • CEO
          </span>
        </div>
      )}

      {/* Signature diagonal navy & electric-blue frame matching reference Image 1 */}
      <svg
        viewBox="0 0 340 470"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {/* Top-left electric blue edge + navy diagonal cut */}
        <polygon points="0,0 176,0 0,148" fill="#0B5CFF" />
        <polygon points="0,0 164,0 0,136" fill="#0A1E3C" />
        <line x1="0" y1="136" x2="164" y2="0" stroke="#FFFFFF" strokeWidth="3.5" />

        {/* Right curved sweep separating portrait into clean canvas */}
        <path
          d="M 294 0 Q 346 215 306 470 L 340 470 L 340 0 Z"
          fill={bgBlend}
        />
        <path
          d="M 294 0 Q 346 215 306 470"
          fill="none"
          stroke="#0B5CFF"
          strokeWidth="6.5"
        />

        {/* Bottom-left diagonal navy & electric blue architectural cut */}
        <polygon points="0,392 142,470 0,470" fill="#0B5CFF" />
        <polygon points="0,404 128,470 0,470" fill="#0A1E3C" />
      </svg>
    </div>
  );
}
