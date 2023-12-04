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

const illustrations = [
    {
      imageSrc: 'DnD.png',
      title: 'D&D Character Generator',
      description: 'Dive into a new world with your own role play character. Get ready to roll the dice.',
    },
    {
      imageSrc: 'NVZlogo.png',
      title: 'INVIZ Productivity',
      description: 'Transform the everyday things you have to do into a wonderful journey you want to be a part of.',
    },
    {
      imageSrc: 'Collectibles.png',
      title: 'Collectibles',
      description: 'Keep all the antiques and novelties you treasure in one place and share them with others.',
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
      <Typography>
        Work
      </Typography>
      <DevProjects projects={illustrations} sectionTitle='Illustrations'/>
      
      
      


    </React.Fragment>
)}
export default withRoot(Projects);
