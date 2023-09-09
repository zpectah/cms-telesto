'use client';

import React from 'react';
import { PageLayout, Container, Footer } from '../../layout';

const Error = ({ errorKey }: { errorKey: string | number }) => {
  return (
    <PageLayout pageKey="error" variant="centered" withoutHeader>
      <Container containerProps={{ maxWidth: 'sm' }}>
        <div>Error page View: {errorKey}</div>
        <Footer />
      </Container>
    </PageLayout>
  );
};

export default Error;
