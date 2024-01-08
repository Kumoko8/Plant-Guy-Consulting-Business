import * as React from 'react';

import LivenYourSpaceRequest from '../modules/views/livenYourSpaceRequest';
import PlantHero from '../modules/views/plantHero';
import WithRoot from '../modules/withRoot';
import WithScrollToTop from '../modules/WithScrollToTop';
import WhatWeOffer from '../modules/views/whatWeOffer';

const mainProjects = [
  {
    imageSrc: '/images/plantCare.webp',
    title: 'Plant Care',
    description: "We specialize in comprehensive routine maintenance for existing plants, ensuring they thrive and remain vibrant. Say goodbye to constantly replacing wilted plants; let us breathe new life into your green spaces!",
  },
  {
    imageSrc: '/images/plantAdvice.webp',
    title: 'Consultation',
    description: 'We offer personalized guidance for future plant selections and optimal placement, taking into account your specific lighting conditions and available space. Elevate your greenery game with tailored advice for a flourishing botanical environment!',
  },
  {
    imageSrc: '/images/plantSupply.webp',
    title: 'Plant Supply',
    description: 'We excel at illuminating your surroundings and enhancing air quality by introducing carefully selected plants tailored to meet your precise requirements. Transform your space with the perfect green companions that bring both freshness and vibrancy.',
  },
];
const currentProjectsButton =
{
  label: 'Learn More',
  url: '/projects'
}

const UnderConstructionBanner = () => (
  <div style={{ background: 'red', color: 'white', padding: '10px', textAlign: 'center', fontSize: '18px' }}>
    Under Construction: Taylor Golden is experiencing some technical difficulties at the moment. Some features may not be available during this period. In the meantime enjoy this plant page. Feel free to still contact me <a href="https://share.hsforms.com/1uOdn7b8wR7yy4xUNUmEeLAqfs72" target="_blank"> here. </a> Thank you for your patience!
  </div>
);

const isUnderConstruction = true;

function Index() {
  return (
    <React.Fragment>
      <PlantHero />
      <WhatWeOffer projects={mainProjects} button={currentProjectsButton} sectionTitle ={'What We Do'}/>
      <LivenYourSpaceRequest />
    </React.Fragment>
  );
}

export default WithRoot(WithScrollToTop(Index));