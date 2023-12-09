import * as React from 'react';
import DevProjects from '../modules/views/DevProjects';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';


const illustrations = [
    {
      imageSrc: '/Tristan.png',
      title: 'Tristan FanFiction Commission',
    },
    {
      imageSrc: '/Aly.png',
      title: 'Happy Birthday Aly',
    },
    {
      imageSrc: '/kevs-bday.png',
      title: 'Happy Birthday Kev',
    },
    {
      imageSrc: '/maguro.jpg',
      title: 'The Invisible Story: Maguro',
    },
    {
      imageSrc: '/god.jpg',
      title: 'The Invisible Story: The Creator',
    },
    {
      imageSrc: '/Kiiro.png',
      title: 'The Invisible Story: Kiiro',
    },
    {
      imageSrc: '/Nolan.png',
      title: 'Joker Commission',
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
