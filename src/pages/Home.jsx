import * as React from 'react';

import ContactRequestIntake from '../modules/views/ContactRequestIntake';
import DevProjects from '../modules/views/DevProjects';
import VisionHero from '../modules/views/VisionHero';
import withRoot from '../modules/withRoot';
import withScrollToTop from '../modules/withScrollToTop';

const mainProjects = [
  {
    imageSrc: '#',
    title: 'Plant Care',
    description: "We handle all routine maintainance on exisiting plants to keep them green and healthy. If you're tired of purchasing new plants to replace the dead ones.",
  },
  {
    imageSrc: '#',
    title: 'Advice',
    description: 'We provide tips on future purchases and placement of plants based on your lighting and space available.',
  },
  {
    imageSrc: '#',
    title: 'Plant Supply',
    description: 'We can help brighten your space and freshen your air with new plants to fit your exact needs.',
  },
];
const currentProjectsButton =
{
  label: 'See More',
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
      <VisionHero />
      <DevProjects projects={mainProjects} sectionTitle="Dev Projects" button={currentProjectsButton} />
      <ContactRequestIntake />
    </React.Fragment>
  );
}

export default withRoot(Index);