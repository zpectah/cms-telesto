import React from 'react';
import { Breadcrumbs as MuiBreadcrumbs, Link } from '@mui/material';
import { BreadcrumbsProps } from './types';

const Breadcrumbs = (props: BreadcrumbsProps) => {
  return (
    <MuiBreadcrumbs>
      <Link>CMS</Link>
      <Link>Language</Link>
      <Link>Section</Link>
      <Link>Page</Link>
      <Link>Detail:Tab:Panel</Link>
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
