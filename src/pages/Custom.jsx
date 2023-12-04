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
import Paper from '../modules/components/Paper';
import ProductHero from '../modules/views/ProductHero';
import Typography from '../modules/components/Typography';

const illustrations = [
    {
      imageSrc: '/Tristan.png',
      title: 'Role Play Universe',
      url: '/'
    },
    {
      imageSrc: '/Aly.png',
      title: 'Birthday Gifts',
      url: '/'
      
    },
    {
      imageSrc: '/Nolan.png',
      title: 'Commissions',
      url: '/'
    },
  ];
 

  const extraProjects = [
    {
        imageSrc: 'running.png',
        title: 'Fitness Tracker Design',
        description: 'Track your exercise progress from first step to finish ',
        url: '/Fitness-Tracker.pdf'
    },
    {
      imageSrc: 'WeatherApp.png',
      title: 'Coming Soon'
    },
    {
      imageSrc: 'Kumo_Writes.png',
      title: 'Coming Soon'
    }
  ]
const projectButton = 
  {
    label: 'Back',
    url: '/'
  }

function Projects() {

  return (
    <React.Fragment>
      <AppAppBar />
      <DevProjects id="illustrations" projects={illustrations} sectionTitle='Illustrations' button={projectButton}/>
    
      
      
      


    </React.Fragment>
)}
export default withRoot(Projects);
