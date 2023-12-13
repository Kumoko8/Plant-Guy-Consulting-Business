import * as React from 'react';
import DevProjects from '../modules/views/DevProjects';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';


const animations = [
    
    {
      imageSrc: '/wolf.webp',
      title: 'Content Coming Soon',
   
      
    },
    {
      imageSrc: '/angel-pest.webp',
      title: 'Content Coming Soon',
      
    },
    {
      imageSrc: '/kumo-sleeps.webp',
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
