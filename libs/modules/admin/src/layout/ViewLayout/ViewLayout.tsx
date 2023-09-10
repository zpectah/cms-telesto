import React from 'react';
import { Box } from '@mui/material';
import { useLayoutContext } from '../../context';
import { ViewLayoutProps } from './types';
import { Container } from '../Container';
import { Footer } from '../Footer';
import { Sidebar } from '../Sidebar';
import { Wrapper } from '../Wrapper';
import { Content } from '../Content';
import { Breadcrumbs } from '../../components';

const ViewLayout = (props: ViewLayoutProps) => {
  const {
    children,
    sidebar,
    withoutFooter,
    withoutSidebar,
    contentOffsetY,
    title,
    subtitle,
  } = props;

  const { open } = useLayoutContext();

  return (
    <>
      {!withoutSidebar && <Sidebar open={open} />}
      <Wrapper open={open}>
        <Content
          style={{ display: 'flex', flexDirection: 'row' }}
          offsetY={contentOffsetY}
        >
          {sidebar && (
            <Box sx={{ width: { xs: '150px', sm: '200px', md: '225px' } }}>
              <Container>{sidebar}</Container>
            </Box>
          )}
          <div>
            <Container>
              <div>
                <div>
                  <Breadcrumbs />
                </div>
                <div>
                  {title && <h1>{title}</h1>}
                  {subtitle && <p>{subtitle}</p>}
                </div>
              </div>
              <div>{children}</div>
              {!withoutFooter && <Footer />}
            </Container>
          </div>
        </Content>
      </Wrapper>
    </>
  );
};

export default ViewLayout;
