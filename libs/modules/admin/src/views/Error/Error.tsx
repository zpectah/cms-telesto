'use client';

import React from 'react';
import { PageLayout } from '../../layout';
import { Container } from '../../layout';
import { useFooter } from '../../layout';

const Error = ({ errorKey }: { errorKey: string | number }) => {
  const { primary } = useFooter();

  return (
    <PageLayout pageKey="error" variant="centered" withoutHeader withoutFooter>
      <Container containerProps={{ maxWidth: 'sm' }}>
        <div>Error page View: {errorKey}</div>
        <footer>{primary}</footer>
      </Container>
    </PageLayout>
  );
};

export default Error;
