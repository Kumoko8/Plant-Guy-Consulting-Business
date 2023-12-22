import * as React from 'react';
import DevProjects from '../modules/views/DevProjects';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';
import withScrollToTop from '../modules/withScrollToTop';


const animations = [

  {
    imageSrc: 'images/wolf.webp',
    title: 'Content Coming Soon',


  },
  {
    imageSrc: 'images/angel-pest.webp',
    title: 'Content Coming Soon',

  },
  {
    imageSrc: 'images/kumo-sleeps.webp',
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
      <DevProjects projects={animations} sectionTitle='Animations' button={projectButton} />
    </React.Fragment>
  )
}
export default withRoot(withScrollToTop(Projects));
