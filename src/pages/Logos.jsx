import * as React from 'react';

import ContactRequestIntake from '../modules/views/ContactRequestIntake';
import AppFooter from '../modules/views/AppFooter';
import DevProjects from '../modules/views/DevProjects';
import LearnSomethingNew from '../modules/views/LearnSomethingNew';
import VisionHero from '../modules/views/VisionHero';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';
import Box from '@mui/material/Box';
import Paper from '../modules/components/Paper';
import ProductHero from '../modules/views/ProductHero';
import Typography from '../modules/components/Typography';

const logos = [
    {
      imageSrc: '/SeaweedLogo.png',
      title: 'Adams Seamoss',
    },
    {
      imageSrc: '/Jubi_.png',
      title: 'Prestige Trading',
      
    },
    {
      imageSrc: '/NVZlogo.png',
      title: 'INVIZ Productivity Logo',
  
    },
    {
      imageSrc: '/kiroLogo.png',
      title: 'Personal Coding Logo',
  
    },
    {
      imageSrc: '/kamakiri.png',
      title: 'Personal Art Logo',
  
    },
    {
      imageSrc: '/Teach_Logo.png',
      title: 'Learning Content Logo',
  
    },
  ];
 

const projectButton = 
  {
    label: 'Back',
    url: '/'
  }

function Projects() {

  return (
    <React.Fragment>
      <AppAppBar />
      <DevProjects projects={logos} sectionTitle='Logos' button={projectButton}/>
    
      
      
      


    </React.Fragment>
)}
export default withRoot(Projects);
