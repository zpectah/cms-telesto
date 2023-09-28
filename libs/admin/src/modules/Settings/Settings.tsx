import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { routes } from '../../config';
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
      label: routes.settings.routes?.general.name,
      path: routes.settings.path,
      disabled: false,
      selected: slug === undefined,
    },
    {
      id: 1,
      label: routes.settings.routes?.client.name,
      path: `${routes.settings.path}/${routes.settings.routes?.client.slug}`,
      disabled: false,
      selected: slug === routes.settings.routes?.client.slug,
    },
    {
      id: 2,
      label: routes.settings.routes?.content.name,
      path: `${routes.settings.path}/${routes.settings.routes?.content.slug}`,
      disabled: false,
      selected: slug === routes.settings.routes?.content.slug,
    },
    {
      id: 3,
      label: routes.settings.routes?.locales.name,
      path: `${routes.settings.path}/${routes.settings.routes?.locales.slug}`,
      disabled: false,
      selected: slug === routes.settings.routes?.locales.slug,
    },
    {
      id: 4,
      label: routes.settings.routes?.maintenance.name,
      path: `${routes.settings.path}/${routes.settings.routes?.maintenance.slug}`,
      disabled: false,
      selected: slug === routes.settings.routes?.maintenance.slug,
    },
    {
      id: 5,
      label: routes.settings.routes?.blacklist.name,
      path: `${routes.settings.path}/${routes.settings.routes?.blacklist.slug}`,
      disabled: false,
      selected: slug === routes.settings.routes?.blacklist.slug,
    },
  ];

  const renderPanel = useMemo(() => {
    switch (slug) {
      case routes.settings.routes?.client.slug:
        return <div>Client panel</div>;

      case routes.settings.routes?.content.slug:
        return <div>Content panel</div>;

      case routes.settings.routes?.locales.slug:
        return <div>Locales panel</div>;

      case routes.settings.routes?.maintenance.slug:
        return <div>Maintenance panel</div>;

      case routes.settings.routes?.blacklist.slug:
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
