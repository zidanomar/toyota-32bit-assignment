import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';

function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          padding: '1rem',
          backgroundColor: 'white',
          borderRadius: '1rem',
        }}
      >
        <Button component={RouterLink} to='/dashboard'>
          dashboard
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
