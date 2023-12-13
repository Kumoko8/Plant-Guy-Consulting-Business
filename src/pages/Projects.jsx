import * as React from 'react';
import DevProjects from '../modules/views/DevProjects';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';



const mainProjects = [
    {
      imageSrc: 'dnd.webp',
      title: 'D&D Character Generator',
      description: 'Dive into a new world with your own role play character. Get ready to roll the dice.',
    },
    {
      imageSrc: 'Invizlogo.webp',
      title: 'INVIZ Productivity',
      description: 'Transform the everyday things you have to do into a wonderful journey you want to be a part of.',
    },
    {
      imageSrc: 'collectibles.webp',
      title: 'Collectibles',
      description: 'Keep all the antiques and novelties you treasure in one place and share them with others.',
    },
  ];

  const extraProjects = [
    {
        imageSrc: 'running.webp',
        title: 'Fitness Tracker Design',
        description: 'Track your exercise progress from first step to finish ',
        url: '/Fitness-Tracker.pdf'
    },
    {
      imageSrc: 'weather-app.webp',
      title: 'Coming Soon'
    },
    {
      imageSrc: 'kumo-writes.webp',
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
      <DevProjects projects={mainProjects.concat(extraProjects)} sectionTitle='All Dev Projects' button={projectButton}/>
      
      
      


    </React.Fragment>
)}
export default withRoot(Projects);


