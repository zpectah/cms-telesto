import React from 'react';
import { PageLayout, ViewLayout } from '../../components';

const Messages = () => {
  return (
    <PageLayout>
      <ViewLayout breadcrumbs heading={{ title: 'Messages' }}>
        Messages module
      </ViewLayout>
    </PageLayout>
  );
};

export default Messages;
