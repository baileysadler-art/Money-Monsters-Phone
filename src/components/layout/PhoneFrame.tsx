'use client';

import { ReactNode } from 'react';

export default function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full h-[100dvh] max-w-[430px] mx-auto bg-surface-dim overflow-hidden
      sm:w-[390px] sm:h-[844px] sm:rounded-[3rem] sm:border-[8px] sm:border-gray-800 sm:shadow-2xl sm:my-4">
      {/* Notch on desktop */}
      <div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-gray-800 rounded-b-2xl z-50" />
      <div className="relative w-full h-full overflow-hidden">
        {children}
      </div>
    </div>
  );
}
