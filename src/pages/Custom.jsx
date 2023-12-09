import * as React from 'react';
import DevProjects from '../modules/views/DevProjects';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';


const customWork = [
    
    {
      imageSrc: '/JadeParis.jpg',
      title: 'Jade in Paris',
      
    },
   
    {
      imageSrc: '/Major.jpg',
      title: 'Major',
      
    },
    {
      imageSrc: '/superSaiyan.jpg',
      title: 'Super Saiyan',
      
    },
    {
      imageSrc: '/kevs-bday.png',
      title: 'Happy Birthday Kev',
    },
    {
      imageSrc: '/Aly.png',
      title: 'Happy Birthday Aly',
    },
    {
      imageSrc: '/mrB.jpg',
      title: 'Happy Birthday Mr. B',
    },

    {
      imageSrc: '/Tristan.png',
      title: 'Tristan FanFiction Commission',
    },
   {
      imageSrc: '/Nolan.png',
      title: 'Joker Commission',
    },
    {
      imageSrc: '/hollowKnight.jpg',
      title: 'Hollow Knight',
    },
    {
      imageSrc: '/EP_Color.png',
      title: 'Heart EP Cover',
    },
    {
      imageSrc: '/Single_1it.png',
      title: 'Real Thing Single',
      
    },
    {
      imageSrc: '/Single_1it 2.png',
      title: 'A Million Forevers Single',
      
    },
    {
      imageSrc: '/Single_1it 3.png',
      title: 'Broken Tears Single',
      
    },
    {
      imageSrc: '/Single_1it 4.png',
      title: 'Run Away Single',
      
    },
     {
      imageSrc: '/selfPortrait.jpg',
      title: 'Self Portrait',
      
    },

  ];
 

  const extraProjects = [
    {
        imageSrc: 'running.png',
        title: 'Fitness Tracker Design',
        description: 'Track your exercise progress from first step to finish ',
        url: '/Fitness-Tracker.pdf'
    },
    {
      imageSrc: 'WeatherApp.png',
      title: 'Coming Soon'
    },
    {
      imageSrc: 'Kumo_Writes.png',
      title: 'Coming Soon'
    }
  ]
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
