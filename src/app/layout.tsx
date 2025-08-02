import { ReactNode } from 'react';
import { cookies } from 'next/headers';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { InitColorSchemeScript } from '@mui/material';
import ClientProviders from './client-providers';

export default async function RootLayout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies();
  const themeDefault: 'light' | 'dark' = 'dark';
  const cookieValue = cookieStore.get('themeSaved')?.value;
  const ALLOWED_MODES = ['light', 'dark'] as const;
  type ThemeMode = (typeof ALLOWED_MODES)[number];

  const themeMode: ThemeMode = ALLOWED_MODES.includes(cookieValue as ThemeMode)
    ? (cookieValue as ThemeMode)
    : themeDefault;
  return (
    <html lang="es" data-mui-color-scheme={themeMode} suppressHydrationWarning>
      <body>
        <InitColorSchemeScript defaultMode={themeMode} modeStorageKey="themeSaved" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ClientProviders themeMode={themeMode}>{children}</ClientProviders>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
