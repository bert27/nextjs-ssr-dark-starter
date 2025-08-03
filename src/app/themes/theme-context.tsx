'use client';

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

export type IThemeMode = 'light' | 'dark';

interface SsrColorSchemeContextType {
  mode: IThemeMode;
  setMode: (mode: IThemeMode) => void;
}

const SsrColorSchemeContext = createContext<SsrColorSchemeContextType>({
  mode: 'dark',
  setMode: () => {}
});

interface SsrColorSchemeProviderProps {
  children: ReactNode;
  initialMode: IThemeMode;
}

export function SsrColorSchemeProvider({ children, initialMode }: SsrColorSchemeProviderProps) {
  const [mode, setModeState] = useState<IThemeMode>(initialMode);
  const setMode = useCallback((newMode: IThemeMode) => {
    setModeState(newMode);
    // SSR-safe persistence
    document.cookie = `themeSaved=${newMode}; path=/; max-age=31536000; SameSite=Lax`;
    document.documentElement.setAttribute('data-mui-color-scheme', newMode);

    if (typeof window !== 'undefined') {
      localStorage.setItem('themeSaved', newMode);
    }
  }, []);

  return (
    <SsrColorSchemeContext.Provider value={{ mode, setMode }}>{children}</SsrColorSchemeContext.Provider>
  );
}

export function useSsrColorScheme(): SsrColorSchemeContextType {
  return useContext(SsrColorSchemeContext);
}
