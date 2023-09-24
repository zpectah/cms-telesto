import React from 'react';
import { PageLayout, ViewLayout } from '../../components';

const Menu = () => {
  return (
    <PageLayout>
      <ViewLayout breadcrumbs heading={{ title: 'Menu' }}>
        Menu module
      </ViewLayout>
    </PageLayout>
  );
};

export default Menu;
