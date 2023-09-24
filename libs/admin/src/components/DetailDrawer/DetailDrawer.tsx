import React, { ReactNode } from 'react';
import { styled, Box, Drawer, IconButton, Typography } from '@mui/joy';
import { ArrowForwardIos } from '@mui/icons-material';
import { STYLES } from '../../constants';
import { WithChildren } from '../../types';

export interface DetailDrawerProps extends WithChildren {
  open: boolean;
  onClose: () => void;
  title: string;
  actions: ReactNode;
  headerSecondary?: ReactNode;
}

const DrawerWrapper = styled('div')({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
});
const DrawerHeader = styled('div')({
  width: '100%',
  height: STYLES.DRAWER.DETAIL.HEADER.HEIGHT,
  padding: '0 1rem',
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});
const DrawerFooter = styled('div')({
  width: '100%',
  height: STYLES.DRAWER.DETAIL.FOOTER.HEIGHT,
  padding: '0 1rem',
  position: 'absolute',
  bottom: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '.5rem',
});
const DrawerContent = styled('div')({
  width: '100%',
  height: `calc(100% - (${STYLES.DRAWER.DETAIL.HEADER.HEIGHT} + ${STYLES.DRAWER.DETAIL.FOOTER.HEIGHT}))`,
  position: 'absolute',
  top: STYLES.HEADER.HEIGHT,
  left: 0,
  overflow: 'hidden',
});
const DrawerScrollable = styled('div')({
  width: 'calc(100% + 30px)',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  overflowY: 'auto',
});
const DrawerContentOuter = styled('div')({
  width: 'calc(100% - 30px)',
  height: 'auto',
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
});
const DrawerContentInner = styled('div')({
  padding: '1rem',
});

const DetailDrawer = (props: DetailDrawerProps) => {
  const { children, open, onClose, title, actions, headerSecondary } = props;

  return (
    <Drawer open={open} onClose={onClose} anchor="right" size="lg">
      <DrawerWrapper>
        <DrawerHeader>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <IconButton variant="plain" onClick={onClose}>
              <ArrowForwardIos />
            </IconButton>
            <Typography level="h3">{title}</Typography>
          </Box>
          {headerSecondary && <Box>{headerSecondary}</Box>}
        </DrawerHeader>
        <DrawerContent>
          <DrawerScrollable>
            <DrawerContentOuter>
              <DrawerContentInner>{children}</DrawerContentInner>
            </DrawerContentOuter>
          </DrawerScrollable>
        </DrawerContent>
        {actions && <DrawerFooter>{actions}</DrawerFooter>}
      </DrawerWrapper>
    </Drawer>
  );
};

export default DetailDrawer;
