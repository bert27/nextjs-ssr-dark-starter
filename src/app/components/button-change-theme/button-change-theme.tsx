'use client';

import Image from 'next/image';
import changeThemeIcon from './changeTheme.svg';
import IconButtonWithTooltip from './IconButtonWithTooltip';
import { useSsrColorScheme } from '@/app/themes/theme-context';

export const ButtonChangeTheme = () => {
  const { mode, setMode } = useSsrColorScheme();

  const handleChangeTheme = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <IconButtonWithTooltip
      tooltip="Change theme"
      onClick={handleChangeTheme}
      icon={
        <Image
          priority
          src={changeThemeIcon}
          alt="Change theme icon"
          width={20}
          height={20}
          style={{ cursor: 'pointer' }}
        />
      }
    />
  );
};
