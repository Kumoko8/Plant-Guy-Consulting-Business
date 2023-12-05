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

const animations = [
    
    {
      imageSrc: '/wolf_.png',
      title: 'Content Coming Soon',
   
      
    },
    {
      imageSrc: '/Invis_Frame_Pest.png',
      title: 'Content Coming Soon',
      
    },
    {
      imageSrc: '/kumo_sleeps.jpg',
      title: 'Content Coming Soon',
      
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
      <DevProjects projects={animations} sectionTitle='Animations' button={projectButton}/>
    
      
      
      


    </React.Fragment>
)}
export default withRoot(Projects);
