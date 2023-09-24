import React from 'react';
import Link from 'next/link';
import {
  Breadcrumbs as MuiBreadcrumbs,
  Link as MuiLink,
  Typography,
} from '@mui/joy';
import CFG from '../../../../../../telesto.config';

const Breadcrumbs = () => {
  return (
    <MuiBreadcrumbs
      aria-label="breadcrumbs"
      size="sm"
      sx={{ paddingLeft: 0, paddingRight: 0 }}
    >
      <Typography>{CFG.meta.name}</Typography>
      <Typography>cs-CZ</Typography>
      <MuiLink component={Link} href="/" color="neutral">
        Current page
      </MuiLink>
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
