import { CSSProperties } from 'react';
import { WithChildren } from '@/core';

export interface ContentProps extends WithChildren {
  style?: CSSProperties;
  offsetY?: boolean;
}
