'use client';

import React from 'react';
import { PageLayout, Container, Footer } from '../../layout';
import { Scrollable } from '@/ui';

const Login = () => {
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
            <div>Login module View</div>
            <Footer />
          </div>
        </Scrollable>
      </Container>
    </PageLayout>
  );
};

export default Login;
