import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { routes } from '../../../config';

export const useBreadcrumbs = () => {
  const { pathname, query } = useRouter();
  const { slug, id } = query;

  const [route, setRoute] = useState<{
    name: string;
    path: string;
    routes?: {
      [key: string]: {
        name: string;
        slug: string | null;
      };
    };
  } | null>(null);

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
    if (slug && route) {
      const r = route.routes;
      const keys = r && Object.keys(r);
      if (keys) {
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          const item = r[key];
          const match = slug === item.slug;
          if (match) {
            slugName = item.name;
          }
        }
      }
    }

    return slugName;
  }, [slug, route]);

  return {
    route,
    pathname,
    pageName,
    slugName,
    slug,
    id,
  };
};
