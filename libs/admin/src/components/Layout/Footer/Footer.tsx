import React from 'react';
import { styled, Container } from '@mui/joy';
import CFG from '../../../../../../telesto.config';
import { WithChildren } from '../../../types';

export interface FooterProps extends Partial<WithChildren> {}

const Wrapper = styled('footer')({
  paddingTop: '1rem',
  paddingBottom: '1rem',
});

const Footer = (props: FooterProps) => {
  const { children } = props;

  return (
    <Wrapper>
      <Container maxWidth={false}>
        {children}... ... {CFG.meta.name}
      </Container>
    </Wrapper>
  );
};

export default Footer;
