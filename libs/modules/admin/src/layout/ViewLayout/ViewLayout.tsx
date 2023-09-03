import React, { ReactNode } from 'react';

export interface ViewLayoutProps {
  children: ReactNode;
  pageKey: string;
  variant?: 'default' | 'centered';
  withoutHeader?: boolean;
  withoutFooter?: boolean;
  sidebar?: ReactNode;
}

const ViewLayout = (props: ViewLayoutProps) => {
  const {
    children,
    variant = 'default',
    withoutHeader,
    withoutFooter,
    sidebar,
  } = props;

  return (
    <div className={['view-layout-root', `view-layout--${variant}`].join(' ')}>
      {!withoutHeader && <header>header</header>}
      <div>
        {sidebar && <aside>{sidebar}</aside>}
        <main>{children}</main>
      </div>
      {!withoutFooter && <footer>footer</footer>}
    </div>
  );
};

export default ViewLayout;
