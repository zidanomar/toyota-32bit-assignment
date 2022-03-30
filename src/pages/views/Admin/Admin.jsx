import React from 'react';
import { Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Admin() {
  return (
    <div>
      <Button component={RouterLink} to='/'>
        dashboard
      </Button>
    </div>
  );
}

export default Admin;
