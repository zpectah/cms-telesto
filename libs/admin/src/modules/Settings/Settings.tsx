import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import {
  PageLayout,
  ViewLayout,
  VerticalMenu,
  ContentWithSidebar,
} from '../../components';

const Settings = () => {
  const router = useRouter();
  const { slug } = router.query;

  const menuItems = [
    {
      id: 0,
      label: 'General',
      path: '/settings',
      disabled: false,
      selected: slug === undefined,
    },
    {
      id: 1,
      label: 'Client',
      path: '/settings/client',
      disabled: false,
      selected: slug === 'client',
    },
    {
      id: 2,
      label: 'Content',
      path: '/settings/content',
      disabled: false,
      selected: slug === 'content',
    },
    {
      id: 3,
      label: 'Locales',
      path: '/settings/locales',
      disabled: false,
      selected: slug === 'locales',
    },
    {
      id: 4,
      label: 'Maintenance',
      path: '/settings/maintenance',
      disabled: false,
      selected: slug === 'maintenance',
    },
    {
      id: 5,
      label: 'Blacklist',
      path: '/settings/blacklist',
      disabled: false,
      selected: slug === 'blacklist',
    },
  ];

  const renderPanel = useMemo(() => {
    switch (slug) {
      case 'client':
        return <div>Client panel</div>;

      case 'content':
        return <div>Content panel</div>;

      case 'locales':
        return <div>Locales panel</div>;

      case 'maintenance':
        return <div>Maintenance panel</div>;

      case 'blacklist':
        return <div>Blacklist panel</div>;

      case undefined:
        return <div>General panel</div>;

      default:
        return <div>Error view</div>;
    }
  }, [slug]);

  return (
    <PageLayout>
      <ViewLayout breadcrumbs heading={{ title: 'Settings' }}>
        <ContentWithSidebar sidebar={<VerticalMenu items={menuItems} />}>
          {renderPanel}
        </ContentWithSidebar>
      </ViewLayout>
    </PageLayout>
  );
};

export default Settings;
