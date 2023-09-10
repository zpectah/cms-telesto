import React from 'react';
import { Container } from '../Container';
import { Footer } from '../Footer';
import { Sidebar } from '../Sidebar';
import { useLayoutContext } from '../../context';
import { ViewLayoutProps } from './types';
import { Wrapper } from '../Wrapper';
import { Content } from '../Content';

const ViewLayout = (props: ViewLayoutProps) => {
  const { children, sidebar, withoutFooter, withoutSidebar } = props;

  const { open, toggle } = useLayoutContext();

  return (
    <>
      {!withoutSidebar && (
        <Sidebar open={open}>
          <div>
            {sidebar}
            sidebar content
            <div>
              <button onClick={() => toggle()}>
                toggle {open ? 'open' : 'closed'}
              </button>
            </div>
          </div>
        </Sidebar>
      )}
      <Wrapper open={open}>
        <Container>
          <Content>{children}</Content>
          {!withoutFooter && <Footer />}
        </Container>
      </Wrapper>
    </>
  );
};

export default ViewLayout;
