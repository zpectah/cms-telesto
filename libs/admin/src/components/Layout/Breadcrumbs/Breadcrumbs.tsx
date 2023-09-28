import React, { useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { Breadcrumbs as MuiBreadcrumbs, Typography } from '@mui/joy';
import { useTranslation } from 'next-i18next';
import CFG from '../../../../../../telesto.config';
import { routes } from '../../../config';

const Breadcrumbs = () => {
  const { i18n } = useTranslation();
  const { pathname, query } = useRouter();
  const { slug, id } = query;

  const page = useMemo(() => {
    let page;
    const keys = Object.keys(routes);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const item = routes[key];
      const match = pathname.match(item.path);
      if (match) {
        page = item.name;
      }
    }

    return page;
  }, [pathname]);

  useEffect(() => {
    console.log('query', query);
  }, [query]);

  return (
    <MuiBreadcrumbs
      aria-label="breadcrumbs"
      size="sm"
      sx={{ paddingLeft: 0, paddingRight: 0 }}
    >
      <Typography>{CFG.meta.name}</Typography>
      <Typography>{i18n.language}</Typography>
      {page && <Typography>{page}</Typography>}
      {id && <Typography>#{id}</Typography>}
      {slug && <Typography>{slug}</Typography>}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
