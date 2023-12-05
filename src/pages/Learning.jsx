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

const learning = [
    {
      imageSrc: 'jscriptF1.png',
      title: 'Content Coming Soon',
      
    },
    {
      imageSrc: '/hiraganA.png',
      title: 'Content Coming Soon',
    },

    {
      imageSrc: '/dynamic1.png',
      title: 'Content Coming Soon',
      url: '/'
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
      <DevProjects projects={learning} sectionTitle='Educational Content' button={projectButton}/>
    
      
      
      


    </React.Fragment>
)}
export default withRoot(Projects);
