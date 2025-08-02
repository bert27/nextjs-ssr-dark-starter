import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';

interface IconButtonWithTooltipProps {
  onClick: () => void;
  tooltip: string;
  icon: React.ReactElement;
}

const IconButtonWithTooltip: React.FC<IconButtonWithTooltipProps> = ({ onClick, tooltip, icon }) => {
  return (
    <Box>
      <Tooltip title={tooltip}>
        <IconButton onClick={onClick} style={{ filter: 'drop-shadow(0 0 1px black)' }}>
          {icon}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default IconButtonWithTooltip;
