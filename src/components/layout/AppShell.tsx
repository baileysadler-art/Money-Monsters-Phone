'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import PhoneFrame from './PhoneFrame';
import BottomTabBar from './BottomTabBar';
import PageTransition from './PageTransition';

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isLessonPage = pathname.startsWith('/lesson/');

  return (
    <PhoneFrame>
      <div className="relative h-full flex flex-col">
        <main className={`flex-1 overflow-y-auto overflow-x-hidden ${isLessonPage ? '' : 'pb-[68px]'}`}>
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        {!isLessonPage && <BottomTabBar />}
      </div>
    </PhoneFrame>
  );
}
