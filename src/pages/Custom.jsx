import * as React from 'react';
import DevProjects from '../modules/views/DevProjects';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';


const customWork = [
    
    {
      imageSrc: '/jadeparis.webp',
      title: 'Jade in Paris',
      
    },
   
    {
      imageSrc: '/major.webp',
      title: 'Major',
      
    },
    {
      imageSrc: '/super-saiyan.webp',
      title: 'Super Saiyan',
    },
    {
      imageSrc: '/kevs-bday.webp',
      title: 'Happy Birthday Kev',
    },
    {
      imageSrc: '/aly-bday.webp',
      title: 'Happy Birthday Aly',
    },
    {
      imageSrc: '/mrB-bday.webp',
      title: 'Happy Birthday Mr. B',
    },

    {
      imageSrc: '/tristan-reads.webp',
      title: 'Tristan FanFiction Commission',
    },
   {
      imageSrc: '/nolan-joker.webp',
      title: 'Joker Commission',
    },
    {
      imageSrc: '/hollow-knight.webp',
      title: 'Hollow Knight',
    },
    {
      imageSrc: '/heart-album.webp',
      title: 'Heart EP Cover',
    },
    {
      imageSrc: '/real-thing-single.webp',
      title: 'Real Thing Single',
      
    },
    {
      imageSrc: '/forevers-single.webp',
      title: 'A Million Forevers Single',
      
    },
    {
      imageSrc: '/broken-tears-single.webp',
      title: 'Broken Tears Single',
      
    },
    {
      imageSrc: '/runaway-single.webp',
      title: 'Run Away Single',
      
    },
     {
      imageSrc: '/self-portrait.webp',
      title: 'Self Portrait',
      
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
      <DevProjects projects={customWork} sectionTitle='Custom Artwork' button={projectButton}/>
    
      
      
      


    </React.Fragment>
)}
export default withRoot(Projects);
