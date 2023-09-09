'use client';

import React from 'react';
import { PageLayout, Container, Footer } from '../../layout';

const Login = () => {
  return (
    <PageLayout pageKey="login" variant="centered" withoutHeader>
      <Container containerProps={{ maxWidth: 'sm' }}>
        <div>Login module View</div>
        <Footer />
      </Container>
    </PageLayout>
  );
};

export default Login;
