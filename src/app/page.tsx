import Image from 'next/image';
import { ButtonChangeTheme } from './components/button-change-theme/button-change-theme';
import { ButtonMaterial } from './components/button-material/button-material';

const navLinks = {
  repo: {
    url: 'https://github.com/bert27/nextjs-ssr-dark-starter',
    label: 'View repository',
    className: 'demo-theme-bg'
  },
  guide: {
    url: 'https://mui.com/material-ui/customization/dark-mode/#dark-mode-with-next-js-app-router',
    label: 'MUI SSR Theme Guide',
    className: 'demo-theme-bg'
  },
  demo: {
    url: 'https://demo-theme-ssr.vercel.app',
    label: 'View SSR demo',
    className: 'footer-btn-primary'
  },
  learn: {
    url: 'https://nextjs.org/learn/foundations/how-nextjs-works/rendering',
    label: 'What is SSR?',
    className: 'footer-btn-secondary'
  }
};

export default function Home() {
  return (
    <div className="min-h-screen font-sans flex flex-col">
      <main className="flex flex-1 flex-col items-center justify-center gap-10 sm:gap-16 py-10">
        <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start">
          <div className="flex flex-col gap-8 items-center">
            <Image
              className="icon-themed"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
              style={{ height: 'auto', width: 'auto' }}
            />
            <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
              <li className="mb-2 tracking-[-.01em]">This is an SSR example with dynamic theme switching.</li>
              <li className="tracking-[-.01em]">
                Try toggling the theme and see server-rendered changes instantly.
              </li>
            </ol>

            <div className="flex flex-wrap gap-4 justify-center">
              {Object.entries(navLinks).map(([key, { url, label, className }]) => (
                <a
                  key={key}
                  className={[
                    'rounded-full border border-solid flex items-center justify-center font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 transition-colors',
                    className
                  ].join(' ')}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                </a>
              ))}
            </div>
            <ButtonChangeTheme />
            <ButtonMaterial />
          </div>
        </div>
      </main>
    </div>
  );
}
