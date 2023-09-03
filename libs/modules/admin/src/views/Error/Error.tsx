'use client';

import React from 'react';
import { ViewLayout } from '../../layout';

const Error = ({ errorKey }: { errorKey: string | number }) => {
  return (
    <ViewLayout pageKey="error" withoutHeader withoutFooter>
      Error page View: {errorKey}
    </ViewLayout>
  );
};

export default Error;
