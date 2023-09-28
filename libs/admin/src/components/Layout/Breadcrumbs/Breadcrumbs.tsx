import React from 'react';
import { Breadcrumbs as MuiBreadcrumbs, Typography } from '@mui/joy';
import { useTranslation } from 'next-i18next';
import CFG from '../../../../../../telesto.config';
import { useBreadcrumbs } from './useBreadcrumbs';

const Breadcrumbs = () => {
  const { i18n } = useTranslation();
  const { pageName, slugName, id } = useBreadcrumbs();

  return (
    <MuiBreadcrumbs
      aria-label="breadcrumbs"
      size="sm"
      sx={{
        paddingLeft: 0,
        paddingRight: 0,
        display: { xs: 'none', md: 'block' },
      }}
    >
      <Typography sx={{ fontWeight: 800 }}>{CFG.meta.name}</Typography>
      <Typography>{i18n.language}</Typography>
      {pageName && <Typography>{pageName}</Typography>}
      {id && <Typography>#{id}</Typography>}
      {slugName && <Typography>{slugName}</Typography>}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
