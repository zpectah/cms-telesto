import React, { ReactNode } from 'react';
import { Box } from '@mui/joy';
import { WithChildren } from '../../../types';

export interface ContentWithSidebarProps extends WithChildren {
  sidebar: ReactNode;
  width?: string;
}

const ContentWithSidebar = (props: ContentWithSidebarProps) => {
  const { children, sidebar, width = '250px' } = props;

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        gap: '1rem',
      }}
    >
      <Box sx={{ width: { xs: '100%', md: width } }}>{sidebar}</Box>
      <Box sx={{ flex: 1 }}>
        <div>{children}</div>
      </Box>
    </Box>
  );
};

export default ContentWithSidebar;
