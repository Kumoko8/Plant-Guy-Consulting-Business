import * as React from 'react';
import DevProjects from '../modules/views/DevProjects';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';


const illustrations = [
   
    {
      imageSrc: '/maguro-first.webp',
      title: 'The Invisible Story: Maguro',
    },
   
    {
      imageSrc: '/kiiro-character.webp',
      title: 'The Invisible Story: Kiiro',
    },
    {
      imageSrc: '/hachi.webp',
      title: 'The Invisible Story: Hachi',
    },
    {
      imageSrc: '/trio.webp',
      title: 'The Invisible Story: Trio',
    },
    {
      imageSrc: '/kumo-writes.webp',
      title: 'The Invisible Story: Kumo Writes',
    },
    {
      imageSrc: '/angel-apathy.webp',
      title: 'The Invisible Story: Angel v. Apathy',
    },
    {
      imageSrc: '/god_paint.webp',
      title: 'The Invisible Story: The Creator',
    },
    {
      imageSrc: '/gods-got-u.webp',
      title: "God's Got You",
    },
    {
      imageSrc: '/lift-off.webp',
      title: "Lift Off",
    },
  ];
 

const projectButton = 
  {
    label: 'Back',
    url: '/'
  }

function Artwork() {

  return (
    <React.Fragment>
      <AppAppBar />
      <DevProjects projects={illustrations} sectionTitle='Illustrations' button={projectButton}/>
    
      
      
      


    </React.Fragment>
)}
export default withRoot(Artwork);
