import React from 'react';
import { styled, Container, Typography } from '@mui/joy';
import CFG from '../../../../../../telesto.config';

const Wrapper = styled('footer')({
  paddingTop: '1rem',
  paddingBottom: '1rem',
});

const Footer = () => {
  return (
    <Wrapper>
      <Container maxWidth={false}>
        <Typography level="body-sm" color="neutral">
          &copy; {CFG.meta.name} v{CFG.meta.version} | All rights reserved
        </Typography>
      </Container>
    </Wrapper>
  );
};

export default Footer;
