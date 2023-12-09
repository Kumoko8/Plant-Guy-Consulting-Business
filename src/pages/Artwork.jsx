import * as React from 'react';
import DevProjects from '../modules/views/DevProjects';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';


const illustrations = [
   
    {
      imageSrc: '/maguro.jpg',
      title: 'The Invisible Story: Maguro',
    },
   
    {
      imageSrc: '/Kiiro.png',
      title: 'The Invisible Story: Kiiro',
    },
    {
      imageSrc: '/hachi.jpg',
      title: 'The Invisible Story: Hachi',
    },
    {
      imageSrc: '/trio.jpg',
      title: 'The Invisible Story: Trio',
    },
    {
      imageSrc: '/kumoWrites.jpg',
      title: 'The Invisible Story: Kumo Writes',
    },
    {
      imageSrc: '/angelApathy.jpg',
      title: 'The Invisible Story: Angel v. Apathy',
    },
    {
      imageSrc: '/god.jpg',
      title: 'The Invisible Story: The Creator',
    },
    {
      imageSrc: '/godsGotu.jpg',
      title: "God's Got You",
    },
    {
      imageSrc: '/LiftOff.jpg',
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
