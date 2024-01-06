import * as React from 'react';

import ContactRequestIntake from '../modules/views/livenYourSpaceRequest';
import DevProjects from '../modules/views/whatWeOffer';
import VisionHero from '../modules/views/plantGuyHero';
import withRoot from '../modules/withRoot';


const mainProjects = [
  {
    imageSrc: '/images/plantCare.webp',
    title: 'Plant Care',
    description: "We specialize in comprehensive routine maintenance for existing plants, ensuring they thrive and remain vibrant. Say goodbye to constantly replacing wilted plants; let us breathe new life into your green spaces!",
  },
  {
    imageSrc: '/images/plantAdvice.webp',
    title: 'Advice',
    description: 'We offer personalized guidance for future plant selections and optimal placement, taking into account your specific lighting conditions and available space. Elevate your greenery game with tailored advice for a flourishing office environment!',
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

function Index() {
  return (
    <React.Fragment>
      <VisionHero />
      <DevProjects projects={mainProjects} sectionTitle="What We Offer" button={currentProjectsButton} />
      <ContactRequestIntake />
    </React.Fragment>
  );
}

export default withRoot(Index);
