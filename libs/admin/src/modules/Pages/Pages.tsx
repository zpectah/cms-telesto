import React from 'react';
import { PageLayout, ViewLayout } from '../../components';

const Pages = () => {
  return (
    <PageLayout>
      <ViewLayout breadcrumbs heading={{ title: 'Pages' }}>
        Pages module
      </ViewLayout>
    </PageLayout>
  );
};

export default Pages;
