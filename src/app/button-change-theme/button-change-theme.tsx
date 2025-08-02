'use client';

import Image from 'next/image';
import changeThemeIcon from './changeTheme.svg';
import IconButtonWithTooltip from './IconButtonWithTooltip';
import { useColorScheme } from '@mui/material';

export const ButtonChangeTheme = () => {
  const { mode, setMode } = useColorScheme();

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
