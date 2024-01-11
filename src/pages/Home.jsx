import * as React from 'react';

import LivenYourSpaceRequest from '../modules/views/livenYourSpaceRequest';
import PlantHero from '../modules/views/plantHero';
import withRoot from '../modules/withRoot';
import withScrollToTop from '../modules/withScrollToTop';
import WhatWeOffer from '../modules/views/whatWeOffer';
import AboutUs from '../modules/views/aboutUsSection'

const mainProjects = [
  {
    imageSrc: '/images/careImg.webp',
    title: 'Plant Care',
    description: "We specialize in comprehensive routine maintenance for existing plants, ensuring they thrive and remain vibrant. Say goodbye to constantly replacing wilted plants; let us breathe new life into your green spaces!",
  },
  {
    imageSrc: '/images/consultationImg.webp',
    title: 'Consultation',
    description: 'We offer personalized guidance for future plant selections and optimal placement, taking into account your specific lighting conditions and available space. Elevate your greenery game with tailored advice for a flourishing botanical environment!',
  },
  {
    imageSrc: '/images/supplyImg.webp',
    title: 'Plant Supply',
    description: 'We excel at illuminating your surroundings and enhancing air quality by introducing carefully selected plants tailored to meet your precise requirements. Transform your space with the perfect green companions that bring both freshness and vibrancy.',
  },
];
const currentProjectsButton =
{
  label: 'Learn More',
  url: '/info'
}


function Index() {
  return (
    <React.Fragment>
      <PlantHero />
      <AboutUs />
      <WhatWeOffer projects={mainProjects} button={currentProjectsButton} sectionTitle ={'What We Do'}/>
      <LivenYourSpaceRequest />
    </React.Fragment>
  );
}

export default withRoot(withScrollToTop(Index));