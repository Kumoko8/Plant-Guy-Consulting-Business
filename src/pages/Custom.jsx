import * as React from 'react';
import DevProjects from '../modules/views/DevProjects';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';


const customWork = [
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
      imageSrc: '/JadeParis.jpg',
      title: 'Jade in Paris',
      
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
