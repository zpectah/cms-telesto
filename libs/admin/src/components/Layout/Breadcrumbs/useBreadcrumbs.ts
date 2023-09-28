import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { routes } from '../../../config';
import { Route } from '../../../types';

export const useBreadcrumbs = () => {
  const [route, setRoute] = useState<Route | null>(null);

  const { pathname, query } = useRouter();
  const { slug, id } = query;

  const pageName = useMemo(() => {
    let page;
    const keys = Object.keys(routes);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const item = routes[key];
      const match = pathname.match(item.path);
      if (match) {
        page = item.name;
        setRoute(item);
      }
    }

    return page;
  }, [pathname]);

  const slugName = useMemo(() => {
    let slugName;
    const condition =
      (route && slug) ||
      (slug === undefined &&
        (!!pathname.match(routes.help.path) ||
          !!pathname.match(routes.profile.path) ||
          !!pathname.match(routes.settings.path)));
    if (condition) {
      const ownRoute = route?.routes;
      const keys = ownRoute && Object.keys(ownRoute);
      if (keys) {
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          const item = ownRoute[key];
          const match = slug === item.slug;
          if (match) {
            slugName = item.name;
          }
        }
      }
    }

    return slugName;
  }, [route, slug, pathname]);

  return {
    route,
    pathname,
    pageName,
    slugName,
    slug,
    id,
  };
};
