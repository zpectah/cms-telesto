export type RoutesSlug = {
  name: string;
  slug: string | undefined;
};

export type Route = {
  name: string;
  path: string;
  routes?: {
    [key: string]: RoutesSlug;
  };
};

export interface Routes {
  [key: string]: Route;
}
