import * as React from 'react';

import ContactRequestIntake from '../modules/views/ContactRequestIntake';
import DevProjects from '../modules/views/DevProjects';
import VisionHero from '../modules/views/VisionHero';
import withRoot from '../modules/withRoot';


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
