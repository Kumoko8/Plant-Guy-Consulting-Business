import * as React from 'react';
import Typography from '../modules/components/Typography';
import Box from '@mui/material/Box';
import withRoot from '../modules/withRoot';
import HubSpotForm from 'react-hubspot-form';
import withScrollToTop from '../modules/withScrollToTop';
import Button from '../modules/components/Button';





function Contact() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <div>
        <div>
          <Typography variant="h3" component="h3" gutterBottom sx={{ marginBottom: 2, color: 'black' }}>
            Set up your free consultation!
          </Typography>
        </div>


        <Box sx={{ display: 'flexbox', flexDirection: 'column', flexGrow: 1 }}>
          <HubSpotForm
            portalId="44406398"
            formId="b8e767ed-bf30-47bc-b2e3-150d52611e2c"
            onSubmit={() => console.log('Form submitted')}
            onReady={(form) => console.log('Form ready:', form)}
            loading={<div>Loading...</div>}
          />
        </Box>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href='/'
          sx={{ mt: 5, border: 'solid' }}
        >
          Back
        </Button>
      </div>
    </React.Fragment>
  )
};
export default withRoot(withScrollToTop(Contact));