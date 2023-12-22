import * as React from 'react';
import DevProjects from '../modules/views/DevProjects';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';
import withScrollToTop from '../modules/withScrollToTop';


const illustrations = [

  {
    imageSrc: 'images/maguro-first.webp',
    title: 'The Invisible Story: Maguro',
  },

  {
    imageSrc: 'images/kiiro-character.webp',
    title: 'The Invisible Story: Kiiro',
  },
  {
    imageSrc: 'images/hachi.webp',
    title: 'The Invisible Story: Hachi',
  },
  {
    imageSrc: 'images/trio.webp',
    title: 'The Invisible Story: Trio',
  },
  {
    imageSrc: 'images/kumo-writes.webp',
    title: 'The Invisible Story: Kumo Writes',
  },
  {
    imageSrc: 'images/angel-apathy.webp',
    title: 'The Invisible Story: Angel v. Apathy',
  },
  {
    imageSrc: 'images/god_paint.webp',
    title: 'The Invisible Story: The Creator',
  },
  {
    imageSrc: 'images/gods-got-u.webp',
    title: "God's Got You",
  },
  {
    imageSrc: 'images/lift-off.webp',
    title: "Lift Off",
  },
];


const projectButton =
{
  label: 'Back',
  url: '/'
}

function Artwork() {

  React.useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  return (
    <React.Fragment>
      <AppAppBar />
      <DevProjects projects={illustrations} sectionTitle='Illustrations' button={projectButton} />
    </React.Fragment>
  )
}
export default withRoot(withScrollToTop(Artwork));
