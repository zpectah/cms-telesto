import React from 'react';
import { PageLayout, ViewLayout } from '../../components';

const Users = () => {
  return (
    <PageLayout>
      <ViewLayout breadcrumbs heading={{ title: 'Users' }}>
        Users module
      </ViewLayout>
    </PageLayout>
  );
};

export default Users;
