import React from 'react';
import { styled, Drawer } from '@mui/material';
import { ADMIN_CFG } from '../../config';
import { Container } from '../Container';
import { Footer } from '../Footer';
import { useLayoutContext } from '../../context';
import { ViewLayoutProps } from './types';

const StyledContent = styled('div', {
  shouldForwardProp: (prop) => prop !== 'open',
})<{
  open?: boolean;
}>(({ theme, open }) => ({
  width: '100%',
  marginLeft: 0,
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${ADMIN_CFG.STYLE.SIDEBAR_WIDTH_DESKTOP})`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: ADMIN_CFG.STYLE.SIDEBAR_WIDTH_DESKTOP,
  }),
}));

const ViewLayout = (props: ViewLayoutProps) => {
  const { children, sidebar, withoutFooter } = props;

  const { open, toggle } = useLayoutContext();

  return (
    <Container>
      <div>
        <Drawer
          open={open}
          variant="persistent"
          anchor="left"
          sx={{
            width: ADMIN_CFG.STYLE.SIDEBAR_WIDTH_DESKTOP,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: ADMIN_CFG.STYLE.SIDEBAR_WIDTH_DESKTOP,
              height: `calc(100% - ${ADMIN_CFG.STYLE.HEADER_HEIGHT_DESKTOP})`,
              boxSizing: 'border-box',
              top: ADMIN_CFG.STYLE.HEADER_HEIGHT_DESKTOP,
            },
          }}
        >
          Drawer ... {sidebar} ...
          <br />
          <button onClick={() => toggle()}>
            toggle {open ? 'open' : 'closed'}
          </button>
        </Drawer>
        <StyledContent open={open}>
          <div>
            {children}
            <button onClick={() => toggle()}>
              toggle {open ? 'open' : 'closed'}
            </button>
            <br />
          </div>
          {!withoutFooter && <Footer />}
        </StyledContent>
      </div>
    </Container>
  );
};

export default ViewLayout;
