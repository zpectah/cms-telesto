import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { routes } from '../../config';
import {
  PageLayout,
  ViewLayout,
  VerticalMenu,
  ContentWithSidebar,
} from '../../components';

const Profile = () => {
  const router = useRouter();
  const { slug } = router.query;

  const menuItems = [
    {
      id: 0,
      label: routes.profile.routes?.general.name,
      path: routes.profile.path,
      disabled: false,
      selected: slug === undefined,
    },
    {
      id: 1,
      label: routes.profile.routes?.history.name,
      path: `${routes.profile.path}/${routes.profile.routes?.history.slug}`,
      disabled: false,
      selected: slug === routes.profile.routes?.history.slug,
    },
  ];

  const renderPanel = useMemo(() => {
    switch (slug) {
      case 'history':
        return <div>History panel</div>;

      case undefined:
        return <div>General panel</div>;

      default:
        return <div>Error view</div>;
    }
  }, [slug]);

  return (
    <PageLayout>
      <ViewLayout breadcrumbs heading={{ title: 'Profile' }}>
        <ContentWithSidebar sidebar={<VerticalMenu items={menuItems} />}>
          {renderPanel}
        </ContentWithSidebar>
      </ViewLayout>
    </PageLayout>
  );
};

export default Profile;
