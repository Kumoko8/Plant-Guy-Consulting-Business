import * as React from 'react';
import DevProjects from '../modules/views/DevProjects';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';


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
