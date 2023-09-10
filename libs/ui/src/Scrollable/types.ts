import { WithChildren } from '@/core';
import { CSSProperties } from 'react';

export interface ScrollableProps extends WithChildren {
  variant?: 'horizontal' | 'vertical';
  style?: CSSProperties;
}
