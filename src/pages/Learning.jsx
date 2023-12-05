import * as React from 'react';
import DevProjects from '../modules/views/DevProjects';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';


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
