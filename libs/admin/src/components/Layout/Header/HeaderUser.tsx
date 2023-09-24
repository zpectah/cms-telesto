import React from 'react';
import { Button } from '@mui/joy';
import { AccountCircle } from '@mui/icons-material';

const HeaderUser = () => {
  return (
    <Button
      variant="soft"
      color="neutral"
      size="lg"
      startDecorator={<AccountCircle />}
    >
      HeaderUser
    </Button>
  );
};

export default HeaderUser;
