'use client';

import React from 'react';
import { PageLayout } from '../../layout';
import { Container } from '../../layout';
import { useFooter } from '../../layout';

const Login = () => {
  const { primary } = useFooter();

  return (
    <PageLayout pageKey="login" variant="centered" withoutHeader withoutFooter>
      <Container containerProps={{ maxWidth: 'sm' }}>
        <div>Login module View</div>
        <footer>{primary}</footer>
      </Container>
    </PageLayout>
  );
};

export default Login;
