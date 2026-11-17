import React from 'react';

export function ElectricalInstallIcon({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 2L4.5 13.5H11.2L9.8 22L19.5 10.2H12.7L13.5 2Z" />
    </svg>
  );
}

export function ElectricalProjectIcon({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.85"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Blueprint document */}
      <path d="M6 3.5H14L17.5 7V19.5C17.5 20.05 17.05 20.5 16.5 20.5H6C5.45 20.5 5 20.05 5 19.5V4.5C5 3.95 5.45 3.5 6 3.5Z" />
      <rect x="7.5" y="7" width="3.5" height="3.2" rx="0.4" />
      <path d="M12.5 8H15" />
      <path d="M7.5 13H12.5" />
      <path d="M7.5 16H11" />
      {/* Drafting set square triangle at bottom right */}
      <path d="M13 20.5L20.5 13V20.5H13Z" fill="currentColor" fillOpacity="0.2" />
      <path d="M13 20.5L20.5 13V20.5H13Z" />
    </svg>
  );
}

export function MaintenanceIcon({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Crossed wrench & screwdriver */}
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      <path d="M4.5 4.5L9.5 9.5" />
      <path d="M15 15L19.5 19.5" />
      <path d="M3.5 5.5L5.5 3.5" />
    </svg>
  );
}

export function AdminPresentationIcon({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.5 3H14.5L18.5 7V20C18.5 20.55 18.05 21 17.5 21H6.5C5.95 21 5.5 20.55 5.5 20V4C5.5 3.45 5.95 3 6.5 3Z" />
      <path d="M14.5 3V7H18.5" />
      <rect x="8" y="8.5" width="3.5" height="3.2" rx="0.5" />
      <path d="M8 14.5H16" />
      <path d="M8 17.5H14" />
    </svg>
  );
}

export function PhoneIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
    </svg>
  );
}

export function LocationPinIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
    </svg>
  );
}

export function InstagramIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function FacebookIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.79 14.12c-.24.68-1.41 1.3-1.95 1.38-.5.07-1.13.1-1.82-.12-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.18-4.94-4.37-.14-.2-1.18-1.57-1.18-2.99 0-1.42.74-2.12 1.01-2.41.26-.29.58-.36.77-.36.19 0 .39.01.56.01.18 0 .42-.07.66.5.24.58.83 2.02.9 2.17.07.14.12.31.02.51-.1.2-.14.31-.29.48-.14.17-.31.38-.44.51-.14.14-.3.3-.13.59.17.29.76 1.25 1.63 2.02 1.12 1 2.07 1.31 2.36 1.46.29.14.46.12.63-.07.17-.2.72-.84.91-1.13.2-.29.39-.24.65-.14.27.1 1.69.8 1.98.94.29.14.48.22.55.34.07.12.07.69-.17 1.37z" />
    </svg>
  );
}
