import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { routes } from '../../config';
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
      label: routes.help.routes?.general.name,
      path: routes.help.path,
      disabled: false,
      selected: slug === undefined,
    },
    {
      id: 1,
      label: routes.help.routes?.content.name,
      path: `${routes.help.path}/${routes.help.routes?.content.slug}`,
      disabled: false,
      selected: slug === routes.help.routes?.content.slug,
    },
  ];

  const renderPanel = useMemo(() => {
    switch (slug) {
      case 'content':
        return <div>Content panel</div>;

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
