import * as React from 'react';
import DevProjects from '../modules/views/DevProjects';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';
import withScrollToTop from '../modules/withScrollToTop';

const logos = [
  {
    imageSrc: 'images/seamoss.webp',
    title: "Adam's Seamoss",
  },
  {
    imageSrc: 'images/prestige-logo.webp',
    title: 'Prestige Trading',

  },
  {
    imageSrc: 'images/Invizlogo.webp',
    title: 'INVIZ Productivity Logo',

  },
  {
    imageSrc: 'images/kiiro-logo.webp',
    title: 'Personal Coding Logo',

  },
  {
    imageSrc: 'images/kamakiri-logo.webp',
    title: 'Personal Art Logo',

  },
  {
    imageSrc: 'images/teach-logo.webp',
    title: 'Learning Content Logo',

  },
];


const projectButton =
{
  label: 'Back',
  url: '/'
}

function Projects() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  return (
    <React.Fragment>
      <AppAppBar />
      <DevProjects projects={logos} sectionTitle='Logos' button={projectButton} />
    </React.Fragment>
  )
}
export default withRoot(withScrollToTop(Projects));
