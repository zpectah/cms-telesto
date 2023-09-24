import React from 'react';
import Link from 'next/link';
import { Button } from '@mui/joy';
import CFG from '../../../../../../telesto.config';
import { routes } from '../../../config';

const HeaderLogo = () => {
  return (
    <Button
      variant="soft"
      color="neutral"
      size="lg"
      component={Link}
      href={routes.index.path}
      sx={{ fontWeight: 900 }}
    >
      {CFG.meta.name}
    </Button>
  );
};

export default HeaderLogo;
