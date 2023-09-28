import { useRouter } from 'next/router';
import { routes } from '../../../config';
import { SidebarNavItemProps } from './types';

export const useSidebarNav = () => {
  const { pathname } = useRouter();

  const primary: SidebarNavItemProps[] = [
    {
      id: 0,
      label: 'Dashboard',
      path: routes.index.path,
      icon: null,
      selected: pathname === routes.index.path,
    },
    {
      id: 1,
      label: 'Pages',
      path: routes.pages.path,
      icon: null,
      selected: !!pathname.match(routes.pages.path),
    },
    {
      id: 2,
      label: 'Posts',
      path: routes.posts.path,
      icon: null,
      selected: !!pathname.match(routes.posts.path),
    },
    {
      id: 3,
      label: 'Categories',
      path: routes.categories.path,
      icon: null,
      selected: !!pathname.match(routes.categories.path),
    },
    {
      id: 4,
      label: 'Tags',
      path: routes.tags.path,
      icon: null,
      selected: !!pathname.match(routes.tags.path),
    },
    {
      id: 5,
      label: 'Translations',
      path: routes.translations.path,
      icon: null,
      selected: !!pathname.match(routes.translations.path),
    },
    {
      id: 6,
      label: 'Uploads',
      path: routes.uploads.path,
      icon: null,
      selected: !!pathname.match(routes.uploads.path),
    },
    {
      id: 7,
      label: 'Menu',
      path: routes.menu.path,
      icon: null,
      selected: !!pathname.match(routes.menu.path),
    },
    {
      id: 8,
      label: 'Messages',
      path: routes.messages.path,
      icon: null,
      selected: !!pathname.match(routes.messages.path),
    },
    {
      id: 9,
      label: 'Members',
      path: routes.members.path,
      icon: null,
      selected: !!pathname.match(routes.members.path),
    },
  ];
  const secondary: SidebarNavItemProps[] = [
    {
      id: 0,
      label: 'Users',
      path: routes.users.path,
      icon: null,
      selected: !!pathname.match(routes.users.path),
    },
    {
      id: 1,
      label: 'Settings',
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
