import React from 'react';

interface KgLogoProps {
  variant?: 'header' | 'full' | 'inverse';
  className?: string;
}

export function KgMonogram({
  inverse = false,
  className = 'h-9 w-auto',
}: {
  inverse?: boolean;
  className?: string;
}) {
  const mainFill = inverse ? '#FFFFFF' : '#0A1E3C';
  const boltFill = '#0B5CFF';

  return (
    <svg
      viewBox="0 0 184 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* K vertical upper stem (sliced cleanly above lightning bolt) */}
      <path d="M10 8H30V53L10 67V8Z" fill={mainFill} />
      {/* K upper diagonal arm */}
      <path d="M33 44L56 8H77L47 50L33 44Z" fill={mainFill} />
      {/* K lower diagonal leg (starts right of bolt gap) */}
      <path d="M43 52L55 43L79 94H57L38 56L43 52Z" fill={mainFill} />
      {/* Electric Blue Lightning Bolt slicing K */}
      <path
        d="M36 22L10 69H27L16 98L50 53H32L36 22Z"
        fill={boltFill}
      />

      {/* G bold geometric arc */}
      <path
        d="M148 31C141.5 22.8 131.5 18 120.5 18C101 18 86 32.5 86 51C86 69.5 101 84 120.5 84C135.5 84 147.8 75.5 152.2 63H120V46H168.5C169 47.8 169.2 49.6 169.2 51.5C169.2 79 148 99 120.5 99C92.5 99 70 77.8 70 51C70 24.2 92.5 3 120.5 3C137.5 3 152.5 10.5 161.5 22L148 31Z"
        fill={mainFill}
      />

      {/* Circuit board traces extending from G crossbar */}
      {/* Base stem from G center bar */}
      <rect x="118" y="45" width="38" height="10" rx="2" fill={mainFill} />

      {/* Top circuit trace */}
      <path
        d="M150 47H159L165 40H174"
        stroke={mainFill}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="177.5"
        cy="40"
        r="3.5"
        stroke={mainFill}
        strokeWidth="2.8"
        fill={inverse ? '#0A1E3C' : '#FFFFFF'}
      />

      {/* Middle circuit trace */}
      <path
        d="M152 50H175"
        stroke={mainFill}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <circle
        cx="179"
        cy="50"
        r="3.5"
        stroke={mainFill}
        strokeWidth="2.8"
        fill={inverse ? '#0A1E3C' : '#FFFFFF'}
      />

      {/* Bottom circuit trace */}
      <path
        d="M150 53H159L165 60H174"
        stroke={mainFill}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="177.5"
        cy="60"
        r="3.5"
        stroke={mainFill}
        strokeWidth="2.8"
        fill={inverse ? '#0A1E3C' : '#FFFFFF'}
      />
    </svg>
  );
}

export function KgLogo({ variant = 'header', className = '' }: KgLogoProps) {
  if (variant === 'header') {
    return (
      <span className={`inline-flex items-center gap-2 whitespace-nowrap shrink-0 ${className}`}>
        <KgMonogram className="h-7 sm:h-8 w-auto shrink-0" />
        <span className="font-display text-[15px] sm:text-[17px] font-extrabold tracking-[0.14em] text-[#0A1E3C]">
          SERVICES
        </span>
      </span>
    );
  }

  const inverse = variant === 'inverse';

  return (
    <div className={`inline-flex flex-col items-start ${className}`}>
      <KgMonogram inverse={inverse} className="h-14 sm:h-16 w-auto" />
      <span
        className={`mt-1.5 font-display text-sm sm:text-base font-bold tracking-[0.42em] uppercase ${
          inverse ? 'text-white' : 'text-[#0A1E3C]'
        }`}
      >
        SERVICES
      </span>
      <div className="mt-2.5 flex w-full max-w-[190px] items-center">
        <span className={`h-[1.5px] flex-1 ${inverse ? 'bg-white/25' : 'bg-[#0A1E3C]/20'}`} />
        <span className="h-[2.5px] w-10 bg-[#0B5CFF]" />
        <span className={`h-[1.5px] flex-1 ${inverse ? 'bg-white/25' : 'bg-[#0A1E3C]/20'}`} />
      </div>
    </div>
  );
}
