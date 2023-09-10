import GLOBAL from '../../../../cms.config';

export const CONFIG = {
  GLOBAL,
  META: {
    TITLE: 'Admin default title',
    DESCRIPTION: 'Admin default description',
  },
  LOCALES: {
    LIST: ['en-US', 'cs-CZ'],
    DEFAULT: 'en-US',
  },
  CONTEXT: {
    DEFAULT: {
      THEME: 'light',
      LAYOUT: false,
    },
  },
  STYLE: {
    HEADER_HEIGHT_DESKTOP: '60px',
    HEADER_HEIGHT_MOBILE: '40px',
    SIDEBAR_WIDTH_DESKTOP: '250px',
    SIDEBAR_WIDTH_MOBILE: '100%',
  },
};
