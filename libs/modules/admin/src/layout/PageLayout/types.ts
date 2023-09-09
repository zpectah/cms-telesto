import { WithChildren } from '@/core';

export type PageLayoutVariantType = 'default' | 'centered';

export interface PageLayoutProps extends WithChildren {
  pageKey: string;
  variant?: PageLayoutVariantType;
  withoutHeader?: boolean;
}
