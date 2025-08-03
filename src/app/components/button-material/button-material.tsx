'use client';

import React from 'react';
import { Button } from '@mui/material';

export function ButtonMaterial() {
  return (
    <Button
      sx={[
        (theme) => ({
          color: '#fff',
          backgroundColor: theme.palette.primary.main
        })
      ]}
    >
      Submit
    </Button>
  );
}
