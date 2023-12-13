import * as React from 'react';
import DevProjects from '../modules/views/DevProjects';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';


const logos = [
    {
      imageSrc: '/seamoss.webp',
      title: "Adam's Seamoss",
    },
    {
      imageSrc: '/prestige-logo.webp',
      title: 'Prestige Trading',
      
    },
    {
      imageSrc: '/Invizlogo.webp',
      title: 'INVIZ Productivity Logo',
  
    },
    {
      imageSrc: '/kiiro-logo.webp',
      title: 'Personal Coding Logo',
  
    },
    {
      imageSrc: '/kamakiri-logo.webp',
      title: 'Personal Art Logo',
  
    },
    {
      imageSrc: '/teach-logo.webp',
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
