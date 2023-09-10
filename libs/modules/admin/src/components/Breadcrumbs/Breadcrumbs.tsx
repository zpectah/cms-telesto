import React from 'react';
import { Breadcrumbs as MuiBreadcrumbs, Link } from '@mui/material';
import { BreadcrumbsProps } from './types';

const Breadcrumbs = (props: BreadcrumbsProps) => {
  return (
    <MuiBreadcrumbs>
      <Link>Link</Link>
      <Link>Link</Link>
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
