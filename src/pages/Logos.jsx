import * as React from 'react';
import DevProjects from '../modules/views/DevProjects';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';


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
