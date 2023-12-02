import * as React from 'react';
import ArtworkGallery from '../modules/views/ArtworkGallery';
import ContactRequestIntake from '../modules/views/ContactRequestIntake';
import AppFooter from '../modules/views/AppFooter';
import DevProjects from '../modules/views/DevProjects';
import LearnSomethingNew from '../modules/views/LearnSomethingNew';
import VisionHero from '../modules/views/VisionHero';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';
import Box from '@mui/material/Box';


function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <VisionHero />
      <DevProjects />
      <ArtworkGallery />
      <LearnSomethingNew />
      <ContactRequestIntake />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
