import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '../components/Button';
import Typography from '../components/Typography';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'black',
  fontWeight: 'medium',
};

const image = {
  height: 220,
  my: 4,
};

function LearnSomethingNew() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h3" marked="center" component="h3" sx={{ mb: 14 }}>
          Learn Something New
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>JavaScript</Box>
                <Box
                  component="img"
                  src="/images/jscriptf1.webp"
                  alt="JavaScript Functions"
                  sx={image}
                />
                <Typography variant="h6" align="center">
                  Learn the basics of JavaScript, starting with functions
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>Japanese</Box>
                <Box
                  component="img"
                  src="/images/hiraganaA.webp"
                  alt="Hiragana video"
                  sx={image}
                />
                <Typography variant="h6" align="center">
                  Learn the 46 characters of the Japanese script
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>Digital Art</Box>
                <Box
                  component="img"
                  src="/images/dynamic1.webp"
                  alt="digital art video"
                  sx={image}
                />
                <Typography variant="h6" align="center">
                Learn how to make more dynamic characters
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href="/Learning"
          sx={{ mt: 8 }}
        >
          Get started
        </Button>
      </Container>
    </Box>
  );
}

export default LearnSomethingNew;
