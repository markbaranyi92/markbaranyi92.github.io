import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import { Button } from '@mui/material';
import CheckboxList from '../src/TodoTable';

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          ToDo app example with MUI
        </Typography>
        <CheckboxList />
      </Box>
      <Link href="/about" color="secondary"
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          Go to the about page
      </Link>
      <Copyright />
    </Container>
  );
};

export default Home;
