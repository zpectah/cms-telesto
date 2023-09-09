import { ContainerProps as MuiContainerProps } from '@mui/material/Container/Container';
import { WithChildren } from '@/core';

export interface ContainerProps extends WithChildren {
  containerProps?: Partial<MuiContainerProps>;
}
