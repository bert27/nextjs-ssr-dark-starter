// client-providers.tsx
'use client';

import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material'; // not styles!
import { muiTheme } from './themes/muiTheme';
import './globals.css';

function ThemedApp({ children, themeMode }: { children: React.ReactNode; themeMode: 'light' | 'dark' }) {
  return (
    <MuiThemeProvider
      theme={muiTheme}
      defaultMode={themeMode} // ← Aquí está el cambio
      modeStorageKey="themeSaved"
    >
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

interface ClientProvidersProps {
  children: React.ReactNode;
  themeMode: 'light' | 'dark';
}

export default function ClientProviders({ children, themeMode }: ClientProvidersProps) {
  return <ThemedApp themeMode={themeMode}>{children}</ThemedApp>;
}
