import { ReactNode } from 'react';
import { WithChildren } from '@/core';

export interface ViewLayoutProps extends WithChildren {
  sidebar?: ReactNode;
  withoutFooter?: boolean;
}
