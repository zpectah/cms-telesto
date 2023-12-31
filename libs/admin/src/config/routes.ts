import { Routes } from '../types';

export default {
  login: {
    name: 'Login',
    path: '/login',
  },
  index: {
    name: 'Dashboard',
    path: '/',
  },
  settings: {
    name: 'Settings',
    path: '/settings',
    routes: {
      general: {
        name: 'General',
        slug: undefined,
      },
      client: {
        name: 'Client',
        slug: 'client',
      },
      content: {
        name: 'Content',
        slug: 'content',
      },
      locales: {
        name: 'Locales',
        slug: 'locales',
      },
      maintenance: {
        name: 'Maintenance',
        slug: 'maintenance',
      },
      blacklist: {
        name: 'Blacklist',
        slug: 'blacklist',
      },
    },
  },
  help: {
    name: 'Help',
    path: '/help',
    routes: {
      general: {
        name: 'General',
        slug: undefined,
      },
      content: {
        name: 'Content',
        slug: 'content',
      },
    },
  },
  profile: {
    name: 'Profile',
    path: '/profile',
    routes: {
      general: {
        name: 'General',
        slug: undefined,
      },
      personal: {
        name: 'Personal',
        slug: 'personal',
      },
      history: {
        name: 'History',
        slug: 'history',
      },
    },
  },
  posts: {
    name: 'Posts',
    path: '/posts',
  },
  categories: {
    name: 'Categories',
    path: '/categories',
  },
  members: {
    name: 'Members',
    path: '/members',
  },
  menu: {
    name: 'Menu',
    path: '/menu',
  },
  messages: {
    name: 'Messages',
    path: '/messages',
  },
  pages: {
    name: 'Pages',
    path: '/pages',
  },
  tags: {
    name: 'Tags',
    path: '/tags',
  },
  translations: {
    name: 'Translations',
    path: '/translations',
  },
  uploads: {
    name: 'Uploads',
    path: '/uploads',
  },
  users: {
    name: 'Users',
    path: '/users',
  },
} as Routes;
