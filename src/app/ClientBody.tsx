'use client';

import type { ReactNode } from 'react';

export default function ClientBody({ children }: { children: ReactNode }) {
  return (
    <body
      suppressHydrationWarning
      className="antialiased font-mulish bg-background text-foreground overflow-x-hidden scroll-smooth transition-colors duration-300"
      style={{ scrollBehavior: 'smooth' }}
    >
      {children}
    </body>
  );
}
