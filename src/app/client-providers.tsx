'use client';

import React, { useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import { createMuiTheme } from './themes/muiTheme';
import './globals.css';
import { SsrColorSchemeProvider, IThemeMode, useSsrColorScheme } from './themes/theme-context';

interface ClientProvidersProps {
  children: React.ReactNode;
  themeMode: IThemeMode;
}
function InnerThemeProvider({ children, themeMode }: { children: React.ReactNode; themeMode: IThemeMode }) {
  const { mode } = useSsrColorScheme();
  const muiTheme = useMemo(() => createMuiTheme(mode), [mode]);
  return (
    <ThemeProvider theme={muiTheme} defaultMode={themeMode} modeStorageKey="themeSaved">
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
export default function ClientProviders({ children, themeMode }: ClientProvidersProps) {
  return (
    <SsrColorSchemeProvider initialMode={themeMode}>
      <InnerThemeProvider themeMode={themeMode}>{children}</InnerThemeProvider>
    </SsrColorSchemeProvider>
  );
}
