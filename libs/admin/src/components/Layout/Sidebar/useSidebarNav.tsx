import { useRouter } from 'next/router';
import { routes } from '../../../config';
import { SidebarNavItemProps } from './types';

export const useSidebarNav = () => {
  const { pathname } = useRouter();

  const primary: SidebarNavItemProps[] = [
    {
      id: 0,
      label: routes.index.name,
      path: routes.index.path,
      icon: null,
      selected: pathname === routes.index.path,
    },
    {
      id: 1,
      label: routes.pages.name,
      path: routes.pages.path,
      icon: null,
      selected: !!pathname.match(routes.pages.path),
    },
    {
      id: 2,
      label: routes.posts.name,
      path: routes.posts.path,
      icon: null,
      selected: !!pathname.match(routes.posts.path),
    },
    {
      id: 3,
      label: routes.categories.name,
      path: routes.categories.path,
      icon: null,
      selected: !!pathname.match(routes.categories.path),
    },
    {
      id: 4,
      label: routes.tags.name,
      path: routes.tags.path,
      icon: null,
      selected: !!pathname.match(routes.tags.path),
    },
    {
      id: 5,
      label: routes.translations.name,
      path: routes.translations.path,
      icon: null,
      selected: !!pathname.match(routes.translations.path),
    },
    {
      id: 6,
      label: routes.uploads.name,
      path: routes.uploads.path,
      icon: null,
      selected: !!pathname.match(routes.uploads.path),
    },
    {
      id: 7,
      label: routes.menu.name,
      path: routes.menu.path,
      icon: null,
      selected: !!pathname.match(routes.menu.path),
    },
    {
      id: 8,
      label: routes.messages.name,
      path: routes.messages.path,
      icon: null,
      selected: !!pathname.match(routes.messages.path),
    },
    {
      id: 9,
      label: routes.members.name,
      path: routes.members.path,
      icon: null,
      selected: !!pathname.match(routes.members.path),
    },
  ];
  const secondary: SidebarNavItemProps[] = [
    {
      id: 0,
      label: routes.users.name,
      path: routes.users.path,
      icon: null,
      selected: !!pathname.match(routes.users.path),
    },
    {
      id: 1,
      label: routes.settings.name,
      path: routes.settings.path,
      icon: null,
      selected: !!pathname.match(routes.settings.path),
    },
  ];

  return {
    primary,
    secondary,
  };
};
