'use client';

import React from 'react';

const colors = {
  primary: '#22C55E',
  secondary: '#0D1B2A',
  error: '#EF4444',
  border: '#D1D5DB',
  hint: '#9CA3AF',
};

const Header: React.FC = () => {
  return (
    <header
      className="sticky top-0 z-40 w-full border-b bg-white"
      style={{ borderBottomColor: colors.border }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div
            className="h-8 w-8 rounded-md flex items-center justify-center font-bold text-white"
            style={{ backgroundColor: colors.primary }}
          >
            B
          </div>
          <span className="text-xl font-bold tracking-tight" style={{ color: colors.secondary }}>
            BatteryWeb
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {['Products', 'Solutions', 'Support', 'About'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: colors.secondary }}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
