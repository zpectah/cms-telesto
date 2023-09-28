import React from 'react';
import { styled } from '@mui/joy';
import { Button, ButtonProps } from '@mui/base';
import { STYLES } from '../../../constants';

export interface HeaderButtonProps extends ButtonProps {
  onClick: () => void;
}

const StyledButton = styled(Button)({
  minWidth: STYLES.HEADER.HEIGHT,
  height: STYLES.HEADER.HEIGHT,
  margin: 0,
  padding: 0,
  border: 0,
  backgroundColor: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  gap: '.5rem',
  cursor: 'pointer',
});

const HeaderButton = (props: HeaderButtonProps) => {
  const { children, onClick } = props;

  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default HeaderButton;
