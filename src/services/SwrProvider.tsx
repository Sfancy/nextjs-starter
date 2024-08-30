'use client';

import { SWRConfig } from 'swr';
import fetcher from './fetcher';

export function SWRProvider({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateIfStale: false,
        revalidateOnFocus: false,
        // revalidateOnMount: false,
      }}
    >
      {children}
    </SWRConfig>
  );
}
