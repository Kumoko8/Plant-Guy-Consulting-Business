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

const UnderConstructionBanner = () => (
  <div style={{ background: 'red', color: 'white', padding: '10px', textAlign: 'center', fontSize: '18px' }}>
    Under Construction: Taylor Golden is experiencing some technical difficulties at the moment. Some features may not be available during this period. In the meantime enjoy this plant page. Feel free to still contact me <a href="https://share.hsforms.com/1uOdn7b8wR7yy4xUNUmEeLAqfs72" target="_blank"> here. </a> Thank you for your patience!
  </div>
);

const isUnderConstruction = true;

function Index() {
  return (
    <React.Fragment>
      {isUnderConstruction && <UnderConstructionBanner />}
      <VisionHero />
      <DevProjects projects={mainProjects} sectionTitle="What We Offer" button={currentProjectsButton} />
      <ContactRequestIntake />
    </React.Fragment>
  );
}

export default withRoot(Index);