import React from 'react';

import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => {
    return (
      <>
        <h1>It works!</h1>
      </>
    );
  },
});
