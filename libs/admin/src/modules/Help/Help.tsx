import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import {
  PageLayout,
  ViewLayout,
  VerticalMenu,
  ContentWithSidebar,
} from '../../components';

const Help = () => {
  const router = useRouter();
  const { slug } = router.query;

  const menuItems = [
    {
      id: 0,
      label: 'General',
      path: '/help',
      disabled: false,
      selected: slug === undefined,
    },
    {
      id: 1,
      label: 'History',
      path: '/help/history',
      disabled: false,
      selected: slug === 'history',
    },
  ];

  const renderPanel = useMemo(() => {
    switch (slug) {
      case 'history':
        return <div>Blacklist panel</div>;

      case undefined:
        return <div>General panel</div>;

      default:
        return <div>Error view</div>;
    }
  }, [slug]);

  return (
    <PageLayout>
      <ViewLayout breadcrumbs heading={{ title: 'Help' }}>
        <ContentWithSidebar sidebar={<VerticalMenu items={menuItems} />}>
          {renderPanel}
        </ContentWithSidebar>
      </ViewLayout>
    </PageLayout>
  );
};

export default Help;
