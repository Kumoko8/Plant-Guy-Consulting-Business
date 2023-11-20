import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '../components/Paper';

export default function AppForm(props: React.HTMLAttributes<HTMLDivElement>) {
  const { children } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        backgroundImage: 'url(./public/kiroLogo.png)',
        backgroundRepeat: 'no-repeat',
        alignItems: 'flex-start'
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ mt: 7, mb: 12 }}>
          <Paper
            background="light"
            sx={{ py: { xs: 1, md: 8 }, px: { xs: 3, md: 6 } }}
          >
            {children}
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
