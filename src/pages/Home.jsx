import * as React from 'react';

import LivenYourSpaceRequest from '../modules/views/livenYourSpaceRequest';
import PlantHero from '../modules/views/plantHero';
import withRoot from '../modules/withRoot';
import withScrollToTop from '../modules/withScrollToTop';
import WhatWeOffer from '../modules/views/whatWeOffer';

const mainProjects = [
  {
    imageSrc: '/images/plantCare.webp',
    title: 'Plant Care',
    description: "We handle all routine maintainance on exisiting plants to keep them green and healthy. If you're tired of purchasing new plants to replace the dead ones.",
  },
  {
    imageSrc: '/images/plantAdvice.webp',
    title: 'Advice',
    description: 'We provide tips on future purchases and placement of plants based on your lighting and space available.',
  },
  {
    imageSrc: '/images/plantSupply.webp',
    title: 'Plant Supply',
    description: 'We can help brighten your space and freshen your air with new plants to fit your exact needs.',
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

export default withRoot(withScrollToTop(Index));