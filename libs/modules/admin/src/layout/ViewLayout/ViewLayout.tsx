import React, { ReactNode } from 'react';
import { Container } from '../Container';

export interface ViewLayoutProps {
  children: ReactNode;
  sidebar?: ReactNode;
}

const ViewLayout = (props: ViewLayoutProps) => {
  const { children, sidebar } = props;

  return (
    <Container>
      <div>
        <div>{children}</div>
        <aside>{sidebar}</aside>
      </div>
    </Container>
  );
};

export default ViewLayout;
