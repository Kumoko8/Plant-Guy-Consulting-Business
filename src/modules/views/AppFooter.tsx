import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import { SocialIcon } from 'react-social-icons';
import 'react-social-icons/instagram'
import 'react-social-icons/linkedin'
import 'react-social-icons/github'
import 'react-social-icons/discord'
import 'react-social-icons/facebook'


function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="https://mui.com/">
        TaylorGolden
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}




export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item>
              <SocialIcon href="https://www.instagram.com/taylor.golden.33"
          url="www.instagram.com" target="_blank" />
        <SocialIcon href="https://www.linkedin.com/in/taylor-golden-212b19257" url="www.linkedin.com" target="_blank" />
        <SocialIcon href="https://www.github.com/kumoko8" url="www.github.com" target="_blank" />
        <SocialIcon href="https://www.facebook.com/taylor.golden.33" url="www.facebook.com" target="_blank" />
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/terms/">Terms</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/privacy/">Privacy</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
        
          </Grid>
          <Grid item>
            <Typography variant="caption">
              {'Checkout my  '}
              <Link href="https://invizproductivity4.wordpress.com/" rel="sponsored" title="WordPress"
                target="_blank">
                WordPress
              </Link>
              {' site'}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
