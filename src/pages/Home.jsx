import * as React from 'react';
import ServicesGallery from '../modules/views/ServicesGallery';
import ContactRequestIntake from '../modules/views/ContactRequestIntake';
import DevProjects from '../modules/views/DevProjects';
import LearnSomethingNew from '../modules/views/LearnSomethingNew';
import VisionHero from '../modules/views/VisionHero';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';


const mainProjects = [
  {
    imageSrc: 'dnd.webp',
    title: 'D&D Character Generator',
    description: 'Dive into a new world with your own role play character. Get ready to roll the dice.',
    url: 'https://kumoko8.github.io/Front-End-App-DnD-Character-Project/'
  },
  {
    imageSrc: 'Invizlogo.webp',
    title: 'INVIZ Productivity',
    description: 'Transform the everyday things you have to do into a wonderful journey you want to be a part of.',
    url: 'https://invizproductivity4.wordpress.com/'
  },
  {
    imageSrc: 'collectibles.webp',
    title: 'Collectibles',
    description: 'Keep all the antiques and novelties you treasure in one place and share them with others.',
    url: 'https://project-collections-cfb3d3b9c8f8.herokuapp.com/'
  },
];
const currentProjectsButton = 
  {
    label: 'See More',
    url: '/projects'
  }

function Index() {
  return (
    <React.Fragment>
      {/* <div id="header-title">
      <h1> Taylor Golden </h1>
            <h2>Developer | Dad | Illustrator | Educator </h2>
      </div> */}
      <AppAppBar />
      <VisionHero />
      <ServicesGallery />
      <DevProjects projects={mainProjects} sectionTitle="Dev Projects" button={currentProjectsButton}/>
      <LearnSomethingNew />
      <ContactRequestIntake />
      
    </React.Fragment>
  );
}

export default withRoot(Index);
