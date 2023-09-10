import React from 'react';
import { styled } from '@mui/material';
import { CONFIG } from '../../config';
import { WrapperProps } from './types';
import { Scrollable } from '@/ui';

const StyledWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'open',
})<{
  open?: boolean;
}>(({ theme, open }) => ({
  width: '100%',
  marginLeft: 0,
  height: `calc(100vh - ${CONFIG.STYLE.HEADER_HEIGHT_MOBILE})`,
  [theme.breakpoints.up('sm')]: {
    height: `calc(100vh - ${CONFIG.STYLE.HEADER_HEIGHT_DESKTOP})`,
  },
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: '100%',
    marginLeft: 0,
    height: `calc(100vh - ${CONFIG.STYLE.HEADER_HEIGHT_MOBILE})`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${CONFIG.STYLE.SIDEBAR_WIDTH_DESKTOP})`,
      marginLeft: CONFIG.STYLE.SIDEBAR_WIDTH_DESKTOP,
      height: `calc(100vh - ${CONFIG.STYLE.HEADER_HEIGHT_DESKTOP})`,
    },
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Wrapper = (props: WrapperProps) => {
  const { children, open } = props;

  return (
    <StyledWrapper open={open}>
      <Scrollable>{children}</Scrollable>
    </StyledWrapper>
  );
};

export default Wrapper;
