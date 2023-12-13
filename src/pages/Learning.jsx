import * as React from 'react';
import DevProjects from '../modules/views/DevProjects';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';


const learning = [
    {
      imageSrc: 'jscriptf1.webp',
      title: 'Content Coming Soon',
      
    },
    {
      imageSrc: '/hiraganaA.webp',
      title: 'Content Coming Soon',
    },

    {
      imageSrc: '/dynamic1.webp',
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
      <DevProjects projects={learning} sectionTitle='Educational Content' button={projectButton}/>
    
      
      
      


    </React.Fragment>
)}
export default withRoot(Projects);
