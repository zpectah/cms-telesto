'use client';

import React from 'react';
import { PageLayout, Container, Footer } from '../../layout';
import { Scrollable } from '@/ui';

const Error = ({ errorKey }: { errorKey: string | number }) => {
  return (
    <PageLayout pageKey="login" variant="centered" withoutHeader>
      <Container
        containerProps={{
          maxWidth: 'sm',
          sx: { height: '100vh', position: 'relative' },
        }}
      >
        <Scrollable
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ padding: '1rem', background: '#cdcdcd' }}>
            <div>Error module view: {errorKey}</div>
            <Footer />
          </div>
        </Scrollable>
      </Container>
    </PageLayout>
  );
};

export default Error;
