import React from 'react';
import { styled } from '@mui/material';
import { ADMIN_CFG } from '../../config';
import { Container } from '../Container';
import { Footer } from '../Footer';
import { Sidebar } from '../Sidebar';
import { useLayoutContext } from '../../context';
import { ViewLayoutProps } from './types';

const StyledContent = styled('div', {
  shouldForwardProp: (prop) => prop !== 'open',
})<{
  open?: boolean;
}>(({ theme, open }) => ({
  width: '100%',
  marginLeft: 0,
  //
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: '100%',
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${ADMIN_CFG.STYLE.SIDEBAR_WIDTH_DESKTOP})`,
      marginLeft: ADMIN_CFG.STYLE.SIDEBAR_WIDTH_DESKTOP,
    },
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const ViewLayout = (props: ViewLayoutProps) => {
  const { children, sidebar, withoutFooter, withoutSidebar } = props;

  const { open, toggle } = useLayoutContext();

  return (
    <Container>
      {!withoutSidebar && (
        <Sidebar open={open}>
          <div>
            {sidebar}
            sidebar content
            <div>
              <button onClick={() => toggle()}>
                toggle {open ? 'open' : 'closed'}
              </button>
            </div>
          </div>
        </Sidebar>
      )}
      <StyledContent open={open} sx={{}}>
        <div>
          {children}
          <button onClick={() => toggle()}>
            toggle {open ? 'open' : 'closed'}
          </button>
          <br />
        </div>
        {!withoutFooter && <Footer />}
      </StyledContent>
    </Container>
  );
};

export default ViewLayout;
