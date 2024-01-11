import * as React from 'react';
import Button from '../components/Button';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';



function livenYourSpaceRequest() {
  return (
    <Container
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
    >
      <Button
      variant='contained'
      color='primary'
        href=
        '/contact'
        sx={{
          border: 'solid black',
          borderRadius: 0,
          height: 'auto',
          py: 2,
          px: 5
        }}
      >
        <Typography variant="h4" component="h4">
          Wanna Liven Your Space? Click here!
        </Typography>
      </Button>
    </Container>
  );
}

export default livenYourSpaceRequest;
